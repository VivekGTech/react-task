import { useState } from "react";
import { Button } from "react-bootstrap";
import "./css/Signup.css";

function Signup() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    password: "",
    company: "",
    agency: "No",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let newErrors = {};
    if (!formData.fullName) newErrors.fullName = "This field is required";
    if (!formData.phone) newErrors.phone = "This field is required";
    if (!formData.email) newErrors.email = "This field is required";
    if (!formData.password) newErrors.password = "This field is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      window.location.href = "/account";
    }
  };

  return (
    <div className="signup-container">
      <h2 className="signup-title">Create your PopX account</h2>

      <form onSubmit={handleSubmit}>
        {/* Full Name */}
        <div className="input-group">
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
          <label>Full Name *</label>
          {errors.fullName && <p className="error-text">{errors.fullName}</p>}
        </div>

        {/* Phone */}
        <div className="input-group">
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <label>Phone Number *</label>
          {errors.phone && <p className="error-text">{errors.phone}</p>}
        </div>

        {/* Email */}
        <div className="input-group">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <label>Email Address *</label>
          {errors.email && <p className="error-text">{errors.email}</p>}
        </div>

        {/* Password */}
        <div className="input-group">
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <label>Password *</label>
          {errors.password && <p className="error-text">{errors.password}</p>}
        </div>

        {/* Company */}
        <div className="input-group">
          <input
            type="company"
            name="comapany"
            value={formData.company}
            onChange={handleChange}
            required
          />
          <label>Company Name *</label>
          {errors.company && <p className="error-text">{errors.company}</p>}
        </div>

        {/* Radio */}
        <div className="radio-group">
          <p>Are you an Agency? *</p>
          <label>
            <input
              type="radio"
              name="agency"
              value="Yes"
              checked={formData.agency === "Yes"}
              onChange={handleChange}
            />
            Yes
          </label>
          <label>
            <input
              type="radio"
              name="agency"
              value="No"
              checked={formData.agency === "No"}
              onChange={handleChange}
            />
            No
          </label>
        </div>

        {/* Button */}
        <Button type="submit" className="w-100 signup-btn">
          Create Account
        </Button>
      </form>
    </div>
  );
}

export default Signup;
