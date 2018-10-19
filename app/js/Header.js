var React = require('react');
import {NavLink, BrowserRouter}  from 'react-router-dom';

import img from '../images/logo.jpg';

class Header extends React.Component {
    render() {
        return (
            <header className='header'>
                <div className='wrapper'>
                    <div className='header__left-side'>
                        <div className='logo'>
                            <NavLink className='logo__link' to='/'>
                                <img className='logo__img' src={img} alt='Trades' />
                                <span className='logo__name'>Trades</span>
                            </NavLink>
                        </div>
                        <nav className='navbar'>
                            <ul className='navbar__menu'>
                                <li className='navbar__item'><NavLink className='navbar__link' to='/news'>Новости</NavLink></li>
                                <li className='navbar__item'><NavLink className='navbar__link' to='/trade'>Торги</NavLink></li>
                                <li className='navbar__item'><NavLink className='navbar__link' to='/exchange'>Обмен</NavLink></li>
                                <li className='navbar__item'><NavLink className='navbar__link' to='/wallet'>Кошелек</NavLink></li>
                            </ul>
                        </nav>
                    </div>

                    <div className='header__right-side'>
                        <nav className='header__nav'>
                            {/* <div className='lang'>
                                <a className='lang__link' href='#' title='Language'>Русский</a>
                                
                                    <ul className='lang'>
                                        <li className='lang__item'>
                                            
                                        </li>
                                        <li className='lang__item'>
                                            
                                        </li>
                                        <li className='lang__item'>
                                            
                                        </li>
                                    </ul>
                               
                            </div> */}

                            <div className='notification'>
                                <NavLink className='notification__link' to='/notifications' title='Notification'>
                                    <i className='icon-bell'></i>
                                    <span className='notification__count'>2</span>
                                </NavLink>
                            </div>

                            <div className='profile'>
                                <NavLink className='profile__link' to='/settings' title='Profile'>test321</NavLink>
                                <nav className=''>
                                    <ul className=''>
                                        <li className=''></li>
                                    </ul>
                                </nav>
                            </div>
                        </nav>
                    </div>
                </div>
            </header>
        );
    }
}
 
module.exports = Header;
