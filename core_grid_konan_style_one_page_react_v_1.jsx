import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, ChevronRight, Download, Mail, Phone, MapPin, Building2, Sparkles, Cpu, Plug, Factory, Workflow, Award, Newspaper, Users } from "lucide-react";

// CoreGrid one-page website inspired by the layout & flow of the Konan Technology brochure:
//  - Cover/Hero → Table of Contents → Company Intro → Vision → Products/Services
//  - Case Studies & Clients → Media/PR → Timeline → Awards/Certs → Contact
//  Sections map to the brochure structure for immediate familiarity when exported to PPT.

export default function CoreGridKonanStyleSite() {
  const [year] = useState(new Date().getFullYear());

  // --- DEV sanity tests (lightweight "test cases") ---------------------------------
  // Render-time checks to ensure critical sections mount without runtime errors.
  // These are visible at the very bottom for quick validation during debugging.
  const REQUIRED_SECTION_IDS = [
    "toc","company","vision","products","cases","clients","media","timeline","awards","contact"
  ];
  const [mountedIds, setMountedIds] = useState<string[]>([]);
  useEffect(() => {
    setMountedIds(REQUIRED_SECTION_IDS.filter(id => !!document.getElementById(id)));
  }, []);
  // ---------------------------------------------------------------------------------

  function handleDownload() {
    // Simple printable export. For PPT export we can render this page to images and stitch a PPTX.
    // As a quick win, printing to PDF from browser gives a brochure-style deck.
    window.print();
  }

  return (
    <div className="min-h-screen w-full bg-white text-gray-900">
      {/* NAV */}
      <header className="sticky top-0 z-30 backdrop-blur bg-white/80 border-b">
        <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-slate-900 to-slate-600" />
            <span className="font-bold tracking-tight">COREGRID</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#toc" className="hover:underline">목차</a>
            <a href="#company" className="hover:underline">회사소개</a>
            <a href="#vision" className="hover:underline">비전</a>
            <a href="#products" className="hover:underline">제품·서비스</a>
            <a href="#cases" className="hover:underline">구축사례</a>
            <a href="#clients" className="hover:underline">고객사</a>
            <a href="#media" className="hover:underline">홍보센터</a>
            <a href="#timeline" className="hover:underline">연혁</a>
            <a href="#awards" className="hover:underline">수상/인증</a>
            <a href="#contact" className="hover:underline">오시는 길</a>
          </nav>
          <Button size="sm" className="hidden md:inline-flex gap-2" onClick={handleDownload}><Download className="h-4 w-4"/>회사소개서</Button>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 py-24 grid md:grid-cols-2 items-center gap-10">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">에너지 인프라를 연결하는<br/>전기디바이스 · 엔지니어링 · 기자재 유통</h1>
            <p className="mt-5 text-lg text-gray-600">PV · ESS · PCS · EMS를 아우르는 토탈 솔루션. AI 기반 에너지 모니터링과 신재생 프로젝트 컨설팅으로 가치 창출.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Badge variant="secondary" className="text-gray-700">PV/ESS</Badge>
              <Badge variant="secondary" className="text-gray-700">PCS/인버터</Badge>
              <Badge variant="secondary" className="text-gray-700">전류/전압 센싱(CT/PT)</Badge>
              <Badge variant="secondary" className="text-gray-700">EMS/모니터링</Badge>
              <Badge variant="secondary" className="text-gray-700">B2B 기자재 유통</Badge>
            </div>
            <div className="mt-8 flex gap-3">
              <Button className="gap-2" asChild>
                <a href="#contact">문의하기 <ChevronRight className="h-4 w-4"/></a>
              </Button>
              <Button variant="outline" className="gap-2" asChild>
                <a href="#products">제품 카탈로그 <ChevronRight className="h-4 w-4"/></a>
              </Button>
            </div>
          </div>
          <div className="relative">
            {/* Replace this block with a CT/Gateway device illustration if available */}
            <div className="aspect-[4/3] w-full rounded-3xl bg-gradient-to-br from-slate-900 to-slate-600 shadow-xl" />
            <div className="absolute -bottom-6 -right-6 hidden md:block">
              <Card className="w-64 shadow-2xl">
                <CardHeader>
                  <CardTitle className="text-sm">핵심 역량</CardTitle>
                </CardHeader>
                <CardContent className="text-sm grid gap-2">
                  <p className="flex items-start gap-2"><Sparkles className="h-4 w-4 mt-0.5"/> AI 기반 PPA/EMS 분석</p>
                  <p className="flex items-start gap-2"><Cpu className="h-4 w-4 mt-0.5"/> 전기디바이스 설계·선정</p>
                  <p className="flex items-start gap-2"><Factory className="h-4 w-4 mt-0.5"/> 공급망·유통 네트워크</p>
                  <p className="flex items-start gap-2"><Workflow className="h-4 w-4 mt-0.5"/> 턴키 엔지니어링</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* TABLE OF CONTENTS */}
      <section id="toc" className="bg-gray-50 border-y">
        <div className="mx-auto max-w-7xl px-4 py-14 grid md:grid-cols-4 gap-6">
          {[
            {t:"회사 소개", i:<Building2 className="h-5 w-5"/>, a:"#company"},
            {t:"비전", i:<Sparkles className="h-5 w-5"/>, a:"#vision"},
            {t:"제품·서비스", i:<Plug className="h-5 w-5"/>, a:"#products"},
            {t:"구축사례", i:<Cpu className="h-5 w-5"/>, a:"#cases"},
            {t:"고객사", i:<Users className="h-5 w-5"/>, a:"#clients"},
            {t:"홍보센터", i:<Newspaper className="h-5 w-5"/>, a:"#media"},
            {t:"연혁", i:<Workflow className="h-5 w-5"/>, a:"#timeline"},
            {t:"수상/인증", i:<Award className="h-5 w-5"/>, a:"#awards"}
          ].map((item, idx) => (
            <a key={idx} href={item.a} className="group">
              <Card className="transition hover:shadow-lg h-full">
                <CardHeader className="flex flex-row items-center gap-3">
                  {item.i}
                  <CardTitle className="text-base font-semibold">{item.t}</CardTitle>
                </CardHeader>
              </Card>
            </a>
          ))}
        </div>
      </section>

      {/* COMPANY INTRO */}
      <section id="company" className="mx-auto max-w-7xl px-4 py-20">
        <div className="grid md:grid-cols-5 gap-10">
          <div className="md:col-span-3">
            <h2 className="text-3xl font-bold">회사 소개</h2>
            <p className="mt-4 text-gray-600">코어그리드는 전기디바이스 설계·조달·유통과 에너지 엔지니어링 컨설팅을 결합하여 PV/ESS/PCS 기반의 재생에너지 프로젝트를 수행합니다. 장수·새만금 등 국내 현장 경험과 AIoT 기반 EMS 기술을 통해 설비 효율과 투자 수익을 극대화합니다.</p>
            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              {["설계/조달/시공(EPs)", "B2B 기자재 유통", "AI 기반 EMS/PPA 컨설팅", "운영·유지보수(O&M)"].map((x,i)=> (
                <p key={i} className="flex items-start gap-2"><Check className="h-5 w-5 mt-0.5"/>{x}</p>
              ))}
            </div>
          </div>
          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle className="text-base">회사개요</CardTitle>
            </CardHeader>
            <CardContent className="text-sm grid gap-2">
              <div className="flex justify-between"><span>법인명</span><span>코어그리드 주식회사</span></div>
              <div className="flex justify-between"><span>설립</span><span>2023.05.05</span></div>
              <div className="flex justify-between"><span>임직원</span><span>6명</span></div>
              <div className="flex justify-between"><span>사업영역</span><span>전기디바이스 · 엔지니어링 · 기자재유통</span></div>
              <div className="flex justify-between"><span>본사</span><span>서울특별시 구로구 디지털로 272, 한신IT타워 218호</span></div>
              <div className="flex justify-between"><span>웹</span><span>www.coregrid.co.kr</span></div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* VISION */}
      <section id="vision" className="bg-gray-50 border-y">
        <div className="mx-auto max-w-7xl px-4 py-20">
          <h2 className="text-3xl font-bold">비전</h2>
          <p className="mt-4 text-gray-600">데이터와 전력을 연결하여 지역 에너지 생태계를 고도화합니다. 안전·효율·친환경을 축으로, 프로젝트 전주기를 책임지는 파트너가 되겠습니다.</p>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {["안전성 강화 (UL/KC/IEC 준수)", "효율 최적화 (SMP/REC/PPA)", "친환경 가치 (탄소저감/DR)"]
            .map((t,i)=> (
              <Card key={i}><CardHeader><CardTitle className="text-base">{t}</CardTitle></CardHeader></Card>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTS & SERVICES */}
      <section id="products" className="mx-auto max-w-7xl px-4 py-20">
        <h2 className="text-3xl font-bold">제품·서비스</h2>
        <p className="mt-4 text-gray-600">코어그리드의 제품 포트폴리오와 엔지니어링 서비스를 한눈에.</p>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {[{
            title:"전기 디바이스",
            bullets:["CT/PT 및 보호계전", "PCS/인버터/컨버터", "배전반·판넬", "계측/센서"]
          },{
            title:"엔지니어링 컨설팅",
            bullets:["PV/ESS 설계·성능해석", "EMS/SCADA 연동", "PPA·수익성 분석", "인허가·안전규정"]
          },{
            title:"기자재 유통",
            bullets:["다수 제조사 소싱", "납기/가격 최적화", "QC·인증 서포트", "A/S 및 스페어 파츠"]
          }].map((sec, idx)=> (
            <Card key={idx} className="h-full">
              <CardHeader>
                <CardTitle className="text-lg">{sec.title}</CardTitle>
              </CardHeader>
              <CardContent className="grid gap-2 text-sm">
                {sec.bullets.map((b,i)=> (<p key={i} className="flex items-start gap-2"><Check className="h-4 w-4 mt-0.5"/>{b}</p>))}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CASES & CLIENTS */}
      <section id="cases" className="bg-gray-50 border-y">
        <div className="mx-auto max-w-7xl px-4 py-20">
          <h2 className="text-3xl font-bold">대표 구축사례</h2>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {["장수 PV·ESS", "새만금 영농형 20MW", "기타 BESS/PCS 프로젝트"].map((name, i)=> (
              <Card key={i}><CardHeader><CardTitle className="text-base">{name}</CardTitle></CardHeader><CardContent className="text-sm">간단 설명 및 수치/효율/기간</CardContent></Card>
            ))}
          </div>

          <h3 id="clients" className="mt-14 text-xl font-semibold">주요 고객사</h3>
          <p className="text-sm text-gray-600 mt-2">공공/금융/에너지/제조 등 레퍼런스 로고 나열</p>
          <div className="mt-4 grid grid-cols-2 md:grid-cols-6 gap-4">
            {Array.from({length:12}).map((_,i)=> <div key={i} className="h-10 rounded-lg bg-gray-200"/>) }
          </div>
        </div>
      </section>

      {/* MEDIA / PR */}
      <section id="media" className="mx-auto max-w-7xl px-4 py-20">
        <h2 className="text-3xl font-bold">홍보센터</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {[1,2,3].map((i)=> (
            <Card key={i} className="h-full">
              <CardHeader><CardTitle className="text-base">보도자료 제목 {i}</CardTitle></CardHeader>
              <CardContent className="text-sm">요약 텍스트 — 프로젝트 수주/협약/연구성과 등</CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* TIMELINE */}
      <section id="timeline" className="bg-gray-50 border-y">
        <div className="mx-auto max-w-7xl px-4 py-20">
          <h2 className="text-3xl font-bold">사업 연혁</h2>
          <div className="mt-10 grid gap-6">
            {[
              {y:"2023", d:"코어그리드 법인 설립 (2023.05.05)"},
              {y:"2024", d:"PV/ESS Turn-key 및 유통 네트워크 확장"},
              {y:"2025", d:"AIoT EMS PoC 및 새만금 영농형 20MW 컨설팅"}
            ].map((e, i)=> (
              <div key={i} className="grid md:grid-cols-12 items-start gap-4">
                <div className="md:col-span-2 font-semibold">{e.y}</div>
                <div className="md:col-span-10 border-l pl-6">{e.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AWARDS & CERTS */}
      <section id="awards" className="mx-auto max-w-7xl px-4 py-20">
        <h2 className="text-3xl font-bold">대외실적 · 인증</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {["특허/출원", "인증/시험성적", "수상/선정"].map((t,i)=> (
            <Card key={i}><CardHeader><CardTitle className="text-base">{t}</CardTitle></CardHeader><CardContent className="text-sm">세부 항목 기재</CardContent></Card>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="bg-gray-50 border-t">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <h2 className="text-2xl font-bold">문의 및 오시는 길</h2>
          <div className="mt-6 grid md:grid-cols-3 gap-6 text-sm">
            <Card>
              <CardContent className="p-6 grid gap-2">
                <p className="flex items-center gap-2"><Mail className="h-4 w-4"/> jy.lee@core-grid.co.kr</p>
                <p className="flex items-center gap-2"><Phone className="h-4 w-4"/> 02-6949-3666</p>
                <p className="flex items-center gap-2"><MapPin className="h-4 w-4"/> 서울특별시 구로구 디지털로 272, 한신IT타워 218호</p>
              </CardContent>
            </Card>
            <Card className="md:col-span-2">
              <CardContent className="p-6">
                <div className="aspect-[16/9] w-full rounded-xl bg-gray-200" />
              </CardContent>
            </Card>
          </div>
          <p className="mt-10 text-xs text-gray-500">© {year} CoreGrid Co., Ltd. All rights reserved.</p>
        </div>
      </section>

      {/* DEV – Section Mount Tests */}
      <section id="dev-tests" className="mx-auto max-w-7xl px-4 py-10">
        <Card>
          <CardHeader>
            <CardTitle className="text-sm">DEV 테스트: 필수 섹션 마운트 여부</CardTitle>
          </CardHeader>
          <CardContent className="text-xs">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
              {REQUIRED_SECTION_IDS.map((id) => (
                <div key={id} className="flex items-center gap-2">
                  <span className={`h-2 w-2 rounded-full ${mountedIds.includes(id) ? "bg-emerald-500" : "bg-red-500"}`} />
                  <span>#{id} {mountedIds.includes(id) ? "OK" : "MISSING"}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
