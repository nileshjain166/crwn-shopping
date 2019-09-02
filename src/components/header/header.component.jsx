import React from 'react'
import { auth } from '../../firebase/firebase.util'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import CartIcon from '../cart-icon/cart-icon.component'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'
import { selectCurrentUser } from '../../redux/user/user.selectors'
import { selectCartHidden } from '../../redux/cart/cart.selectors'

import { ReactComponent as Logo } from '../../assets/crown.svg'
import { OptionLinkContainer, OptionsDivContainer, LogoContainer, HeaderContainer } from './header.styles'

const Header = ({ currentUser, hidden }) => {
    return (
        <HeaderContainer>
            <LogoContainer to='/'>
                <Logo className='logo' />
            </LogoContainer>
            <OptionsDivContainer>
                <OptionLinkContainer to='/shop'>
                    SHOP
                </OptionLinkContainer>
                <OptionLinkContainer to='/contact'>
                    CONTACT
                </OptionLinkContainer>
                {
                    currentUser ?
                        <OptionLinkContainer as='div' onClick={() => auth.signOut()}>
                            SIGN OUT
                        </OptionLinkContainer>
                        :
                        <OptionLinkContainer to='/signin'>
                            SIGN IN
                        </OptionLinkContainer>
                }
                <CartIcon />
            </OptionsDivContainer>
            {
                hidden ?
                    null :
                    <CartDropdown />
            }
        </HeaderContainer>
    )
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header);