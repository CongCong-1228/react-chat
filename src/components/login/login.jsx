import styles from "./login.module.less"

const Login = () => {
    return <div className={styles.login}>
        <div className={styles.item}>
            <h2>Welcome back,</h2>
            <form action="">
                <input type="text" placeholder="Email" name="email"/>
                <input type="password" placeholder="Password" name="password"/>
                <button>Sign In</button>
            </form>
        </div>
        <div className={styles.separator}></div>
        <div className={styles.item}>
            <h2>Create an Account</h2>
            <form action="">
                <label htmlFor="file">
                    <img src="" alt=""/>
                    Upload an image
                </label>
                <input type="file" id="file" name="file" style={{display: "none"}}/>
                <input type="text" placeholder="Username" name="username"/>
                <input type="text" placeholder="Email" name="email"/>
                <input type="password" placeholder="Password" name="password"/>
                <button>Sign up</button>
            </form>
        </div>
    </div>
}

export default Login;
