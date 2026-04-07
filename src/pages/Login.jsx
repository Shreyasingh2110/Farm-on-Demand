import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/login.css";
import logo from "../assets/logo.png";
import bg from "../assets/bg.jpg";
export default function Login( {onLogin}) {
  const navigate=useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("Farmer");
  const [errors, setErrors] = useState({});
  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) newErrors.email = "Email is required";
    else if (!emailPattern.test(email)) newErrors.email = "Invalid email format";
    if (!password) newErrors.password = "Password is required";
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      const userData={email,role};
      onLogin(userData);
      if(role==='Admin'){
        navigate('/admin/dashboard');
      }
      else if(role === "Owner"){
        navigate("/owner/dashboard");
      }
      else{
        alert('Only Admin panel is implemented');
      }
      setEmail("");
      setPassword("");
      setRole("Farmer");
    }
  };
  return (
    <div className="page" style={{ backgroundImage: `url(${bg})` }}>
      {/* LOGIN */}
      <div className="container">
        {/* LEFT */}
        <div className="left">
          <img src={logo} alt="logo" />
          <h1>Farm OnDemand</h1>
          <h4>Connecting Farmers With Tools</h4>
        </div>
        {/* RIGHT */}
        <div className="right">
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>

            <div className="input-box">
              <label>Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
              />
              <div className="error">{errors.email}</div>
            </div>
            <div className="input-box">
              <label>Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
              />
              <div className="error">{errors.password}</div>
            </div>
            <label>Select Role</label>
            <div className="roles">
              <label>
                <input
                  type="radio"
                  value="Farmer"
                  checked={role === "Farmer"}
                  onChange={(e) => setRole(e.target.value)}
                /> Farmer
              </label>
              <label>
                <input
                  type="radio"
                  value="Owner"
                  checked={role === "Owner"}
                  onChange={(e) => setRole(e.target.value)}
                /> Equipment Owner
              </label>
              <label>
                <input
                  type="radio"
                  value="Admin"
                  checked={role === "Admin"}
                  onChange={(e) => setRole(e.target.value)}
                /> Admin
              </label>
            </div>
            <div className="error">{errors.role}</div>
            <button type="submit">Login</button>
            <div className="extra">
              <p>Forgot Password? | <a href="#">Create Account</a></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}