import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./css/Login.css";

function Login() {
  return (
    <div className="login-container">
      <h2 className="login-title">Signin to your PopX account</h2>
      <p className="login-subtitle">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      </p>

      <form>
        {/* Email */}
        <div className="input-group">
          <input type="email" required />
          <label>Email Address *</label>
        </div>

        {/* Password */}
        <div className="input-group">
          <input type="password" required />
          <label>Password *</label>
        </div>

        <Link to="/account">
          <Button className="login-btn w-100" disabled>
            Login
          </Button>
        </Link>
      </form>
    </div>
  );
}

export default Login;
