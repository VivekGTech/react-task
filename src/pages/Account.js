import { Card } from "react-bootstrap";
import { FaCamera } from "react-icons/fa";
import VivekProfile from "./images/VivekProfile.jpg";

function Account() {
  return (
    <div>
      <h2>Account Settings</h2>
      <Card className="p-3 shadow-sm border-0">
        <div className="d-flex align-items-center">
          <div className="position-relative me-3">
            <img
              src={VivekProfile}
              alt="profile"
              className="rounded-circle"
              width="70"
              height="70"
            />
            <FaCamera
              className="position-absolute"
              style={{
                bottom: 0,
                right: 0,
                color: "#6a0dad",
                background: "#fff",
                borderRadius: "50%",
                padding: "4px",
              }}
            />
          </div>
          <div>
            <h5 className="mb-1">Vivek Gurav</h5>
            <a
              href="mailto:vivekgurav09@gmail.com"
              className="text-muted mb-0"
              style={{ textDecoration: "none" }}
            >
              vivekgurav09@gmail.com
            </a>
          </div>
        </div>
        <p className="mt-3">
          Hi, I'm Vivek Gurav, a passionate developer with experience in
          building modern web applications. Feel free to reach out to me for
          collaboration or project inquiries!
        </p>
      </Card>
    </div>
  );
}

export default Account;
