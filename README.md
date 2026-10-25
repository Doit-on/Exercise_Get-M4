# Get INVOLVED! ม.4 - แบบฝึกหัดภาษาอังกฤษออนไลน์ (ทวพ. - TWP)
### เวอร์ชัน 2.0.0 (Apple Minimalist Edition, University-Prep Standard & Google Sheets Sync)

เว็บแอปพลิเคชันแบบฝึกหัดภาษาอังกฤษออนไลน์ ระดับชั้นมัธยมศึกษาปีที่ 4 (ม.4) พัฒนาตามหลักสูตรหนังสือเรียน **Get INVOLVED!** โดย **บริษัท สำนักพิมพ์ ไทยวัฒนาพานิช จำกัด (TWP)** 
ปรับปรุงดีไซน์ใหม่ทั้งหมดในสไตล์ **Apple Minimalist (Cupertino Aesthetics)** โทนสีขาว-เทา เรียบหรู สะอาดตา ไร้สิ่งรบกวนสมาธิ พร้อมปุ่มกดที่มีความชัดลึกแบบ Tactile 3D Feel ลอยตัวสวยงาม เหมาะสำหรับนักเรียนระดับมัธยมศึกษาตอนปลายที่กำลังเตรียมความพร้อมสู่ระดับมหาวิทยาลัย

รองรับเนื้อหาตาม **แผนการสอนและใบงานสรุปคลิปวิดีโอ ม.4 ภาคเรียนที่ 2 (Unit 5 - Unit 8)**:
- **Unit 5: Art, Photography & Passive Voice** (งานศิลปะ Nick Gentry, ประติมากรรม The Awakening, ประวัติภาพถ่ายเซลฟี่ปี 1914, และ Past/Present Passive Voice)
- **Unit 6: Let's Go! (Travel & Future Tenses)** (คำศัพท์ภาษาถิ่นสก็อตแลนด์, สถาบันฟิสิกส์ CERN เจนีวา, Extreme Adjectives, และ 4 Future Forms)
- **Unit 7: Choices (Technology & Conditionals)** (ความปลอดภัยในโลกไซเบอร์, สถิติเวลาหน้าจอ Screen Time, Conditionals Types 1-3, และการใช้ Unless)
- **Unit 8: In the News (Media & Reported Speech)** (การวิเคราะห์ข่าวจริง/ข่าวปลอม Fake News, สื่อมวลชน, Reported Speech และ Reporting Verbs)

---

## 🌟 จุดเด่นและระบบความปลอดภัยที่ถอดบทเรียนจาก ม.1 - ม.3

1. **สไตล์ดีไซน์ระดับสากล (Apple Minimalist & Tactile Depth)**:
   - โทนสีขาว-เทาบริสุทธิ์ (`#F5F5F7`, `#FFFFFF`, `#E5E5EA`) ตัดกับ Titanium Slate และ Apple Accent Blue (`#0071E3`)
   - ปุ่มกดแบบ **Layered Tactile Shadow** มีมิติความลึกและการยุบตัวเสมือนจริง (`translateY(1px) scale(0.985)`)
   - บัตรเนื้อหาแบบ **Frosted Glass** พร้อมเส้นขอบบางเฉียบ (Hairline 1px border) สบายตา ไม่ทำให้ตาล้า

2. **แยกแยะภาษาชัดเจน ไม่ปะปนคำเฉลย (Strict Academic Integrity)**:
   - ตัวเลือกข้อสอบ (Choices) และการจับคู่คำศัพท์ (Matching) เป็น **ภาษาอังกฤษล้วน 100%** ไม่นำคำแปลภาษาไทยไปใส่ในตัวเลือกให้ผู้เรียนเดาทางได้
   - คำอธิบายเฉลยภาษาไทย (Tutor Coaching Insight) อธิบายหลักการทางไวยากรณ์และจุดสังเกตอย่างละเอียดถูกต้อง แสดงเฉพาะหลังจากผู้เรียนทำข้อสอบแล้วเท่านั้น

3. **ระบบความปลอดภัยและการบันทึกข้อมูล (Google Apps Script & Concurrency Lock)**:
   - ป้องกันข้อมูลชนกัน (Race Conditions) เมื่อนักเรียนส่งงานพร้อมกันด้วย `LockService.getScriptLock()` รอคิว 30 วินาที
   - ป้องกันรหัสนักเรียนเลขศูนย์นำหน้าหาย ด้วยการบังคับ Format เป็น Plain Text (`@`)
   - ป้องกันข้อผิดพลาดจากการพิมพ์ตัวพิมพ์ใหญ่หรือเคาะวรรคด้วย `.trim().toLowerCase()` ในระบบล็อกอินและอีเมล

4. **ระบบเกียรติบัตรอิเล็กทรอนิกส์ (Progressive E-Certificate 2.0)**:
   - ออกเกียรติบัตรอัตโนมัติเมื่อทำแบบฝึกหัดครบทั้ง 4 Units (5, 6, 7, 8)
   - ป้องกันปัญหาสระลอยด้วย `document.fonts.ready` ก่อนวาด Canvas
   - เรนเดอร์ด้วยความละเอียด **High-DPI 2X Canvas** คมชัดระดับสิ่งพิมพ์ A4 เมื่อบันทึกเป็น PDF หรือรูปภาพ

5. **ระบบบริหารจัดการสำหรับครูผู้สอน (Teacher Dashboard)**:
   - ตรวจสอบคะแนนแบบเรียลไทม์ ซิงก์สองทางกับ Google Sheets `TWP_GetInvolved_M4_Database`
   - คัดกรองคะแนนรายหน่วยการเรียนรู้ ค้นหาชื่อและโรงเรียน
   - ส่งออกข้อมูลเป็น **Excel (.xlsx)** หรือ **CSV** ได้ทันที พร้อมระบบนำเข้ารายชื่อนักเรียน (Roster Import)

---

## 📋 ขั้นตอนการติดตั้ง Google Sheet: `TWP_GetInvolved_M4_Database`

### ขั้นที่ 1: สร้าง Google Sheets ใหม่
1. ไปที่ [Google Sheets](https://sheets.new) แล้วสร้างสเปรดชีตใหม่
2. ตั้งชื่อสเปรดชีตว่า: **`TWP_GetInvolved_M4_Database`**

### ขั้นที่ 2: ติดตั้ง Apps Script
1. ไปที่แถบเมนูด้านบนของ Google Sheet -> คลิก **"ส่วนขยาย" (Extensions)** -> **"Apps Script"**
2. ลบโค้ดเริ่มต้นทั้งหมดในไฟล์ `Code.gs` ออก
3. เปิดไฟล์ `Code.gs` (หรือ `google-apps-script.txt` ในโฟลเดอร์นี้) คัดลอกโค้ดทั้งหมดมาวาง
4. กดไอคอน **"บันทึกโครงการ" (Save)** (รูปแผ่นดิสก์ หรือกด Ctrl + S)

### ขั้นที่ 3: สั่งรัน Setup เพื่อสร้างโครงสร้าง 6 ตารางอัตโนมัติ
1. ที่แถบเครื่องมือด้านบน เลือกฟังก์ชัน **`setupAllSheets`**
2. คลิกปุ่ม **"เรียกใช้" (Run)**
3. ให้สิทธิ์การเข้าถึง (Authorization Required) ตามขั้นตอนความปลอดภัยของ Google
4. เมื่อรันเสร็จ ระบบจะสร้างชีตให้อัตโนมัติครบ 6 แผ่น:
   - `Students_DB` : ฐานข้อมูลนักเรียน ม.4 (Student ID, ชื่อ-สกุล, โรงเรียน, อีเมล, รหัสผ่าน)
   - `Name_base` : ดัชนีสารบบสำหรับค้นหาชื่อและเติมข้อมูลอัตโนมัติ
   - `Login_Logs` : บันทึกประวัติการเข้าสู่ระบบ
   - `Scores_Log` : บันทึกคะแนนละเอียดแยก Part 1 (Video), Part 2 (Vocab), Part 3 (Grammar)
   - `Certificates` : ทะเบียนรหัสเกียรติบัตรและ Digital Hash
   - `Teacher_Config` : รหัสผ่านครูผู้สอนและการตั้งค่าระบบ

### ขั้นที่ 4: การนำไปใช้งานเป็นเว็บแอป (Deploy Web App)
1. คลิกปุ่มสีน้ำเงิน **"ทำให้ใช้งานได้" (Deploy)** ด้านบนขวา -> เลือก **"การทำให้ใช้งานได้รายการใหม่" (New deployment)**
2. คลิกรูปฟันเฟือง -> เลือก **"เว็บแอป" (Web app)**
3. ตั้งค่าดังนี้:
   - **คำอธิบาย (Description)**: `TWP M4 University-Prep Backend v2.0`
   - **ดำเนินการในฐานะ (Execute as)**: **`ฉัน` (Me / เจ้าของชีต)**
   - **ผู้ที่มีสิทธิ์เข้าถึง (Who has access)**: **`ทุกคน` (Anyone)** *(สำคัญมาก ต้องเลือก Anyone)*
4. คลิกปุ่ม **"ทำให้ใช้งานได้" (Deploy)**
5. คัดลอก **URL เว็บแอป (Web app URL)** นำมาวางในหน้าเว็บแอป (ปุ่มตั้งค่าระบบ Google Script URL ใน Teacher Dashboard)

---

## 📁 โครงสร้างไฟล์ในโครงการ ม.4

```
สรุปคลิป แบบฝึกหัด M.4/
├── Code.gs                      # โค้ด Google Apps Script สำหรับ TWP_GetInvolved_M4_Database
├── google-apps-script.js        # โค้ด Backend API รูปแบบ JavaScript
├── google-apps-script.txt       # โค้ด Backend API สำหรับคัดลอกสะดวก
├── m4_units_data.js             # ฐานข้อมูลแบบฝึกหัด Units 5-8 (ข้อสอบภาษาอังกฤษ + เฉลยภาษาไทย)
├── preview_ui_m4.html           # ไฟล์พรีวิวทดสอบ UX/UI ใหม่สไตล์ Apple Minimalist
├── students_roster_template.csv # ไฟล์แม่แบบนำเข้ารายชื่อนักเรียน ม.4
├── README.md                    # คู่มือและคำอธิบายระบบ
└── assets/
    ├── get-involved-logo.png    # โลโก้ Get INVOLVED!
    ├── twp-logo.png             # โลโก้สำนักพิมพ์ไทยวัฒนาพานิช (TWP)
    └── xlsx.full.min.js         # ไลบรารี SheetJS สำหรับอ่านไฟล์ Excel ในเบราว์เซอร์
```

---

**พัฒนาโดย**: โครงการพัฒนานวัตกรรมการเรียนรู้ดิจิทัล  
**บริษัท สำนักพิมพ์ ไทยวัฒนาพานิช จำกัด (TWP)** &copy; 2026 สงวนลิขสิทธิ์
