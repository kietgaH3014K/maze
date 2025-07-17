import React from "react";
import "./Dashboard.css";

export default function Dashboard() 
  
 {
  return (
    <section className="dashboard-hero">
      <img
        src="/image/AI-tri-tue-nhan-tao-1.jpg"
        alt="Ảnh nền"
        className="hero-background"
      />
      <div className="hero-content">
        <h1>STUDY APP</h1>
        <p>Hỗ trợ bạn xây dựng lộ trình học tập<br /> cá nhân hóa</p>
      </div>
   
        <div className="after-image">
        <h2>Dashboard - Tổng quan</h2>
        <p>Chào mừng bạn đến với ứng dụng StudyApp!</p>
      </div>

      
    </section>
    
   
     
  );
}
