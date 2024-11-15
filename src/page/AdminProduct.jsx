import React from "react";
import { Link } from "react-router-dom";
import ProductTable from "../components/admin/product/ProductTable";
import { useAdmin } from "../context/AdminContext";
import { useState, useEffect } from "react";
import axios from "axios";
import AdminPagination from "../components/admin/AdminPanigation";
export default function AdminProduct() {
  const { products, setProducts } = useAdmin();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          `/products?page=${currentPage}&limit=${itemsPerPage}`
        );
        setProducts(response.data.products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, [currentPage, setProducts]);

  const totalPages = Math.ceil(products.length / itemsPerPage);
  return (
    <main className="admin-content">
      <>
        <p className="admin-content-title">LIST PRODUCT</p>
        <Link to="create">
          <button className="add-user-button">Add Product</button>
        </Link>
        <ProductTable products={products} />
        <AdminPagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </>
    </main>
  );
}
