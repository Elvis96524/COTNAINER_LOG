(function () {
  "use strict";

  // ---------------------------------------------------------------
  // i18n
  // ---------------------------------------------------------------
  const STRINGS = {
    en: {
      appName: "Container Yard Log", tagline: "Container registry & status tracking",
      navContainers: "Containers", navOverview: "Yard Overview",
      search: "Search container no.", filterStatus: "Status", all: "All",
      addContainer: "Add container", importCsv: "Import CSV", exportCsv: "Export CSV", exportExcel: "Export Excel",
      colContainer: "Container No.", colDimension: "Dimension", colStatus: "Status", colVessel: "Vessel / Platform",
      colExpiry: "Expiry date", colActions: "",
      fContainerNo: "Container number", fDimension: "Dimension", fTareMass: "Tare mass (kg)",
      fPayload: "Payload (kg)", fMaxGross: "Max gross weight (kg)", fExpiryDate: "Expiry date",
      fVessel: "Vessel / platform", fLocation: "Yard / location", fRemarks: "Remarks (optional)",
      fDate: "Date", save: "Save", cancel: "Cancel",
      statusLoaded: "Loaded", statusBackloaded: "Backloaded", statusReserved: "Reserved",
      emptyState: "No containers yet. Add one, or import a CSV to get started.",
      overviewTitle: "Yard Overview", totalContainers: "Total containers",
      countBackloaded: "Currently in yard", countLoaded: "Currently loaded out", countReserved: "Reserved",
      byLocation: "In yard, by location", byVessel: "By vessel / platform",
      vesselCol: "Vessel / platform", expiringSoon: "Expiring within 60 days", noExpiring: "Nothing expiring soon.",
      csvHint: "Expects columns: containerNo, dimension, tareMass, payload, maxGrossWeight, expiryDate, status, vessel, location, remarks",
      required: "Container number and dimension are required.", install: "Install app",
      cargoTitle: "Backload contents", basketLarge: "Basket (large)", basketSmall: "Basket (small)",
      basketThailand: "Basket (Thailand)", roBottles: "RO bottles",
      detailStatic: "Container specs", saveDetails: "Save details",
      changeStatus: "Change status", confirm: "Confirm",
      vesselRequired: "Vessel name is required.",
      deleteContainer: "Delete container", confirmDelete: "Delete this container and all its history? This cannot be undone.",
      historyTitle: "History", noHistory: "No status changes recorded yet.",
      close: "Close", expired: "Expired", daysLeft: "days left",
      settings: "GitHub sync", ghOwner: "GitHub username / org", ghRepo: "Repository name", ghBranch: "Branch",
      ghPath: "File path in repo", ghToken: "Personal access token", ghSave: "Save & connect",
      ghPull: "Pull from GitHub", ghPush: "Push to GitHub", ghDisconnect: "Disconnect",
      ghNotConfigured: "Not connected. Data is only saved on this device.",
      ghSyncing: "Syncing…", ghSynced: "Synced with GitHub", ghError: "Sync error",
      ghTokenNote: "Stored only in this browser. Use a fine-grained token scoped to just this repository with Contents: Read and write.",
    },
    zh: {
      appName: "货柜场进出记录", tagline: "货柜登记与状态追踪",
      navContainers: "货柜列表", navOverview: "堆场总览",
      search: "搜索货柜号", filterStatus: "状态", all: "全部",
      addContainer: "新增货柜", importCsv: "导入 CSV", exportCsv: "导出 CSV", exportExcel: "导出 Excel",
      colContainer: "货柜号", colDimension: "尺寸", colStatus: "状态", colVessel: "船只 / 平台",
      colExpiry: "到期日", colActions: "",
      fContainerNo: "货柜号", fDimension: "尺寸", fTareMass: "自重 (kg)",
      fPayload: "载重 (kg)", fMaxGross: "最大总重 (kg)", fExpiryDate: "到期日",
      fVessel: "船只 / 平台", fLocation: "堆场 / 位置", fRemarks: "备注（可选）",
      fDate: "日期", save: "保存", cancel: "取消",
      statusLoaded: "已装载", statusBackloaded: "已回场", statusReserved: "已预留",
      emptyState: "暂无货柜。新增一个，或导入 CSV 快速开始。",
      overviewTitle: "堆场总览", totalContainers: "货柜总数",
      countBackloaded: "目前在场", countLoaded: "目前已装出", countReserved: "已预留",
      byLocation: "在场货柜（按位置）", byVessel: "按船只 / 平台",
      vesselCol: "船只 / 平台", expiringSoon: "60 天内到期", noExpiring: "近期无到期货柜。",
      csvHint: "需包含列：containerNo, dimension, tareMass, payload, maxGrossWeight, expiryDate, status, vessel, location, remarks",
      required: "货柜号与尺寸为必填项。", install: "安装到主屏幕",
      cargoTitle: "回场货物", basketLarge: "大篮筐", basketSmall: "小篮筐",
      basketThailand: "泰国篮筐", roBottles: "RO 瓶",
      detailStatic: "货柜规格", saveDetails: "保存资料",
      changeStatus: "更改状态", confirm: "确认",
      vesselRequired: "请填写船名。",
      deleteContainer: "删除货柜", confirmDelete: "删除此货柜及其所有记录？此操作无法撤销。",
      historyTitle: "记录", noHistory: "尚无状态变更记录。",
      close: "关闭", expired: "已过期", daysLeft: "天后到期",
      settings: "GitHub 同步", ghOwner: "GitHub 用户名 / 组织", ghRepo: "仓库名称", ghBranch: "分支",
      ghPath: "仓库内文件路径", ghToken: "个人访问令牌", ghSave: "保存并连接",
      ghPull: "从 GitHub 拉取", ghPush: "推送到 GitHub", ghDisconnect: "断开连接",
      ghNotConfigured: "尚未连接。数据仅保存在此设备上。",
      ghSyncing: "同步中…", ghSynced: "已与 GitHub 同步", ghError: "同步出错",
      ghTokenNote: "仅存储在此浏览器中。请使用仅限此仓库、权限为 Contents: Read and write 的细粒度令牌。",
    },
    ms: {
      appName: "Log Pergerakan Kontena", tagline: "Daftar kontena & penjejakan status",
      navContainers: "Kontena", navOverview: "Gambaran Padang",
      search: "Cari no. kontena", filterStatus: "Status", all: "Semua",
      addContainer: "Tambah kontena", importCsv: "Import CSV", exportCsv: "Eksport CSV", exportExcel: "Eksport Excel",
      colContainer: "No. Kontena", colDimension: "Dimensi", colStatus: "Status", colVessel: "Kapal / Platform",
      colExpiry: "Tarikh luput", colActions: "",
      fContainerNo: "Nombor kontena", fDimension: "Dimensi", fTareMass: "Jisim tara (kg)",
      fPayload: "Muatan (kg)", fMaxGross: "Berat kasar maksimum (kg)", fExpiryDate: "Tarikh luput",
      fVessel: "Kapal / platform", fLocation: "Padang / lokasi", fRemarks: "Catatan (pilihan)",
      fDate: "Tarikh", save: "Simpan", cancel: "Batal",
      statusLoaded: "Dimuatkan", statusBackloaded: "Dimuat balik", statusReserved: "Ditempah",
      emptyState: "Belum ada kontena. Tambah satu, atau import CSV untuk mula.",
      overviewTitle: "Gambaran Padang", totalContainers: "Jumlah kontena",
      countBackloaded: "Di padang sekarang", countLoaded: "Dimuatkan keluar sekarang", countReserved: "Ditempah",
      byLocation: "Di padang, ikut lokasi", byVessel: "Ikut kapal / platform",
      vesselCol: "Kapal / platform", expiringSoon: "Luput dalam 60 hari", noExpiring: "Tiada yang akan luput tidak lama lagi.",
      csvHint: "Perlukan lajur: containerNo, dimension, tareMass, payload, maxGrossWeight, expiryDate, status, vessel, location, remarks",
      required: "Nombor kontena dan dimensi diperlukan.", install: "Pasang aplikasi",
      cargoTitle: "Kandungan muat balik", basketLarge: "Bakul besar", basketSmall: "Bakul kecil",
      basketThailand: "Bakul Thailand", roBottles: "Botol RO",
      detailStatic: "Spesifikasi kontena", saveDetails: "Simpan butiran",
      changeStatus: "Tukar status", confirm: "Sahkan",
      vesselRequired: "Nama kapal diperlukan.",
      deleteContainer: "Padam kontena", confirmDelete: "Padam kontena ini dan semua rekodnya? Tindakan ini tidak boleh dibuat asal.",
      historyTitle: "Sejarah", noHistory: "Belum ada rekod perubahan status.",
      close: "Tutup", expired: "Luput", daysLeft: "hari lagi",
      settings: "Segerak GitHub", ghOwner: "Nama pengguna / organisasi GitHub", ghRepo: "Nama repositori", ghBranch: "Cabang",
      ghPath: "Laluan fail dalam repo", ghToken: "Token akses peribadi", ghSave: "Simpan & sambung",
      ghPull: "Tarik dari GitHub", ghPush: "Tolak ke GitHub", ghDisconnect: "Putuskan sambungan",
      ghNotConfigured: "Belum disambungkan. Data hanya disimpan pada peranti ini.",
      ghSyncing: "Menyegerak…", ghSynced: "Disegerakkan dengan GitHub", ghError: "Ralat segerak",
      ghTokenNote: "Disimpan hanya dalam pelayar ini. Gunakan token berbutir halus yang terhad kepada repositori ini sahaja dengan kebenaran Contents: Read and write.",
    },
  };

  const CARGO_KEYS = ["basketLarge", "basketSmall", "basketThailand", "roBottles"];
  const CARGO_ABBR = { basketLarge: "BL", basketSmall: "BS", basketThailand: "BT", roBottles: "RO" };
  const STATUS_LIST = ["LOADED", "BACKLOADED", "RESERVED"];
  const STATUS_CLASS = { LOADED: "out", BACKLOADED: "in", RESERVED: "reserved" };

  const ICONS = {
    list: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"/></svg>',
    grid: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>',
    search: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg>',
    plus: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg>',
    upload: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 16V4M6 10l6-6 6 6"/><path d="M4 20h16"/></svg>',
    download: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 4v12M6 12l6 6 6-6"/><path d="M4 20h16"/></svg>',
    trash: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"/><path d="M8 6V4h8v2"/><path d="M6 6l1 14h10l1-14"/></svg>',
    x: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6L6 18M6 6l12 12"/></svg>',
    globe: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 010 20 15 15 0 010-20z"/></svg>',
    gear: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 11-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 11-2.83-2.83l.06-.06A1.65 1.65 0 004.6 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 112.83-2.83l.06.06A1.65 1.65 0 009 4.6a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 112.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"/></svg>',
  };

  // ---------------------------------------------------------------
  // State + persistence (localStorage cache + optional GitHub sync)
  // ---------------------------------------------------------------
  const CONT_KEY = "cyl-containers";
  const LANG_KEY = "cyl-lang";
  const GH_KEY = "cyl-gh-config";

  const uid = () => Math.random().toString(36).slice(2, 10);
  const todayStr = () => new Date().toISOString().slice(0, 10);
  const emptyCargo = () => ({ basketLarge: 0, basketSmall: 0, basketThailand: 0, roBottles: 0 });

  const state = {
    lang: localStorage.getItem(LANG_KEY) || "en",
    tab: "containers",
    containers: [],
    search: "",
    statusFilter: "ALL",
    showAddForm: false,
    showSettings: false,
    openId: null,
    statusTarget: null,
    ghSha: null,
    syncStatus: "idle",   // idle | syncing | ok | error
    syncError: "",
    syncQueue: Promise.resolve(),
  };

  function loadData() {
    try { state.containers = JSON.parse(localStorage.getItem(CONT_KEY) || "[]"); } catch (e) { state.containers = []; }
  }
  function saveLocalOnly() { try { localStorage.setItem(CONT_KEY, JSON.stringify(state.containers)); } catch (e) {} }
  function saveLang() { try { localStorage.setItem(LANG_KEY, state.lang); } catch (e) {} }
  function t() { return STRINGS[state.lang]; }

  function getGhConfig() { try { return JSON.parse(localStorage.getItem(GH_KEY) || "null"); } catch (e) { return null; } }
  function saveGhConfig(cfg) { try { localStorage.setItem(GH_KEY, JSON.stringify(cfg)); } catch (e) {} }
  function isGhConfigured() { const c = getGhConfig(); return !!(c && c.owner && c.repo && c.path && c.token); }

  function findContainer(id) { return state.containers.find((c) => c.id === id); }

  function daysUntil(dateStr) {
    if (!dateStr) return null;
    const d = new Date(dateStr + "T00:00:00");
    const now = new Date(); now.setHours(0, 0, 0, 0);
    return Math.round((d - now) / 86400000);
  }

  function computeFiltered() {
    return state.containers.filter((c) => {
      if (state.search && !c.containerNo.toLowerCase().includes(state.search.toLowerCase())) return false;
      if (state.statusFilter !== "ALL" && c.status !== state.statusFilter) return false;
      return true;
    }).sort((a, b) => a.containerNo.localeCompare(b.containerNo));
  }

  function computeOverview() {
    const byLoc = {};
    state.containers.filter((c) => c.status === "BACKLOADED").forEach((c) => {
      const key = c.location || "—";
      byLoc[key] = (byLoc[key] || 0) + 1;
    });
    const byVessel = {};
    state.containers.filter((c) => c.vessel && (c.status === "LOADED" || c.status === "RESERVED")).forEach((c) => {
      if (!byVessel[c.vessel]) byVessel[c.vessel] = { vessel: c.vessel, loaded: 0, reserved: 0 };
      if (c.status === "LOADED") byVessel[c.vessel].loaded += 1; else byVessel[c.vessel].reserved += 1;
    });
    const expiring = state.containers.filter((c) => c.expiryDate && daysUntil(c.expiryDate) !== null && daysUntil(c.expiryDate) <= 60)
      .sort((a, b) => daysUntil(a.expiryDate) - daysUntil(b.expiryDate));
    const byLocation = Object.entries(byLoc).map(([location, count]) => ({ location, count })).sort((a, b) => b.count - a.count);
    return {
      total: state.containers.length,
      countBackloaded: state.containers.filter((c) => c.status === "BACKLOADED").length,
      countLoaded: state.containers.filter((c) => c.status === "LOADED").length,
      countReserved: state.containers.filter((c) => c.status === "RESERVED").length,
      byLocation, maxLoc: byLocation.reduce((m, r) => Math.max(m, r.count), 0),
      byVessel: Object.values(byVessel),
      expiring,
    };
  }

  // ---------------------------------------------------------------
  // GitHub sync (Contents API)
  // ---------------------------------------------------------------
  function b64EncodeUtf8(str) {
    const bytes = new TextEncoder().encode(str);
    let binary = "";
    bytes.forEach((b) => { binary += String.fromCharCode(b); });
    return btoa(binary);
  }
  function b64DecodeUtf8(b64) {
    const binary = atob(b64.replace(/\n/g, ""));
    const bytes = new Uint8Array(binary.length);
    for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
    return new TextDecoder("utf-8").decode(bytes);
  }
  function ghUrl(cfg) {
    return `https://api.github.com/repos/${encodeURIComponent(cfg.owner)}/${encodeURIComponent(cfg.repo)}/contents/${cfg.path.split("/").map(encodeURIComponent).join("/")}`;
  }
  async function ghGetFile(cfg) {
    const url = ghUrl(cfg) + (cfg.branch ? "?ref=" + encodeURIComponent(cfg.branch) : "");
    const headers = { "Accept": "application/vnd.github+json" };
    if (cfg.token) headers["Authorization"] = "Bearer " + cfg.token;
    const res = await fetch(url, { headers });
    if (res.status === 404) return { sha: null, data: [] };
    if (!res.ok) throw new Error("GitHub read failed (" + res.status + ")");
    const json = await res.json();
    let data = [];
    try { data = JSON.parse(b64DecodeUtf8(json.content)); } catch (e) { data = []; }
    return { sha: json.sha, data: Array.isArray(data) ? data : [] };
  }
  async function ghPutFile(cfg, dataObj, message, sha) {
    const url = ghUrl(cfg);
    const body = {
      message: message || "Update container data",
      content: b64EncodeUtf8(JSON.stringify(dataObj, null, 2)),
      branch: cfg.branch || "main",
    };
    if (sha) body.sha = sha;
    const res = await fetch(url, {
      method: "PUT",
      headers: { "Accept": "application/vnd.github+json", "Authorization": "Bearer " + cfg.token, "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    if (res.status === 409) {
      const fresh = await ghGetFile(cfg);
      body.sha = fresh.sha;
      const retry = await fetch(url, {
        method: "PUT",
        headers: { "Accept": "application/vnd.github+json", "Authorization": "Bearer " + cfg.token, "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      if (!retry.ok) throw new Error("GitHub write conflict (" + retry.status + ")");
      const j = await retry.json();
      return j.content.sha;
    }
    if (!res.ok) throw new Error("GitHub write failed (" + res.status + ")");
    const j = await res.json();
    return j.content.sha;
  }

  function updateSyncBadge() {
    const tr = t();
    const label = state.syncStatus === "syncing" ? tr.ghSyncing
      : state.syncStatus === "ok" ? tr.ghSynced
      : state.syncStatus === "error" ? tr.ghError
      : "";
    document.querySelectorAll(".sync-badge").forEach((el) => {
      el.textContent = label;
      el.className = "sync-badge " + state.syncStatus;
      el.title = state.syncStatus === "error" ? state.syncError : "";
    });
  }

  function queueSync(message) {
    if (!isGhConfigured()) return;
    const cfg = getGhConfig();
    state.syncStatus = "syncing"; updateSyncBadge();
    state.syncQueue = state.syncQueue
      .then(() => ghPutFile(cfg, state.containers, message, state.ghSha))
      .then((newSha) => { state.ghSha = newSha; state.syncStatus = "ok"; updateSyncBadge(); })
      .catch((err) => { state.syncStatus = "error"; state.syncError = err.message; updateSyncBadge(); });
  }

  function persistContainers(message) {
    saveLocalOnly();
    queueSync(message);
  }

  async function pullFromGithub() {
    if (!isGhConfigured()) return;
    const cfg = getGhConfig();
    state.syncStatus = "syncing"; updateSyncBadge();
    try {
      const remote = await ghGetFile(cfg);
      state.ghSha = remote.sha;
      state.containers = remote.data;
      saveLocalOnly();
      state.syncStatus = "ok";
      renderShell();
    } catch (err) {
      state.syncStatus = "error"; state.syncError = err.message; updateSyncBadge();
    }
  }
  async function pushToGithub() {
    if (!isGhConfigured()) return;
    const cfg = getGhConfig();
    state.syncStatus = "syncing"; updateSyncBadge();
    try {
      state.ghSha = await ghPutFile(cfg, state.containers, "Manual push from Container Yard Log", state.ghSha);
      state.syncStatus = "ok"; updateSyncBadge();
    } catch (err) {
      state.syncStatus = "error"; state.syncError = err.message; updateSyncBadge();
    }
  }

  async function initialGithubSync() {
    if (!isGhConfigured()) return;
    await pullFromGithub();
  }

  // ---------------------------------------------------------------
  // CSV helpers
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
    const headers = ["containerNo", "dimension", "tareMass", "payload", "maxGrossWeight", "expiryDate", "status", "vessel", "location", "remarks"];
    const lines = [headers.join(",")];
    state.containers.forEach((c) => lines.push(headers.map((h) => csvEscape(c[h])).join(",")));
    const blob = new Blob([lines.join("\r\n")], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url; a.download = "containers.csv"; a.click();
    URL.revokeObjectURL(url);
  }
  function handleImportFile(file) {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      parseCsv(String(reader.result)).filter((r) => r.containerNo).forEach((r) => {
        const containerNo = r.containerNo.trim().toUpperCase();
        const statusRaw = (r.status || "BACKLOADED").toString().trim().toUpperCase();
        const status = STATUS_LIST.indexOf(statusRaw) >= 0 ? statusRaw : "BACKLOADED";
        const idx = state.containers.findIndex((c) => c.containerNo === containerNo);
        const fields = {
          containerNo, dimension: r.dimension || "", tareMass: r.tareMass || "", payload: r.payload || "",
          maxGrossWeight: r.maxGrossWeight || "", expiryDate: r.expiryDate || "", status,
          vessel: r.vessel || "", location: r.location || "", remarks: r.remarks || "",
        };
        if (idx >= 0) {
          state.containers[idx] = Object.assign({}, state.containers[idx], fields);
        } else {
          state.containers.push(Object.assign({ id: uid(), cargo: emptyCargo(), history: [{ date: todayStr(), status, vessel: fields.vessel, location: fields.location, cargo: emptyCargo(), remarks: "Imported" }] }, fields));
        }
      });
      persistContainers("Import CSV");
      renderShell();
    };
    reader.readAsText(file);
  }

  function exportExcel() {
    if (typeof XLSX === "undefined") {
      alert("Excel library hasn't loaded (needs an internet connection at least once). Try again when online, or use Export CSV instead.");
      return;
    }
    const contRows = state.containers.map((c) => ({
      "Container No": c.containerNo, "Dimension": c.dimension, "Tare Mass (kg)": c.tareMass,
      "Payload (kg)": c.payload, "Max Gross Weight (kg)": c.maxGrossWeight, "Expiry Date": c.expiryDate,
      "Status": c.status, "Vessel/Platform": c.vessel, "Location": c.location, "Remarks": c.remarks,
    }));
    const histRows = [];
    state.containers.forEach((c) => {
      (c.history || []).forEach((h) => {
        const cg = h.cargo || emptyCargo();
        histRows.push({
          "Container No": c.containerNo, "Date": h.date, "Status": h.status, "Vessel/Platform": h.vessel,
          "Location": h.location, "Basket Large": cg.basketLarge || "", "Basket Small": cg.basketSmall || "",
          "Basket Thailand": cg.basketThailand || "", "RO Bottles": cg.roBottles || "", "Remarks": h.remarks,
        });
      });
    });
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(contRows), "Containers");
    XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(histRows.length ? histRows : [{ "Container No": "" }]), "History");
    XLSX.writeFile(wb, "container-yard-log.xlsx");
  }

  // ---------------------------------------------------------------
  // Actions
  // ---------------------------------------------------------------
  function strVal(id) { return (document.getElementById(id) || {}).value || ""; }
  function numVal(id) { const n = parseInt((document.getElementById(id) || {}).value, 10); return isNaN(n) ? 0 : n; }

  function submitAddContainer() {
    const containerNo = strVal("a-containerNo").trim();
    const dimension = strVal("a-dimension").trim();
    const errEl = document.getElementById("add-form-error");
    if (!containerNo || !dimension) {
      if (errEl) errEl.textContent = t().required;
      return;
    }
    const row = {
      id: uid(), containerNo: containerNo.toUpperCase(), dimension,
      tareMass: strVal("a-tareMass"), payload: strVal("a-payload"), maxGrossWeight: strVal("a-maxGross"),
      expiryDate: strVal("a-expiryDate"), status: "BACKLOADED", vessel: "", location: strVal("a-location").trim(),
      remarks: "", cargo: emptyCargo(),
      history: [{ date: todayStr(), status: "BACKLOADED", vessel: "", location: strVal("a-location").trim(), cargo: emptyCargo(), remarks: "Container registered" }],
    };
    state.containers = [row].concat(state.containers);
    persistContainers("Add container " + row.containerNo);
    state.showAddForm = false;
    renderShell();
  }

  function deleteContainer(id) {
    const c = findContainer(id);
    if (!c) return;
    if (!window.confirm(t().confirmDelete)) return;
    state.containers = state.containers.filter((x) => x.id !== id);
    persistContainers("Delete container " + c.containerNo);
    if (state.openId === id) state.openId = null;
    renderShell();
  }

  function saveDetails(id) {
    const c = findContainer(id);
    if (!c) return;
    c.dimension = strVal("d-dimension").trim();
    c.tareMass = strVal("d-tareMass");
    c.payload = strVal("d-payload");
    c.maxGrossWeight = strVal("d-maxGross");
    c.expiryDate = strVal("d-expiryDate");
    persistContainers("Update specs for " + c.containerNo);
    renderContainersSection();
    renderModal();
  }

  function chooseStatusTarget(status) {
    state.statusTarget = state.statusTarget === status ? null : status;
    renderModal();
  }

  function confirmStatusChange(id) {
    const c = findContainer(id);
    if (!c) return;
    const status = state.statusTarget;
    const errEl = document.getElementById("status-form-error");
    const date = strVal("s-date") || todayStr();
    const remarks = strVal("s-remarks").trim();

    if (status === "LOADED") {
      const vessel = strVal("s-vessel").trim();
      if (!vessel) { if (errEl) errEl.textContent = t().vesselRequired; return; }
      c.status = "LOADED"; c.vessel = vessel; c.remarks = remarks;
      c.history.unshift({ date, status, vessel, location: c.location, cargo: emptyCargo(), remarks });
    } else if (status === "RESERVED") {
      const vessel = strVal("s-vessel").trim();
      if (!vessel) { if (errEl) errEl.textContent = t().vesselRequired; return; }
      c.status = "RESERVED"; c.vessel = vessel; c.remarks = remarks;
      c.history.unshift({ date, status, vessel, location: c.location, cargo: emptyCargo(), remarks });
    } else if (status === "BACKLOADED") {
      const location = strVal("s-location").trim();
      const cargo = {
        basketLarge: numVal("s-basketLarge"), basketSmall: numVal("s-basketSmall"),
        basketThailand: numVal("s-basketThailand"), roBottles: numVal("s-roBottles"),
      };
      c.status = "BACKLOADED"; c.location = location; c.cargo = cargo; c.remarks = remarks;
      c.history.unshift({ date, status, vessel: c.vessel, location, cargo, remarks });
    }
    persistContainers("Status change: " + c.containerNo + " -> " + status);
    state.statusTarget = null;
    renderContainersSection();
    renderModal();
  }

  function saveGhSettings() {
    const cfg = {
      owner: strVal("gh-owner").trim(), repo: strVal("gh-repo").trim(),
      branch: strVal("gh-branch").trim() || "main", path: strVal("gh-path").trim() || "data/containers.json",
      token: strVal("gh-token").trim(),
    };
    const errEl = document.getElementById("gh-form-error");
    if (!cfg.owner || !cfg.repo || !cfg.path) {
      if (errEl) errEl.textContent = "Owner, repository and file path are required.";
      return;
    }
    saveGhConfig(cfg);
    state.ghSha = null;
    renderModal();
    pullFromGithub();
  }
  function disconnectGh() {
    localStorage.removeItem(GH_KEY);
    state.ghSha = null;
    state.syncStatus = "idle";
    renderModal();
  }

  // ---------------------------------------------------------------
  // Rendering
  // ---------------------------------------------------------------
  const appEl = document.getElementById("app");

  function escapeHtml(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  }
  function statusLabel(tr, status) {
    return status === "LOADED" ? tr.statusLoaded : status === "RESERVED" ? tr.statusReserved : tr.statusBackloaded;
  }
  function cargoSummary(cargo) {
    if (!cargo) return "";
    return CARGO_KEYS.filter((k) => cargo[k]).map((k) => CARGO_ABBR[k] + " " + cargo[k]).join(" · ");
  }
  function expiryBadge(tr, expiryDate) {
    if (!expiryDate) return "";
    const d = daysUntil(expiryDate);
    if (d === null) return escapeHtml(expiryDate);
    if (d < 0) return `<span class="expiry-flag">${escapeHtml(expiryDate)} — ${tr.expired}</span>`;
    if (d <= 60) return `<span class="expiry-flag">${escapeHtml(expiryDate)} (${d} ${tr.daysLeft})</span>`;
    return escapeHtml(expiryDate);
  }

  function containerRowHtml(c, tr) {
    return `<tr class="row-click" data-copen="${c.id}">
      <td class="mono">${escapeHtml(c.containerNo)}</td>
      <td>${escapeHtml(c.dimension)}</td>
      <td><span class="badge ${STATUS_CLASS[c.status]}">${statusLabel(tr, c.status)}</span></td>
      <td>${escapeHtml(c.vessel)}</td>
      <td>${expiryBadge(tr, c.expiryDate)}</td>
      <td><button class="del-btn" data-cdel="${c.id}">${ICONS.trash}</button></td>
    </tr>`;
  }

  function renderContainersSection() {
    const tr = t();
    const rows = computeFiltered();
    const html = `
      <div class="table-wrap">
        <table>
          <thead><tr>
            <th class="nosort">${tr.colContainer}</th>
            <th class="nosort">${tr.colDimension}</th>
            <th class="nosort">${tr.colStatus}</th>
            <th class="nosort">${tr.colVessel}</th>
            <th class="nosort">${tr.colExpiry}</th>
            <th class="nosort"></th>
          </tr></thead>
          <tbody>${rows.length ? rows.map((c) => containerRowHtml(c, tr)).join("") : `<tr><td colspan="6" class="empty-state">${tr.emptyState}</td></tr>`}</tbody>
        </table>
      </div>
      <div class="csv-hint">${tr.csvHint}</div>`;
    const el = document.getElementById("containers-section");
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
          <th class="nosort">${tr.vesselCol}</th><th class="nosort">${tr.statusLoaded}</th><th class="nosort">${tr.statusReserved}</th>
        </tr></thead><tbody>${ov.byVessel.map((v) => `<tr>
          <td>${escapeHtml(v.vessel)}</td>
          <td><span class="badge out">${v.loaded}</span></td>
          <td><span class="badge reserved">${v.reserved}</span></td>
        </tr>`).join("")}</tbody></table></div>`
      : `<div class="empty-state">${tr.emptyState}</div>`;

    const expiringHtml = ov.expiring.length
      ? `<div class="table-wrap"><table><thead><tr>
          <th class="nosort">${tr.colContainer}</th><th class="nosort">${tr.colExpiry}</th><th class="nosort">${tr.colStatus}</th>
        </tr></thead><tbody>${ov.expiring.map((c) => `<tr class="row-click" data-copen="${c.id}">
          <td class="mono">${escapeHtml(c.containerNo)}</td>
          <td>${expiryBadge(tr, c.expiryDate)}</td>
          <td><span class="badge ${STATUS_CLASS[c.status]}">${statusLabel(tr, c.status)}</span></td>
        </tr>`).join("")}</tbody></table></div>`
      : `<div class="empty-state">${tr.noExpiring}</div>`;

    const html = `
      <div class="cards">
        <div class="card"><div class="n">${ov.total}</div><div class="l">${tr.totalContainers}</div></div>
        <div class="card"><div class="n">${ov.countBackloaded}</div><div class="l">${tr.countBackloaded}</div></div>
        <div class="card"><div class="n">${ov.countLoaded}</div><div class="l">${tr.countLoaded}</div></div>
        <div class="card"><div class="n">${ov.countReserved}</div><div class="l">${tr.countReserved}</div></div>
      </div>
      <div class="panel"><h3>${tr.expiringSoon}</h3>${expiringHtml}</div>
      <div class="panel"><h3>${tr.byLocation}</h3>${barRows}</div>
      <div class="panel"><h3>${tr.byVessel}</h3>${vesselRows}</div>`;
    const el = document.getElementById("overview-section");
    if (el) el.innerHTML = html;
  }

  function statusFormHtml(c, tr) {
    const status = state.statusTarget;
    if (!status) return "";
    let fields = "";
    if (status === "LOADED" || status === "RESERVED") {
      fields = `
        <div class="field"><label>${tr.fVessel}</label><input class="input" id="s-vessel" value="${escapeHtml(c.vessel)}" /></div>
        <div class="field"><label>${tr.fDate}</label><input type="date" class="input" id="s-date" value="${todayStr()}" /></div>
        <div class="field" style="grid-column:1/-1"><label>${tr.fRemarks}</label><input class="input" id="s-remarks" /></div>`;
    } else {
      fields = `
        <div class="field"><label>${tr.fLocation}</label><input class="input" id="s-location" value="${escapeHtml(c.location)}" /></div>
        <div class="field"><label>${tr.fDate}</label><input type="date" class="input" id="s-date" value="${todayStr()}" /></div>
        <div class="field" style="grid-column:1/-1"><label style="color:var(--text);font-size:12px;font-weight:600;">${tr.cargoTitle}</label></div>
        <div class="field"><label>${tr.basketLarge}</label><input type="number" min="0" class="input" id="s-basketLarge" value="0" /></div>
        <div class="field"><label>${tr.basketSmall}</label><input type="number" min="0" class="input" id="s-basketSmall" value="0" /></div>
        <div class="field"><label>${tr.basketThailand}</label><input type="number" min="0" class="input" id="s-basketThailand" value="0" /></div>
        <div class="field"><label>${tr.roBottles}</label><input type="number" min="0" class="input" id="s-roBottles" value="0" /></div>
        <div class="field" style="grid-column:1/-1"><label>${tr.fRemarks}</label><input class="input" id="s-remarks" /></div>`;
    }
    return `<div class="form-panel" style="margin-top:10px;">
      ${fields}
      <div class="form-actions">
        <button class="btn primary" data-action="confirm-status" data-cid="${c.id}">${tr.confirm}</button>
        <button class="btn" data-action="cancel-status">${tr.cancel}</button>
        <span class="error-text" id="status-form-error"></span>
      </div>
    </div>`;
  }

  function historyItemHtml(h, tr) {
    const cg = cargoSummary(h.cargo);
    return `<div class="history-item">
      <span class="mono">${escapeHtml(h.date)}</span>
      <span class="badge ${STATUS_CLASS[h.status]}">${statusLabel(tr, h.status)}</span>
      <span>${escapeHtml(h.vessel)}</span>
      <span style="color:var(--muted)">${escapeHtml(h.location)}</span>
      <span style="color:var(--muted)">${escapeHtml(cg)}</span>
      <span style="color:var(--muted)">${escapeHtml(h.remarks)}</span>
    </div>`;
  }

  function renderContainerModal(c, tr) {
    const statusBtns = STATUS_LIST.map((s) => `<button class="${state.statusTarget === s ? "active " + STATUS_CLASS[s] : ""}" data-action="choose-status" data-status="${s}">${statusLabel(tr, s)}</button>`).join("");
    const history = (c.history || []).map((h) => historyItemHtml(h, tr)).join("") || `<div class="empty-state">${tr.noHistory}</div>`;
    return `
      <div class="modal-backdrop">
        <div class="modal-panel">
          <div class="modal-header">
            <div class="mono" style="font-size:17px;font-weight:600;">${escapeHtml(c.containerNo)}</div>
            <div style="display:flex;gap:8px;">
              <button class="del-btn" data-cdel="${c.id}" title="${tr.deleteContainer}">${ICONS.trash}</button>
              <button class="del-btn" data-action="close-modal">${ICONS.x}</button>
            </div>
          </div>

          <h3 style="font-family:'Archivo',sans-serif;font-size:13px;margin:0 0 8px;">${tr.detailStatic}</h3>
          <div class="detail-grid">
            <div class="field"><label>${tr.fDimension}</label><input class="input" id="d-dimension" value="${escapeHtml(c.dimension)}" /></div>
            <div class="field"><label>${tr.fTareMass}</label><input class="input" id="d-tareMass" value="${escapeHtml(c.tareMass)}" /></div>
            <div class="field"><label>${tr.fPayload}</label><input class="input" id="d-payload" value="${escapeHtml(c.payload)}" /></div>
            <div class="field"><label>${tr.fMaxGross}</label><input class="input" id="d-maxGross" value="${escapeHtml(c.maxGrossWeight)}" /></div>
            <div class="field" style="grid-column:1/-1"><label>${tr.fExpiryDate}</label><input type="date" class="input" id="d-expiryDate" value="${escapeHtml(c.expiryDate)}" /></div>
          </div>
          <div style="margin-bottom:16px;"><button class="btn primary" data-action="save-details" data-cid="${c.id}">${tr.saveDetails}</button></div>

          <h3 style="font-family:'Archivo',sans-serif;font-size:13px;margin:0 0 8px;">${tr.changeStatus}</h3>
          <div class="status-btns">${statusBtns}</div>
          ${statusFormHtml(c, tr)}

          <h3 style="font-family:'Archivo',sans-serif;font-size:13px;margin:16px 0 8px;">${tr.historyTitle}</h3>
          <div class="history-list">${history}</div>
        </div>
      </div>`;
  }

  function renderSettingsModal(tr) {
    const cfg = getGhConfig() || {};
    const statusText = isGhConfigured()
      ? (state.syncStatus === "error" ? tr.ghError + ": " + escapeHtml(state.syncError) : tr.ghSynced)
      : tr.ghNotConfigured;
    return `
      <div class="modal-backdrop">
        <div class="modal-panel">
          <div class="modal-header">
            <div style="font-size:16px;font-weight:600;">${tr.settings}</div>
            <button class="del-btn" data-action="close-modal">${ICONS.x}</button>
          </div>
          <p style="color:var(--muted);font-size:12.5px;margin:0 0 14px;">${statusText}</p>
          <div class="detail-grid">
            <div class="field"><label>${tr.ghOwner}</label><input class="input" id="gh-owner" value="${escapeHtml(cfg.owner || "")}" placeholder="elvis96524" /></div>
            <div class="field"><label>${tr.ghRepo}</label><input class="input" id="gh-repo" value="${escapeHtml(cfg.repo || "")}" placeholder="COTNAINER_LOG" /></div>
            <div class="field"><label>${tr.ghBranch}</label><input class="input" id="gh-branch" value="${escapeHtml(cfg.branch || "main")}" /></div>
            <div class="field"><label>${tr.ghPath}</label><input class="input" id="gh-path" value="${escapeHtml(cfg.path || "data/containers.json")}" /></div>
            <div class="field" style="grid-column:1/-1"><label>${tr.ghToken}</label><input type="password" class="input" id="gh-token" value="${escapeHtml(cfg.token || "")}" placeholder="github_pat_..." /></div>
          </div>
          <p style="color:var(--muted);font-size:11px;margin:0 0 14px;">${tr.ghTokenNote}</p>
          <div class="form-actions" style="margin-bottom:6px;">
            <button class="btn primary" data-action="save-gh-config">${tr.ghSave}</button>
            <button class="btn" data-action="gh-pull">${tr.ghPull}</button>
            <button class="btn" data-action="gh-push">${tr.ghPush}</button>
            <button class="btn" data-action="gh-disconnect">${tr.ghDisconnect}</button>
            <span class="error-text" id="gh-form-error"></span>
          </div>
        </div>
      </div>`;
  }

  function renderModal() {
    const root = document.getElementById("modal-root");
    if (!root) return;
    const tr = t();
    if (state.showSettings) { root.innerHTML = renderSettingsModal(tr); return; }
    if (!state.openId) { root.innerHTML = ""; return; }
    const c = findContainer(state.openId);
    if (!c) { root.innerHTML = ""; return; }
    root.innerHTML = renderContainerModal(c, tr);
  }

  function renderContainersTab(tr) {
    const formHtml = state.showAddForm ? `
      <div class="form-panel">
        <div class="field"><label>${tr.fContainerNo}</label><input class="input" id="a-containerNo" placeholder="MSCU1234567" /></div>
        <div class="field"><label>${tr.fDimension}</label><input class="input" id="a-dimension" placeholder="40HC" /></div>
        <div class="field"><label>${tr.fTareMass}</label><input class="input" id="a-tareMass" /></div>
        <div class="field"><label>${tr.fPayload}</label><input class="input" id="a-payload" /></div>
        <div class="field"><label>${tr.fMaxGross}</label><input class="input" id="a-maxGross" /></div>
        <div class="field"><label>${tr.fExpiryDate}</label><input type="date" class="input" id="a-expiryDate" /></div>
        <div class="field"><label>${tr.fLocation}</label><input class="input" id="a-location" /></div>
        <div class="form-actions">
          <button class="btn primary" data-action="save-add-form">${tr.save}</button>
          <button class="btn" data-action="cancel-add-form">${tr.cancel}</button>
          <span class="error-text" id="add-form-error"></span>
        </div>
      </div>` : "";

    return `
      <div class="section-title">${tr.navContainers}</div>
      <div class="toolbar">
        <div class="search-wrap">${ICONS.search}<input class="input" id="search-input" placeholder="${tr.search}" value="${escapeHtml(state.search)}" /></div>
        <select id="status-filter">
          <option value="ALL" ${state.statusFilter === "ALL" ? "selected" : ""}>${tr.filterStatus}: ${tr.all}</option>
          <option value="LOADED" ${state.statusFilter === "LOADED" ? "selected" : ""}>${tr.statusLoaded}</option>
          <option value="BACKLOADED" ${state.statusFilter === "BACKLOADED" ? "selected" : ""}>${tr.statusBackloaded}</option>
          <option value="RESERVED" ${state.statusFilter === "RESERVED" ? "selected" : ""}>${tr.statusReserved}</option>
        </select>
        <div class="spacer"></div>
        <input type="file" id="csv-file" accept=".csv" style="display:none" />
        <button class="btn" data-action="import">${ICONS.upload}${tr.importCsv}</button>
        <button class="btn" data-action="export">${ICONS.download}${tr.exportCsv}</button>
        <button class="btn" data-action="export-excel">${ICONS.download}${tr.exportExcel}</button>
        <button class="btn primary" data-action="toggle-add-form">${ICONS.plus}${tr.addContainer}</button>
      </div>
      ${formHtml}
      <div id="containers-section"></div>`;
  }

  function renderOverviewTab(tr) {
    return `<div class="section-title">${tr.overviewTitle}</div><div id="overview-section"></div>`;
  }

  function renderShell() {
    const tr = t();
    const navItems = [
      { key: "containers", icon: ICONS.list, label: tr.navContainers },
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
    const settingsBtn = `<button class="settings-btn" data-action="open-settings">${ICONS.gear}<span class="sync-badge ${state.syncStatus}"></span></button>`;

    const mainContent = state.tab === "containers" ? renderContainersTab(tr) : renderOverviewTab(tr);

    appEl.innerHTML = `
      <div class="topbar">
        <div class="brand"><div class="icon-box"></div><div><div class="brand-name">${tr.appName}</div><div class="tagline">${tr.tagline}</div></div></div>
        ${settingsBtn}
        <button class="install-btn" data-action="install">${ICONS.download}<span>${tr.install}</span></button>
        ${langSelect}
      </div>
      <div class="sidebar">
        <div class="brand"><div class="icon-box"></div><div><div class="brand-name">${tr.appName}</div><div class="tagline">${tr.tagline}</div></div></div>
        <div class="sidebar-nav">${sidebarNav}</div>
        <div class="sidebar-bottom">
          ${settingsBtn}
          <button class="install-btn" data-action="install">${ICONS.download}<span>${tr.install}</span></button>
          ${langSelect}
        </div>
      </div>
      <main>${mainContent}</main>
      <div class="bottom-nav">${bottomNav}</div>
      <div id="modal-root"></div>`;

    if (deferredPrompt) document.querySelectorAll('[data-action="install"]').forEach((b) => b.classList.add("show"));
    if (state.tab === "containers") renderContainersSection();
    else if (state.tab === "overview") renderOverviewSection();
    renderModal();
    updateSyncBadge();
  }

  // ---------------------------------------------------------------
  // Event delegation
  // ---------------------------------------------------------------
  appEl.addEventListener("click", (e) => {
    if (e.target.classList && e.target.classList.contains("modal-backdrop")) {
      state.openId = null; state.showSettings = false; state.statusTarget = null; renderModal(); return;
    }

    const delBtn = e.target.closest("[data-cdel]");
    if (delBtn) { deleteContainer(delBtn.dataset.cdel); return; }

    const openRow = e.target.closest("[data-copen]");
    if (openRow) { state.openId = openRow.dataset.copen; state.statusTarget = null; renderModal(); return; }

    const navBtn = e.target.closest("[data-nav]");
    if (navBtn) { state.tab = navBtn.dataset.nav; state.showAddForm = false; renderShell(); return; }

    const action = e.target.closest("[data-action]");
    if (action) {
      const a = action.dataset.action;
      if (a === "toggle-add-form") { state.showAddForm = !state.showAddForm; renderShell(); }
      else if (a === "cancel-add-form") { state.showAddForm = false; renderShell(); }
      else if (a === "save-add-form") { submitAddContainer(); }
      else if (a === "import") { const f = document.getElementById("csv-file"); if (f) f.click(); }
      else if (a === "export") { exportCsv(); }
      else if (a === "export-excel") { exportExcel(); }
      else if (a === "install") { triggerInstall(); }
      else if (a === "open-settings") { state.showSettings = true; state.openId = null; renderModal(); }
      else if (a === "close-modal") { state.openId = null; state.showSettings = false; state.statusTarget = null; renderModal(); }
      else if (a === "save-details") { saveDetails(action.dataset.cid); }
      else if (a === "choose-status") { chooseStatusTarget(action.dataset.status); }
      else if (a === "cancel-status") { state.statusTarget = null; renderModal(); }
      else if (a === "confirm-status") { confirmStatusChange(action.dataset.cid); }
      else if (a === "save-gh-config") { saveGhSettings(); }
      else if (a === "gh-pull") { pullFromGithub(); }
      else if (a === "gh-push") { pushToGithub(); }
      else if (a === "gh-disconnect") { disconnectGh(); }
      return;
    }
  });

  appEl.addEventListener("input", (e) => {
    if (e.target.id === "search-input") { state.search = e.target.value; renderContainersSection(); }
  });

  appEl.addEventListener("change", (e) => {
    if (e.target.id === "status-filter") { state.statusFilter = e.target.value; renderContainersSection(); }
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
  initialGithubSync();
})();
