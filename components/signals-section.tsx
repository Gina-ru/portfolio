"use client"

import { useRef, useState, useEffect } from "react"
import type React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

type Signal = {
  date: string
  title: string
  note: string
  type: string
  award: string
  role: string
  problem: string[]
  approach: Array<{ main: string; sub?: string }>
  outcome: string
  reflection?: string
  outcomeCount?: number
  impact?: Array<{ value: string; label: string }>
  moreDetails?: Array<{ title: string; body: string }>
  problemStyle?: 'paragraph'
  problemImages?: Array<{ alt: string; src?: string }>
  problemBeforeAfter?: {
    before: { src: string; alt: string }
    after?: { src: string; alt: string }
  }
  additionalBeforeAfter?: Array<{
    before: { src: string; alt: string }
    after: { src: string; alt: string }
  }>
  newSkillImages?: Array<{ src: string; alt: string }>
  approachImages?: Array<{ alt: string; src?: string }>
  outcomeImages?: Array<{ alt: string; src?: string }>
  outcomeFeature?: {
    primary: { alt: string; src: string }
    secondary: Array<{ alt: string; src: string }>
  }
  outcomeFeatureRows?: Array<{
    primary: { alt: string; src: string }
    secondary: Array<{ alt: string; src: string }>
  }>
}

const signals: Signal[] = [
  {
    date: "2026.03 — Present",
    title: "Manycore (群核科技)",
    note: "3D-Based AI Video & Content Generation Tool · Experience Design · UI/UX · Product Design",
    type: "INTERNSHIP",
    award: "",
    role: "Experience Designer · UI/UX · Product Design",
    problem: ["3D 공간 기반 AI 영상/콘텐츠 생성 툴 설계"],
    approach: [],
    outcome: "",
  },
  {
    date: "2025.10 — 2026.01",
    title: "Sheet0",
    note: "AI Data Workflow SaaS · Product & UIUX Design",
    type: "INTERNSHIP",
    award: "",
    role: "Product & UIUX Designer",
    problem: [
      "Sheet0는 AI Agent가 데이터 분석·처리 작업을 자동화하는 SaaS 제품이다.",
      "기존 Agent는 작업을 실행하지만 중간 과정이 블랙박스처럼 보이지 않았다.",
      "전문가 유저일수록 '지금 뭘 하고 있는지', '어디서 오류가 났는지'를 실시간으로 파악해야 신뢰하고 사용할 수 있다.",
      "→ Agent의 행동 과정을 사용자가 읽고 개입할 수 있는 UI가 필요했다.",
    ],
    approach: [
      { main: "Cursor의 Chat 인터페이스에서 힌트를 얻었다. Cursor는 AI가 작업하는 동안 System Message로 중간 과정·오류·판단 근거를 실시간으로 보여준다. 개발자들이 이 방식에 이미 익숙하고 신뢰한다는 점에 주목했다." },
      { main: "이 패턴을 Sheet0의 데이터 워크플로우에 적용 — Agent가 웹 서치·데이터 처리를 수행하는 동안 각 단계의 진행 상황, 판단 근거, 오류 메시지를 System Message UI로 노출했다." },
      { main: "Agent 툴 3가지 카테고리", sub: "File Operations — Read / Write / Edit / Glob / Grep  ·  Code Execution — Bash / TodoWrite / Task  ·  Network Tools — WebSearch / WebFetch" },
      { main: "각 툴 실행 시 정보 구조가 다르기 때문에 카테고리별로 다른 System Message 컴포넌트를 설계했다." },
      { main: "총 9가지 컴포넌트", sub: "Write Read · To-do Write · Glob Grep · Edit · Bash · Skill · Web Search · Task · Code Block" },
      { main: "사용자는 과정을 읽고 필요하면 Debug Card(Read / Write / Edit)로 직접 개입할 수 있다." },
    ],
    outcome: "",
    outcomeCount: 3,
    reflection: "AI 제품에서 투명성(Transparency)은 기능이 아니라 신뢰의 문제다. 과정이 보여야 전문가가 믿고 쓴다.",
    problemBeforeAfter: {
      before: { src: "/images/chat_before.png", alt: "Before" },
      after: { src: "/images/chat_after.png", alt: "After" },
    },
    approachImages: [
      { alt: "Chat UI Default state", src: "/images/chat-default-state.png" },
      { alt: "Chat UI Hover state", src: "/images/chat-hover.png" },
      { alt: "Chat UI Opened state", src: "/images/chat-opened.png" },
    ],
    outcomeImages: [
      { alt: "tableExpand 0", src: "/images/tableExpand_0.png" },
      { alt: "tableExpand 1", src: "/images/tableExpand_1.png" },
      { alt: "tableExpand 2", src: "/images/tableExpand_2.png" },
    ],
  },
  {
    date: "2025.06 — 2025.09",
    title: "Tripo AI",
    note: "AIGC 3D Platform · Product & UIUX Design",
    type: "INTERNSHIP",
    award: "🏆 IDA Silver & Bronze Award 2025",
    role: "Product & UIUX Designer",
    problem: [
      "사용자 로그 분석 결과, 모델 생성 실패 이후 재시도율이 약 35%로 높게 나타났다.",
      "인터뷰에서도 '프롬프트 입력이 어렵다'는 피드백이 반복적으로 확인되었다.",
      "문제는 AI 모델의 성능이 아니라, 사용자가 AI를 사용하는 방식(입력 경험)에 있었다.",
    ],
    approach: [
      { main: "Prompt Template", sub: "추천 프롬프트 템플릿을 제공하여 사용자의 진입 장벽을 낮추고, AI 사용 경험이 없는 사용자도 쉽게 시작할 수 있도록 설계했다." },
      { main: "Preview Thumbnail", sub: "생성 과정 중 결과를 예측할 수 있는 미리보기 썸네일을 추가하여 사용자 불확실성을 줄이고 결과에 대한 기대감을 형성했다." },
      { main: "One-click Iteration UX", sub: "실패 시 단순 재시도 대신 원클릭 수정 인터페이스를 제공해 반복 사용을 자연스럽게 유도하고 UX 흐름이 끊기지 않도록 개선했다." },
    ],
    outcome: "Tripo는 AI 기반 텍스트 프롬프트로 3D 모델을 생성하는 플랫폼이다. 본 프로젝트의 목표는 사용자의 '프롬프트 입력 → 생성 결과 확인' 과정에서 발생하는 이탈률을 줄이고, 전반적인 UX 신뢰도를 향상시키는 것이었다.",
    outcomeCount: 0,
    outcomeFeatureRows: [
      {
        primary: { alt: "Tripo Game Hub", src: "/images/tripo-game-hub.png" },
        secondary: [
          { alt: "Tripo Desktop v1 1", src: "/images/tripo-desktop-v1-1.png" },
          { alt: "Tripo Desktop v1 2", src: "/images/tripo-desktop-v1-2.png" },
        ],
      },
      {
        primary: { alt: "Tripo Affiliate Program", src: "/images/tripo-affiliate-program.png" },
        secondary: [
          { alt: "Tripo Text to 3D 1", src: "/images/tripo-text-to-3d-1.png" },
          { alt: "Tripo Text to 3D 2", src: "/images/tripo-text-to-3d-2.png" },
        ],
      },
    ],
    impact: [
      { value: "↓ 15%", label: "Drop-off Rate" },
      { value: "↑ 20%", label: "Session Time" },
      { value: "1.3x", label: "Reuse Rate" },
    ],
    moreDetails: [
      {
        title: "Collaboration",
        body: "PM과 사용자 여정 및 KPI를 정의하고, 프론트엔드 개발자와 컴포넌트 단위 협업을 통해 구현 단계에서도 시각적 일관성을 유지했다.",
      },
      {
        title: "Design System",
        body: "Tripo Design System v0.3을 구축하여 색상 토큰, 타이포그래피, 버튼 상태, 입력 필드 등을 정의하고 내부 문서화하여 확장성과 일관성을 확보했다.",
      },
      {
        title: "Global UX",
        body: "다국어 환경을 고려한 반응형 텍스트 구조와 문화적 차이를 최소화하는 중립적인 디자인 스타일을 적용했다.",
      },
    ],
    problemBeforeAfter: {
      before: { src: "/images/tripo-before-home.png", alt: "Tripo before homepage" },
      after: { src: "/images/tripo-after.png", alt: "Tripo after homepage" },
    },
    additionalBeforeAfter: [
      {
        before: { src: "/images/tripo-before-1.png", alt: "Tripo before flow" },
        after: { src: "/images/tripo-after-1.png", alt: "Tripo after flow" },
      },
      {
        before: { src: "/images/tripo-before-2.png", alt: "Tripo before iteration" },
        after: { src: "/images/tripo-after-4.png", alt: "Tripo after iteration" },
      },
    ],
    newSkillImages: [
      { src: "/images/tripo-new-skill-after-2.png", alt: "Tripo new skill after 2" },
      { src: "/images/tripo-new-skill-after-3.png", alt: "Tripo new skill after 3" },
    ],
  },
  {
    date: "2025.09 — 2026.01",
    title: "Graph Node",
    note: "LLM-Based Knowledge Graph App · PM & UI/UX Design",
    type: "COLLABORATION",
    award: "",
    role: "PM & UI/UX Designer",
    problem: [
      "LLM 기반 AI 지식 그래프 툴",
      "노트 자동 생성 · 연결 · 요약 기능 설계 필요",
      "Chat 인터랙션 중심의 AI 워크플로우 설계 필요",
    ],
    approach: [
      { main: "전체 제품 전략 · 기획 설계" },
      { main: "Chat 인터랙션 기반 AI 워크플로우 설계" },
      { main: "노트 편집 · 시각화 플로우 설계" },
      { main: "핵심 UI/UX 시스템 · 인터랙티브 프로토타입 제작" },
    ],
    outcome: "실제 설치 가능한 앱으로 배포",
  },
  {
    date: "2025.04 — 2025.07",
    title: "Meal Mate 饭咪",
    note: "AI 桌宠 & App UI Design",
    type: "COLLABORATION",
    award: "🏆 \"设计+\"创新荒野（国际）大赛  十佳团队 · 中美青年创客大赛 北京分区 二等奖",
    role: "UI Designer",
    problem: [],
    approach: [
      { main: "UI Wire Frame · User Flow 제작" },
      { main: "Meal Mate APP UI System Design" },
    ],
    outcome: "",
  },
  {
    date: "2025.03 — 2025.04",
    title: "Cosmic Echo",
    note: "Interdimensional Music Generation System · Interaction Design",
    type: "COLLABORATION",
    award: "🏆 ARTECH 2025 International Conference Paper",
    role: "Project Lead · Interaction Designer (주도 80%)",
    problem: ["宇宙 신호를 음악으로 변환하는 인터랙티브 경험 설계"],
    approach: [
      { main: "프로젝트 기획 · 기술 조사 주도" },
      { main: "宇宙 신호 → 음악 인터랙션 경험 설계" },
      { main: "Arduino + SDR 신호 수신 장치 개발 협업" },
      { main: "인터페이스 디자인 · 유저 인터랙션 플로우 설계" },
    ],
    outcome: "",
  },
  {
    date: "2024",
    title: "Early Works",
    note: "Habit Pulse · 清华艺博",
    type: "PERSONAL",
    award: "",
    role: "UI/UX Designer · PM",
    problem: [],
    approach: [],
    outcome: "",
  },
]

export function SignalsSection() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)
  const cursorRef = useRef<HTMLDivElement>(null)
  const [isHovering, setIsHovering] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  useEffect(() => {
    if (!sectionRef.current || !cursorRef.current) return

    const section = sectionRef.current
    const cursor = cursorRef.current

    const handleMouseMove = (e: MouseEvent) => {
      const rect = section.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      gsap.to(cursor, { x, y, duration: 0.5, ease: "power3.out" })
    }

    const handleMouseEnter = () => setIsHovering(true)
    const handleMouseLeave = () => setIsHovering(false)

    section.addEventListener("mousemove", handleMouseMove)
    section.addEventListener("mouseenter", handleMouseEnter)
    section.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      section.removeEventListener("mousemove", handleMouseMove)
      section.removeEventListener("mouseenter", handleMouseEnter)
      section.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  useEffect(() => {
    if (!sectionRef.current || !headerRef.current || !cardsRef.current) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current,
        { x: -60, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        },
      )

      const cards = cardsRef.current?.querySelectorAll("article")
      if (cards) {
        gsap.fromTo(
          cards,
          { x: -100, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: cardsRef.current,
              start: "top 90%",
              toggleActions: "play none none reverse",
            },
          },
        )
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="signals" ref={sectionRef} className="relative py-32 pl-6 md:pl-16 overflow-hidden">
      <div
        ref={cursorRef}
        className={cn(
          "pointer-events-none absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 z-50",
          "w-12 h-12 rounded-full border-2 border-accent bg-accent",
          "transition-opacity duration-300",
          isHovering && selectedIndex === null ? "opacity-100" : "opacity-0",
        )}
      />

      <AnimatePresence mode="wait">
        {selectedIndex === null ? (
          <motion.div
            key="list"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
          >
            <div ref={headerRef} className="mb-16 pr-6 md:pr-12">
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">01 / Works</span>
              <h2 className="mt-4 font-[var(--font-bebas)] text-5xl md:text-7xl tracking-tight">ALL WORKS</h2>
            </div>

            <div
              ref={(el) => {
                scrollRef.current = el
                cardsRef.current = el
              }}
              className="flex gap-8 overflow-x-auto pb-8 pr-12"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {signals.map((signal, index) => (
                <SignalCard
                  key={index}
                  signal={signal}
                  index={index}
                  onClick={() => setSelectedIndex(index)}
                />
              ))}
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="detail"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <SignalDetail
              signal={signals[selectedIndex]}
              index={selectedIndex}
              onBack={() => setSelectedIndex(null)}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

function SignalCard({
  signal,
  index,
  onClick,
}: {
  signal: Signal
  index: number
  onClick: () => void
}) {
  return (
    <article
      onClick={onClick}
      className={cn(
        "group relative flex-shrink-0 w-80 h-[420px] cursor-pointer",
        "transition-transform duration-500 ease-out",
        "hover:-translate-y-2",
      )}
    >
      <div className="relative bg-card border border-border/50 md:border-t md:border-l md:border-r-0 md:border-b-0 p-8 h-full flex flex-col">
        <div className="absolute -top-px left-0 right-0 h-px bg-gradient-to-r from-transparent via-border/40 to-transparent" />

        <div className="flex items-baseline justify-between mb-8">
          <span className="font-mono text-[14px] uppercase tracking-[0.3em] text-muted-foreground">
            No. {String(index + 1).padStart(2, "0")}
          </span>
          <span className="font-mono text-[14px] uppercase tracking-[0.2em] text-accent/80">{signal.type}</span>
        </div>

        <time className="font-mono text-[14px] text-muted-foreground/60 mb-4 block">{signal.date}</time>

        <h3 className="font-[var(--font-bebas)] text-4xl tracking-tight mb-4 group-hover:text-accent transition-colors duration-300">
          {signal.title}
        </h3>

        <div className="flex-shrink-0 w-12 h-px bg-accent/60 mb-6 group-hover:w-full transition-all duration-500" />

        <p className="font-mono text-[16px] text-foreground leading-relaxed">{signal.note}</p>

        {signal.award && (
          <p className="font-mono text-[14px] text-accent/80 leading-relaxed mt-auto pt-4">{signal.award}</p>
        )}

        <div className="absolute bottom-0 right-0 w-6 h-6 overflow-hidden">
          <div className="absolute bottom-0 right-0 w-8 h-8 bg-background rotate-45 translate-x-4 translate-y-4 border-t border-l border-border/30" />
        </div>
      </div>

      <div className="absolute inset-0 -z-10 translate-x-1 translate-y-1 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </article>
  )
}

function SignalDetail({
  signal,
  index,
  onBack,
}: {
  signal: Signal
  index: number
  onBack: () => void
}) {
  return (
    <div className="min-h-[80vh] pr-6 md:pr-16">

      {/* Back button */}
      <button
        onClick={onBack}
        className="flex items-center gap-2 font-mono text-[12px] uppercase tracking-[0.3em] text-white border border-white hover:border-accent hover:text-accent transition-colors duration-200 mb-16 group px-5 py-2.5"
        style={{ borderRadius: 20 }}
      >
        <span className="inline-block transition-transform duration-200 group-hover:-translate-x-1">←</span>
        Back to Works
      </button>

      {/* Project header */}
      <div className="border-t border-border/30 pt-10 mb-20">
        <div className="flex items-baseline justify-between mb-4">
          <span className="font-mono text-[18px] uppercase tracking-[0.3em] text-muted-foreground">
            No. {String(index + 1).padStart(2, "0")}
          </span>
          <span className="font-mono text-[18px] uppercase tracking-[0.2em] text-accent/80">{signal.type}</span>
        </div>
        <h2 className="font-[var(--font-bebas)] text-6xl md:text-8xl tracking-tight mb-8">
          {signal.title}
        </h2>
        <time className="font-mono text-[18px] text-white block">{signal.date}</time>
        {signal.award && (
          <p className="font-mono text-[18px] text-accent/70 mt-3">{signal.award}</p>
        )}
      </div>

      {/* ① OVERVIEW */}
      <section className="mb-12">
        <SectionLabel number="01" label="Overview" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-8">
          <div>
            <FieldLabel>Project</FieldLabel>
            <p className="font-mono text-[15px] text-foreground leading-relaxed">{signal.note}</p>
          </div>
          <div>
            <FieldLabel>Role</FieldLabel>
            <p className="font-mono text-[15px] text-foreground leading-relaxed">{signal.role}</p>
          </div>
          <div>
            <FieldLabel>Duration</FieldLabel>
            <p className="font-mono text-[15px] text-foreground leading-relaxed">{signal.date}</p>
          </div>
        </div>
      </section>

      {/* ② PROBLEM */}
      {signal.problem.length > 0 && (
        <section className="mb-12">
          <SectionLabel number="02" label="Problem" />
          {signal.problemStyle === 'paragraph' ? (
            <p className="font-mono text-[15px] text-foreground leading-relaxed max-w-2xl mt-8">
              {signal.problem.join(' ')}
            </p>
          ) : (
            <ul className="mt-8 space-y-2 max-w-2xl">
              {signal.problem.map((item, i) => (
                <li key={i} className="font-mono text-[15px] text-foreground leading-relaxed flex gap-3">
                  <span className="text-accent/60 flex-shrink-0">·</span>
                  <span className="whitespace-normal min-w-0">{item}</span>
                </li>
              ))}
            </ul>
          )}
          {signal.problemBeforeAfter && (
            <div className={cn("mt-8 flex items-start gap-4", !signal.problemBeforeAfter.after && "max-w-4xl")}>
              <div className="flex-1 flex flex-col gap-2">
                <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 12, letterSpacing: "0.15em", textTransform: "uppercase", color: "#c95555", borderLeft: "3px solid #c95555", paddingLeft: 8 }}>Before</span>
                <div style={{ borderRadius: 8, overflow: "hidden" }}>
                  <img src={signal.problemBeforeAfter.before.src} alt={signal.problemBeforeAfter.before.alt} style={{ width: "100%", height: "auto", display: "block" }} />
                </div>
              </div>
              {signal.problemBeforeAfter.after && (
                <>
                  <span style={{ color: "#c95555", fontSize: 32, flexShrink: 0, alignSelf: "center" }}>→</span>
                  <div className="flex-1 flex flex-col gap-2">
                    <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 12, letterSpacing: "0.15em", textTransform: "uppercase", color: "#ffffff", borderLeft: "3px solid #ffffff", paddingLeft: 8 }}>After</span>
                    <div style={{ borderRadius: 8, overflow: "hidden" }}>
                      <img src={signal.problemBeforeAfter.after.src} alt={signal.problemBeforeAfter.after.alt} style={{ width: "100%", height: "auto", display: "block" }} />
                    </div>
                  </div>
                </>
              )}
                </div>
          )}
          {signal.additionalBeforeAfter?.map((comparison, comparisonIndex) => (
            <div key={`${comparison.before.src}-${comparisonIndex}`} className="mt-8 flex items-start gap-4">
              <div className="flex-1 flex flex-col gap-2">
                <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 12, letterSpacing: "0.15em", textTransform: "uppercase", color: "#c95555", borderLeft: "3px solid #c95555", paddingLeft: 8 }}>Before</span>
                <div style={{ borderRadius: 8, overflow: "hidden" }}>
                  <img src={comparison.before.src} alt={comparison.before.alt} style={{ width: "100%", height: "auto", display: "block" }} />
                </div>
              </div>
              <span style={{ color: "#c95555", fontSize: 32, flexShrink: 0, alignSelf: "center" }}>→</span>
              <div className="flex-1 flex flex-col gap-2">
                <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 12, letterSpacing: "0.15em", textTransform: "uppercase", color: "#ffffff", borderLeft: "3px solid #ffffff", paddingLeft: 8 }}>After</span>
                <div style={{ borderRadius: 8, overflow: "hidden" }}>
                  <img src={comparison.after.src} alt={comparison.after.alt} style={{ width: "100%", height: "auto", display: "block" }} />
                </div>
              </div>
            </div>
          ))}
          {signal.newSkillImages && (
            <div className="mt-20">
              <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 12, letterSpacing: "0.15em", textTransform: "uppercase", color: "#ffffff", borderLeft: "3px solid #ffffff", paddingLeft: 8 }}>New Skill</span>
              <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
                {signal.newSkillImages.map((image) => (
                  <div key={image.src} style={{ borderRadius: 8, overflow: "hidden" }}>
                    <img src={image.src} alt={image.alt} style={{ width: "100%", height: "auto", display: "block" }} />
                  </div>
                ))}
              </div>
            </div>
          )}
          {signal.problemImages && (
            <div className="mt-8 space-y-4">
              {signal.problemImages.map((img, i) => (
                <ImagePlaceholder key={i} alt={img.alt} src={img.src} />
              ))}
            </div>
          )}
        </section>
      )}

      {/* ③ APPROACH */}
      {signal.approach.length > 0 && (
        <section className="mb-12">
          <SectionLabel number="03" label="Approach" />
          <ul className="mt-8 space-y-4 max-w-2xl">
            {signal.approach.map((item, i) => (
              <li key={i}>
                <div className="text-foreground flex gap-3" style={{ fontFamily: "Inter, sans-serif", fontSize: "16px", lineHeight: 1.8 }}>
                  <span className="font-mono text-accent/60 flex-shrink-0 text-[15px]">·</span>
                  <span className="whitespace-normal min-w-0">{item.main}</span>
                </div>
                {item.sub && (
                  <p className="text-foreground/60 ml-5 mt-1 whitespace-normal" style={{ fontFamily: "Inter, sans-serif", fontSize: "14px", lineHeight: 1.8 }}>
                    {item.sub}
                  </p>
                )}
              </li>
            ))}
          </ul>
          {signal.approachImages && (
            <div className="mt-8 grid grid-cols-3 gap-4">
              {signal.approachImages.map((img, i) => (
                img.src
                  ? <img key={i} src={img.src} alt={img.alt} className="w-full h-auto object-contain" style={{ borderRadius: 8 }} />
                  : <ImagePlaceholder key={i} alt={img.alt} />
              ))}
            </div>
          )}
        </section>
      )}

      {/* ④ OUTCOME */}
      <section className="mb-12">
        <SectionLabel number="04" label="Outcome" />
        {signal.outcome && (
          <p className="font-mono text-[15px] text-foreground leading-relaxed max-w-2xl mt-6">{signal.outcome}</p>
        )}
        {signal.impact && (
          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
            {signal.impact.map((item) => (
              <div key={item.label} className="border border-white/10 bg-white p-6 text-center text-black">
                <p className="font-[var(--font-bebas)] text-4xl tracking-tight">{item.value}</p>
                <p className="mt-2 font-mono text-[12px] uppercase tracking-[0.2em] text-black/60">{item.label}</p>
              </div>
            ))}
          </div>
        )}
        {(signal.outcomeImages || (signal.outcomeCount ?? 2) > 0) && (
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {signal.outcomeImages
              ? signal.outcomeImages.map((img, i) => (
                  <ImagePlaceholder key={i} alt={img.alt} src={img.src} />
                ))
              : Array.from({ length: signal.outcomeCount ?? 2 }).map((_, i) => (
                  <ImagePlaceholder key={i} alt={`Image / Video ${i + 1}`} />
                ))
            }
          </div>
        )}
        {signal.outcomeFeature && (
          <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-[1fr_1fr]">
            <ImagePlaceholder alt={signal.outcomeFeature.primary.alt} src={signal.outcomeFeature.primary.src} />
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2">
              {signal.outcomeFeature.secondary.map((img) => (
                <ImagePlaceholder key={img.src} alt={img.alt} src={img.src} />
              ))}
            </div>
          </div>
        )}
        {signal.outcomeFeatureRows?.map((row) => (
          <div key={row.primary.src} className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-[1fr_1fr]">
            <ImagePlaceholder alt={row.primary.alt} src={row.primary.src} />
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2">
              {row.secondary.map((img) => (
                <ImagePlaceholder key={img.src} alt={img.alt} src={img.src} />
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* ⑤ REFLECTION */}
      <section className="mb-4 border-t border-border/20 pt-12">
        <SectionLabel number="05" label="Reflection" />
        <p className="font-mono text-[15px] leading-relaxed max-w-2xl mt-8 italic" style={{ color: signal.reflection ? undefined : undefined }} >
          {signal.reflection
            ? <span className="text-foreground">{signal.reflection}</span>
            : <span className="text-foreground/30">— Coming soon.</span>
          }
        </p>
      </section>

      {signal.moreDetails && (
        <section className="mb-4 pt-8">
          <details className="border border-white/10 bg-white/5 p-6">
            <summary className="cursor-pointer font-mono text-[14px] uppercase tracking-[0.3em] text-foreground">
              More Details
            </summary>
            <div className="mt-6 space-y-5">
              {signal.moreDetails.map((detail) => (
                <div key={detail.title}>
                  <h3 className="font-mono text-[13px] uppercase tracking-[0.24em] text-accent/70">{detail.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-foreground/75" style={{ fontFamily: "Inter, sans-serif" }}>
                    {detail.body}
                  </p>
                </div>
              ))}
            </div>
          </details>
        </section>
      )}

    </div>
  )
}

function ImagePlaceholder({ alt, src }: { alt: string; src?: string }) {
  if (src) {
    return (
      <div className="aspect-video overflow-hidden border border-border/20">
        <img src={src} alt={alt} className="w-full h-full object-contain" />
      </div>
    )
  }
  return (
    <div className="border border-border/50 aspect-video flex flex-col items-center justify-center gap-3" style={{ background: "oklch(0.14 0 0)" }}>
      <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-muted-foreground/50">
        {alt}
      </span>
    </div>
  )
}

function SectionLabel({ number, label }: { number: string; label: string }) {
  return (
    <div className="flex items-center gap-4">
      <span className="font-mono text-[14px] text-accent/60 tracking-[0.3em]">{number} /</span>
      <span className="font-mono text-[14px] uppercase tracking-[0.3em] text-muted-foreground">{label}</span>
      <div className="flex-1 h-px bg-border/30" />
    </div>
  )
}

function FieldLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-mono text-[14px] uppercase tracking-[0.3em] text-accent/60 mb-2">{children}</p>
  )
}
