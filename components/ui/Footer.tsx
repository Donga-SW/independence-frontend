'use client'

import Link from "next/link"
import { Button } from "@/components/ui/button" // Button 컴포넌트를 사용한다면 임포트 필요

export default function Footer() {
  return (
    <>
      {/* CTA Section */}
<section className="w-full py-12 md:py-24 lg:py-32 bg-black text-white backdrop-blur supports-[backdrop-filter]:bg-black/75">
  <div className="container px-4 md:px-6">
    <div className="flex flex-col items-center justify-center space-y-4 text-center">
      <div className="space-y-2">
        <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
          부산의 항일 독립운동 역사를 함께 탐색해보세요
        </h2>
        <p className="mx-auto max-w-[700px] md:text-xl/relaxed">
          개항기부터 광복까지, 부산 지역의 항일 독립운동 역사를 디지털로 만나보세요.
        </p>
      </div>
      <div className="flex flex-col gap-2 min-[400px]:flex-row">
  <button className="btn-7-custom">
    타임라인 보기
  </button>
  <button className="btn-7-custom">
    관계도 탐색
  </button>
  <button className="btn-7-custom">
    지도 탐색
    </button>
</div>

    </div>
  </div>
</section>


      <footer className="w-full border-t bg-[#e9e4da] py-6">
        <div className="container flex flex-col items-center justify-center gap-4 px-4 md:px-6 md:flex-row">
          <p className="text-center text-sm text-muted-foreground md:text-left">
            &copy; {new Date().getFullYear()} 부산 항일 독립운동사 디지털 프로젝트 DongA univ NodeConnection Team
          </p>
          <nav className="flex gap-4 sm:gap-6">
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
              이용약관
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
              개인정보처리방침
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
              문의하기
            </Link>
          </nav>
        </div>
      </footer>
    </>
  )
}
