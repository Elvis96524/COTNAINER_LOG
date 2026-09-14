(function () {
  "use strict";

  // ---------------------------------------------------------------
  // i18n
  // ---------------------------------------------------------------
  const STRINGS = {
    en: {
      appName: "Container Yard Log", tagline: "Inbound & outbound container movements",
      navMovements: "Movements", navOverview: "Yard Overview",
      search: "Search container no.", filterMovement: "Movement", all: "All",
      inbound: "Inbound", outbound: "Outbound", filterVessel: "Vessel / Platform",
      addMovement: "Add movement", importCsv: "Import CSV", exportCsv: "Export CSV",
      colContainer: "Container No.", colType: "Type", colMovement: "Movement", colDate: "Date",
      colVessel: "Vessel / Platform", colLocation: "Location", colStatus: "Status", colRemarks: "Remarks",
      fContainerNo: "Container number", fType: "Size / type", fMovement: "Movement",
      fDate: "Date", fVessel: "Vessel / platform", fLocation: "Yard / location",
      fStatus: "Status", fRemarks: "Remarks (optional)", save: "Save movement", cancel: "Cancel",
      loaded: "Loaded", empty: "Empty",
      emptyState: "No movements yet. Add one, or import a CSV to get started.",
      overviewTitle: "Yard Overview", totalMovements: "Total movements",
      inYardNow: "Containers in yard now", distinctVessels: "Vessels / platforms",
      byLocation: "In yard, by location", byVessel: "By vessel / platform",
      vesselCol: "Vessel / platform", inCol: "In", outCol: "Out", inYardCol: "In yard",
      csvHint: "Expects columns: containerNo, sizeType, movement, date, vessel, location, status, remarks",
      required: "Container number, movement and date are required.", install: "Install app",
    },
    zh: {
      appName: "货柜场进出记录", tagline: "货柜进场与出场动态",
      navMovements: "进出记录", navOverview: "堆场总览",
      search: "搜索货柜号", filterMovement: "进出类型", all: "全部",
      inbound: "进场", outbound: "出场", filterVessel: "船只 / 平台",
      addMovement: "新增记录", importCsv: "导入 CSV", exportCsv: "导出 CSV",
      colContainer: "货柜号", colType: "尺寸/类型", colMovement: "类型", colDate: "日期",
      colVessel: "船只 / 平台", colLocation: "堆放位置", colStatus: "状态", colRemarks: "备注",
      fContainerNo: "货柜号", fType: "尺寸 / 类型", fMovement: "进出类型",
      fDate: "日期", fVessel: "船只 / 平台", fLocation: "堆场 / 位置",
      fStatus: "状态", fRemarks: "备注（可选）", save: "保存记录", cancel: "取消",
      loaded: "重柜", empty: "空柜",
      emptyState: "暂无记录。新增一条，或导入 CSV 快速开始。",
      overviewTitle: "堆场总览", totalMovements: "总记录数",
      inYardNow: "目前在场货柜数", distinctVessels: "船只 / 平台数量",
      byLocation: "在场货柜（按位置）", byVessel: "按船只 / 平台",
      vesselCol: "船只 / 平台", inCol: "进场", outCol: "出场", inYardCol: "在场",
      csvHint: "需包含列：containerNo, sizeType, movement, date, vessel, location, status, remarks",
      required: "货柜号、进出类型与日期为必填项。", install: "安装到主屏幕",
    },
    ms: {
      appName: "Log Pergerakan Kontena", tagline: "Pergerakan kontena masuk & keluar",
      navMovements: "Pergerakan", navOverview: "Gambaran Padang",
      search: "Cari no. kontena", filterMovement: "Pergerakan", all: "Semua",
      inbound: "Masuk", outbound: "Keluar", filterVessel: "Kapal / Platform",
      addMovement: "Tambah pergerakan", importCsv: "Import CSV", exportCsv: "Eksport CSV",
      colContainer: "No. Kontena", colType: "Saiz / Jenis", colMovement: "Pergerakan", colDate: "Tarikh",
      colVessel: "Kapal / Platform", colLocation: "Lokasi", colStatus: "Status", colRemarks: "Catatan",
      fContainerNo: "Nombor kontena", fType: "Saiz / jenis", fMovement: "Pergerakan",
      fDate: "Tarikh", fVessel: "Kapal / platform", fLocation: "Padang / lokasi",
      fStatus: "Status", fRemarks: "Catatan (pilihan)", save: "Simpan pergerakan", cancel: "Batal",
      loaded: "Penuh", empty: "Kosong",
      emptyState: "Belum ada rekod. Tambah satu, atau import CSV untuk mula.",
      overviewTitle: "Gambaran Padang", totalMovements: "Jumlah pergerakan",
      inYardNow: "Kontena di padang sekarang", distinctVessels: "Kapal / platform",
      byLocation: "Di padang, ikut lokasi", byVessel: "Ikut kapal / platform",
      vesselCol: "Kapal / platform", inCol: "Masuk", outCol: "Keluar", inYardCol: "Di padang",
      csvHint: "Perlukan lajur: containerNo, sizeType, movement, date, vessel, location, status, remarks",
      required: "Nombor kontena, pergerakan dan tarikh diperlukan.", install: "Pasang aplikasi",
    },
  };

  const SIZE_TYPES = ["20GP", "40GP", "40HC", "20RF", "40RF", "Other"];

  const ICONS = {
    list: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"/></svg>',
    grid: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>',
    search: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg>',
    plus: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg>',
    upload: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 16V4M6 10l6-6 6 6"/><path d="M4 20h16"/></svg>',
    download: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 4v12M6 12l6 6 6-6"/><path d="M4 20h16"/></svg>',
    trash: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"/><path d="M8 6V4h8v2"/><path d="M6 6l1 14h10l1-14"/></svg>',
    arrowIn: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 4v12M6 10l6 6 6-6"/></svg>',
    arrowOut: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20V8M6 14l6-6 6 6"/></svg>',
    chevUp: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M6 15l6-6 6 6"/></svg>',
    chevDown: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M6 9l6 6 6-6"/></svg>',
    globe: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 010 20 15 15 0 010-20z"/></svg>',
  };

  // ---------------------------------------------------------------
  // State + persistence (localStorage)
  // ---------------------------------------------------------------
  const STORE_KEY = "cyl-movements";
  const LANG_KEY = "cyl-lang";

  const uid = () => Math.random().toString(36).slice(2, 10);
  const todayStr = () => new Date().toISOString().slice(0, 10);

  const state = {
    lang: localStorage.getItem(LANG_KEY) || "en",
    tab: "movements",
    movements: [],
    sort: { key: "date", dir: "desc" },
    showForm: false,
    flashId: null,
  };
  const ui = { search: "", movFilter: "ALL", vesselFilter: "ALL" };

  function loadMovements() {
    try {
      const raw = localStorage.getItem(STORE_KEY);
      state.movements = raw ? JSON.parse(raw) : [];
    } catch (e) {
      state.movements = [];
    }
  }
  function saveMovements() {
    try { localStorage.setItem(STORE_KEY, JSON.stringify(state.movements)); } catch (e) {}
  }
  function saveLang() {
    try { localStorage.setItem(LANG_KEY, state.lang); } catch (e) {}
  }

  function t() { return STRINGS[state.lang]; }

  function computeVessels() {
    return Array.from(new Set(state.movements.map((m) => m.vessel).filter(Boolean))).sort();
  }

  function computeFiltered() {
    let rows = state.movements.filter((m) => {
      if (ui.search && !m.containerNo.toLowerCase().includes(ui.search.toLowerCase())) return false;
      if (ui.movFilter !== "ALL" && m.movement !== ui.movFilter) return false;
      if (ui.vesselFilter !== "ALL" && m.vessel !== ui.vesselFilter) return false;
      return true;
    });
    rows.sort((a, b) => {
      let av = a[state.sort.key], bv = b[state.sort.key];
      if (state.sort.key === "date") { av = new Date(av).getTime(); bv = new Date(bv).getTime(); }
      else { av = (av || "").toString().toLowerCase(); bv = (bv || "").toString().toLowerCase(); }
      if (av < bv) return state.sort.dir === "asc" ? -1 : 1;
      if (av > bv) return state.sort.dir === "asc" ? 1 : -1;
      return 0;
    });
    return rows;
  }

  function computeOverview() {
    const byContainer = {};
    state.movements.forEach((m) => {
      const prev = byContainer[m.containerNo];
      if (!prev || new Date(m.date) >= new Date(prev.date)) byContainer[m.containerNo] = m;
    });
    const inYard = Object.values(byContainer).filter((m) => m.movement === "IN");
    const locCounts = {};
    inYard.forEach((m) => {
      const key = m.location || "—";
      locCounts[key] = (locCounts[key] || 0) + 1;
    });
    const vesselStats = {};
    state.movements.forEach((m) => {
      const key = m.vessel || "—";
      if (!vesselStats[key]) vesselStats[key] = { vessel: key, in: 0, out: 0 };
      if (m.movement === "IN") vesselStats[key].in += 1; else vesselStats[key].out += 1;
    });
    Object.values(vesselStats).forEach((v) => {
      v.inYard = Object.values(byContainer).filter(
        (m) => (m.vessel || "—") === v.vessel && m.movement === "IN"
      ).length;
    });
    const byLocation = Object.entries(locCounts).map(([location, count]) => ({ location, count })).sort((a, b) => b.count - a.count);
    return {
      total: state.movements.length,
      inYardCount: inYard.length,
      distinctVessels: computeVessels().length,
      byLocation,
      byVessel: Object.values(vesselStats).sort((a, b) => b.in - a.in),
      maxLoc: byLocation.reduce((m, r) => Math.max(m, r.count), 0),
    };
  }

  // ---------------------------------------------------------------
  // CSV helpers (no external dependency, so it works offline)
  // ---------------------------------------------------------------
  function splitCsvLine(line) {
    const result = []; let cur = ""; let inQuotes = false;
    for (let i = 0; i < line.length; i++) {
      const c = line[i];
      if (inQuotes) {
        if (c === '"') { if (line[i + 1] === '"') { cur += '"'; i++; } else inQuotes = false; }
        else cur += c;
      } else {
        if (c === '"') inQuotes = true;
        else if (c === ",") { result.push(cur); cur = ""; }
        else cur += c;
      }
    }
    result.push(cur);
    return result;
  }
  function parseCsv(text) {
    const lines = text.split(/\r\n|\n/).filter((l) => l.length > 0);
    if (lines.length === 0) return [];
    const headers = splitCsvLine(lines[0]).map((h) => h.trim());
    const rows = [];
    for (let i = 1; i < lines.length; i++) {
      const cells = splitCsvLine(lines[i]);
      const obj = {};
      headers.forEach((h, idx) => (obj[h] = (cells[idx] || "").trim()));
      rows.push(obj);
    }
    return rows;
  }
  function csvEscape(v) {
    v = v == null ? "" : String(v);
    return /[",\n]/.test(v) ? '"' + v.replace(/"/g, '""') + '"' : v;
  }
  function exportCsv() {
    const headers = ["containerNo", "sizeType", "movement", "date", "vessel", "location", "status", "remarks"];
    const lines = [headers.join(",")];
    state.movements.forEach((m) => lines.push(headers.map((h) => csvEscape(m[h])).join(",")));
    const blob = new Blob([lines.join("\r\n")], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url; a.download = "container-movements.csv"; a.click();
    URL.revokeObjectURL(url);
  }
  function handleImportFile(file) {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      const rows = parseCsv(String(reader.result))
        .filter((r) => r.containerNo)
        .map((r) => {
          const mv = (r.movement || "").toString().trim().toUpperCase();
          return {
            id: uid(),
            containerNo: r.containerNo.trim().toUpperCase(),
            sizeType: r.sizeType || "20GP",
            movement: mv.indexOf("IN") === 0 ? "IN" : mv.indexOf("OUT") === 0 ? "OUT" : "IN",
            date: r.date || todayStr(),
            vessel: r.vessel || "",
            location: r.location || "",
            status: r.status || "Loaded",
            remarks: r.remarks || "",
          };
        });
      state.movements = rows.concat(state.movements);
      saveMovements();
      renderShell();
    };
    reader.readAsText(file);
  }

  // ---------------------------------------------------------------
  // Actions
  // ---------------------------------------------------------------
  function toggleSort(key) {
    state.sort = state.sort.key === key ? { key, dir: state.sort.dir === "asc" ? "desc" : "asc" } : { key, dir: "asc" };
    renderTableSection();
  }
  function removeRow(id) {
    state.movements = state.movements.filter((r) => r.id !== id);
    saveMovements();
    renderShell();
  }
  function submitForm() {
    const val = (id) => (document.getElementById(id) || {}).value || "";
    const containerNo = val("f-containerNo").trim();
    const movement = val("f-movement");
    const date = val("f-date");
    const errEl = document.getElementById("form-error");
    if (!containerNo || !movement || !date) {
      if (errEl) errEl.textContent = t().required;
      return;
    }
    const row = {
      id: uid(), containerNo: containerNo.toUpperCase(), sizeType: val("f-sizeType"),
      movement, date, vessel: val("f-vessel").trim(), location: val("f-location").trim(),
      status: val("f-status"), remarks: val("f-remarks").trim(),
    };
    state.movements = [row].concat(state.movements);
    saveMovements();
    state.flashId = row.id;
    state.showForm = false;
    renderShell();
    setTimeout(() => { state.flashId = null; renderTableSection(); }, 1300);
  }

  // ---------------------------------------------------------------
  // Rendering
  // ---------------------------------------------------------------
  const appEl = document.getElementById("app");

  function sortIndicator(key) {
    if (state.sort.key !== key) return "";
    return state.sort.dir === "asc" ? ICONS.chevUp : ICONS.chevDown;
  }

  function rowHtml(m) {
    const tr = t();
    const badgeIcon = m.movement === "IN" ? ICONS.arrowIn : ICONS.arrowOut;
    const badgeCls = m.movement === "IN" ? "in" : "out";
    const badgeText = m.movement === "IN" ? tr.inbound : tr.outbound;
    const statusText = m.status === "Loaded" ? tr.loaded : m.status === "Empty" ? tr.empty : m.status;
    return `<tr class="${state.flashId === m.id ? "flash" : ""}">
      <td class="mono">${escapeHtml(m.containerNo)}</td>
      <td>${escapeHtml(m.sizeType)}</td>
      <td><span class="badge ${badgeCls}">${badgeIcon}${badgeText}</span></td>
      <td>${escapeHtml(m.date)}</td>
      <td>${escapeHtml(m.vessel)}</td>
      <td>${escapeHtml(m.location)}</td>
      <td>${escapeHtml(statusText)}</td>
      <td style="color:var(--muted)">${escapeHtml(m.remarks)}</td>
      <td><button class="del-btn" data-del="${m.id}">${ICONS.trash}</button></td>
    </tr>`;
  }

  function escapeHtml(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  }

  function renderTableSection() {
    const tr = t();
    const rows = computeFiltered();
    const html = `
      <div class="table-wrap">
        <table>
          <thead><tr>
            <th data-sort="containerNo">${tr.colContainer} ${sortIndicator("containerNo")}</th>
            <th class="nosort">${tr.colType}</th>
            <th class="nosort">${tr.colMovement}</th>
            <th data-sort="date">${tr.colDate} ${sortIndicator("date")}</th>
            <th class="nosort">${tr.colVessel}</th>
            <th class="nosort">${tr.colLocation}</th>
            <th class="nosort">${tr.colStatus}</th>
            <th class="nosort">${tr.colRemarks}</th>
            <th class="nosort"></th>
          </tr></thead>
          <tbody>${rows.length ? rows.map(rowHtml).join("") : `<tr><td colspan="9" class="empty-state">${tr.emptyState}</td></tr>`}</tbody>
        </table>
      </div>
      <div class="csv-hint">${tr.csvHint}</div>`;
    const el = document.getElementById("table-section");
    if (el) el.innerHTML = html;
  }

  function renderOverviewSection() {
    const tr = t();
    const ov = computeOverview();
    const barRows = ov.byLocation.length
      ? ov.byLocation.map((r) => {
          const pct = ov.maxLoc ? Math.max(6, Math.round((r.count / ov.maxLoc) * 100)) : 0;
          return `<div class="bar-row">
            <div class="label">${escapeHtml(r.location)}</div>
            <div class="bar-track"><div class="bar-fill" style="width:${pct}%"></div></div>
            <div class="count">${r.count}</div>
          </div>`;
        }).join("")
      : `<div class="empty-state">${tr.emptyState}</div>`;

    const vesselRows = ov.byVessel.length
      ? `<div class="table-wrap"><table><thead><tr>
          <th class="nosort">${tr.vesselCol}</th><th class="nosort">${tr.inCol}</th>
          <th class="nosort">${tr.outCol}</th><th class="nosort">${tr.inYardCol}</th>
        </tr></thead><tbody>${ov.byVessel.map((v) => `<tr>
          <td>${escapeHtml(v.vessel)}</td>
          <td><span class="badge in">${v.in}</span></td>
          <td><span class="badge out">${v.out}</span></td>
          <td>${v.inYard}</td>
        </tr>`).join("")}</tbody></table></div>`
      : `<div class="empty-state">${tr.emptyState}</div>`;

    const html = `
      <div class="cards">
        <div class="card"><div class="n">${ov.total}</div><div class="l">${tr.totalMovements}</div></div>
        <div class="card"><div class="n">${ov.inYardCount}</div><div class="l">${tr.inYardNow}</div></div>
        <div class="card"><div class="n">${ov.distinctVessels}</div><div class="l">${tr.distinctVessels}</div></div>
      </div>
      <div class="panel"><h3>${tr.byLocation}</h3>${barRows}</div>
      <div class="panel"><h3>${tr.byVessel}</h3>${vesselRows}</div>`;
    const el = document.getElementById("overview-section");
    if (el) el.innerHTML = html;
  }

  function renderMovementsTab(tr, vessels) {
    const vesselOptions = vessels.map((v) => `<option value="${escapeHtml(v)}" ${ui.vesselFilter === v ? "selected" : ""}>${escapeHtml(v)}</option>`).join("");
    const formHtml = state.showForm ? `
      <div class="form-panel">
        <div class="field"><label>${tr.fContainerNo}</label><input class="input" id="f-containerNo" placeholder="MSCU1234567" /></div>
        <div class="field"><label>${tr.fType}</label><select id="f-sizeType">${SIZE_TYPES.map((s) => `<option value="${s}">${s}</option>`).join("")}</select></div>
        <div class="field"><label>${tr.fMovement}</label><select id="f-movement"><option value="IN">${tr.inbound}</option><option value="OUT">${tr.outbound}</option></select></div>
        <div class="field"><label>${tr.fDate}</label><input type="date" class="input" id="f-date" value="${todayStr()}" /></div>
        <div class="field"><label>${tr.fVessel}</label><input class="input" id="f-vessel" /></div>
        <div class="field"><label>${tr.fLocation}</label><input class="input" id="f-location" /></div>
        <div class="field"><label>${tr.fStatus}</label><select id="f-status"><option value="Loaded">${tr.loaded}</option><option value="Empty">${tr.empty}</option></select></div>
        <div class="field"><label>${tr.fRemarks}</label><input class="input" id="f-remarks" /></div>
        <div class="form-actions">
          <button class="btn primary" data-action="save-form">${tr.save}</button>
          <button class="btn" data-action="cancel-form">${tr.cancel}</button>
          <span class="error-text" id="form-error"></span>
        </div>
      </div>` : "";

    return `
      <div class="section-title">${tr.navMovements}</div>
      <div class="toolbar">
        <div class="search-wrap">${ICONS.search}<input class="input" id="search-input" placeholder="${tr.search}" value="${escapeHtml(ui.search)}" /></div>
        <select id="mov-filter">
          <option value="ALL" ${ui.movFilter === "ALL" ? "selected" : ""}>${tr.filterMovement}: ${tr.all}</option>
          <option value="IN" ${ui.movFilter === "IN" ? "selected" : ""}>${tr.inbound}</option>
          <option value="OUT" ${ui.movFilter === "OUT" ? "selected" : ""}>${tr.outbound}</option>
        </select>
        <select id="vessel-filter">
          <option value="ALL" ${ui.vesselFilter === "ALL" ? "selected" : ""}>${tr.filterVessel}: ${tr.all}</option>
          ${vesselOptions}
        </select>
        <div class="spacer"></div>
        <button class="btn" data-action="import">${ICONS.upload}${tr.importCsv}</button>
        <button class="btn" data-action="export">${ICONS.download}${tr.exportCsv}</button>
        <button class="btn primary" data-action="toggle-form">${ICONS.plus}${tr.addMovement}</button>
      </div>
      ${formHtml}
      <div id="table-section"></div>`;
  }

  function renderOverviewTab(tr) {
    return `<div class="section-title">${tr.overviewTitle}</div><div id="overview-section"></div>`;
  }

  function renderShell() {
    const tr = t();
    const vessels = computeVessels();
    const navItems = [
      { key: "movements", icon: ICONS.list, label: tr.navMovements },
      { key: "overview", icon: ICONS.grid, label: tr.navOverview },
    ];
    const sidebarNav = navItems.map((n) => `<button data-nav="${n.key}" class="${state.tab === n.key ? "active" : ""}">${n.icon}${n.label}</button>`).join("");
    const bottomNav = navItems.map((n) => `<button data-nav="${n.key}" class="${state.tab === n.key ? "active" : ""}">${n.icon}<span>${n.label}</span></button>`).join("");
    const langSelect = `<div style="display:flex;align-items:center;gap:6px;">${ICONS.globe}
      <select id="lang-select">
        <option value="en" ${state.lang === "en" ? "selected" : ""}>English</option>
        <option value="zh" ${state.lang === "zh" ? "selected" : ""}>中文</option>
        <option value="ms" ${state.lang === "ms" ? "selected" : ""}>Bahasa Melayu</option>
      </select></div>`;

    appEl.innerHTML = `
      <div class="topbar">
        <div class="brand"><div class="icon-box"></div><div><div class="brand-name">${tr.appName}</div><div class="tagline">${tr.tagline}</div></div></div>
        <button class="install-btn" data-action="install">${ICONS.download}<span>${tr.install}</span></button>
        ${langSelect}
      </div>
      <div class="sidebar">
        <div class="brand"><div class="icon-box"></div><div><div class="brand-name">${tr.appName}</div><div class="tagline">${tr.tagline}</div></div></div>
        <div class="sidebar-nav">${sidebarNav}</div>
        <div class="sidebar-bottom">
          <button class="install-btn" data-action="install">${ICONS.download}<span>${tr.install}</span></button>
          ${langSelect}
        </div>
      </div>
      <main>${state.tab === "movements" ? renderMovementsTab(tr, vessels) : renderOverviewTab(tr)}</main>
      <div class="bottom-nav">${bottomNav}</div>
      <input type="file" id="csv-file" accept=".csv" style="display:none" />`;

    if (deferredPrompt) document.querySelectorAll('[data-action="install"]').forEach((b) => b.classList.add("show"));
    if (state.tab === "movements") renderTableSection();
    if (state.tab === "overview") renderOverviewSection();
  }

  // ---------------------------------------------------------------
  // Event delegation (survives re-renders since listeners live on #app)
  // ---------------------------------------------------------------
  appEl.addEventListener("click", (e) => {
    const navBtn = e.target.closest("[data-nav]");
    if (navBtn) { state.tab = navBtn.dataset.nav; renderShell(); return; }

    const delBtn = e.target.closest("[data-del]");
    if (delBtn) { removeRow(delBtn.dataset.del); return; }

    const sortTh = e.target.closest("[data-sort]");
    if (sortTh) { toggleSort(sortTh.dataset.sort); return; }

    const action = e.target.closest("[data-action]");
    if (action) {
      const a = action.dataset.action;
      if (a === "toggle-form") { state.showForm = !state.showForm; renderShell(); }
      else if (a === "cancel-form") { state.showForm = false; renderShell(); }
      else if (a === "save-form") { submitForm(); }
      else if (a === "import") { const f = document.getElementById("csv-file"); if (f) f.click(); }
      else if (a === "export") { exportCsv(); }
      else if (a === "install") { triggerInstall(); }
    }
  });

  appEl.addEventListener("input", (e) => {
    if (e.target.id === "search-input") { ui.search = e.target.value; renderTableSection(); }
  });

  appEl.addEventListener("change", (e) => {
    if (e.target.id === "mov-filter") { ui.movFilter = e.target.value; renderTableSection(); }
    else if (e.target.id === "vessel-filter") { ui.vesselFilter = e.target.value; renderTableSection(); }
    else if (e.target.id === "lang-select") { state.lang = e.target.value; saveLang(); renderShell(); }
    else if (e.target.id === "csv-file") { handleImportFile(e.target.files[0]); e.target.value = ""; }
  });

  // ---------------------------------------------------------------
  // PWA: install prompt + service worker registration
  // ---------------------------------------------------------------
  let deferredPrompt = null;
  window.addEventListener("beforeinstallprompt", (e) => {
    e.preventDefault();
    deferredPrompt = e;
    document.querySelectorAll('[data-action="install"]').forEach((b) => b.classList.add("show"));
  });
  function triggerInstall() {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    deferredPrompt.userChoice.finally(() => {
      deferredPrompt = null;
      document.querySelectorAll('[data-action="install"]').forEach((b) => b.classList.remove("show"));
    });
  }
  window.addEventListener("appinstalled", () => { deferredPrompt = null; });

  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker.register("service-worker.js").catch(() => {});
    });
  }

  // ---------------------------------------------------------------
  // Init
  // ---------------------------------------------------------------
  loadMovements();
  renderShell();
})();
