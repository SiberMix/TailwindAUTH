import styles from './App.module.scss'
import {useState} from "react";

function App() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <div className={styles.parent}>
            <h1 className={styles.title}>Sign In</h1>
            <input className={styles.input} placeholder='Email. Example: m.pimonov@mail.ru'
                   value={email}
                   onChange={e => setEmail(e.target.value)} type=""/>
            <input className={styles.input} placeholder='Your password'
                   value={password}
                   onChange={e => setPassword(e.target.value)} type=""/>
            <button className={styles.button}>Login</button>
        </div>
    );
}

export default App;
