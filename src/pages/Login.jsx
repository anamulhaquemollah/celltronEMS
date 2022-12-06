
import "./login.css"; 

const Login = () => {
  return (
    <div className='celltronems__login'>
        <div className="celltronems__login-container">
            <span>Login</span>
            <form className='celltronems__login-form'>
                <div className="celltronems__login-email">
                    <label htmlFor="email">Email</label>
                    <input className="loginInput" type="email" id='email' name='email' />
                </div>
                
                <div className="celltronems__login-password">
                    <label htmlFor="password">Password</label>
                    <input className="loginInput" type="password" id='password' name='password' />
                </div>
                 <button className="loginbtn" type='submit'>Login</button>
            </form>
        </div>
    </div>
  )
}

export default Login