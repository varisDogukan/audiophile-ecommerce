import {
  ADD_PRODUCT_IN_CARTS,
  CLEAR_CARTS,
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_SINGLE_PRODUCT_BEGIN,
  GET_SINGLE_PRODUCT_SUCCESS,
  SHOW_CART,
  SHOW_MENU,
  SHOW_PAY,
  CHANGE_COUNT_FROM_CARTS,
  HANDLE_CHANGE,
  CLEAR_FORM,
} from "./action";

const reducer = (state, action) => {
  //#region Functions

  if (action.type === GET_PRODUCTS_BEGIN) {
    return {
      ...state,
      loading: true,
    };
  }

  if (action.type === GET_PRODUCTS_SUCCESS) {
    return {
      ...state,
      loading: false,
      products: action.payload,
    };
  }

  if (action.type === GET_SINGLE_PRODUCT_BEGIN) {
    return {
      ...state,
      singleLoading: true,
    };
  }

  if (action.type === GET_SINGLE_PRODUCT_SUCCESS) {
    return {
      ...state,
      singleLoading: false,
      singleProduct: action.payload,
    };
  }

  if (action.type === ADD_PRODUCT_IN_CARTS) {
    return {
      ...state,
      carts: action.payload,
    };
  }

  if (action.type === CLEAR_CARTS) {
    return {
      ...state,
      carts: [],
    };
  }

  if (action.type === SHOW_CART) {
    return {
      ...state,
      isShowCart: action.payload,
    };
  }

  if (action.type === SHOW_MENU) {
    return {
      ...state,
      isShowMenu: !state.isShowMenu,
    };
  }

  if (action.type === SHOW_PAY) {
    return {
      ...state,
      isShowPay: !state.isShowPay,
    };
  }

  if (action.type === CHANGE_COUNT_FROM_CARTS) {
    return {
      ...state,
      carts: action.payload,
    };
  }

  if (action.type === HANDLE_CHANGE) {
    return {
      ...state,
      [action.payload.name]: action.payload.value,
    };
  }

  if (action.type === CLEAR_FORM) {
    return {
      ...state,
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
      isShowPay: false,
    };
  }

  throw new Error(`no such action : ${action.type}`);
};

export default reducer;
