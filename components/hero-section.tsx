"use client"

import { SplitFlapText } from "@/components/split-flap-text"

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col"
      style={{ background: "#0d0d0d", fontFamily: "var(--font-jetbrains), monospace" }}
    >
      {/* Titlebar */}
      <div
        style={{
          background: "#161616",
          borderBottom: "1px solid #1e1e1e",
          padding: "14px 40px 14px 56px",
          display: "flex",
          alignItems: "center",
          gap: 8,
          flexShrink: 0,
        }}
      >
        <span style={{ width: 13, height: 13, borderRadius: "50%", background: "#ff5f57", display: "inline-block" }} />
        <span style={{ width: 13, height: 13, borderRadius: "50%", background: "#febc2e", display: "inline-block" }} />
        <span style={{ width: 13, height: 13, borderRadius: "50%", background: "#28c840", display: "inline-block" }} />
        <span style={{ marginLeft: 16, fontSize: 14, color: "#333", letterSpacing: "0.1em" }}>
          ~/portfolio — <span style={{ color: "#c95555" }}>yeojin@design</span> — zsh
        </span>
      </div>

      {/* Body */}
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "clamp(32px, 6vw, 64px) clamp(24px, 8vw, 112px) clamp(28px, 5vw, 56px)",
          minHeight: 0,
        }}
      >
        {/* Top row */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
          <span style={{ fontSize: 15, color: "#444", letterSpacing: "0.08em" }}>
            <span style={{ color: "#c95555" }}>$</span> cat cover.md
          </span>
          <span style={{ fontSize: 15, color: "#c95555", letterSpacing: "0.2em" }}>// Design × AI</span>
        </div>

        {/* Hero */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", padding: "24px 0 16px" }}>
          <div style={{ fontSize: 16, fontWeight: 300, color: "#c95555", letterSpacing: "0.22em", marginBottom: 18 }}>
            &gt;&nbsp; UX/UI &nbsp;·&nbsp; 交互设计 &nbsp;·&nbsp; 产品设计
          </div>
          <div style={{ marginBottom: 32, display: "flex", alignItems: "flex-end", flexWrap: "nowrap" }}>
            <SplitFlapText text="PORTFOLIO" speed={80} />
            <span
              style={{
                display: "inline-block",
                width: "clamp(5px, 0.6vw, 10px)",
                height: "clamp(4.2rem, 15.75vw, 14.7rem)",
                background: "#c95555",
                marginLeft: 6,
                flexShrink: 0,
                animation: "blink 1.1s step-end infinite",
              }}
            />
          </div>
          <div style={{ fontSize: "clamp(16px, 2vw, 26px)", fontWeight: 300, color: "#666", letterSpacing: "0.04em" }}>
            <span style={{ color: "#c95555", fontWeight: 700 }}>{"{"}</span>
            &nbsp;AI-Augmented &nbsp;
            <span style={{ color: "#c95555" }}>×</span>
            &nbsp; Vibe Coding&nbsp;
            <span style={{ color: "#c95555", fontWeight: 700 }}>{"}"}</span>
          </div>
        </div>

        {/* Bottom */}
        <div
          style={{
            borderTop: "1px solid #1e1e1e",
            paddingTop: 36,
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            alignItems: "end",
          }}
        >
          {/* JSON block */}
          <div style={{ fontSize: "clamp(13px, 1.2vw, 17px)", lineHeight: 2.1, letterSpacing: "0.02em" }}>
            <span style={{ color: "#333" }}>{"{"}</span>
            <br />
            &nbsp;&nbsp;<span style={{ color: "#c95555" }}>&quot;name&quot;</span>
            <span style={{ color: "#333" }}> : </span>
            <span style={{ color: "#999" }}>&quot;金如珍 · Yeojin Kim&quot;</span>
            <span style={{ color: "#333" }}>,</span>
            <br />
            &nbsp;&nbsp;<span style={{ color: "#c95555" }}>&quot;email&quot;</span>
            <span style={{ color: "#333" }}> : </span>
            <span style={{ color: "#999" }}>&quot;jinrz4849@naver.com&quot;</span>
            <span style={{ color: "#333" }}>,</span>
            <br />
            &nbsp;&nbsp;<span style={{ color: "#c95555" }}>&quot;wechat&quot;</span>
            <span style={{ color: "#333" }}> : </span>
            <span style={{ color: "#999" }}>&quot;kyj4849&quot;</span>
            <br />
            <span style={{ color: "#333" }}>{"}"}</span>
          </div>

          {/* Right: year + command */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 14 }}>
            <div
              style={{
                fontSize: "clamp(40px, 5vw, 72px)",
                fontWeight: 800,
                color: "#c95555",
                letterSpacing: "-0.02em",
                lineHeight: 1,
              }}
            >
              2026届
            </div>
            <div style={{ fontSize: 14, color: "#2a2a2a", letterSpacing: "0.08em" }}>
              <span style={{ color: "#c95555" }}>yeojin@design</span>:~$ open portfolio/
              <span style={{ animation: "blink 1.1s step-end infinite" }}>█</span>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}
