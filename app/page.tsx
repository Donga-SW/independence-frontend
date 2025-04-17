'use client'

import { useEffect, useState } from 'react'
import Link from "next/link"
import Image from "next/image"
import { MapPin, Clock, Users, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import Header from "@/components/ui/Header"
import Footer from "@/components/ui/Footer"
import fullpage from 'fullpage.js'

export default function HomePage() {
  const figures = [
    { name: "장건상", image: "/images/장건상.jpg", years: "1880–1950" },
    { name: "박재혁", image: "/images/박재혁.jpg", years: "1879–1910" },
    { name: "김법린", image: "/images/김법린.jpg", years: "1902–1920" },
    { name: "박차정", image: "/images/박차정.jpg", years: "1876–1949" },
    { name: "안희제", image: "/images/안희제.jpg", years: "1908–1932" },
    { name: "한형석", image: "/images/한형석.jpg", years: "1900–1932" },
    { name: "이갑성", image: "/images/이갑성.jpg", years: "1880–1936" },
    { name: "미정", image: "/images/한용운.png", years: "1879–1944" },
  ]

  const backgrounds = [
    '/images/배경1.jpg',
    '/images/배경2.jpg',
    '/images/배경3.jpg',
    '/images/배경4.png',
    '/images/배경5.jpg',
    '/images/배경6.jpg'
  ]

  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % backgrounds.length)
    }, 7000)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      new fullpage('#fullpage', {
        autoScrolling: true,
        scrollHorizontally: false,
        scrollingSpeed: 1000,
        fitToSection: true,
        fitToSectionDelay: 500,
        easingcss3: 'ease-in-out',
        touchSensitivity: 5,
        bigSectionsDestination: null,
        normalScrollElements: '.scrollable',
        anchors: ['hero', 'about', 'figures', 'resources', 'footer'],
        navigation: true,
        scrollOverflow: false,
        responsiveWidth: 768,
        // 추가된 설정들
        keyboardScrolling: true,
        animateAnchor: true,
        recordHistory: true,
      });
    }
  }, [])

  return (
    <div className="relative">
      <div className="fixed top-0 left-0 w-full z-50">
        <Header />
      </div>
      <div id="fullpage">
        <div className="section relative w-full h-screen overflow-hidden bg-black">
          <div
            className="w-full h-full flex transition-transform duration-1000 ease-in-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {backgrounds.map((bg, idx) => (
              <div
                key={idx}
                className={`w-full h-full flex-shrink-0 bg-cover bg-center bg-no-repeat transition-opacity duration-[3000ms] ease-in-out ${
                  current === idx ? 'opacity-100 animate-fade-in' : 'opacity-0'
                }`}
                style={{ backgroundImage: `url(${bg})` }}
              />
            ))}
          </div>
          <div className="absolute inset-0 bg-black/30 z-10" />
          <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 z-20 text-center text-white space-y-4">
            <h1 className="text-4xl font-bold">독립운동 판결문</h1>
            <p className="text-lg">Team NodeConnection</p>
          </div>
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
            {backgrounds.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-6 h-[2px] transition-all duration-300 ${i === current ? 'bg-white' : 'bg-white/50'}`}
              />
            ))}
          </div>
        </div>

        <div className="section bg-[#e9e4da]">
          <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container mx-auto px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">프로젝트 소개</div>
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                    디지털로 만나는 독립운동 판결문 역사자료
                  </h2>
                  <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                    이 프로젝트는 개항기부터 광복까지 일어난 독립운동의 판결문의 역사를 디지털 기술을 통해 시각화하고 탐색할 수 있게 합니다.
                  </p>
                </div>
              </div>
              <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-4">
                {[...Array(4)].map((_, i) => {
                  const icons = [Clock, Clock, MapPin, Users];
                  const titles = ["시간 중심 탐색", "관계 중심 탐색", "공간 중심 탐색", "인물 중심 탐색"];
                  const descs = [
                    "개항기부터 광복까지 시간 순으로 독립운동의 판결문을 탐색해 보아요.",
                    "사건과 연결된 관계를 통해 독립운동사를 다채롭고 재밌게 연결해 보세요.",
                    "한국의 지도 위에서 항일 독립운동이 일어난 장소와 의거 순서를 확인할 수 있어요.",
                    "독립운동을 이끈 한국의 영웅들의 억울한 판결문 이야기를 만나보세요."
                  ];
                  const Icon = icons[i];
                  return (
                    <div key={i} className="flex flex-col justify-center space-y-4 items-center text-center">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                        <Icon className="h-6 w-6" />
                      </div>
                      <h3 className="text-xl font-bold">{titles[i]}</h3>
                      <p className="text-muted-foreground">{descs[i]}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        </div>

        <div className="section relative bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/images/태극기2.png')" }}>
          <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="absolute inset-0 bg-black/65 backdrop-blur-[1px] z-0" />
            <div className="container relative z-10 mx-auto px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-background px-3 py-1 text-sm">주요 인물</div>
                  <h2 className="text-3xl text-white font-bold tracking-tighter md:text-4xl/tight">
                    독립운동 판결의 억울한 영웅들
                  </h2>
                  <p className="mx-auto max-w-[700px] text-white md:text-xl/relaxed">
                    독립운동을 이끈 주요 인물들의 삶과 업적 및 판결문를 소개합니다.
                  </p>
                </div>
              </div>
              <div className="mx-auto mt-8 grid max-w-5xl gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {figures.map((figure, i) => (
                  <div key={i} className="flex flex-col items-center space-y-2">
                    <div className="overflow-hidden rounded-full">
                      <Image
                        src={figure.image}
                        width={100}
                        height={100}
                        alt={`독립운동가 ${figure.name}`}
                        className="aspect-square object-cover"
                      />
                    </div>
                    <h3 className="text-center text-white text-lg font-medium">{figure.name}</h3>
                    <p className="text-center text-sm text-gray-200 text-muted-foreground">{figure.years}</p>
                    <Button variant="link" size="sm" className="h-auto p-0 text-gray-400">
                      자세히 보기
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>

        <div className="section bg-[#e9e4da]">
          <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container mx-auto px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">자료실</div>
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                    독립운동 디지털 아카이브
                  </h2>
                  <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                    독립운동 관련 사진, 문서, 영상 등 다양한 자료를 제공합니다.
                  </p>
                </div>
              </div>
              <div className="mx-auto mt-8 grid max-w-6xl gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {["타임라인", "관계도 탐색", "지도 탐색", "자료실"].map((title, index) => {
                  const icons = [BookOpen, BookOpen, Users, BookOpen];
                  const descriptions = [
                    "독립운동 관련 역사 연대기",
                    "독립관련자료 관계도 탐색",
                    "독립운동가의 지도 기록",
                    "독립운동 관련 자료"
                  ];
                  const Icon = icons[index];
                  return (
                    <div
                      key={index}
                      className="flex flex-col items-center space-y-2 rounded-lg border bg-background p-6 shadow-sm"
                    >
                      <div className="flex h-12 w-12 items-center justify-center text-primary">
                        <Icon className="h-10 w-10" />
                      </div>
                      <h3 className="text-center text-lg font-medium">{title}</h3>
                      <p className="text-center text-sm text-muted-foreground">{descriptions[index]}</p>
                      <Button variant="outline" size="sm" className="mt-2">
                        자료 보기
                      </Button>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        </div>

        <div className="section">
          <Footer />
        </div>
      </div>
    </div>
  )
}
