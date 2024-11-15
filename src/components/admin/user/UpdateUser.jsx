import React, { useState, useEffect } from "react";
import UserInput from "./UserInput";
import axios from "../../../common/common";
import { useNavigate, useParams } from "react-router-dom";

const UpdateUser = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [role, setRole] = useState("customer");
  const navigate = useNavigate();
  const { userId } = useParams();
  console.log(userId);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`/user/get-details/${userId}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        });
        console.log(response);

        if (response.status === 200 && response.data.data) {
          const { name, email, phone, isAdmin } = response.data.data;
          setUsername(name || ""); // Sử dụng giá trị mặc định ""
          setEmail(email || "");
          setPhone(phone || "");
          setRole(isAdmin ? "admin" : "customer");
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    fetchUserData();
  }, [userId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission logic here
    const updatedUserData = {
      name: username,
      email,
      phone,
      isAdmin: role === "admin",
    };
    try {
      const response = await axios.put(
        `/user/update-user/${userId}`,
        updatedUserData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        }
      );
      if (response.status === 200) {
        console.log("User updated successfully");
        navigate("/admin");
      } else {
        console.error("Failed to update user");
      }
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  return (
    <div className="create-user-container">
      <h2 className="create-user-title">Update User</h2>
      <div className="create-user-form-wrapper">
        <form onSubmit={handleSubmit} className="create-user-form">
          <div className="input-group">
            <label className="input-lable" htmlFor="username">
              Username
            </label>
            <UserInput
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label className="input-lable" htmlFor="email">
              Email
            </label>
            <UserInput
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label className="input-lable" htmlFor="phone">
              Phone
            </label>
            <UserInput
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="input-group role-select">
            <label className="input-lable" htmlFor="role">
              Role
            </label>
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
            Update User
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateUser;
