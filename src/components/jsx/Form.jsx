import { useState } from 'react'
import logo from '../../assets/img/logo.svg'


export default function Form () {
    const [showForm, setShowForm] = useState(false)

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [theme, setTheme] = useState('As on the device')

    return (
        <>
          <header>
            <div className='header_container'>
              <img className='logo' src={logo}></img>
              <button onClick={() => setShowForm(true)} className='login' >Register</button>
            </div>
          </header>
          <main>
            {showForm && (
              <form onSubmit={e => {
                e.preventDefault()
                
                console.log('Username:', username)
                console.log('Password:', password)
                console.log('Theme:', theme)
              
              }}>
              <div>
                <label htmlFor='username'>Username:</label><br />
                <input name='username'  type='text' value={username} onChange={e => setUsername(e.target.value)} required/><br />
              </div>
              <div>
                <label htmlFor='password'>Password:</label><br />
                <input name='password' type='password'  value={password} onChange={e => setPassword(e.target.value)} required/><br />
              </div>
              <div>
                <label htmlFor="theme">Theme:</label><br />
                <select name='theme' value={theme} onChange={e => setTheme(e.target.value)}>
                  <option value='As on the divace'>As on the device</option>
                  <option value="Dark">Dark</option>
                  <option value='Light'>Light</option>
                </select><br />
              </div>

              <div className='button_shell'>
                <button type='submit'>Submit</button>
                <button onClick={() => setShowForm(false)}>Cancel</button>
              </div>

              </form>
              )
            }
          </main>
        </>
    )
}