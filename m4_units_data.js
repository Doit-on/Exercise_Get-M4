// =========================================================================
// Get INVOLVED! M.4 Curriculum Data (Units 5, 6, 7, 8)
// บริษัท สำนักพิมพ์ ไทยวัฒนาพานิช จำกัด (TWP)
// ถอดบทเรียนและข้อสอบตรงจากเอกสารใบงานสรุปคลิปวิดีโอ ม.4 ภาคเรียนที่ 2
// กฎเหล็ก:
// 1. ตัวเลือกข้อสอบและคำศัพท์เป็นภาษาอังกฤษล้วน 100% ไม่ปะปนคำแปลภาษาไทยในโจทย์/ตัวเลือก
// 2. คำอธิบายเฉลยภาษาไทย (explanation) ชัดเจน ละเอียด ถูกต้องตามหลักวิชาการ
// =========================================================================

const M4_UNITS_DATA = {
  "unit5": {
    "id": "unit5",
    "name": "Unit 5: Art, Photography & Passive Voice",
    "thaiName": "บทที่ 5: ศิลปะ การถ่ายภาพ และ Passive Voice",
    "description": "สำรวจผลงานศิลปะของ Nick Gentry, ประติมากรรม The Awakening, ประวัติศาสตร์ภาพถ่ายเซลฟี่ และการประยุกต์ใช้ Past & Present Passive Voice",
    "sections": [
      {
        "title": "Part 1: Video Content Comprehension",
        "description": "Instructions: Choose the correct answer based on Unit 5 videos. (เลือกคำตอบที่ถูกต้องที่สุดจากเนื้อหาวิดีโอ)",
        "type": "multiple_choice",
        "questions": [
          {
            "id": "u5_p1_1",
            "prompt": "1. What materials does Nick Gentry use to create his portraits?",
            "choices": [
              "a) Plastic bottles and cans",
              "b) Old computer disks, camera films, and X-rays",
              "c) Newspaper and cardboard"
            ],
            "answer": "b) Old computer disks, camera films, and X-rays",
            "explanation": "ตอบ b: ในคลิป Vocabulary Video 'A different kind of portrait' ระบุว่า Nick Gentry สร้างสรรค์ผลงานภาพเหมือน (portraits) โดยนำเทคโนโลยีและวัสดุเก่าที่คนทิ้งแล้ว เช่น แผ่นดิสก์คอมพิวเตอร์ ฟิล์มถ่ายรูป และแผ่นเอกซเรย์มาใช้เป็นผืนผ้าใบ"
          },
          {
            "id": "u5_p1_2",
            "prompt": "2. Where is the giant sculpture 'The Awakening' located?",
            "choices": [
              "a) London, UK",
              "b) Maryland, USA",
              "c) Paris, France"
            ],
            "answer": "b) Maryland, USA",
            "explanation": "ตอบ b: ในคลิป Real-World Speaking Video ระบุว่าประติมากรรมรูปยักษ์ 'The Awakening' ตั้งตระหง่านอยู่ ณ บริเวณชายหาดในรัฐแมรีแลนด์ (Maryland) ประเทศสหรัฐอเมริกา"
          },
          {
            "id": "u5_p1_3",
            "prompt": "3. Who took a mirror selfie in 1914 using a Kodak Brownie camera?",
            "choices": [
              "a) Anastasia Nikolaevna",
              "b) J. Seward Johnson",
              "c) Nick Gentry"
            ],
            "answer": "a) Anastasia Nikolaevna",
            "explanation": "ตอบ a: ในคลิป Project Video ระบุว่า Anastasia Nikolaevna เจ้าหญิงรัสเซียพระชันษา 13 ปี ทรงเป็นผู้ถ่ายภาพเซลฟี่หน้ากระจกเงาโดยใช้กล้อง Kodak Brownie เมื่อปี ค.ศ. 1914"
          }
        ]
      },
      {
        "title": "Part 2: Vocabulary Matching",
        "description": "Instructions: Match the words (1–5) with their correct meanings (a–e). (จับคู่คำศัพท์กับความหมายภาษาอังกฤษที่ถูกต้อง)",
        "type": "matching",
        "options": [
          { "code": "a", "label": "To change or improve a picture digitally" },
          { "code": "b", "label": "Looking attractive in photographs" },
          { "code": "c", "label": "A three-legged support used for a camera" },
          { "code": "d", "label": "Clear and sharp image" },
          { "code": "e", "label": "To become extremely popular on the internet very quickly" }
        ],
        "questions": [
          {
            "id": "u5_p2_1",
            "term": "1. photogenic",
            "answer": "b",
            "explanation": "photogenic = Looking attractive in photographs (ถ่ายรูปขึ้น / ดูดีเมื่อถูกบันทึกภาพ)"
          },
          {
            "id": "u5_p2_2",
            "term": "2. tripod",
            "answer": "c",
            "explanation": "tripod = A three-legged support used for a camera (ขาตั้งกล้องสามขา)"
          },
          {
            "id": "u5_p2_3",
            "term": "3. retouch",
            "answer": "a",
            "explanation": "retouch = To change or improve a picture digitally (การตัดต่อหรือรีทัชแก้ไขตกแต่งภาพด้วยโปรแกรมนวัตกรรมดิจิทัล)"
          },
          {
            "id": "u5_p2_4",
            "term": "4. go viral",
            "answer": "e",
            "explanation": "go viral = To become extremely popular on the internet very quickly (แพร่กระจายหรือได้รับความนิยมอย่างรวดเร็วบนโลกออนไลน์)"
          },
          {
            "id": "u5_p2_5",
            "term": "5. in focus",
            "answer": "d",
            "explanation": "in focus = Clear and sharp image (ภาพมีความคมชัดและอยู่ในระยะโฟกัสที่ถูกต้อง)"
          }
        ]
      },
      {
        "title": "Part 3: Grammar Practice (Passive Voice)",
        "description": "Instructions: Complete with the correct Passive form or choose the correct word. (เติมรูปกริยา Passive Voice หรือเลือกคำที่ถูกต้อง)",
        "type": "fill_in",
        "questions": [
          {
            "id": "u5_p3_1",
            "prompt": "1. J. Seward Johnson created the sculpture 'The Awakening'. → The sculpture 'The Awakening' ________________________ by J. Seward Johnson.",
            "answer": "was created",
            "acceptableAnswers": ["was created"],
            "hint": "Past Passive: was/were + V.3",
            "explanation": "เฉลย: was created | คำอธิบาย: ประธานของประโยครองรับคือ 'The sculpture' ซึ่งเป็นเอกพจน์ และเหตุการณ์การสร้างเกิดขึ้นในอดีต (Past) จึงต้องใช้โครงสร้าง Past Passive: was + V.3 (created)"
          },
          {
            "id": "u5_p3_2",
            "prompt": "2. Millions of selfies (take) ________________________ by teenagers every day. (Present Passive)",
            "answer": "are taken",
            "acceptableAnswers": ["are taken"],
            "hint": "Present Passive: is/am/are + V.3",
            "explanation": "เฉลย: are taken | คำอธิบาย: ประธานคือ 'Millions of selfies' เป็นคำนามพหูพจน์ และระบุว่าเกิดขึ้นทุกวัน (every day) จึงใช้โครงสร้าง Present Passive: are + V.3 (taken)"
          },
          {
            "id": "u5_p3_3",
            "prompt": "3. Anastasia Nikolaevna (took / was taken) ________________________ the first mirror selfie in 1914.",
            "answer": "took",
            "acceptableAnswers": ["took"],
            "hint": "Active Voice (ประธานเป็นผู้ลงมือกระทำเอง)",
            "explanation": "เฉลย: took | คำอธิบาย: ในประโยคนี้เจ้าหญิง Anastasia Nikolaevna เป็นผู้ลงมือถ่ายภาพด้วยพระองค์เอง (Active Voice) มิใช่ผู้ถูกกระทำ จึงต้องใช้รูป Past Simple กริยาช่อง 2 คือ took"
          },
          {
            "id": "u5_p3_4",
            "prompt": "4. The photo is clear because the subject is (in focus / out of focus) ________________________.",
            "answer": "in focus",
            "acceptableAnswers": ["in focus"],
            "hint": "in focus vs out of focus",
            "explanation": "เฉลย: in focus | คำอธิบาย: ความหมายของประโยคระบุว่า 'ภาพมีความคมชัด (clear)' แสดงว่าวัตถุอยู่ในระยะโฟกัสที่ถูกต้อง จึงใช้คำว่า in focus (หากใช้ out of focus จะหมายถึงภาพเบลอหลุดโฟกัส)"
          }
        ]
      }
    ]
  },

  "unit6": {
    "id": "unit6",
    "name": "Unit 6: Let’s Go! (Travel & Future Tenses)",
    "thaiName": "บทที่ 6: การเดินทางท่องเที่ยว และรูปประโยคอนาคต (Future Tenses)",
    "description": "เรียนรู้คำศัพท์วัฒนธรรมสก็อตแลนด์ สถาบันวิทยาศาสตร์ CERN เจนีวา คำคุณศัพท์บอกอารมณ์และความรู้สึกขั้นสุด (Extreme Adjectives) และการแยกแยะ Future Forms",
    "sections": [
      {
        "title": "Part 1: Video Content Comprehension",
        "description": "Instructions: Choose the correct answer based on Unit 6 videos. (เลือกคำตอบที่ถูกต้องที่สุดจากเนื้อหาวิดีโอ)",
        "type": "multiple_choice",
        "questions": [
          {
            "id": "u6_p1_1",
            "prompt": "1. In the Vocabulary video, what does the Scots word 'burn' mean?",
            "choices": [
              "a) A large castle",
              "b) A small river or stream",
              "c) A high mountain"
            ],
            "answer": "b) A small river or stream",
            "explanation": "ตอบ b: ในคลิป Vocabulary Video 'Taking the high road' ตัวละคร Mon ได้อธิบายว่าคำว่า 'burn' ในภาษาถิ่นสก็อตแลนด์ (Scots) หมายถึง แม่น้ำสายเล็กหรือลำธาร (a small river) ส่วนคำว่า 'loch' หมายถึง ทะเลสาบ"
          },
          {
            "id": "u6_p1_2",
            "prompt": "2. In the Real-World Speaking video, what type of ticket is Kate buying?",
            "choices": [
              "a) A train ticket",
              "b) A cable car ticket",
              "c) A hot air balloon ticket"
            ],
            "answer": "b) A cable car ticket",
            "explanation": "ตอบ b: ในคลิป Real-World Speaking Video ตัวละคร Kate ได้เข้าไปติดต่อเคาน์เตอร์จำหน่ายตั๋วเพื่อซื้อตั๋วโดยสารกระเช้าลอยฟ้า (cable car)"
          },
          {
            "id": "u6_p1_3",
            "prompt": "3. In the Project video, which place do Oliver and Amelia plan to visit for their Physics class?",
            "choices": [
              "a) Frida Kahlo Museum in Mexico",
              "b) Shakespeare’s Globe in London",
              "c) CERN in Geneva, Switzerland"
            ],
            "answer": "c) CERN in Geneva, Switzerland",
            "explanation": "ตอบ c: ในคลิป Project Video ตัวละคร Oliver และ Amelia นำเสนอว่าจะเดินทางไปทัศนศึกษาองค์กรเพื่อการวิจัยนิวเคลียร์แห่งยุโรป (CERN) ณ นครเจนีวา ประเทศสวิตเซอร์แลนด์ สำหรับวิชาฟิสิกส์ เพื่อศึกษาเรื่องเครื่องเร่งอนุภาค"
          }
        ]
      },
      {
        "title": "Part 2: Extreme Adjectives Matching",
        "description": "Instructions: Match the normal adjectives (1–5) with their strong/extreme forms (a–e). (จับคู่คำคุณศัพท์ทั่วไปกับคำคุณศัพท์ขั้นสุด)",
        "type": "matching",
        "options": [
          { "code": "a", "label": "exhausted" },
          { "code": "b", "label": "huge" },
          { "code": "c", "label": "ancient" },
          { "code": "d", "label": "freezing" },
          { "code": "e", "label": "delighted" }
        ],
        "questions": [
          {
            "id": "u6_p2_1",
            "term": "1. very cold",
            "answer": "d",
            "explanation": "very cold = freezing (หนาวเหน็บ / เย็นจัดจนเป็นน้ำแข็ง)"
          },
          {
            "id": "u6_p2_2",
            "term": "2. very tired",
            "answer": "a",
            "explanation": "very tired = exhausted (เหนื่อยล้าจนหมดเรี่ยวแรง)"
          },
          {
            "id": "u6_p2_3",
            "term": "3. very big",
            "answer": "b",
            "explanation": "very big = huge (มหึมา / ใหญ่โตมโหฬาร)"
          },
          {
            "id": "u6_p2_4",
            "term": "4. very old",
            "answer": "c",
            "explanation": "very old = ancient (เก่าแก่โบราณ / มีอายุยืนยาวนับร้อยนับพันปี)"
          },
          {
            "id": "u6_p2_5",
            "term": "5. very happy",
            "answer": "e",
            "explanation": "very happy = delighted (ปลาบปลื้มใจ / ดีใจอย่างยิ่ง)"
          }
        ]
      },
      {
        "title": "Part 3: Grammar Practice (Future Tenses & Future Progressive)",
        "description": "Instructions: Complete the sentences with the correct future form of the verbs in parentheses. (เติมรูปกริยาบอกอนาคตที่ถูกต้องตามบริบท)",
        "type": "fill_in",
        "questions": [
          {
            "id": "u6_p3_1",
            "prompt": "1. Look at those black clouds! It ________________________ (rain) soon. (Plan/Intention/Prediction based on evidence)",
            "answer": "is going to rain",
            "acceptableAnswers": ["is going to rain"],
            "hint": "be going to + V.1 (คาดการณ์โดยมีหลักฐานประจักษ์)",
            "explanation": "เฉลย: is going to rain | คำอธิบาย: การคาดคะเนที่มีหลักฐานชัดเจนตรงหน้าในปัจจุบัน (เมฆดำทะมึน) ตามหลักไวยากรณ์สากลใช้โครงสร้าง be going to + V.1 จึงเป็น is going to rain"
          },
          {
            "id": "u6_p3_2",
            "prompt": "2. A: The phone is ringing! B: Don't worry, I ________________________ (answer) it! (Spontaneous decision)",
            "answer": "will answer",
            "acceptableAnswers": ["will answer", "'ll answer"],
            "hint": "will + V.1 (การตัดสินใจฉับพลันในขณะพูด)",
            "explanation": "เฉลย: will answer | คำอธิบาย: เป็นการตัดสินใจทำทันทีโดยไม่ได้วางแผนล่วงหน้า (Spontaneous decision) ในขณะที่ได้ยินเสียงโทรศัพท์ดัง จึงใช้ will + V.1"
          },
          {
            "id": "u6_p3_3",
            "prompt": "3. Next week at this time, we ________________________ (fly) over the Highlands of Scotland. (Future Progressive)",
            "answer": "will be flying",
            "acceptableAnswers": ["will be flying"],
            "hint": "Future Progressive: will be + V-ing",
            "explanation": "เฉลย: will be flying | คำอธิบาย: มีการระบุจุดเวลาที่เฉพาะเจาะจงในอนาคต (Next week at this time) ว่าการกระทำนั้นกำลังดำเนินอยู่ ณ เวลานั้น จึงใช้โครงสร้าง Future Progressive: will be + V-ing"
          },
          {
            "id": "u6_p3_4",
            "prompt": "4. The train to Inverness ________________________ (leave) at 8:30 AM tomorrow morning. (Timetable/Schedule)",
            "answer": "leaves",
            "acceptableAnswers": ["leaves"],
            "hint": "Present Simple สำหรับตารางเวลาที่เป็นทางการ",
            "explanation": "เฉลย: leaves | คำอธิบาย: กำหนดการเดินทางหรือตารางเวลาสาธารณะที่เป็นทางการ (Timetable / Fixed Schedule) กฎไวยากรณ์นิยมใช้ Present Simple (ประธาน The train เป็นเอกพจน์ กริยา leave จึงเติม s เป็น leaves)"
          }
        ]
      }
    ]
  },

  "unit7": {
    "id": "unit7",
    "name": "Unit 7: Choices (Technology & Conditionals)",
    "thaiName": "บทที่ 7: การตัดสินใจ นวัตกรรมเทคโนโลยี และ Conditionals",
    "description": "วิเคราะห์ความปลอดภัยในโลกดิจิทัล สถิติเวลาหน้าจอ (Screen Time) คำศัพท์คอมพิวเตอร์ และประโยคเงื่อนไข Conditionals Types 1, 2, 3 รวมทั้งการใช้ Unless",
    "sections": [
      {
        "title": "Part 1: Video Content Comprehension",
        "description": "Instructions: Choose the correct answer based on Unit 7 videos. (เลือกคำตอบที่ถูกต้องที่สุดจากเนื้อหาวิดีโอ)",
        "type": "multiple_choice",
        "questions": [
          {
            "id": "u7_p1_1",
            "prompt": "1. According to Libby’s Vocabulary video, what percentage of teenagers set their social media profiles to private?",
            "choices": [
              "a) 23%",
              "b) 50%",
              "c) 60%"
            ],
            "answer": "c) 60%",
            "explanation": "ตอบ c: ในคลิป Vocabulary Video ตัวละคร Libby ได้เปิดเผยข้อมูลผลสำรวจว่ามีวัยรุ่นประมาณร้อยละ 60 (60%) ที่ตั้งค่าโปรไฟล์โซเชียลมีเดียของตนเป็นแบบส่วนตัว (Private)"
          },
          {
            "id": "u7_p1_2",
            "prompt": "2. In the Real-World Speaking video, why was Alex mad at Emily?",
            "choices": [
              "a) She broke his skateboard.",
              "b) She posted a video of them online without asking him first.",
              "c) She forgot to invite him to her party."
            ],
            "answer": "b) She posted a video of them online without asking him first.",
            "explanation": "ตอบ b: ในคลิป Real-World Speaking Video ตัวละคร Alex ไม่พอใจ Emily เนื่องจากเธอได้นำคลิปวิดีโอตอนเล่นสเก็ตบอร์ดของพวกเขาไปเผยแพร่บนโลกออนไลน์โดยไม่ได้ขออนุญาตเขาก่อน"
          },
          {
            "id": "u7_p1_3",
            "prompt": "3. In the Project video, what did the survey reveal about screen time among 26 classmates?",
            "choices": [
              "a) Students spend an average of 4 to 6 hours a day using screens.",
              "b) Every student said they could live happily without technology.",
              "c) Most students use CD and DVD players every day."
            ],
            "answer": "a) Students spend an average of 4 to 6 hours a day using screens.",
            "explanation": "ตอบ a: ในคลิป Project Video ผลการสำรวจกลุ่มตัวอย่างเพื่อนร่วมชั้นจำนวน 26 คน พบว่านักเรียนใช้เวลาอยู่กับหน้าจอดิจิทัลเฉลี่ยวันละ 4 ถึง 6 ชั่วโมง (4 to 6 hours a day)"
          }
        ]
      },
      {
        "title": "Part 2: Vocabulary Matching",
        "description": "Instructions: Match the IT & Technology words (1–5) with their correct definitions (a–e). (จับคู่คำศัพท์เทคโนโลยีกับนิยามภาษาอังกฤษ)",
        "type": "matching",
        "options": [
          { "code": "a", "label": "A secret series of letters or numbers used to access a device or account" },
          { "code": "b", "label": "Controls on a social media site that allow you to decide who can see your profile" },
          { "code": "c", "label": "To transfer a file, photo, or video from your device onto the internet" },
          { "code": "d", "label": "An app or feature used for quick real-time text communication" },
          { "code": "e", "label": "To attach a label or reference to a person or location in a photo or post" }
        ],
        "questions": [
          {
            "id": "u7_p2_1",
            "term": "1. privacy settings",
            "answer": "b",
            "explanation": "privacy settings = Controls on a social media site that allow you to decide who can see your profile (การตั้งค่าความเป็นส่วนตัว)"
          },
          {
            "id": "u7_p2_2",
            "term": "2. password",
            "answer": "a",
            "explanation": "password = A secret series of letters or numbers used to access a device or account (รหัสผ่านเพื่อเข้าสู่อุปกรณ์หรือระบบ)"
          },
          {
            "id": "u7_p2_3",
            "term": "3. instant messaging",
            "answer": "d",
            "explanation": "instant messaging = An app or feature used for quick real-time text communication (ระบบส่งข้อความโต้ตอบแบบเรียลไทม์ทันที)"
          },
          {
            "id": "u7_p2_4",
            "term": "4. upload",
            "answer": "c",
            "explanation": "upload = To transfer a file, photo, or video from your device onto the internet (การอัปโหลดส่งไฟล์ขึ้นสู่เซิร์ฟเวอร์ออนไลน์)"
          },
          {
            "id": "u7_p2_5",
            "term": "5. tag",
            "answer": "e",
            "explanation": "tag = To attach a label or reference to a person or location in a photo or post (การติดแท็กระบุตัวบุคคลหรือตำแหน่ง)"
          }
        ]
      },
      {
        "title": "Part 3: Grammar Practice (Conditionals & Unless)",
        "description": "Instructions: Complete or rewrite the sentences according to the specified conditional type. (เติมประโยคเงื่อนไขหรือเขียนใหม่โดยใช้ Unless)",
        "type": "fill_in",
        "questions": [
          {
            "id": "u7_p3_1",
            "prompt": "1. If you ________________________ (not change) your password, your account won't be safe. (First Conditional)",
            "answer": "don't change",
            "acceptableAnswers": ["don't change", "do not change"],
            "hint": "If + Present Simple, will + V.1",
            "explanation": "เฉลย: don't change | คำอธิบาย: ประโยค First Conditional เป็นเหตุการณ์ที่เป็นไปได้จริง โครงสร้างคือ If + Present Simple (don't change), will / won't + V.1"
          },
          {
            "id": "u7_p3_2",
            "prompt": "2. If I were you, I ________________________ (apologize) to your friend immediately. (Second Conditional / Giving Advice)",
            "answer": "would apologize",
            "acceptableAnswers": ["would apologize", "'d apologize"],
            "hint": "If I were you, I would + V.1",
            "explanation": "เฉลย: would apologize | คำอธิบาย: โครงสร้าง Second Conditional ใช้สมมติสิ่งที่ไม่เป็นจริงในปัจจุบัน หรือใช้แนะนำผู้อื่นด้วยโครงสร้างสำนวน 'If I were you, I would + V.1'"
          },
          {
            "id": "u7_p3_3",
            "prompt": "3. If Jack hadn't stayed up late playing video games, he ________________________ (not / be) tired this morning. (Third Conditional)",
            "answer": "wouldn't have been",
            "acceptableAnswers": ["wouldn't have been", "would not have been"],
            "hint": "If + had + V.3, would have + V.3",
            "explanation": "เฉลย: wouldn't have been | คำอธิบาย: โครงสร้าง Third Conditional ใช้สมมติตรงกันข้ามกับความเป็นจริงในอดีต (If + had + V.3, would have + V.3) ในรูปปฏิเสธจึงเป็น wouldn't have been"
          },
          {
            "id": "u7_p3_4",
            "prompt": "4. Rewrite using Unless: 'I won't charge my phone if the battery is not low.' → 'I won't charge my phone ________________________________________________.'",
            "answer": "unless the battery is low",
            "acceptableAnswers": ["unless the battery is low"],
            "hint": "unless = if ... not",
            "explanation": "เฉลย: unless the battery is low | คำอธิบาย: คำว่า 'Unless' มีความหมายเท่ากับ 'if ... not' (ถ้า...ไม่) เมื่อนำมาแทนที่ประโยค 'if the battery is not low' จะต้องตัดคำว่า 'not' ออก จึงกลายเป็น 'unless the battery is low'"
          }
        ]
      }
    ]
  },

  "unit8": {
    "id": "unit8",
    "name": "Unit 8: In the News (Media & Reported Speech)",
    "thaiName": "บทที่ 8: วงการข่าว สื่อสารมวลชน และ Reported Speech",
    "description": "ศึกษาการวิเคราะห์ข่าว สื่อเท็จกับสื่อข้อเท็จจริง (Fake News) คำศัพท์วิชาชีพสื่อมวลชน และหลักการแปลงประโยคคำพูดเป็น Reported Speech / Reporting Verbs",
    "sections": [
      {
        "title": "Part 1: Video Content Comprehension",
        "description": "Instructions: Choose the correct answer based on Unit 8 videos. (เลือกคำตอบที่ถูกต้องที่สุดจากเนื้อหาวิดีโอ)",
        "type": "multiple_choice",
        "questions": [
          {
            "id": "u8_p1_1",
            "prompt": "1. In the Vocabulary video, why was the man in Connecticut arrested?",
            "choices": [
              "a) He stole a car in the middle of the night.",
              "b) He became angry at a cleaner and started mopping aggressively.",
              "c) He brought an octopus to a football game."
            ],
            "answer": "b) He became angry at a cleaner and started mopping aggressively.",
            "explanation": "ตอบ b: ในคลิป Vocabulary Video ข่าวจริงประเด็นแรกระบุว่า ชายคนดังกล่าวถูกเจ้าหน้าที่ตำรวจจับกุมเนื่องจากโมโหพนักงานทำความสะอาดที่ทำงานไม่เรียบร้อย จึงเข้าไปแย่งไม้ม็อบมาถูพื้นอย่างรุนแรงและฉุนเฉียวด้วยตนเอง"
          },
          {
            "id": "u8_p1_2",
            "prompt": "2. In the Real-World Speaking video, what was the rumor about Usain Bolt?",
            "choices": [
              "a) He was elected mayor of a small town.",
              "b) He was going to play soccer for Arsenal.",
              "c) He won a gold medal in swimming."
            ],
            "answer": "b) He was going to play soccer for Arsenal.",
            "explanation": "ตอบ b: ในคลิป Real-World Speaking Video ตัวละคร Logan ได้ยินข่าวลือมาจากพี่สาวว่า Usain Bolt นักวิ่งระดับตำนาน กำลังจะเซ็นสัญญาไปเล่นฟุตบอลอาชีพให้กับทีม Arsenal"
          },
          {
            "id": "u8_p1_3",
            "prompt": "3. In the Project video, what was the main difference between the two orange theft news articles?",
            "choices": [
              "a) One reported on oranges, while the other was about apples.",
              "b) One was written in 1914, while the other was written in 2014.",
              "c) One was objective and factual, while the other used sensational language and exaggerated facts."
            ],
            "answer": "c) One was objective and factual, while the other used sensational language and exaggerated facts.",
            "explanation": "ตอบ c: ในคลิป Project Video การเปรียบเทียบข่าวขโมยส้มสองบทความชี้ให้เห็นว่า ข่าวแรกรายงานตามข้อเท็จจริงอย่างตรงไปตรงมาและเป็นกลาง (objective and factual) ส่วนข่าวที่สองใช้ถ้อยคำที่รุนแรงเกินจริง (sensational language) เพื่อกระตุ้นอารมณ์ดึงดูดผู้อ่าน"
          }
        ]
      },
      {
        "title": "Part 2: Vocabulary Matching",
        "description": "Instructions: Match the media & news terms (1–5) with their correct definitions (a–e). (จับคู่คำศัพท์สื่อสารมวลชนกับนิยามภาษาอังกฤษ)",
        "type": "matching",
        "options": [
          { "code": "a", "label": "To say that you will definitely do something for someone" },
          { "code": "b", "label": "A story presented as genuine news which is actually false" },
          { "code": "c", "label": "Someone who reads aloud news bulletins on television or radio" },
          { "code": "d", "label": "A headline or text designed with exaggerated language to attract clicks" },
          { "code": "e", "label": "Able to be trusted to be accurate and truthful" }
        ],
        "questions": [
          {
            "id": "u8_p2_1",
            "term": "1. newscaster",
            "answer": "c",
            "explanation": "newscaster = Someone who reads aloud news bulletins on television or radio (ผู้ประกาศข่าว)"
          },
          {
            "id": "u8_p2_2",
            "term": "2. reliable",
            "answer": "e",
            "explanation": "reliable = Able to be trusted to be accurate and truthful (น่าเชื่อถือ / วางใจได้ในความถูกต้องของข้อมูล)"
          },
          {
            "id": "u8_p2_3",
            "term": "3. fake news",
            "answer": "b",
            "explanation": "fake news = A story presented as genuine news which is actually false (ข่าวปลอม / ข้อมูลบิดเบือน)"
          },
          {
            "id": "u8_p2_4",
            "term": "4. promise",
            "answer": "a",
            "explanation": "promise = To say that you will definitely do something for someone (การให้คำมั่นสัญญา)"
          },
          {
            "id": "u8_p2_5",
            "term": "5. headline",
            "answer": "d",
            "explanation": "headline = The title or text of a news story designed to attract attention (พาดหัวข่าว / หัวข้อข่าวที่กระตุ้นความสนใจ)"
          }
        ]
      },
      {
        "title": "Part 3: Grammar Practice (Reported Speech & Reporting Verbs)",
        "description": "Instructions: Rewrite the sentences into Reported Speech. (แปลงประโยคคำพูดเป็น Reported Speech)",
        "type": "fill_in",
        "questions": [
          {
            "id": "u8_p3_1",
            "prompt": "1. 'I watch the news on TV every evening,' said Mark. → Mark said that ____________________________________________________.",
            "answer": "he watched the news on TV every evening",
            "acceptableAnswers": ["he watched the news on tv every evening"],
            "hint": "Backshift: watch → watched, I → he",
            "explanation": "เฉลย: he watched the news on TV every evening | คำอธิบาย: ในการเปลี่ยนเป็น Indirect Speech ต้องเปลี่ยนสรรพนาม I เป็น he และถอยรูปกาล (Backshift Tense) จาก Present Simple (watch) เป็น Past Simple (watched)"
          },
          {
            "id": "u8_p3_2",
            "prompt": "2. 'We will send a free gift with your order,' said the manager. → The manager said that ____________________________________________________.",
            "answer": "they would send a free gift with our order",
            "acceptableAnswers": [
              "they would send a free gift with our order",
              "they would send a free gift with their order"
            ],
            "hint": "will → would, We → they",
            "explanation": "เฉลย: they would send a free gift with our order (หรือ their order) | คำอธิบาย: เปลี่ยนสรรพนาม We เป็น they และปรับกริยาช่วยบอกอนาคต will เป็น would"
          },
          {
            "id": "u8_p3_3",
            "prompt": "3. 'Please turn off your mobile phones,' the teacher said to us. (Reported Request) → The teacher asked us ____________________________________________________.",
            "answer": "to turn off our mobile phones",
            "acceptableAnswers": ["to turn off our mobile phones"],
            "hint": "ask + object + to + V.1 (ตัด Please ออก)",
            "explanation": "เฉลย: to turn off our mobile phones | คำอธิบาย: ประโยคขอร้องอย่างสุภาพ (Request) ใช้โครงสร้าง 'ask + someone + to + V.1' และตัดคำว่า 'Please' ออก พร้อมเปลี่ยนสรรพนาม your เป็น our"
          },
          {
            "id": "u8_p3_4",
            "prompt": "4. 'You should drink more water during the heatwave,' said the doctor. (Reported Suggestion) → The doctor suggested that ____________________________________________________.",
            "answer": "we should drink more water during the heatwave",
            "acceptableAnswers": [
              "we should drink more water during the heatwave",
              "we drink more water during the heatwave"
            ],
            "hint": "suggest that + subject + (should) + V.1",
            "explanation": "เฉลย: we should drink more water during the heatwave (หรือ we drink more water during the heatwave) | คำอธิบาย: โครงสร้างประโยคเสนอแนะด้วยคำว่า suggest ใช้โครงสร้าง Subjunctive: 'suggest that + subject + (should) + V.1'"
          }
        ]
      }
    ]
  }
};

// Export สำหรับทั้งเบราว์เซอร์และโมดูล
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { M4_UNITS_DATA };
}
