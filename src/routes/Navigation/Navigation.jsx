import { Fragment, useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';

import CartIcon from '../../components/CartIcon/CartIcon'
import CartDropdown from '../../components/CartDropdown/CartDropdown'

import { UserContext } from '../../contexts/user';
import { CartContext } from '../../contexts/cart';

import { signOutUser } from '../../utils/firebase/firebase'

import OffgridLogo from '../../assets/offgrid-logo.svg?react';

import './navigation.scss'

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <OffgridLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to='/shop'>
            SHOP
          </Link>
          {
            currentUser ? (
              <span className='nav-link' onClick={signOutUser} >SIGN OUT</span>)
              : (<Link className="nav-link" to='/auth'>
                SIGN IN
              </Link>
            )
          }
          <CartIcon />
        </div>
        {isCartOpen && <CartDropdown />}
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
