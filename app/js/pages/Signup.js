var React = require('react');

class Signup extends React.Component {
    render() {
        return (
            <main className='main'>
                <section className='section signup'>
                    <div className='wrapper'>
                        <h2 className='signup__title'>Signup</h2>
                        <form className='form'>
                            <div className='form__field form__field--error'>
                                <input type='email' />
                                <i className='icon-envelop'></i>
                                <span className='form__field-error'>Error</span>
                            </div>
                            <div className='form__field'>
                                <input type='text' />
                                <i className='icon-user'></i>
                                <span className='form__field-error'>Error</span>
                            </div>
                            <div className='form__field'>
                                <input type='password' />
                                <i className='icon-key'></i>
                                <span className='form__field-error'>Error</span>
                            </div>
                            <div className='form__field'>
                                <input type='password' />
                                <i className='icon-key'></i>
                                <span className='form__field-error'>Error</span>
                            </div>
                            <div className='form__field'>
                                <input type='checkbox' id='agree' />
                                <label htmlFor='agree'>I accept <a href='#'>Terms and Conditions</a></label>
                            </div>
                            <div className='form__btns'>
                                <button className='btn btn-primary btn--middle btn-signup'>Sign Up</button>
                            </div>
                        </form>
                    </div>
                </section>
            </main>
        );
    }
}
 
module.exports = Signup;