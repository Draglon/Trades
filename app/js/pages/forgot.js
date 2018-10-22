var React = require('react');
import {NavLink, BrowserRouter}  from 'react-router-dom';

class Login extends React.Component {
    render() {
        return (
            <main className='main'>
                <section className='section forgot'>
                    <div className='wrapper'>
                        <h2 className='forgot__title'>Login</h2>
                        <form className='form'>
                            <div className='form__field form__field--error'>
                                <input type='email' />
                                <i className='icon-envelop'></i>
                                <span className='form__field-error'>Error</span>
                            </div>
                            <div className='form__field'>
                                <div className='login__text'>Not registered yet? <NavLink className='login__link' to='/signup'>Create account</NavLink></div>
                            </div>
                            <div className='form__btns'>
                                <button className='btn btn-primary btn--middle btn-login'>Forgot</button>
                            </div>
                        </form>
                    </div>
                </section>
            </main>
        );
    }
}
 
module.exports = Login;