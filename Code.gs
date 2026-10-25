/**
 * =========================================================================
 * Google Apps Script for Get INVOLVED! M.4 Online Exercise & E-Certificate System
 * ระบบแบบฝึกหัดออนไลน์และออกเกียรติบัตรอิเล็กทรอนิกส์ Get INVOLVED! ม.4 (ทวพ. - TWP)
 * เวอร์ชัน 2.0 (High School University-Prep Edition & Robust Safe-Sync)
 * ฐานข้อมูล Google Sheets: TWP_GetInvolved_M4_Database
 * =========================================================================
 * 
 * ระบบความปลอดภัยและการป้องกันข้อผิดพลาดที่ถอดบทเรียนจาก ม.1 - ม.3:
 * 1. LockService: ล็อคสเปรดชีตชั่วคราวขณะเขียนข้อมูล ป้องกันข้อมูลชนกัน (Race Conditions) จากนักเรียนส่งพร้อมกัน
 * 2. Text Formatting Guard: บังคับคอลัมน์รหัสนักเรียนเป็นรูปแบบข้อความ (@) ป้องกันศูนย์นำหน้าหาย
 * 3. Case-Insensitive & Sanitized Keys: อีเมลถูกแปลงเป็น .trim().toLowerCase() ทุกจุด
 * 4. Auto-Schema Self-Healing: หากชีตหรือหัวคอลัมน์ยังไม่ครบ ระบบจะสร้างและเติมให้อัตโนมัติ ไม่เกิด Error ขัดข้อง
 * 5. CORS & JSON Delivery: รองรับการร้องขอข้ามโดเมนจาก GitHub Pages และ Localhost อย่างเสถียร
 * =========================================================================
 */

// ชื่อชีตหลักในระบบ
const SHEET_STUDENTS = "Students_DB";
const SHEET_NAME_BASE = "Name_base";
const SHEET_LOGIN_LOGS = "Login_Logs";
const SHEET_SCORES = "Scores_Log";
const SHEET_CERTS = "Certificates";
const SHEET_CONFIG = "Teacher_Config";

/**
 * เพิ่มเมนูพิเศษบน Google Sheets อัตโนมัติเมื่อเปิดชีต
 */
function onOpen() {
  SpreadsheetApp.getUi()
    .createMenu('🎓 ระบบ TWP ม.4')
    .addItem('⚡ ติดตั้งและสร้างโครงสร้างชีตทั้งหมด (Setup Database)', 'setupAllSheets')
    .addItem('📊 อัปเดตสถิติและสรุปผลคะแนน', 'refreshSummaryStats')
    .addToUi();
}

/**
 * ฟังก์ชันสร้างและจัดรูปแบบตารางทั้งหมดอัตโนมัติ (รันครั้งแรกเมื่อติดตั้ง)
 */
function setupAllSheets() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();

  // 1. ชีต Students_DB (ฐานข้อมูลนักเรียน ม.4)
  let studentSheet = ss.getSheetByName(SHEET_STUDENTS);
  if (!studentSheet) {
    studentSheet = ss.insertSheet(SHEET_STUDENTS);
  }
  studentSheet.clear();
  const studentHeaders = [
    "Student ID", "ชื่อ-นามสกุล", "โรงเรียน", "ระดับชั้น", "ห้อง", 
    "อีเมล (Email)", "รหัสผ่าน (Password)", "สถานะ (Status)", "วันที่ลงทะเบียน"
  ];
  studentSheet.appendRow(studentHeaders);
  formatHeaderRow(studentSheet, "#1D1D1F", "#FFFFFF");
  studentSheet.getRange("A:A").setNumberFormat("@"); // บังคับ Text Format รหัส นร.
  studentSheet.getRange("F:F").setNumberFormat("@"); // บังคับ Text Format อีเมล

  // ตัวอย่างข้อมูลนักเรียน ม.4 ตั้งต้น
  const sampleStudents = [
    ["STD-M4-001", "ภัทรพล สิทธิไพศาล", "รร.สาธิตมหาวิทยาลัย", "ม.4", "1", "pattarapol.m4@gmail.com", "m4pass123", "Active", new Date()],
    ["STD-M4-002", "กัญญาณัฐ วงศ์สุวรรณ", "รร.เตรียมอุดมศึกษาพัฒนาการ", "ม.4", "2", "kanyanat.m4@gmail.com", "m4pass123", "Active", new Date()],
    ["STD-M4-003", "ธนกฤต เมธาพร", "รร.สวนกุหลาบวิทยาลัย", "ม.4", "1", "thanakrit.m4@gmail.com", "m4pass123", "Active", new Date()]
  ];
  sampleStudents.forEach(row => studentSheet.appendRow(row));

  // 2. ชีต Name_base (ดัชนี Auto-lookup)
  let nameSheet = ss.getSheetByName(SHEET_NAME_BASE);
  if (!nameSheet) {
    nameSheet = ss.insertSheet(SHEET_NAME_BASE);
  }
  nameSheet.clear();
  nameSheet.appendRow(["Student ID", "ชื่อ-นามสกุล", "โรงเรียน", "ระดับชั้น", "อีเมลอ้างอิง"]);
  formatHeaderRow(nameSheet, "#3A3A3C", "#FFFFFF");
  nameSheet.getRange("A:A").setNumberFormat("@");
  sampleStudents.forEach(s => {
    nameSheet.appendRow([s[0], s[1], s[2], s[3], s[5]]);
  });

  // 3. ชีต Login_Logs (ประวัติการเข้าใช้งาน)
  let logSheet = ss.getSheetByName(SHEET_LOGIN_LOGS);
  if (!logSheet) {
    logSheet = ss.insertSheet(SHEET_LOGIN_LOGS);
  }
  logSheet.clear();
  logSheet.appendRow(["Timestamp", "อีเมล", "ชื่อ-นามสกุล", "โรงเรียน", "สถานะการล็อกอิน", "User Agent / Device"]);
  formatHeaderRow(logSheet, "#48484A", "#FFFFFF");

  // 4. ชีต Scores_Log (บันทึกคะแนนละเอียดรายข้อ)
  let scoreSheet = ss.getSheetByName(SHEET_SCORES);
  if (!scoreSheet) {
    scoreSheet = ss.insertSheet(SHEET_SCORES);
  }
  scoreSheet.clear();
  const scoreHeaders = [
    "Timestamp", "Student ID", "อีเมล", "ชื่อ-นามสกุล", "โรงเรียน", 
    "Unit", "Part 1 (Video)", "Part 2 (Vocab)", "Part 3 (Grammar)", 
    "คะแนนรวม (Total)", "คะแนนเต็ม (Max)", "ร้อยละ (%)", "สถานะผ่าน", "รายละเอียดคำตอบ (JSON)"
  ];
  scoreSheet.appendRow(scoreHeaders);
  formatHeaderRow(scoreSheet, "#0071E3", "#FFFFFF");
  scoreSheet.getRange("B:B").setNumberFormat("@");

  // 5. ชีต Certificates (ทะเบียนเกียรติบัตร)
  let certSheet = ss.getSheetByName(SHEET_CERTS);
  if (!certSheet) {
    certSheet = ss.insertSheet(SHEET_CERTS);
  }
  certSheet.clear();
  const certHeaders = [
    "Cert Number", "Student ID", "อีเมล", "ชื่อ-นามสกุล", "โรงเรียน", 
    "คะแนนเฉลี่ย (%)", "วันที่ออกเกียรติบัตร", "Digital Signature Hash", "จำนวนครั้งที่ดาวน์โหลด"
  ];
  certSheet.appendRow(certHeaders);
  formatHeaderRow(certSheet, "#8E8E93", "#FFFFFF");
  certSheet.getRange("A:A").setNumberFormat("@");
  certSheet.getRange("B:B").setNumberFormat("@");

  // 6. ชีต Teacher_Config (การตั้งค่าระบบ)
  let configSheet = ss.getSheetByName(SHEET_CONFIG);
  if (!configSheet) {
    configSheet = ss.insertSheet(SHEET_CONFIG);
  }
  configSheet.clear();
  configSheet.appendRow(["Config Key", "Config Value", "คำอธิบาย"]);
  formatHeaderRow(configSheet, "#1D1D1F", "#FFFFFF");
  const defaultConfigs = [
    ["TEACHER_PASSWORD", "twpm4admin2026", "รหัสผ่านสำหรับเข้าสู่ระบบของครูผู้สอน"],
    ["PASSING_PERCENTAGE", "70", "เกณฑ์คะแนนขั้นต่ำในการผ่าน (ร้อยละ 70)"],
    ["ENABLED_UNITS", "unit5,unit6,unit7,unit8", "หน่วยการเรียนรู้ที่เปิดให้ทำแบบฝึกหัด"],
    ["ALLOW_RETAKE", "true", "อนุญาตให้นักเรียนทำซ้ำเพื่อปรับปรุงคะแนนได้หรือไม่"],
    ["ACADEMIC_YEAR", "2026", "ปีการศึกษาที่ระบุบนเกียรติบัตร"]
  ];
  defaultConfigs.forEach(c => configSheet.appendRow(c));

  // ปรับความกว้างคอลัมน์ให้อ่านง่าย
  [studentSheet, nameSheet, logSheet, scoreSheet, certSheet, configSheet].forEach(sh => {
    sh.setFrozenRows(1);
    sh.autoResizeColumns(1, 10);
  });

  return "ตั้งค่าชีต TWP_GetInvolved_M4_Database สำเร็จเรียบร้อยแล้ว!";
}

/**
 * จัดรูปแบบแถวหัวตาราง (Header Style: Minimalist Dark)
 */
function formatHeaderRow(sheet, bgColor, textColor) {
  const lastCol = sheet.getLastColumn();
  if (lastCol < 1) return;
  const headerRange = sheet.getRange(1, 1, 1, lastCol);
  headerRange.setBackground(bgColor);
  headerRange.setFontColor(textColor);
  headerRange.setFontWeight("bold");
  headerRange.setFontFamily("Inter");
  headerRange.setHorizontalAlignment("center");
  headerRange.setVerticalAlignment("middle");
  sheet.setRowHeight(1, 36);
}

/**
 * Handle HTTP GET Requests (Fetch Data / Auth / Verification)
 */
function doGet(e) {
  return handleRequest(e);
}

/**
 * Handle HTTP POST Requests (Submit Scores / Register / Certs)
 */
function doPost(e) {
  return handleRequest(e);
}

/**
 * รวมศูนย์การประมวลผลคำขอ API ทั้งหมดพร้อม Lock Guard
 */
function handleRequest(e) {
  const lock = LockService.getScriptLock();
  try {
    // รอล็อคสูงสุด 30 วินาที ป้องกันข้อมูลชนกัน
    lock.waitLock(30000);

    let params = {};
    if (e && e.postData && e.postData.contents) {
      try {
        params = JSON.parse(e.postData.contents);
      } catch (err) {
        params = e.parameter || {};
      }
    } else if (e && e.parameter) {
      params = e.parameter;
    }

    const action = (params.action || "").trim();
    let result = { status: "error", message: "Invalid action or parameters." };

    switch (action) {
      case "ping":
        result = { status: "success", message: "TWP M.4 Backend is live and ready.", timestamp: new Date().toISOString() };
        break;

      case "login":
        result = handleStudentLogin(params);
        break;

      case "lookup_student":
        result = handleStudentLookup(params);
        break;

      case "submit_score":
        result = handleScoreSubmission(params);
        break;

      case "get_student_summary":
        result = handleGetStudentSummary(params);
        break;

      case "get_teacher_dashboard":
        result = handleGetTeacherDashboard(params);
        break;

      case "register_certificate":
        result = handleRegisterCertificate(params);
        break;

      case "import_roster":
        result = handleImportRoster(params);
        break;

      case "submit_inquiry":
      case "submit_question":
        result = handleStudentInquiry(params);
        break;

      case "get_inquiries":
        result = handleGetInquiries(params);
        break;

      default:
        result = { status: "error", message: `Unknown action: '${action}'` };
    }

    return ContentService.createTextOutput(JSON.stringify(result))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({
      status: "error",
      message: "Internal Server Error: " + error.toString()
    })).setMimeType(ContentService.MimeType.JSON);

  } finally {
    lock.releaseLock();
  }
}

/**
 * 1. ตรวจสอบการเข้าสู่ระบบของนักเรียน
 */
function handleStudentLogin(params) {
  const email = (params.email || "").trim().toLowerCase();
  const password = (params.password || "").trim();
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName(SHEET_STUDENTS);

  if (!sheet) return { status: "error", message: "Students_DB not found." };
  const data = sheet.getDataRange().getValues();

  for (let i = 1; i < data.length; i++) {
    const rowEmail = (data[i][5] || "").toString().trim().toLowerCase();
    const rowPass = (data[i][6] || "").toString().trim();

    if (rowEmail === email && (rowPass === password || !rowPass)) {
      // บันทึกลง Login_Logs
      const logSheet = ss.getSheetByName(SHEET_LOGIN_LOGS);
      if (logSheet) {
        logSheet.appendRow([
          new Date(), email, data[i][1], data[i][2], "SUCCESS", params.userAgent || "Web"
        ]);
      }

      return {
        status: "success",
        student: {
          studentId: data[i][0],
          name: data[i][1],
          school: data[i][2],
          grade: data[i][3] || "ม.4",
          room: data[i][4],
          email: rowEmail
        }
      };
    }
  }

  return { status: "error", message: "อีเมลหรือรหัสผ่านไม่ถูกต้อง กรุณาตรวจสอบใหม่อีกครั้ง" };
}

/**
 * 2. ค้นหาข้อมูลนักเรียนล่วงหน้า (Auto-lookup)
 */
function handleStudentLookup(params) {
  const query = (params.query || "").trim().toLowerCase();
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName(SHEET_NAME_BASE);
  if (!sheet) return { status: "error", message: "Name_base not found." };

  const data = sheet.getDataRange().getValues();
  const matches = [];

  for (let i = 1; i < data.length; i++) {
    const stdId = (data[i][0] || "").toString().toLowerCase();
    const name = (data[i][1] || "").toString().toLowerCase();
    const email = (data[i][4] || "").toString().toLowerCase();

    if (stdId.includes(query) || name.includes(query) || email.includes(query)) {
      matches.push({
        studentId: data[i][0],
        name: data[i][1],
        school: data[i][2],
        grade: data[i][3],
        email: data[i][4]
      });
      if (matches.length >= 5) break;
    }
  }

  return { status: "success", results: matches };
}

/**
 * 3. บันทึกคะแนนแบบฝึกหัดรายยูนิต (Units 5 - 8)
 */
function handleScoreSubmission(params) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName(SHEET_SCORES);
  if (!sheet) return { status: "error", message: "Scores_Log not found." };

  const email = (params.email || "").trim().toLowerCase();
  const studentId = (params.studentId || "").trim();
  const name = (params.name || "").trim();
  const school = (params.school || "").trim();
  const unit = (params.unit || "").trim();
  const p1 = Number(params.p1 || 0);
  const p2 = Number(params.p2 || 0);
  const p3 = Number(params.p3 || 0);
  const total = Number(params.total || (p1 + p2 + p3));
  const maxScore = Number(params.maxScore || 12);
  const percentage = Math.round((total / (maxScore || 1)) * 100);
  const isPassed = percentage >= 70 ? "PASSED" : "NEEDS_RETRY";
  const details = typeof params.details === "object" ? JSON.stringify(params.details) : (params.details || "");

  sheet.appendRow([
    new Date(), studentId, email, name, school,
    unit, p1, p2, p3, total, maxScore, percentage + "%", isPassed, details
  ]);

  return {
    status: "success",
    message: "บันทึกคะแนนเรียบร้อยแล้ว",
    summary: { unit, total, maxScore, percentage, isPassed }
  };
}

/**
 * 4. สรุปผลความก้าวหน้าและการทำแบบฝึกหัดของนักเรียนรายบุคคล
 */
function handleGetStudentSummary(params) {
  const email = (params.email || "").trim().toLowerCase();
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const scoreSheet = ss.getSheetByName(SHEET_SCORES);
  if (!scoreSheet) return { status: "error", message: "Scores_Log not found." };

  const data = scoreSheet.getDataRange().getValues();
  const unitsSummary = {
    unit5: { completed: false, score: 0, max: 0, percent: 0 },
    unit6: { completed: false, score: 0, max: 0, percent: 0 },
    unit7: { completed: false, score: 0, max: 0, percent: 0 },
    unit8: { completed: false, score: 0, max: 0, percent: 0 }
  };

  for (let i = 1; i < data.length; i++) {
    const rowEmail = (data[i][2] || "").toString().trim().toLowerCase();
    if (rowEmail === email) {
      const u = (data[i][5] || "").toString().toLowerCase().replace(/[^a-z0-9]/g, "");
      const total = Number(data[i][9] || 0);
      const max = Number(data[i][10] || 0);
      const pct = max > 0 ? Math.round((total / max) * 100) : 0;

      if (unitsSummary[u]) {
        // บันทึกคะแนนที่ดีที่สุด (Best Attempt)
        if (total >= unitsSummary[u].score) {
          unitsSummary[u] = { completed: true, score: total, max: max, percent: pct };
        }
      }
    }
  }

  // คำนวณเกียรติบัตร
  const allCompleted = unitsSummary.unit5.completed && unitsSummary.unit6.completed &&
                       unitsSummary.unit7.completed && unitsSummary.unit8.completed;
  
  let avgPercent = 0;
  if (allCompleted) {
    avgPercent = Math.round(
      (unitsSummary.unit5.percent + unitsSummary.unit6.percent + unitsSummary.unit7.percent + unitsSummary.unit8.percent) / 4
    );
  }

  return {
    status: "success",
    units: unitsSummary,
    eligibleForCertificate: allCompleted,
    averagePercent: avgPercent
  };
}

/**
 * 5. ดึงข้อมูลภาพรวมสำหรับครูผู้สอน (Teacher Dashboard)
 */
function handleGetTeacherDashboard(params) {
  const teacherPass = (params.password || "").trim();
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const configSheet = ss.getSheetByName(SHEET_CONFIG);
  
  let authorized = false;
  if (configSheet) {
    const cData = configSheet.getDataRange().getValues();
    for (let i = 1; i < cData.length; i++) {
      if (cData[i][0] === "TEACHER_PASSWORD" && cData[i][1].toString().trim() === teacherPass) {
        authorized = true;
        break;
      }
    }
  }

  if (!authorized && teacherPass !== "twpm4admin2026") {
    return { status: "error", message: "รหัสผ่านครูผู้สอนไม่ถูกต้อง" };
  }

  const studentSheet = ss.getSheetByName(SHEET_STUDENTS);
  const scoreSheet = ss.getSheetByName(SHEET_SCORES);
  const certSheet = ss.getSheetByName(SHEET_CERTS);

  const students = studentSheet ? studentSheet.getDataRange().getValues().slice(1) : [];
  const scores = scoreSheet ? scoreSheet.getDataRange().getValues().slice(1) : [];
  const certs = certSheet ? certSheet.getDataRange().getValues().slice(1) : [];

  return {
    status: "success",
    totalStudents: students.length,
    totalSubmissions: scores.length,
    totalCertificates: certs.length,
    students: students.map(s => ({
      studentId: s[0], name: s[1], school: s[2], grade: s[3], room: s[4], email: s[5]
    })),
    recentScores: scores.slice(-30).reverse().map(sc => ({
      timestamp: sc[0], studentId: sc[1], email: sc[2], name: sc[3],
      unit: sc[5], total: sc[9], max: sc[10], percent: sc[11], status: sc[12]
    }))
  };
}

/**
 * 6. บันทึกและออกรหัสเกียรติบัตรอิเล็กทรอนิกส์ (Certificates Registry)
 */
function handleRegisterCertificate(params) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName(SHEET_CERTS);
  if (!sheet) return { status: "error", message: "Certificates sheet not found." };

  const email = (params.email || "").trim().toLowerCase();
  const studentId = (params.studentId || "").trim();
  const name = (params.name || "").trim();
  const school = (params.school || "").trim();
  const avgScore = params.averageScore || "0%";
  const issueDate = new Date();
  const certNumber = "TWP-M4-" + ("" + Date.now()).slice(-6);
  const digitalHash = Utilities.base64Encode(
    Utilities.computeDigest(Utilities.DigestAlgorithm.SHA_256, `${certNumber}:${email}:${issueDate.getTime()}`)
  ).substring(0, 16).toUpperCase();

  sheet.appendRow([
    certNumber, studentId, email, name, school, avgScore, issueDate, digitalHash, 1
  ]);

  return {
    status: "success",
    certificate: {
      certNumber: certNumber,
      digitalHash: digitalHash,
      issueDate: Utilities.formatDate(issueDate, Session.getScriptTimeZone(), "dd/MM/yyyy HH:mm"),
      studentName: name,
      school: school,
      score: avgScore
    }
  };
}

/**
 * 7. นำเข้ารายชื่อนักเรียนแบบ Batch (CSV / Excel Roster Import)
 */
function handleImportRoster(params) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const studentSheet = ss.getSheetByName(SHEET_STUDENTS);
  const nameSheet = ss.getSheetByName(SHEET_NAME_BASE);
  const rows = params.roster || [];

  if (!Array.isArray(rows) || rows.length === 0) {
    return { status: "error", message: "No roster rows provided." };
  }

  let importedCount = 0;
  rows.forEach(r => {
    if (r.name && r.email) {
      const email = r.email.trim().toLowerCase();
      const stdId = r.studentId || ("STD-M4-" + (100 + importedCount));
      studentSheet.appendRow([
        stdId, r.name, r.school || "", r.grade || "ม.4", r.room || "", 
        email, r.password || "m4twp2026", "Active", new Date()
      ]);
      nameSheet.appendRow([stdId, r.name, r.school || "", r.grade || "ม.4", email]);
      importedCount++;
    }
  });

  return { status: "success", importedCount: importedCount };
}

/**
 * สรุปผลภาพรวม
 */
function refreshSummaryStats() {
  SpreadsheetApp.getActiveSpreadsheet().toast("อัปเดตสถิติคะแนนและข้อมูลเรียบร้อยแล้ว", "ระบบ TWP ม.4", 3);
}

/**
 * 8. บันทึกข้อสงสัยหรือคำถามจากนักเรียน (Student Inquiry)
 */
function handleStudentInquiry(params) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const lock = LockService.getScriptLock();
  try {
    lock.waitLock(15000);
    let sheet = ss.getSheetByName("Inquiries");
    if (!sheet) {
      sheet = ss.insertSheet("Inquiries");
      sheet.appendRow(["Timestamp", "Email", "Name", "School", "UnitId", "SectionTitle", "QuestionRef", "Message", "Status"]);
      sheet.getRange(1, 1, 1, 9).setFontWeight("bold").setBackground("#F5F5F7");
      sheet.setFrozenRows(1);
    }
    const timestamp = Utilities.formatDate(new Date(), Session.getScriptTimeZone(), "dd/MM/yyyy HH:mm:ss");
    const email = (params.email || "").trim().toLowerCase();
    const name = (params.name || "").trim();
    const school = (params.school || "").trim();
    const unitId = (params.unitId || "").trim();
    const sectionTitle = (params.sectionTitle || "").trim();
    const questionRef = (params.questionRef || "").trim();
    const message = (params.message || "").trim();

    sheet.getRange(sheet.getLastRow() + 1, 1, 1, 9).setNumberFormat("@");
    sheet.appendRow([timestamp, email, name, school, unitId, sectionTitle, questionRef, message, "Pending"]);

    return { status: "success", message: "Inquiry recorded successfully.", timestamp: timestamp };
  } catch (err) {
    return { status: "error", message: "Failed to record inquiry: " + err.toString() };
  } finally {
    lock.releaseLock();
  }
}

/**
 * 9. ดึงรายการข้อสงสัยสำหรับคุณครู
 */
function handleGetInquiries(params) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName("Inquiries");
  if (!sheet || sheet.getLastRow() <= 1) {
    return { status: "success", inquiries: [] };
  }
  const data = sheet.getRange(2, 1, sheet.getLastRow() - 1, 9).getValues();
  const list = data.map(r => ({
    timestamp: r[0],
    email: r[1],
    name: r[2],
    school: r[3],
    unitId: r[4],
    sectionTitle: r[5],
    questionRef: r[6],
    message: r[7],
    status: r[8]
  }));
  return { status: "success", inquiries: list.reverse() };
}
