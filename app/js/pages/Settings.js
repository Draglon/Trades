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
                                        <div className='form__field notification__time-field'>
                                            <input type='checkbox' id='getNotifications' />
                                            <label className='time-input' htmlFor='getNotifications'>Получать оповещения о сделках и проверять их каждые <input type='text' value='5' style={{width: '35px', height: '30px'}} /> минут.</label>
                                        </div>
                                        <div className='form__field'>
                                            <input type='checkbox' id='getNews' />
                                            <label className='' htmlFor='getNews'>Я хочу получать новости и рассылки на электронный ящик</label>
                                        </div>
                                    </form>
                                </div>
                            </section>

                            <section className='section api-key'>
                                <div className='wrapper'>
                                    <form className='form'>
                                        <div className='form__field'>
                                            <label className='form__label'>API key</label>
                                            <div className='form__field-input'>
                                                <input type='text' value='API key' />
                                                <button className='btn-copy'><i className='icon-copy'></i></button>
                                            </div>
                                        </div>
                                        <div className='form__field'>
                                            <label className='form__label'>API secret</label>
                                            <div className='form__field-input'>
                                                <input type='text' value='API secret' />
                                                <button className='btn-copy'><i className='icon-copy'></i></button>
                                            </div>
                                        </div>
                                        <div className='form__btns'>
                                            <button className='btn btn-primary btn--small'>Сгенирировать и сохранить</button>
                                        </div>
                                    </form>
                                </div>
                            </section>

                            <section className='section security'>
                                <div className='wrapper'>
                                    <nav className='security__nav'>
                                        <label className='security__label'>Двухфакторная аутентификация</label>
                                        <ul className='security__list'>
                                            <li className='security__item active'>Google Authentificator</li>
                                            <li className='security__item'>SMS</li>
                                        </ul>
                                    </nav>
                                </div>
                            </section>

                            <section className='section password'>
                                <div className='wrapper'>
                                    <div className='alert-danger'>
                                        <p className='alert-danger__text'>
                                            Обратите внимание: при внесении изменений в профиль устанавливается заморозка на вывод средств в течение 3 дней
                                        </p>
                                    </div>

                                    <form className='form'>
                                        <div className='form__field'>
                                            <label className='form__label'>Текущий пароль</label>
                                            <div className='form__field-input'>
                                                <input type='text' placeholder='Текущий пароль' />
                                            </div>
                                        </div>
                                        <div className='form__field'>
                                            <label className='form__label'>Новый пароль</label>
                                            <div className='form__field-input'>
                                                <input type='text' placeholder='Новый пароль' />
                                            </div>
                                        </div>
                                        <div className='form__field'>
                                            <label className='form__label'>Повторите палоль</label>
                                            <div className='form__field-input'>
                                                <input type='text' placeholder='Повторите палоль' />
                                            </div>
                                        </div>
                                        <div className='form__btns'>
                                            <button className='btn btn-primary btn--small'>Отправить</button>
                                        </div>
                                    </form>
                                </div>
                            </section>

                            <section className='section ip-address'>
                                <div className='wrapper'>
                                    <form className='form'>
                                        <div className='form__field'>
                                            <input type='checkbox' id='accsess_1' />
                                            <label className='time-input' htmlFor='accsess_1'>Включить авторизацию только для доверенных IP-адресов</label>
                                        </div>
                                        <div className='form__field form__field--border'>
                                            <input type='checkbox' id='accsess_2' />
                                            <label className='' htmlFor='accsess_2'>Доступ к API только с доверенных IP-адресов</label>
                                        </div>

                                        <div className='form__field form__field--border'>
                                            <h4>Добавить новый адресс</h4>
                                            <label className='form__label'>IP-адресс или CIDR</label>
                                            <div className='form__field-input flex-space-between'>
                                                <div style={{width: '70%'}}><input type='text' value='159.224.194.43' /></div>
                                                <div style={{width: '30%'}}><button className='btn btn-primary btn--middle'>Добавить</button></div>
                                            </div>
                                            <div className='form__example'>159.224.194.43</div>
                                        </div>
                                        <div className='form__field'>
                                            <h4>Список доверенных IP адресов/CIDR</h4>
                                        </div>
                                    </form>
                                </div>
                            </section>

                        </article>
                    </div>
                </section>
            </main>
        );
    }
}
 
module.exports = Settings;