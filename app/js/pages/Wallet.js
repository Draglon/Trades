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
                                            <div className='bills__currency'>
                                                <div className='bills__label'>Доллар США, USD</div>
                                                <div className='bills__switch'>
                                                    <input type='checkbox' className='bills__checkbox' id='billsCheckbox_1' />
                                                    <label className='bills__checkbox-label' for='billsCheckbox_1'></label>
                                                </div>
                                            </div>
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
                                <div className='wallet__total-select'>
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
            </main>
        );
    }
}
module.exports = Wallet;