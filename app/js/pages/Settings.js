var React = require('react');

class Settings extends React.Component {
    render() {
        return (
            <main className='main'>
                <section className='section settings'>
                    <div className='wrapper flex-space-between-stretch'>
                        <aside className='aside-settings'>
                            <h2 className='settings__title'>Оповещения</h2>
                            <nav className='settings__nav'>
                                <ul className='settings__list'>
                                    <li className='settings__item active'>
                                        <a className='settings__link' href='#'>
                                            <span className='settings__label'>Оповещения</span>
                                            <span className='settings__text'>Уведомления и почтовые рассылки</span>
                                        </a>
                                    </li>
                                    <li className='settings__item'>
                                        <a className='settings__link' href='#'>
                                            <span className='settings__label'>API Keys</span>
                                            <span className='settings__text'>Настройки ключей</span>
                                        </a>
                                    </li>
                                    <li className='settings__item'>
                                        <a className='settings__link' href='#'>
                                            <span className='settings__label'>Защита</span>
                                            <span className='settings__text'>Google Authentificator, SMS</span>
                                        </a>
                                    </li>
                                    <li className='settings__item'>
                                        <a className='settings__link' href='#'>
                                            <span className='settings__label'>Пароль</span>
                                            <span className='settings__text'>Изменить пароль</span>
                                        </a>
                                    </li>
                                    <li className='settings__item'>
                                        <a className='settings__link' href='#'>
                                            <span className='settings__label'>История доступа</span>
                                            <span className='settings__text'>Сессии пользователя</span>
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </aside>

                        <article className='settings__content'>
                            <section className='section notification'>
                                <div className='wrapper'>
                                    <form className='form'>
                                        <div className='form__field'>
                                            <input type='checkbox' id='getNotifications' />
                                            <label className='' htmlFor='getNotifications'>Получать оповещения о сделках и проверять их каждые <input type='text' value='5' style={{width: '35px'}} /> минут.</label> 
                                            
                                        </div>
                                        <div className='form__field'>
                                            <input type='checkbox' id='getNews' />
                                            <label className='' htmlFor='getNews'>Я хочу получать новости и рассылки на электронный ящик</label>
                                        </div>
                                    </form>
                                </div>
                            </section>

                            {/* <section className='section notification'>
                                <div className=''>
                                    <form className='form'>
                                        <div className='form__field'>
                                            <label className='form__label'>API key</label>
                                            <div className='form__field-input'>
                                                <input type='text' value='API key' />
                                                <button className='btn-copy'></button>
                                            </div>
                                        </div>
                                        <div className='form__field'>
                                            <label className='form__label'>API secret</label>
                                            <div className='form__field-input'>
                                                <input type='text' value='API secret' />
                                                <button className='btn-copy'></button>
                                            </div>
                                        </div>
                                        <div className='form__btns'>
                                            <button className='btn btn-primary btn--small'>Сгенирировать и сохранить</button>
                                        </div>
                                    </form>
                                </div>
                            </section> */}

                            {/* <section className='section ip-address'>
                                <div className=''>
                                    <form className='form'>
                                        <div className='form__field'>
                                            <label className='form__label'>API key</label>
                                            <div className='form__field-input'>
                                                <input type='text' value='API key' />
                                                <button className='btn-copy'></button>
                                            </div>
                                        </div>
                                        <div className='form__field'>
                                            <label className='form__label'>API secret</label>
                                            <div className='form__field-input'>
                                                <input type='text' value='API secret' />
                                                <button className='btn-copy'></button>
                                            </div>
                                        </div>
                                        <div className='form__btns'>
                                            <button className='btn btn-primary btn--small'>Сгенирировать и сохранить</button>
                                        </div>
                                    </form>
                                </div>
                            </section> */}

                        </article>
                    </div>
                </section>
            </main>
        );
    }
}
 
module.exports = Settings;