import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import { Loading, Categories } from '../../components';
import { CategoryHeader, ProductList } from './components';
import { useAppContext } from '../../context/appContext';

const Category = () => {
  const { products, loading, getProductsWithCategory } = useAppContext();
  const params = useParams();

  useEffect(() => {
    getProductsWithCategory(params.category);
  }, [params.category]);

  return (
    <Wrapper>
      {loading ? (
        <Loading />
      ) : products.length > 0 ? (
        <>
          <CategoryHeader title={params.category} />
          <ProductList />
          <Categories />
        </>
      ) : (
        <div>Error</div>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.main`
  padding-top: 89px;
`;

export default Category;
