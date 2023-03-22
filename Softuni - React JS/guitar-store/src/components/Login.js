import { useState } from "react";
import "../styles/Login.css";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from "../Utils/firebase";
import { useNavigate } from 'react-router-dom';



function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();

    const auth = getAuth(app);

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        navigate('/catalog');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
      });
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className="login">
      <div className="login-form-box">
        <h2>Login</h2>
        <form onSubmit={handleLogin} id="login" className="input-group">
          <input
            type="text"
            className="input-field"
            placeholder="email"
            required
            value={email}
            onChange={handleEmailChange}
          />
          <input
            type="password"
            className="input-field"
            placeholder="Enter Password"
            required
            value={password}
            onChange={handlePasswordChange}
          />
          <button type="submit" className="submit-btn">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;