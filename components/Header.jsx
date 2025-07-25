// src/components/Header.jsx
import React from 'react';
import './Header.css'; // Nếu bạn vẫn dùng, nhưng có thể bỏ nếu xài Tailwind hoàn toàn

export default function Header() {
  return (
    <header className="bg-[#F7F3EF] shadow">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        <img
          src="/image/maze-delvin.png"
          alt="Logo"
          className="h-16 w-auto object-contain"
        />
        <nav className="flex space-x-8 text-[#7A5C3D] font-medium text-base">
          <a href="/" className="hover:underline">Dashboard</a>
          <a href="/roadmap" className="hover:underline">Lộ trình</a>
          <a href="/schedule" className="hover:underline">Lịch học</a>
          <a href="/review" className="hover:underline">Đánh giá</a>
          <a href="/about" className="hover:underline">About</a>
          <a href="/account" className="hover:underline">Tài khoản</a>
        </nav>
      </div>
    </header>
  );
}
