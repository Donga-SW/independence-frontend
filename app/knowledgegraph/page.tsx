// app/knowledgegraph/page.tsx
'use client';

import GraphViewer from "@/components/GraphViewer";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";

export default function KnowledgeGraphPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header - 고정 */}
      <header className="fixed top-0 left-0 w-full z-50">
        <Header />
      </header>

      {/* Main Section */}
      <main className="flex-1 mt-[80px] mb-[60px] p-4">
        {/* 상단 80px: 헤더 높이, 하단 60px: 푸터 공간 확보 */}
        <GraphViewer />
      </main>

      {/* Footer - 일반 배치 */}
      <footer className="bg-muted py-4">
        <Footer />
      </footer>
    </div>
  );
}


