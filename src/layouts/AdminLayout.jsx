// src/layouts/AdminLayout.jsx
import React from "react";
import AdminHeader from "../components/admin/AdminHeader";
import AdminSidebar from "../components/admin/AdminSidebar";
import { Outlet } from "react-router-dom";
import { useState } from "react";
export default function AdminLayout() {
  const [selectedContent, setSelectedContent] = useState("User");
  return (
    <div className="admin-container">
      <AdminSidebar setSelectedContent={setSelectedContent} />
      <div className="admin-main">
        <AdminHeader selectedContent={selectedContent} />
        <Outlet />
      </div>
    </div>
  );
}
