import { useReducer, useContext, createContext } from "react";
import PropTypes from "prop-types";

import reducer from "./reducer";

import {
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_SINGLE_PRODUCT_BEGIN,
  GET_SINGLE_PRODUCT_SUCCESS,
  ADD_PRODUCT_IN_CARTS,
  CLEAR_CARTS,
  SHOW_CART,
  SHOW_MENU,
  SHOW_PAY,
  CHANGE_COUNT_FROM_CARTS,
  HANDLE_CHANGE,
  CLEAR_FORM,
} from "./action";
import { addObj, changeCartsValue } from "../helpers/specialFuncs";
import { data } from "./data";

const checkoutState = {
  name: "",
  email: "",
  phone: "",
  address: "",
  zip: "",
  city: "",
  country: "",
  payment: "e-money",
  eMoneyNumber: "",
  eMoneyPin: "",
};

const initialState = {
  loading: false,
  singleLoading: false,
  products: [],
  singleProduct: {},
  carts: JSON.parse(localStorage.getItem("carts")) || [],
  isShowCart: false,
  isShowMenu: false,
  isShowPay: false,
  ...checkoutState,
};

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getProductsWithCategory = async (category) => {
    dispatch({ type: GET_PRODUCTS_BEGIN });

    const products = data.filter((item) => item.category === category);

    dispatch({
      type: GET_PRODUCTS_SUCCESS,
      payload: products,
    });
  };

  const getSingleProductWithSlug = async (slug) => {
    dispatch({ type: GET_SINGLE_PRODUCT_BEGIN });

    const singleProduct = data.find((item) => item.slug === slug);

    dispatch({
      type: GET_SINGLE_PRODUCT_SUCCESS,
      payload: singleProduct,
    });
  };

  const addProductInCart = (object) => {
    const tempArray = addObj(state.carts, object);

    dispatch({ type: ADD_PRODUCT_IN_CARTS, payload: tempArray });
    localStorage.setItem("carts", JSON.stringify(tempArray));
  };

  const clearCarts = () => {
    localStorage.removeItem("carts");
    dispatch({ type: CLEAR_CARTS });
  };

  const showCart = (value) => {
    dispatch({ type: SHOW_CART, payload: value });
  };

  const showMenu = () => {
    dispatch({ type: SHOW_MENU });
  };

  const showPay = () => {
    dispatch({ type: SHOW_PAY });
  };

  const changeCountFromCarts = (operator, id) => {
    const tempArray = changeCartsValue(state.carts, operator, id);

    dispatch({ type: CHANGE_COUNT_FROM_CARTS, payload: tempArray });
  };

  const handleChange = ({ name, value }) => {
    dispatch({ type: HANDLE_CHANGE, payload: { name, value } });
  };

  const clearForm = () => {
    dispatch({ type: CLEAR_FORM });
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        getProductsWithCategory,
        getSingleProductWithSlug,
        addProductInCart,
        clearCarts,
        showCart,
        showMenu,
        showPay,
        changeCountFromCarts,
        handleChange,
        clearForm,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};

AppProvider.propTypes = {
  children: PropTypes.node,
};

export { AppProvider, initialState, useAppContext };
