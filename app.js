(function () {
  "use strict";

  // ---------------------------------------------------------------
  // i18n
  // ---------------------------------------------------------------
  const STRINGS = {
    en: {
      appName: "Container Yard Log", tagline: "Inbound & outbound container movements",
      navMovements: "Movements", navReservations: "Reservations", navOverview: "Yard Overview",
      search: "Search container no.", filterMovement: "Movement", all: "All",
      inbound: "Inbound", outbound: "Outbound", filterVessel: "Vessel / Platform",
      addMovement: "Add movement", importCsv: "Import CSV", exportCsv: "Export CSV", exportExcel: "Export Excel",
      colContainer: "Container No.", colType: "Type", colMovement: "Movement", colDate: "Date",
      colVessel: "Vessel / Platform", colLocation: "Location", colStatus: "Status", colCargo: "Cargo", colRemarks: "Remarks",
      fContainerNo: "Container number", fType: "Size / type", fMovement: "Movement",
      fDate: "Date", fVessel: "Vessel / platform", fLocation: "Yard / location",
      fStatus: "Status", fRemarks: "Remarks (optional)", save: "Save movement", cancel: "Cancel",
      loaded: "Loaded", empty: "Empty",
      emptyState: "No movements yet. Add one, or import a CSV to get started.",
      overviewTitle: "Yard Overview", totalMovements: "Total movements",
      inYardNow: "Containers in yard now", distinctVessels: "Vessels / platforms", activeReservations: "Active reservations",
      byLocation: "In yard, by location", byVessel: "By vessel / platform",
      vesselCol: "Vessel / platform", inCol: "In", outCol: "Out", inYardCol: "In yard",
      csvHint: "Expects columns: containerNo, sizeType, movement, date, vessel, location, status, basketLarge, basketSmall, basketThailand, roBottles, remarks",
      required: "Container number, movement and date are required.", install: "Install app",
      cargoTitle: "Backload contents (optional)", basketLarge: "Basket (large)", basketSmall: "Basket (small)",
      basketThailand: "Basket (Thailand)", roBottles: "RO bottles",
      resReserveDate: "Reserved date", resPlannedDate: "Planned load-out date", resNotes: "Notes (optional)",
      resStatus: "Status", resAdd: "Add reservation", resRequired: "Container number, vessel and planned date are required.",
      resStatusReserved: "Reserved", resStatusLoadedOut: "Loaded out", resStatusCompleted: "Completed",
      markLoadedOut: "Mark loaded out", recordBackload: "Record backload",
      resEmptyState: "No reservations yet. Reserve a container in the yard for an upcoming vessel.",
    },
    zh: {
      appName: "货柜场进出记录", tagline: "货柜进场与出场动态",
      navMovements: "进出记录", navReservations: "预留记录", navOverview: "堆场总览",
      search: "搜索货柜号", filterMovement: "进出类型", all: "全部",
      inbound: "进场", outbound: "出场", filterVessel: "船只 / 平台",
      addMovement: "新增记录", importCsv: "导入 CSV", exportCsv: "导出 CSV", exportExcel: "导出 Excel",
      colContainer: "货柜号", colType: "尺寸/类型", colMovement: "类型", colDate: "日期",
      colVessel: "船只 / 平台", colLocation: "堆放位置", colStatus: "状态", colCargo: "货物", colRemarks: "备注",
      fContainerNo: "货柜号", fType: "尺寸 / 类型", fMovement: "进出类型",
      fDate: "日期", fVessel: "船只 / 平台", fLocation: "堆场 / 位置",
      fStatus: "状态", fRemarks: "备注（可选）", save: "保存记录", cancel: "取消",
      loaded: "重柜", empty: "空柜",
      emptyState: "暂无记录。新增一条，或导入 CSV 快速开始。",
      overviewTitle: "堆场总览", totalMovements: "总记录数",
      inYardNow: "目前在场货柜数", distinctVessels: "船只 / 平台数量", activeReservations: "进行中的预留",
      byLocation: "在场货柜（按位置）", byVessel: "按船只 / 平台",
      vesselCol: "船只 / 平台", inCol: "进场", outCol: "出场", inYardCol: "在场",
      csvHint: "需包含列：containerNo, sizeType, movement, date, vessel, location, status, basketLarge, basketSmall, basketThailand, roBottles, remarks",
      required: "货柜号、进出类型与日期为必填项。", install: "安装到主屏幕",
      cargoTitle: "回场货物（可选）", basketLarge: "大篮筐", basketSmall: "小篮筐",
      basketThailand: "泰国篮筐", roBottles: "RO 瓶",
      resReserveDate: "预留日期", resPlannedDate: "预计装柜日期", resNotes: "备注（可选）",
      resStatus: "状态", resAdd: "新增预留", resRequired: "货柜号、船只与预计装柜日期为必填项。",
      resStatusReserved: "已预留", resStatusLoadedOut: "已装出", resStatusCompleted: "已完成",
      markLoadedOut: "标记为已装出", recordBackload: "记录回场",
      resEmptyState: "暂无预留记录。为即将到来的船只预留在场货柜。",
    },
    ms: {
      appName: "Log Pergerakan Kontena", tagline: "Pergerakan kontena masuk & keluar",
      navMovements: "Pergerakan", navReservations: "Tempahan", navOverview: "Gambaran Padang",
      search: "Cari no. kontena", filterMovement: "Pergerakan", all: "Semua",
      inbound: "Masuk", outbound: "Keluar", filterVessel: "Kapal / Platform",
      addMovement: "Tambah pergerakan", importCsv: "Import CSV", exportCsv: "Eksport CSV", exportExcel: "Eksport Excel",
      colContainer: "No. Kontena", colType: "Saiz / Jenis", colMovement: "Pergerakan", colDate: "Tarikh",
      colVessel: "Kapal / Platform", colLocation: "Lokasi", colStatus: "Status", colCargo: "Kargo", colRemarks: "Catatan",
      fContainerNo: "Nombor kontena", fType: "Saiz / jenis", fMovement: "Pergerakan",
      fDate: "Tarikh", fVessel: "Kapal / platform", fLocation: "Padang / lokasi",
      fStatus: "Status", fRemarks: "Catatan (pilihan)", save: "Simpan pergerakan", cancel: "Batal",
      loaded: "Penuh", empty: "Kosong",
      emptyState: "Belum ada rekod. Tambah satu, atau import CSV untuk mula.",
      overviewTitle: "Gambaran Padang", totalMovements: "Jumlah pergerakan",
      inYardNow: "Kontena di padang sekarang", distinctVessels: "Kapal / platform", activeReservations: "Tempahan aktif",
      byLocation: "Di padang, ikut lokasi", byVessel: "Ikut kapal / platform",
      vesselCol: "Kapal / platform", inCol: "Masuk", outCol: "Keluar", inYardCol: "Di padang",
      csvHint: "Perlukan lajur: containerNo, sizeType, movement, date, vessel, location, status, basketLarge, basketSmall, basketThailand, roBottles, remarks",
      required: "Nombor kontena, pergerakan dan tarikh diperlukan.", install: "Pasang aplikasi",
      cargoTitle: "Kandungan muat balik (pilihan)", basketLarge: "Bakul besar", basketSmall: "Bakul kecil",
      basketThailand: "Bakul Thailand", roBottles: "Botol RO",
      resReserveDate: "Tarikh tempahan", resPlannedDate: "Tarikh dijangka dimuat keluar", resNotes: "Catatan (pilihan)",
      resStatus: "Status", resAdd: "Tambah tempahan", resRequired: "Nombor kontena, kapal dan tarikh dijangka diperlukan.",
      resStatusReserved: "Ditempah", resStatusLoadedOut: "Sudah dimuat keluar", resStatusCompleted: "Selesai",
      markLoadedOut: "Tandakan dimuat keluar", recordBackload: "Rekod muat balik",
      resEmptyState: "Belum ada tempahan. Tempah kontena di padang untuk kapal akan datang.",
    },
  };

  const SIZE_TYPES = ["20GP", "40GP", "40HC", "20RF", "40RF", "Other"];
  const CARGO_KEYS = ["basketLarge", "basketSmall", "basketThailand", "roBottles"];
  const CARGO_ABBR = { basketLarge: "BL", basketSmall: "BS", basketThailand: "BT", roBottles: "RO" };

  const ICONS = {
    list: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"/></svg>',
    grid: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>',
    bookmark: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z"/></svg>',
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
  const MOV_KEY = "cyl-movements";
  const RES_KEY = "cyl-reservations";
  const LANG_KEY = "cyl-lang";

  const uid = () => Math.random().toString(36).slice(2, 10);
  const todayStr = () => new Date().toISOString().slice(0, 10);

  const state = {
    lang: localStorage.getItem(LANG_KEY) || "en",
    tab: "movements",
    movements: [],
    reservations: [],
    sort: { key: "date", dir: "desc" },
    showForm: false,
    showResForm: false,
    backloadingId: null,
    flashId: null,
  };
  const ui = { search: "", movFilter: "ALL", vesselFilter: "ALL" };

  function loadData() {
    try { state.movements = JSON.parse(localStorage.getItem(MOV_KEY) || "[]"); } catch (e) { state.movements = []; }
    try { state.reservations = JSON.parse(localStorage.getItem(RES_KEY) || "[]"); } catch (e) { state.reservations = []; }
  }
  function saveMovements() { try { localStorage.setItem(MOV_KEY, JSON.stringify(state.movements)); } catch (e) {} }
  function saveReservations() { try { localStorage.setItem(RES_KEY, JSON.stringify(state.reservations)); } catch (e) {} }
  function saveLang() { try { localStorage.setItem(LANG_KEY, state.lang); } catch (e) {} }

  function t() { return STRINGS[state.lang]; }

  function emptyCargo() { return { basketLarge: 0, basketSmall: 0, basketThailand: 0, roBottles: 0 }; }

  function latestByContainerMap() {
    const byContainer = {};
    state.movements.forEach((m) => {
      const prev = byContainer[m.containerNo];
      if (!prev || new Date(m.date) >= new Date(prev.date)) byContainer[m.containerNo] = m;
    });
    return byContainer;
  }
  function inYardContainerNos() {
    return Object.values(latestByContainerMap()).filter((m) => m.movement === "IN").map((m) => m.containerNo).sort();
  }
  function lastKnownSizeType(containerNo) {
    const rows = state.movements.filter((m) => m.containerNo === containerNo).sort((a, b) => new Date(b.date) - new Date(a.date));
    return rows.length ? rows[0].sizeType : "20GP";
  }
  function lastKnownLocation(containerNo) {
    const rows = state.movements.filter((m) => m.containerNo === containerNo).sort((a, b) => new Date(b.date) - new Date(a.date));
    return rows.length ? rows[0].location : "";
  }

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
    const byContainer = latestByContainerMap();
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
      v.inYard = Object.values(byContainer).filter((m) => (m.vessel || "—") === v.vessel && m.movement === "IN").length;
    });
    const byLocation = Object.entries(locCounts).map(([location, count]) => ({ location, count })).sort((a, b) => b.count - a.count);
    return {
      total: state.movements.length,
      inYardCount: inYard.length,
      distinctVessels: computeVessels().length,
      activeReservations: state.reservations.filter((r) => r.status !== "COMPLETED").length,
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
    const headers = ["containerNo", "sizeType", "movement", "date", "vessel", "location", "status", "basketLarge", "basketSmall", "basketThailand", "roBottles", "remarks"];
    const lines = [headers.join(",")];
    state.movements.forEach((m) => {
      const c = m.cargo || emptyCargo();
      lines.push([m.containerNo, m.sizeType, m.movement, m.date, m.vessel, m.location, m.status, c.basketLarge || 0, c.basketSmall || 0, c.basketThailand || 0, c.roBottles || 0, m.remarks].map(csvEscape).join(","));
    });
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
          const num = (v) => { const n = parseInt(v, 10); return isNaN(n) ? 0 : n; };
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
            cargo: { basketLarge: num(r.basketLarge), basketSmall: num(r.basketSmall), basketThailand: num(r.basketThailand), roBottles: num(r.roBottles) },
          };
        });
      state.movements = rows.concat(state.movements);
      saveMovements();
      renderShell();
    };
    reader.readAsText(file);
  }

  function exportExcel() {
    if (typeof XLSX === "undefined") {
      alert("Excel library hasn't loaded (needs an internet connection at least once). Try again when online, or use Export CSV instead.");
      return;
    }
    const movRows = state.movements.map((m) => {
      const c = m.cargo || emptyCargo();
      return {
        "Container No": m.containerNo, "Type": m.sizeType, "Movement": m.movement, "Date": m.date,
        "Vessel/Platform": m.vessel, "Location": m.location, "Status": m.status,
        "Basket Large": c.basketLarge || "", "Basket Small": c.basketSmall || "",
        "Basket Thailand": c.basketThailand || "", "RO Bottles": c.roBottles || "",
        "Remarks": m.remarks,
      };
    });
    const resRows = state.reservations.map((r) => ({
      "Container No": r.containerNo, "Vessel/Platform": r.vessel, "Reserved Date": r.reserveDate,
      "Planned Load Date": r.plannedDate, "Status": r.status, "Notes": r.notes,
    }));
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(movRows), "Movements");
    XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(resRows.length ? resRows : [{ "Container No": "" }]), "Reservations");
    XLSX.writeFile(wb, "container-yard-log.xlsx");
  }

  // ---------------------------------------------------------------
  // Actions — movements
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
  function numVal(id) { const n = parseInt((document.getElementById(id) || {}).value, 10); return isNaN(n) ? 0 : n; }
  function strVal(id) { return (document.getElementById(id) || {}).value || ""; }

  function submitForm() {
    const containerNo = strVal("f-containerNo").trim();
    const movement = strVal("f-movement");
    const date = strVal("f-date");
    const errEl = document.getElementById("form-error");
    if (!containerNo || !movement || !date) {
      if (errEl) errEl.textContent = t().required;
      return;
    }
    const row = {
      id: uid(), containerNo: containerNo.toUpperCase(), sizeType: strVal("f-sizeType"),
      movement, date, vessel: strVal("f-vessel").trim(), location: strVal("f-location").trim(),
      status: strVal("f-status"), remarks: strVal("f-remarks").trim(),
      cargo: {
        basketLarge: numVal("f-basketLarge"), basketSmall: numVal("f-basketSmall"),
        basketThailand: numVal("f-basketThailand"), roBottles: numVal("f-roBottles"),
      },
    };
    state.movements = [row].concat(state.movements);
    saveMovements();
    state.flashId = row.id;
    state.showForm = false;
    renderShell();
    setTimeout(() => { state.flashId = null; renderTableSection(); }, 1300);
  }

  // ---------------------------------------------------------------
  // Actions — reservations
  // ---------------------------------------------------------------
  function submitReservation() {
    const containerNo = strVal("r-containerNo").trim();
    const vessel = strVal("r-vessel").trim();
    const plannedDate = strVal("r-plannedDate");
    const errEl = document.getElementById("res-form-error");
    if (!containerNo || !vessel || !plannedDate) {
      if (errEl) errEl.textContent = t().resRequired;
      return;
    }
    const row = {
      id: uid(), containerNo: containerNo.toUpperCase(), vessel,
      reserveDate: strVal("r-reserveDate") || todayStr(), plannedDate,
      notes: strVal("r-notes").trim(), status: "RESERVED",
    };
    state.reservations = [row].concat(state.reservations);
    saveReservations();
    state.showResForm = false;
    renderShell();
  }
  function removeReservation(id) {
    state.reservations = state.reservations.filter((r) => r.id !== id);
    saveReservations();
    renderReservationsSection();
  }
  function markLoadedOut(id) {
    const r = state.reservations.find((x) => x.id === id);
    if (!r) return;
    const mv = {
      id: uid(), containerNo: r.containerNo, sizeType: lastKnownSizeType(r.containerNo),
      movement: "OUT", date: todayStr(), vessel: r.vessel, location: lastKnownLocation(r.containerNo),
      status: "Loaded", remarks: "Reservation loadout", cargo: emptyCargo(),
    };
    state.movements = [mv].concat(state.movements);
    saveMovements();
    r.status = "LOADED_OUT";
    saveReservations();
    renderShell();
  }
  function submitBackload(id) {
    const r = state.reservations.find((x) => x.id === id);
    if (!r) return;
    const date = strVal("b-date-" + id) || todayStr();
    const location = strVal("b-location-" + id).trim();
    const remarks = strVal("b-remarks-" + id).trim();
    const cargo = {
      basketLarge: numVal("b-bl-" + id), basketSmall: numVal("b-bs-" + id),
      basketThailand: numVal("b-bt-" + id), roBottles: numVal("b-ro-" + id),
    };
    const mv = {
      id: uid(), containerNo: r.containerNo, sizeType: lastKnownSizeType(r.containerNo),
      movement: "IN", date, vessel: r.vessel, location, status: "Loaded", remarks, cargo,
    };
    state.movements = [mv].concat(state.movements);
    saveMovements();
    r.status = "COMPLETED";
    saveReservations();
    state.backloadingId = null;
    renderShell();
  }

  // ---------------------------------------------------------------
  // Rendering
  // ---------------------------------------------------------------
  const appEl = document.getElementById("app");

  function escapeHtml(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  }
  function sortIndicator(key) {
    if (state.sort.key !== key) return "";
    return state.sort.dir === "asc" ? ICONS.chevUp : ICONS.chevDown;
  }
  function cargoSummary(cargo) {
    if (!cargo) return "";
    return CARGO_KEYS.filter((k) => cargo[k]).map((k) => CARGO_ABBR[k] + " " + cargo[k]).join(" · ");
  }
  function cargoTitle(cargo, tr) {
    if (!cargo) return "";
    const labels = { basketLarge: tr.basketLarge, basketSmall: tr.basketSmall, basketThailand: tr.basketThailand, roBottles: tr.roBottles };
    return CARGO_KEYS.filter((k) => cargo[k]).map((k) => labels[k] + ": " + cargo[k]).join(", ");
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
      <td title="${escapeHtml(cargoTitle(m.cargo, tr))}">${escapeHtml(cargoSummary(m.cargo))}</td>
      <td style="color:var(--muted)">${escapeHtml(m.remarks)}</td>
      <td><button class="del-btn" data-del="${m.id}">${ICONS.trash}</button></td>
    </tr>`;
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
            <th class="nosort">${tr.colCargo}</th>
            <th class="nosort">${tr.colRemarks}</th>
            <th class="nosort"></th>
          </tr></thead>
          <tbody>${rows.length ? rows.map(rowHtml).join("") : `<tr><td colspan="10" class="empty-state">${tr.emptyState}</td></tr>`}</tbody>
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
        <div class="card"><div class="n">${ov.activeReservations}</div><div class="l">${tr.activeReservations}</div></div>
      </div>
      <div class="panel"><h3>${tr.byLocation}</h3>${barRows}</div>
      <div class="panel"><h3>${tr.byVessel}</h3>${vesselRows}</div>`;
    const el = document.getElementById("overview-section");
    if (el) el.innerHTML = html;
  }

  function backloadFormRowHtml(r, tr) {
    return `<tr class="backload-row"><td colspan="7">
      <div class="form-panel" style="grid-template-columns:repeat(3,1fr);">
        <div class="field"><label>${tr.fDate}</label><input type="date" class="input" id="b-date-${r.id}" value="${todayStr()}" /></div>
        <div class="field"><label>${tr.fLocation}</label><input class="input" id="b-location-${r.id}" value="${escapeHtml(lastKnownLocation(r.containerNo))}" /></div>
        <div class="field"><label>${tr.fRemarks}</label><input class="input" id="b-remarks-${r.id}" /></div>
        <div class="field"><label>${tr.basketLarge}</label><input type="number" min="0" class="input" id="b-bl-${r.id}" value="0" /></div>
        <div class="field"><label>${tr.basketSmall}</label><input type="number" min="0" class="input" id="b-bs-${r.id}" value="0" /></div>
        <div class="field"><label>${tr.basketThailand}</label><input type="number" min="0" class="input" id="b-bt-${r.id}" value="0" /></div>
        <div class="field"><label>${tr.roBottles}</label><input type="number" min="0" class="input" id="b-ro-${r.id}" value="0" /></div>
        <div class="form-actions">
          <button class="btn primary" data-action="save-backload" data-res-id="${r.id}">${tr.recordBackload}</button>
          <button class="btn" data-action="cancel-backload">${tr.cancel}</button>
        </div>
      </div>
    </td></tr>`;
  }

  function reservationRowHtml(r, tr) {
    const statusLabel = r.status === "RESERVED" ? tr.resStatusReserved : r.status === "LOADED_OUT" ? tr.resStatusLoadedOut : tr.resStatusCompleted;
    const statusCls = r.status === "RESERVED" ? "in" : r.status === "LOADED_OUT" ? "out" : "done";
    let actionBtn = "";
    if (r.status === "RESERVED") actionBtn = `<button class="btn" data-res-load="${r.id}">${tr.markLoadedOut}</button>`;
    else if (r.status === "LOADED_OUT") actionBtn = `<button class="btn" data-res-backload="${r.id}">${tr.recordBackload}</button>`;
    let html = `<tr>
      <td class="mono">${escapeHtml(r.containerNo)}</td>
      <td>${escapeHtml(r.vessel)}</td>
      <td>${escapeHtml(r.reserveDate)}</td>
      <td>${escapeHtml(r.plannedDate)}</td>
      <td><span class="badge ${statusCls}">${statusLabel}</span></td>
      <td style="color:var(--muted)">${escapeHtml(r.notes)}</td>
      <td><div style="display:flex;gap:6px;align-items:center;">${actionBtn}<button class="del-btn" data-res-del="${r.id}">${ICONS.trash}</button></div></td>
    </tr>`;
    if (state.backloadingId === r.id) html += backloadFormRowHtml(r, tr);
    return html;
  }

  function renderReservationsSection() {
    const tr = t();
    const rows = state.reservations.slice().sort((a, b) => new Date(b.reserveDate) - new Date(a.reserveDate));
    const html = `<div class="table-wrap"><table><thead><tr>
        <th class="nosort">${tr.colContainer}</th>
        <th class="nosort">${tr.filterVessel}</th>
        <th class="nosort">${tr.resReserveDate}</th>
        <th class="nosort">${tr.resPlannedDate}</th>
        <th class="nosort">${tr.resStatus}</th>
        <th class="nosort">${tr.colRemarks}</th>
        <th class="nosort"></th>
      </tr></thead><tbody>${rows.length ? rows.map((r) => reservationRowHtml(r, tr)).join("") : `<tr><td colspan="7" class="empty-state">${tr.resEmptyState}</td></tr>`}</tbody></table></div>`;
    const el = document.getElementById("reservations-section");
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
        <div class="field" style="grid-column:1/-1"><label style="color:var(--text);font-size:12px;font-weight:600;">${tr.cargoTitle}</label></div>
        <div class="field"><label>${tr.basketLarge}</label><input type="number" min="0" class="input" id="f-basketLarge" value="0" /></div>
        <div class="field"><label>${tr.basketSmall}</label><input type="number" min="0" class="input" id="f-basketSmall" value="0" /></div>
        <div class="field"><label>${tr.basketThailand}</label><input type="number" min="0" class="input" id="f-basketThailand" value="0" /></div>
        <div class="field"><label>${tr.roBottles}</label><input type="number" min="0" class="input" id="f-roBottles" value="0" /></div>
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
        <button class="btn" data-action="export-excel">${ICONS.download}${tr.exportExcel}</button>
        <button class="btn primary" data-action="toggle-form">${ICONS.plus}${tr.addMovement}</button>
      </div>
      ${formHtml}
      <div id="table-section"></div>`;
  }

  function renderReservationsTab(tr) {
    const yardList = inYardContainerNos();
    const formHtml = state.showResForm ? `
      <div class="form-panel">
        <div class="field"><label>${tr.fContainerNo}</label><input class="input" id="r-containerNo" list="yard-containers" placeholder="MSCU1234567" /></div>
        <div class="field"><label>${tr.fVessel}</label><input class="input" id="r-vessel" /></div>
        <div class="field"><label>${tr.resReserveDate}</label><input type="date" class="input" id="r-reserveDate" value="${todayStr()}" /></div>
        <div class="field"><label>${tr.resPlannedDate}</label><input type="date" class="input" id="r-plannedDate" /></div>
        <div class="field" style="grid-column:1/-1"><label>${tr.resNotes}</label><input class="input" id="r-notes" /></div>
        <div class="form-actions">
          <button class="btn primary" data-action="save-res-form">${tr.resAdd}</button>
          <button class="btn" data-action="cancel-res-form">${tr.cancel}</button>
          <span class="error-text" id="res-form-error"></span>
        </div>
        <datalist id="yard-containers">${yardList.map((c) => `<option value="${escapeHtml(c)}"></option>`).join("")}</datalist>
      </div>` : "";

    return `
      <div class="section-title">${tr.navReservations}</div>
      <div class="toolbar">
        <div class="spacer"></div>
        <button class="btn" data-action="export-excel">${ICONS.download}${tr.exportExcel}</button>
        <button class="btn primary" data-action="toggle-res-form">${ICONS.plus}${tr.resAdd}</button>
      </div>
      ${formHtml}
      <div id="reservations-section"></div>`;
  }

  function renderOverviewTab(tr) {
    return `<div class="section-title">${tr.overviewTitle}</div><div id="overview-section"></div>`;
  }

  function renderShell() {
    const tr = t();
    const vessels = computeVessels();
    const navItems = [
      { key: "movements", icon: ICONS.list, label: tr.navMovements },
      { key: "reservations", icon: ICONS.bookmark, label: tr.navReservations },
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

    const mainContent = state.tab === "movements" ? renderMovementsTab(tr, vessels)
      : state.tab === "reservations" ? renderReservationsTab(tr)
      : renderOverviewTab(tr);

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
      <main>${mainContent}</main>
      <div class="bottom-nav">${bottomNav}</div>
      <input type="file" id="csv-file" accept=".csv" style="display:none" />`;

    if (deferredPrompt) document.querySelectorAll('[data-action="install"]').forEach((b) => b.classList.add("show"));
    if (state.tab === "movements") renderTableSection();
    else if (state.tab === "reservations") renderReservationsSection();
    else if (state.tab === "overview") renderOverviewSection();
  }

  // ---------------------------------------------------------------
  // Event delegation (survives re-renders since listeners live on #app)
  // ---------------------------------------------------------------
  appEl.addEventListener("click", (e) => {
    const navBtn = e.target.closest("[data-nav]");
    if (navBtn) { state.tab = navBtn.dataset.nav; state.showForm = false; state.showResForm = false; state.backloadingId = null; renderShell(); return; }

    const delBtn = e.target.closest("[data-del]");
    if (delBtn) { removeRow(delBtn.dataset.del); return; }

    const resLoadBtn = e.target.closest("[data-res-load]");
    if (resLoadBtn) { markLoadedOut(resLoadBtn.dataset.resLoad); return; }

    const resBackloadBtn = e.target.closest("[data-res-backload]");
    if (resBackloadBtn) { const id = resBackloadBtn.dataset.resBackload; state.backloadingId = state.backloadingId === id ? null : id; renderReservationsSection(); return; }

    const resDelBtn = e.target.closest("[data-res-del]");
    if (resDelBtn) { removeReservation(resDelBtn.dataset.resDel); return; }

    const sortTh = e.target.closest("[data-sort]");
    if (sortTh) { toggleSort(sortTh.dataset.sort); return; }

    const action = e.target.closest("[data-action]");
    if (action) {
      const a = action.dataset.action;
      if (a === "toggle-form") { state.showForm = !state.showForm; renderShell(); }
      else if (a === "cancel-form") { state.showForm = false; renderShell(); }
      else if (a === "save-form") { submitForm(); }
      else if (a === "toggle-res-form") { state.showResForm = !state.showResForm; renderShell(); }
      else if (a === "cancel-res-form") { state.showResForm = false; renderShell(); }
      else if (a === "save-res-form") { submitReservation(); }
      else if (a === "save-backload") { submitBackload(action.dataset.resId); }
      else if (a === "cancel-backload") { state.backloadingId = null; renderReservationsSection(); }
      else if (a === "import") { const f = document.getElementById("csv-file"); if (f) f.click(); }
      else if (a === "export") { exportCsv(); }
      else if (a === "export-excel") { exportExcel(); }
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
  loadData();
  renderShell();
})();
