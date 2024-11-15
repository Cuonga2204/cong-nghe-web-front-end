import React, { useState } from "react";
import UserInput from "./UserInput";
// import CheckboxInput from "./CheckboxInput";
import axios from "../../../common/common";
import { useNavigate } from "react-router-dom";
const CreateUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const [role, setRole] = useState("customer");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission logic here
    if (role === "customer") {
      setIsAdmin(false);
    } else {
      setIsAdmin(true);
    }
    const userData = {
      name,
      email,
      password,
      confirmPassword,
      phone,
      isAdmin,
    };
    console.log(userData);
    try {
      const response = await axios.post("/user/sign-up", userData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      });
      console.log(response);

      if (response.status === 200) {
        console.log("User created successfully");
        navigate("/admin");
      } else {
        console.error("Failed to create user");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="create-user-container">
      <h2 className="create-user-title">Create User</h2>
      <div className="create-user-form-wrapper">
        <form onSubmit={handleSubmit} className="create-user-form">
          <UserInput
            type="text"
            placeholder="Username"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <UserInput
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <UserInput
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <UserInput
            type="password"
            placeholder="ConfirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <UserInput
            type="tel"
            placeholder="Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <div className="role-select">
            <select
              id="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="customer">Customer</option>
              <option value="admin">Admin</option>
            </select>
          </div>
          <button type="submit" className="create-user-button">
            Create User
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateUser;
