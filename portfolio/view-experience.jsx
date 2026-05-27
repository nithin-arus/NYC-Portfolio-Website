// Portfolio v2 — Experience view ("Career Line")
// Treats job history as a route with stations (stops)

function ViewExperience() {
  const stops = [
    { current: true,  role: "[Current Role]",    co: "[Company]",        dates: "20XX — Present", loc: "[City]",  desc: "[One-line description of what you do and what you ship.]" },
    { role: "[Previous Role]",   co: "[Company]",       dates: "20XX — 20XX",    loc: "[City]",  desc: "[What you built, scope, and outcome.]" },
    { role: "[Role]",            co: "[Company]",       dates: "20XX — 20XX",    loc: "[City]",  desc: "[Brief description.]" },
    { role: "[Role]",            co: "[Company]",       dates: "20XX — 20XX",    loc: "[City]",  desc: "[Brief description.]" },
    { role: "[Internship]",      co: "[Company]",       dates: "20XX",           loc: "[City]",  desc: "[What you learned.]" },
    { terminus: true, role: "Origin",            co: "[School / First Job]", dates: "20XX",     loc: "[City]",  desc: "[Education or first stop.]" },
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <PfBoardHeader stationCode="N02" name="Experience" />

      <div className="pf-scroll" style={{ flex: 1, padding: "32px 40px 40px" }}>
        {/* Title */}
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 28 }}>
          <div className="pf-tighter pf-display-xl" style={{ fontSize: 84, fontWeight: 500, lineHeight: 1.02 }}>
            Experience
          </div>
          <div className="pf-meta" style={{ fontSize: 10, color: "var(--muted)", paddingBottom: 12, textAlign: "right" }}>
            Line O · 6 Stops<br />
            Origin → Present
          </div>
        </div>

        {/* Route */}
        <div style={{ position: "relative", paddingLeft: 56 }}>
          {stops.map((s, i) => (
            <div key={i} style={{ display: "grid", gridTemplateColumns: "1fr", paddingBottom: i === stops.length - 1 ? 0 : 28, position: "relative" }}>
              {/* Connector segment from this dot down to the next (omit on last stop) */}
              {i < stops.length - 1 && (
                <div
                  style={{
                    position: "absolute",
                    left: -42,        /* dot center (-56 + 18) - half of line width (4) */
                    top: 42,          /* bottom of dot: top 6 + height 36 */
                    bottom: -6,       /* extend to top of next row's dot (top:6) */
                    width: 8,
                    background: "#ff6319",
                  }}
                />
              )}

              {/* Stop disc */}
              <div
                style={{
                  position: "absolute",
                  left: -56,
                  top: 6,
                  width: 36,
                  height: 36,
                  borderRadius: 999,
                  background: s.terminus ? "#1a1a1a" : "#fff",
                  border: s.terminus ? "3px solid #ff6319" : "5px solid #ff6319",
                  boxSizing: "border-box",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {s.current && (
                  <PfDot color="#ff6319" size={12} className="pf-blink-pulse" />
                )}
              </div>

              {/* Content */}
              <div style={{
                border: "1px solid var(--hairline)",
                background: s.current ? "#0c0c0c" : "transparent",
                padding: "16px 20px",
                display: "grid",
                gridTemplateColumns: "1fr auto",
                gap: 16,
                alignItems: "start",
              }}>
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 4 }}>
                    {s.current && (
                      <span className="pf-meta" style={{ fontSize: 9, color: "#ff6319", display: "inline-flex", alignItems: "center", gap: 6 }}>
                        <PfDot color="#ff6319" className="pf-blink" />
                        Now Serving
                      </span>
                    )}
                    {s.terminus && (
                      <span className="pf-meta" style={{ fontSize: 9, color: "var(--muted)" }}>Terminus</span>
                    )}
                  </div>
                  <div className="pf-tight" style={{ fontSize: 26, fontWeight: 700, lineHeight: 1.1 }}>
                    {s.role}
                  </div>
                  <div className="pf-tight" style={{ fontSize: 16, color: "var(--muted)", marginTop: 2 }}>
                    {s.co}
                  </div>
                  <div style={{ fontSize: 13, color: "var(--muted)", marginTop: 10, lineHeight: 1.5, maxWidth: 640 }}>
                    {s.desc}
                  </div>
                </div>
                <div style={{ textAlign: "right", display: "flex", flexDirection: "column", gap: 6 }}>
                  <span className="pf-meta" style={{ fontSize: 11, color: "#fff", fontWeight: 600 }}>
                    {s.dates}
                  </span>
                  <span className="pf-meta" style={{ fontSize: 10, color: "var(--muted)" }}>
                    {s.loc}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { ViewExperience });
