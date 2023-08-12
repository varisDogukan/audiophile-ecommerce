import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

import { Logo, Menus, Carts } from '.';
import hamburger from '../assets/images/shared/tablet/icon-hamburger.svg';
import carts from '../assets/images/shared/desktop/icon-cart.svg';
import mediaQuery from '../styles/mediaQuery';
import { useAppContext } from '../context/appContext';

const Header = () => {
  const location = useLocation();

  const { showMenu, isShowCart, showCart } = useAppContext();

  const handleClick = () => {
    showMenu();
    showCart(false);
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [location]);

  return (
    <Wrapper>
      <nav className="max-container">
        <button className="hamburger" onClick={handleClick}>
          <img src={hamburger} alt="hamburger icon" />
        </button>

        <Logo />
        <Menus />

        <button className="carts">
          <img
            src={carts}
            alt="carts icon"
            onClick={() => showCart(!isShowCart)}
          />
        </button>

        {isShowCart && <Carts />}
      </nav>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  background-color: var(--clr-black3);
  position: relative;
  z-index: 10;
  position: fixed;
  width: 100%;

  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-block: 32px 31px;
    padding-inline: 24px;
    border-bottom: 1px solid var(--clr-grey);
  }

  @media ${mediaQuery.tablet} {
    padding-inline: 40px;

    nav {
      padding-inline: 0;
    }
  }

  @media ${mediaQuery.desktop} {
    padding-inline: 0;

    .hamburger {
      display: none;
    }
  }
`;

export default Header;
