import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Welcome() {
  return (
    <div className="d-flex flex-column justify-content-end h-100">
      <div>
        <h2>Welcome to PopX</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
        <Link to="/signup">
          <Button className="w-100 mb-2" variant="primary">Create Account</Button>
        </Link>
        <Link to="/login">
          <Button className="w-100" variant="secondary">Already Registered? Login</Button>
        </Link>
      </div>
    </div>
  );
}

export default Welcome;
