// Portfolio v2 — Home view ("Main Terminal")

function ViewHome() {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <PfBoardHeader stationCode="N01" name="Main Terminal" />

      <div className="pf-scroll" style={{ flex: 1 }}>
        {/* Marquee headline */}
        <div style={{ padding: "44px 40px 28px", borderBottom: "1px solid var(--hairline)" }}>
          <div className="pf-meta" style={{ fontSize: 11, color: "var(--muted)", marginBottom: 18, display: "flex", alignItems: "center", gap: 8 }}>
            <PfDot color="#fccc0a" className="pf-blink" />
            Now Arriving · Platform 1
          </div>
          <div
            className="pf-tighter pf-display-2xl"
            style={{ fontSize: 116, fontWeight: 500, lineHeight: 1.02 }}
          >
            Main Terminal
          </div>
          <div
            className="pf-tight"
            style={{ fontSize: 26, color: "var(--muted)", marginTop: 20, fontWeight: 400, lineHeight: 1.3 }}
          >
            Student at UC Berkeley
          </div>
        </div>

        {/* Two-column body */}
        <div className="pf-2col" style={{ display: "grid", gridTemplateColumns: "1.1fr 1fr", borderBottom: "1px solid var(--hairline)" }}>
          <div style={{ borderRight: "1px solid var(--hairline)", padding: 32, display: "flex", flexDirection: "column" }}>
            <div className="pf-meta" style={{ fontSize: 10, color: "var(--muted)", marginBottom: 16 }}>
              Fig. 01 — Schematic
            </div>
            <PfImageSlot label="[ Portrait / Schematic — drop image here ]" height={300} />
          </div>
          <div style={{ padding: 32, display: "flex", flexDirection: "column", gap: 16 }}>
            <div className="pf-meta" style={{ fontSize: 10, color: "var(--muted)" }}>About</div>
            <div className="pf-tight" style={{ fontSize: 24, lineHeight: 1.2, fontWeight: 500 }}>
              Hey, I'm Nithin 👋
            </div>
            <div style={{ fontSize: 14, color: "var(--muted)", lineHeight: 1.55 }}>
              I study Operations Research &amp; Math at UC Berkeley. I'm heavily invested in
              automating agriculture technology and the smart wearable space. I currently work
              as a teacher assistant at Berkeley Haas for UC Berkeley's Business Academy for Youth.
            </div>
            <div style={{ marginTop: "auto", paddingTop: 12 }}>
              <PfStatPair k="Now Operating" v="Student" />
              <PfStatPair k="Based" v="SF, California" />
              <PfStatPair k="In Service Since" v="[Year]" />
            </div>
          </div>
        </div>

        {/* Departure board feel — current focuses */}
        <div style={{ padding: 32 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 18 }}>
            <PfDot color="#00933c" className="pf-blink-pulse" />
            <div className="pf-tight" style={{ fontSize: 22, fontWeight: 700 }}>
              Next Departures
            </div>
            <div className="pf-meta" style={{ fontSize: 10, color: "var(--muted)", marginLeft: "auto" }}>
              Updated <PfClock />
            </div>
          </div>
          {[
            {
              line: "G", time: "Now", st: "Live", stc: "#00933c",
              dest: (
                <>
                  Building World's 1st Mass-Market{" "}
                  <a
                    href="https://www.therapeuo.xyz"
                    target="_blank"
                    rel="noreferrer noopener"
                    style={{ color: "#9aa0a6", textDecoration: "none" }}
                  >
                    Smart Insole
                  </a>
                </>
              ),
            },
            {
              line: "G", time: "Now", st: "Live", stc: "#00933c",
              dest: (
                <>
                  Designed a Minimalist{" "}
                  <a
                    href="https://apps.apple.com/us/app/oneday-by-nithin-aruswamy/id6755661127"
                    target="_blank"
                    rel="noreferrer noopener"
                    style={{ color: "#9aa0a6", textDecoration: "none" }}
                  >
                    Productivity App
                  </a>
                </>
              ),
            },
            { line: "Y", time: "Q3",   dest: "IEOR Research",            st: "Planned",  stc: "#fccc0a" },
            { line: "B", time: "—",    dest: "[Open to opportunities]",  st: "Standby",  stc: "#a7a9ac" },
          ].map((d, i, a) => (
            <div key={i} className="pf-departure-row"
              style={{
                display: "grid",
                gridTemplateColumns: "28px 80px 1fr auto",
                gap: 16,
                alignItems: "center",
                padding: "16px 0",
                borderTop: "1px solid var(--hairline)",
                borderBottom: i === a.length - 1 ? "1px solid var(--hairline)" : 0,
              }}
            >
              <PfBullet label={d.line} line={d.line} size={22} />
              <span className="pf-tight pf-departure-time" style={{ fontSize: 22, fontWeight: 600 }}>{d.time}</span>
              <span className="pf-tight" style={{ fontSize: 22, fontWeight: 500 }}>{d.dest}</span>
              <span className="pf-meta" style={{ fontSize: 11, color: d.stc, display: "inline-flex", alignItems: "center", gap: 6 }}>
                <PfDot color={d.stc} className="pf-blink-slow" />
                {d.st}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function PfStatPair({ k, v }) {
  return (
    <div style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "baseline",
      padding: "10px 0",
      borderTop: "1px solid var(--hairline)",
    }}>
      <span className="pf-meta" style={{ fontSize: 10, color: "var(--muted)" }}>{k}</span>
      <span className="pf-tight" style={{ fontSize: 15, fontWeight: 500 }}>{v}</span>
    </div>
  );
}

Object.assign(window, { ViewHome, PfStatPair });
