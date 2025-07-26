'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { href: '/', label: 'ホーム' },
    { href: '/concept', label: '私たちの想い' },
    { href: '/company', label: '会社概要' },
    { href: '/news', label: '新着情報' },
    { href: '/recruit', label: '採用情報' },
    { href: '/contact', label: 'お問い合わせ' },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* ロゴ */}
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-gray-800 hover:text-blue-600 transition-colors">
              古窯グループ
            </Link>
          </div>

          {/* デスクトップナビゲーション */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* モバイルメニューボタン */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="メニューを開く"
          >
            <svg 
              className="w-6 h-6 text-gray-700" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M6 18L18 6M6 6l12 12" 
                />
              ) : (
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M4 6h16M4 12h16M4 18h16" 
                />
              )}
            </svg>
          </button>
        </div>

        {/* モバイルナビゲーション */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-gray-200 bg-white">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-gray-700 hover:text-blue-600 transition-colors font-medium py-2 px-3 rounded-lg hover:bg-gray-50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}