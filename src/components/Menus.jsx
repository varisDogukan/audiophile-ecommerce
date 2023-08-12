import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import menus from '../constants/menus';
import PropTypes from 'prop-types';
import mediaQuery from '../styles/mediaQuery';
import { useAppContext } from '../context/appContext';
import Categories from './Categories';

const Menus = ({ footer }) => {
  const { showMenu, isShowMenu } = useAppContext();

  const createMenu = (method) =>
    menus.map((item) => (
      <li key={item.id} onClick={method}>
        <NavLink
          to={item.url}
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          {item.name}
        </NavLink>
      </li>
    ));

  return (
    <Wrapper footer={footer} isShowMenu={isShowMenu}>
      <ul className={footer ? 'footer-menu' : 'nav-menu'}>
        {footer ? (
          createMenu()
        ) : (
          <>
            <div className="categories-menu">
              <div className="background" />
              <div className="container">
                <Categories type="menu" method={showMenu} />
              </div>
            </div>

            <div className="normal-menu">{createMenu(showMenu)}</div>
          </>
        )}
      </ul>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  a {
    transition: var(--transition);
    color: var(--clr-white);
    font-weight: 700;
    font-size: 15px;
    letter-spacing: 1.07143px;
    text-transform: uppercase;

    &:hover {
      color: var(--clr-orange);
    }

    &.active {
      color: var(--clr-orange);
    }
  }

  .footer-menu {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .nav-menu {
    display: ${(props) => (props.isShowMenu ? 'flex' : 'none')};
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    min-height: 100%;
    padding-top: 89px;
    width: 100%;

    .categories-menu {
      width: 100%;
      overflow-y: auto;
    }

    .normal-menu {
      display: none;
    }

    .background {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      background-color: var(--clr-black);
      opacity: 0.4;
      z-index: -1;
    }

    .container {
      width: 100%;
      background-color: var(--clr-white);
      height: max-content;
      border-radius: 0 0 8px 8px;
    }
  }

  @media ${mediaQuery.tablet} {
    .footer-menu {
      flex-direction: row;
      gap: 34px;
    }
  }

  @media ${mediaQuery.desktop} {
    .nav-menu {
      z-index: 0;
      display: block;
      position: static;
      padding-top: 0;

      .categories-menu {
        display: none;
      }

      .normal-menu {
        display: flex;
        gap: 34px;
        position: relative;
        flex-direction: row;
        width: 100%;
      }
    }
  }
`;

Menus.propTypes = {
  footer: PropTypes.bool,
  isShowMenu: PropTypes.bool,
  showMenu: PropTypes.func,
};

export default Menus;
