// =====================================
// src/components/HeroSlider.tsx - 古窯グループ実画像版
// =====================================
'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoplay, setIsAutoplay] = useState(true)

  // スライド画像データ（古窯グループの実画像使用）
  const slides = [
    {
      id: 1,
      image: '/images/hero-1.png',
      title: '日本の宿古窯',
      subtitle: 'プロが選ぶ旅館百選TOP10の温泉宿'
    },
    {
      id: 2,
      image: '/images/hero-2.png',
      title: 'あつみ温泉萬国屋',
      subtitle: '350年の歴史を誇る老舗旅館'
    },
    {
      id: 3,
      image: '/images/hero-3.png',
      title: '山形の味覚',
      subtitle: '地元の新鮮な食材と伝統の味'
    },
    {
      id: 4,
      image: '/images/hero-4.png',
      title: '山形の体験',
      subtitle: '四季折々の自然と文化を満喫'
    }
  ]

  // 自動再生機能
  useEffect(() => {
    if (!isAutoplay) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000) // 5秒間隔

    return () => clearInterval(interval)
  }, [isAutoplay, slides.length])

  // スライド切り替え
  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    setIsAutoplay(false) // ユーザー操作時は自動再生停止
    setTimeout(() => setIsAutoplay(true), 10000) // 10秒後に自動再生再開
  }

  // 前のスライド
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
    setIsAutoplay(false)
    setTimeout(() => setIsAutoplay(true), 10000)
  }

  // 次のスライド
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
    setIsAutoplay(false)
    setTimeout(() => setIsAutoplay(true), 10000)
  }

  return (
    <section className="relative h-screen overflow-hidden">
      {/* スライド画像 */}
      <div className="relative h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className="object-cover"
              priority={index === 0}
              sizes="100vw"
              quality={90}
            />
            {/* オーバーレイ */}
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          </div>
        ))}
      </div>

      {/* テキストコンテンツ */}
      <div className="absolute inset-0 flex items-center justify-center text-white z-10">
        <div className="text-center max-w-4xl px-4 sm:px-6 lg:px-8">
          {/* 3つの事業ナビ */}
          <div className="mb-6 sm:mb-8">
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-4 text-base sm:text-lg md:text-xl font-light tracking-wider">
              <a href="#stay" className="hover:text-yellow-400 transition-colors duration-200">泊まる</a>
              <span className="hidden sm:inline text-base sm:text-lg md:text-xl">•</span>
              <a href="#taste" className="hover:text-yellow-400 transition-colors duration-200">味わう</a>
              <span className="hidden sm:inline text-base sm:text-lg md:text-xl">•</span>
              <a href="#experience" className="hover:text-yellow-400 transition-colors duration-200">体験する</a>
            </div>
          </div>

          {/* メインタイトル */}
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
            今日、
            <br className="sm:hidden" />
            <span className="sm:inline">この瞬間に、</span>
            <br />
            <span className="text-yellow-400 block mt-2 sm:mt-0">最高の山形を。</span>
          </h1>

          {/* サブタイトル */}
          <p className="text-base sm:text-lg md:text-xl font-light leading-relaxed max-w-3xl mx-auto px-2">
            山形の地で楽しく働くことそのものが、
            <br className="hidden sm:block" />
            自然とお客様の感動や喜びに変わっていく。
          </p>

          {/* 現在のスライド情報（古窯グループの施設名表示） */}
          <div className="mt-8 sm:mt-12">
            <p className="text-sm sm:text-base opacity-90 bg-black bg-opacity-30 inline-block px-4 py-2 rounded-lg">
              {slides[currentSlide].title} - {slides[currentSlide].subtitle}
            </p>
          </div>
        </div>
      </div>

      {/* ナビゲーションドット */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-yellow-400 scale-110'
                  : 'bg-white bg-opacity-50 hover:bg-opacity-75'
              }`}
              aria-label={`スライド ${index + 1}: ${slides[index].title}へ移動`}
            />
          ))}
        </div>
      </div>

      {/* 左右ナビゲーション（デスクトップのみ） */}
      <div className="hidden md:block">
        {/* 前へボタン */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-black bg-opacity-30 hover:bg-opacity-60 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
          aria-label="前のスライド"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* 次へボタン */}
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-black bg-opacity-30 hover:bg-opacity-60 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
          aria-label="次のスライド"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* 自動再生インジケーター（開発時のみ表示） */}
      {process.env.NODE_ENV === 'development' && (
        <div className="absolute top-4 right-4 z-20 bg-black bg-opacity-70 text-white px-3 py-1 rounded text-sm">
          自動再生: {isAutoplay ? 'ON' : 'OFF'} | スライド: {currentSlide + 1}/{slides.length}
        </div>
      )}
    </section>
  )
}

export default HeroSlider