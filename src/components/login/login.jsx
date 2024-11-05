import styles from "./login.module.less";
import { useRef, useState } from "react";
const Login = () => {
  const [avatar, setAvatar] = useState("");
  const [formData, setFormData] = useState({});
  const uploadImage = (e) => {
    setAvatar(URL.createObjectURL(e.target.files[0]));
  };
  const handleSignUp = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <div className="container">
      <div className={styles.login}>
        <div className={styles.item}>
          <h2>Welcome back,</h2>
          <form action="">
            <input type="text" placeholder="Email" name="email" />
            <input type="password" placeholder="Password" name="password" />
            <button>Sign In</button>
          </form>
        </div>
        <div className={styles.separator}></div>
        <div className={styles.item}>
          <h2>Create an Account</h2>
          <form action="" onSubmit={handleSignUp}>
            <label htmlFor="file">
              <img src={avatar} alt="" />
              Upload an image
            </label>
            <input
              type="file"
              id="file"
              name="file"
              style={{ display: "none" }}
              onChange={uploadImage}
            />
            <input
              type="text"
              placeholder="Username"
              name="username"
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Email"
              name="email"
              onChange={handleChange}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
            />
            <button onClick={handleSignUp}>Sign up</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
