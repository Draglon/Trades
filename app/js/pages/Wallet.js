import React from 'react';
 
class Wallet extends React.Component{
    render(){
        return (
            <main className='main'>
                <section className='section wallet'>
                    <div className='wrapper'>
                        <header className='wallet__header'>
                            <h2 className='wallet__title'>Кошелёк</h2>
                            <div className='wallet__btns'>
                                <div className='bills'>
                                    <button className='btn btn-transparent bills__btn'><i className='icon-cog'></i>Настройки</button>
                                    <ul className='bills__list'>
                                        <li className='bills__item'>
                                            <input type='checkbox' className='bills__checkbox' id='billsCheckbox_1' />
                                            <label className='bills__checkbox-label' for='billsCheckbox_1'>Доллар США, USD</label>
                                        </li>
                                        <li className='bills__item'>
                                            <input type='checkbox' className='bills__checkbox' id='billsCheckbox_2' />
                                            <label className='bills__checkbox-label' for='billsCheckbox_2'>Доллар США, USD</label>
                                        </li>
                                        <li className='bills__item'>
                                            <input type='checkbox' className='bills__checkbox' id='billsCheckbox_3' />
                                            <label className='bills__checkbox-label' for='billsCheckbox_3'>Доллар США, USD</label>
                                        </li>
                                    </ul>
                                </div>
                                <button className='btn btn-transparent'>Мои счета</button>
                            </div>
                        </header>
                        <div className='wallet__content'>
                            <table className='wallet__table'>
                                <thead>
                                    <tr>
                                        <th>Валюта</th>
                                        <th>Баланс</th>
                                        <th>В ордерах</th>
                                        <th>...</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr>
                                        <td>USD</td>
                                        <td>0.00000011</td>
                                        <td>0</td>
                                        <td>
                                            <button className='btn btn-primary btn--small'>Пополнить</button>
                                            <button className='btn btn-primary btn--small'>Вывести</button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>EUR</td>
                                        <td>0.00800934</td>
                                        <td>0</td>
                                        <td>
                                            <button className='btn btn-primary btn--small'>Пополнить</button>
                                            <button className='btn btn-primary btn--small'>Вывести</button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>RUB</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>
                                            <button className='btn btn-primary btn--small'>Пополнить</button>
                                            <button className='btn btn-primary btn--small'>Вывести</button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>PLN</td>
                                        <td>0.00000011</td>
                                        <td>0</td>
                                        <td>
                                            <button className='btn btn-primary btn--small'>Пополнить</button>
                                            <button className='btn btn-primary btn--small'>Вывести</button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>UAH</td>
                                        <td>0.00000011</td>
                                        <td>0</td>
                                        <td>
                                            <button className='btn btn-primary btn--small'>Пополнить</button>
                                            <button className='btn btn-primary btn--small'>Вывести</button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>BTC</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>
                                            <button className='btn btn-primary btn--small'>Пополнить</button>
                                            <button className='btn btn-primary btn--small'>Вывести</button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>DOGE</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>
                                            <button className='btn btn-primary btn--small'>Пополнить</button>
                                            <button className='btn btn-primary btn--small'>Вывести</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className='wallet__total'>
                                <div className='wallet__total-sum'>Итого: <span>0.23210045</span></div>
                                <div className='wallet__total-select active'>
                                    <span className='wallet__total-value'>BTC</span>
                                    <ul className='wallet__total-list'>
                                        <li className='wallet__total-list-item'>BTC</li>
                                        <li className='wallet__total-list-item'>USD</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className='section history-transaction'>
                    <div className='wrapper'>
                        <h2 className='history-transaction__title'>История операций</h2>
                        <div>
                            <table className='history-transaction__table'>
                                <thead>
                                    <tr>
                                        <th>Дата/время</th>
                                        <th>Операция</th>
                                        <th>Валюта</th>
                                        <th>Количество</th>
                                        <th>Статус</th>
                                        <th>Плат. система</th>
                                        <th>Информация</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr>
                                        <td>30.09 13:52</td>
                                        <td>+ Ввод</td>
                                        <td>UAH</td>
                                        <td>2922</td>
                                        <td>Зачислено</td>
                                        <td>Visa/MasterCard UAH (WayForPay)</td>
                                        <td>#10610971</td>
                                    </tr>
                                    <tr>
                                        <td>30.09 13:52</td>
                                        <td>+ Ввод</td>
                                        <td>UAH</td>
                                        <td>2922</td>
                                        <td>Зачислено</td>
                                        <td>Visa/MasterCard UAH (WayForPay)</td>
                                        <td>#10610971</td>
                                    </tr>
                                    <tr>
                                        <td>30.09 13:52</td>
                                        <td>+ Ввод</td>
                                        <td>UAH</td>
                                        <td>2922</td>
                                        <td>Зачислено</td>
                                        <td>Visa/MasterCard UAH (WayForPay)</td>
                                        <td>#10610971</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

                <section className='section refill'>
                    <div className='wrapper'>
                        <a className='back-link' href='#'>Вернуться к выбору валют</a>
                        <h2 className='refill__title'>Пополнение счета</h2>
                        <div className='refill__item'>
                            <div className='payments'>
                                <h3 className='payments__title'>Выберите способ пополнения баланса</h3>
                                <div className='payments__lest'>
                                    <div className='payments__item'>
                                        <label className='payments__label' for='mastercard'>
                                            <span className='payments__text'>Visa/MasterCard (Simplex)</span>
                                            <input className='payments__input' type='checkbox' id='mastercard' />
                                        </label>
                                    </div>
                                    <div className='payments__item'>
                                        <label className='payments__label' for='skrill'>
                                            <span className='payments__text'>Skrill</span>
                                            <input className='payments__input' type='checkbox' id='skrill' />
                                        </label>
                                    </div>
                                    <div className='payments__item'>
                                        <label className='payments__label' for='advcash'>
                                            <span className='payments__text'>AdvCash</span>
                                            <input className='payments__input' type='checkbox' id='advcash' />
                                        </label>
                                    </div>
                                    <div className='payments__item'>
                                        <label className='payments__label' for='payeer'>
                                            <span className='payments__text'>Payeer</span>
                                            <input className='payments__input' type='checkbox' id='payeer' />
                                        </label>
                                    </div>
                                    <div className='payments__item'>
                                        <label className='payments__label' for='neteller'>
                                            <span className='payments__text'>Neteller</span>
                                            <input className='payments__input' type='checkbox' id='neteller' />
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='refill__item'>
                            <div className='payments'>
                                <h3 className='payments__title'>Нужно пройти верификацию</h3>
                                <div className='payments__deposit'>Минимальная сумма депозита 0.01 DASH</div>
                                <ul className='payments__commission'>
                                    <li className='payments__commission-item'>Минимальная 0.01 DASH</li>
                                    <li className='payments__commission-item'>Комиссия 0%</li>
                                </ul>
                                <div className='payments__btns'>
                                    <button className='btn btn-primary'>Создать адрес</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        );
    }
}
module.exports = Wallet;