import React from "react";
import OrderLapItem from "./OrderLapItem";

export default function OrderLapList() {
  const items = [
    {
      src: "/img/LaptopGaming.webp",
      title: "Gamming",
    },
    {
      src: "/img/LaptopVanPhong.webp",
      title: "Sinh viên",
    },
    {
      src: "/img/LaptopEdit.webp",
      title: "Thiết kế đồ hoạ",
    },
    {
      src: "/img/LaptopMong.webp",
      title: "Mỏng nhẹ",
    },
    {
      src: "/img/LaptopDoanhNhan.webp",
      title: "Doanh nhân",
    },
  ];
  return (
    <>
      <h2 className="order-lap-header">LAP TOP THEO NHU CẦU</h2>
      <div className="grid__row">
        {items.map((item, index) => (
          <OrderLapItem key={index} src={item.src} title={item.title} />
        ))}
      </div>
    </>
  );
}
