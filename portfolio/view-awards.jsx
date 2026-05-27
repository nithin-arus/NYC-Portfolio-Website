// Portfolio v2 — Awards view

function ViewAwards() {
  const rows = [
    { line: "Y", title: "[Award / Honor Name]",       org: "[Organization]",      year: "20XX", status: "Active" },
    { line: "B", title: "[Award / Honor Name]",       org: "[Organization]",      year: "20XX", status: "Active" },
    { line: "G", title: "[Fellowship / Grant]",       org: "[Foundation]",        year: "20XX", status: "Active" },
    { line: "R", title: "[Society Recognition]",      org: "[Society]",           year: "20XX", status: "Archived" },
    { line: "O", title: "[Citation / Listing]",       org: "[Publication]",       year: "20XX", status: "Active" },
    { line: "P", title: "[Award / Honor Name]",       org: "[Organization]",      year: "20XX", status: "Archived" },
    { line: "Y", title: "[Award / Honor Name]",       org: "[Organization]",      year: "20XX", status: "Archived" },
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <PfBoardHeader stationCode="N04" name="Awards &amp; Honors" />

      <div className="pf-scroll" style={{ flex: 1 }}>
        <div style={{ padding: "32px 40px 24px", display: "grid", gridTemplateColumns: "1fr auto", alignItems: "end", borderBottom: "1px solid var(--hairline)" }}>
          <div className="pf-tighter pf-display-xl" style={{ fontSize: 84, fontWeight: 500, lineHeight: 1.02 }}>
            Awards
          </div>
          <div style={{ textAlign: "right" }}>
            <div className="pf-tight" style={{ fontSize: 56, fontWeight: 700, lineHeight: 1 }}>{rows.length}</div>
            <div className="pf-meta" style={{ fontSize: 10, color: "var(--muted)", marginTop: 4 }}>Designations Logged</div>
          </div>
        </div>

        <table className="pf-table" style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              {["Line", "Designation", "Issuing Body", "Year", "Status"].map((h, i) => (
                <th key={h} className="pf-meta" style={{
                  textAlign: i >= 3 ? "right" : "left",
                  fontSize: 10, color: "var(--muted)", fontWeight: 500,
                  padding: i === 0 ? "16px 12px 16px 40px" : i === 4 ? "16px 40px 16px 12px" : "16px 12px",
                  borderBottom: "1px solid var(--hairline-strong)",
                }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={i} style={{ borderBottom: "1px solid var(--hairline)" }}>
                <td className="pf-cell-bullet" style={{ padding: "16px 12px 16px 40px", width: 80 }}>
                  <PfBullet label={r.line} line={r.line} size={24} />
                </td>
                <td className="pf-tight pf-cell-title" style={{ padding: "16px 12px", fontSize: 19, fontWeight: 500 }}>
                  {r.title}
                </td>
                <td className="pf-cell-meta" style={{ padding: "16px 12px", fontSize: 13, color: "var(--muted)" }}>
                  {r.org}
                </td>
                <td className="pf-meta pf-cell-meta" style={{ padding: "16px 12px", fontSize: 11, color: "var(--muted)", textAlign: "right" }}>
                  {r.year}
                </td>
                <td className="pf-meta pf-cell-status" style={{ padding: "16px 40px 16px 12px", fontSize: 10, textAlign: "right" }}>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: 6, color: r.status === "Active" ? "#00933c" : "var(--muted)" }}>
                    <PfDot color={r.status === "Active" ? "#00933c" : "#6b6d70"} className={r.status === "Active" ? "pf-blink-slow" : ""} />
                    {r.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

Object.assign(window, { ViewAwards });
