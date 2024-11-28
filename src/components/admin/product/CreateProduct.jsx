import React, { useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import axios from "../../../common/common";

const CreateProduct = () => {
  const [productData, setProductData] = useState({
    name: "",
    countInStock: 0,
    currentPrice: 0,
    oldPrice: "",
    imageUrl: null,
    config: "",
    description: "",
  });
  const [previewImage, setPreviewImage] = useState(null); // Thêm state để lưu URL xem trước

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProductData({ ...productData, [name]: value });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    console.log(file);

    if (file) {
      setProductData({ ...productData, imageUrl: file });
      setPreviewImage(URL.createObjectURL(file)); // Tạo URL xem trước cho ảnh
    }
  };

  const handleDescriptionChange = (data) => {
    setProductData({ ...productData, description: data });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    Object.keys(productData).forEach((key) => {
      formData.append(key, productData[key]);
    });

    try {
      const response = await axios.post("/product/create", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      console.log(response);

      if (response.data.status === "OK") {
        console.log("Product created successfully!");
      } else {
        console.log(response.data.message || "Error creating product");
      }
    } catch (error) {
      console.error("Error creating product:", error);
    }
  };

  return (
    <div className="create-product-container">
      <h2>THÔNG TIN SẢN PHẨM</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Hình ảnh sản phẩm:</label>

          <input type="file" onChange={handleImageUpload} />
          {previewImage && (
            <div className="image-preview">
              <img
                src={previewImage}
                alt="Product Preview"
                style={{ maxWidth: "200px", marginTop: "10px" }}
              />
            </div>
          )}
        </div>
        <div className="form-group">
          <label>Tên sản phẩm:</label>
          <input
            type="text"
            name="name"
            value={productData.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Số lượng trong kho:</label>
          <input
            type="number"
            name="countInStock"
            value={productData.countInStock}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Giá hiện tại:</label>
          <input
            type="number"
            name="currentPrice"
            value={productData.currentPrice}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Giá cũ:</label>
          <input
            type="text"
            name="oldPrice"
            value={productData.oldPrice}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Cấu hình sản phẩm:</label>
          <textarea
            name="config"
            value={productData.config}
            onChange={handleInputChange}
            rows="3"
          />
        </div>
        <div className="form-group">
          <label>Mô tả:</label>
          <CKEditor
            editor={ClassicEditor}
            data={productData.description}
            onChange={(event, editor) =>
              handleDescriptionChange(editor.getData())
            }
          />
        </div>
        <button type="submit" className="submit-button">
          Tạo Sản Phẩm
        </button>
      </form>
    </div>
  );
};

export default CreateProduct;
