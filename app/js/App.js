import React, { Component } from 'react';
import { connect } from 'react-redux';

import img from '../images/logo.jpg';

class App extends Component {
    constructor(props) {
        super(props);
        // Don't call this.setState() here!
        // this.state = { counter: 0 };
        // this.handleClick = this.handleClick.bind(this);
    }

    render() {
        return(
            <div>
                <header className='header'>
                    <div className='wrapper'>
                        <div className='header__left-side'>
                            <div className='logo'>
                                <a className='logo__link' href='#'>
                                    <img className='logo__img' src={img} alt='Trades' />
                                    <span className='logo__name'>Trades</span>
                                </a>
                            </div>
                            <nav className='navbar'>
                                <ul className='navbar__menu'>
                                    <li className='navbar__item'><a className='navbar__link' href='#'>Новости</a></li>
                                    <li className='navbar__item'><a className='navbar__link' href='#'>Торги</a></li>
                                    <li className='navbar__item'><a className='navbar__link' href='#'>Обмен</a></li>
                                    <li className='navbar__item'><a className='navbar__link' href='#'>Кошелек</a></li>
                                </ul>
                            </nav>
                        </div>

                        <div className='header__right-side'>
                            <nav className='header__nav'>
                                <div className='lang'>
                                    <a className='lang__link' href='#' title='Language'>Русский</a>
                                    {/* 
                                        <ul className='lang'>
                                            <li className='lang__item'>
                                                
                                            </li>
                                            <li className='lang__item'>
                                                
                                            </li>
                                            <li className='lang__item'>
                                                
                                            </li>
                                        </ul>
                                     */}
                                </div>

                                <div className='notification'>
                                    <a className='notification__link' href='#' title='Notification'>
                                        <i className='icon-bell'></i>
                                        <span class="notification__count">2</span>
                                    </a>
                                </div>

                                <div className='profile'>
                                    <a className='profile__link' href='#' title='Profile'>test321</a>
                                </div>
                            </nav>
                        </div>
                    </div>
                </header>

                <main className='main'>
                    <section className='section invitation'>
                        <div className='wrapper'>
                            <h1 className='invitation__title'>Invitation</h1>
                        </div>
                    </section>
                </main>

                <footer className='footer'>
                    <div className='wrapper'>
                        <nav className='footer__nav'>
                            <div className='footer__item'>
                                <h3 className='footer__title'>Продукты</h3>
                                <ul className='footer__list'>
                                    <li><a href='#'>Кошелек</a></li>
                                    <li><a href='#'>Торги</a></li>
                                    <li><a href='#'>Обмен</a></li>
                                    <li><a href='#'>API</a></li>
                                </ul>
                            </div>
                            <div className='footer__item'>
                                <h3 className='footer__title'>Информация</h3>
                                <ul className='footer__list'>
                                    <li><a href='#'>Комисии и лимиты</a></li>
                                    <li><a href='#'>Реферальная программа</a></li>
                                    <li><a href='#'>Служба поддержки</a></li>
                                </ul>
                            </div>
                            <div className='footer__item'>
                                <h3 className='footer__title'>Компания</h3>
                                <ul className='footer__list'>
                                    <li><a href='#'>О нас</a></li>
                                    <li><a href='#'>Контакты</a></li>
                                    <li><a href='#'>Новости</a></li>
                                </ul>
                            </div>
                            <div className='footer__item'>
                                <h3 className='footer__title'>Документы</h3>
                                <ul className='footer__list'>
                                    <li><a href='#'>Договор оферты</a></li>
                                    <li><a href='#'>Политика конфиденциальности</a></li>
                                    <li><a href='#'>AML</a></li>
                                    <li><a href='#'>Пользовательское соглашение</a></li>
                                </ul>
                            </div>
                        </nav>
                        <div className='footer__copy'>2018 &copy; Trades.pp.ua</div>
                    </div>
                </footer>
            </div>
        );
    }
}

export default connect(
    state => ({

    }),
    dispatch => ({
        onAddTrack: (trackName) => {
            dispatch({type: 'ADD_TRACK', payload: trackName })
        }
    })
)(App);