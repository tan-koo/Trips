# Frontend Assignment

แบบทดสอบสำหรับ ผู้สมัครตำแหน่งปในอนาคตด้วย

## กฎ 3 ข้อในการทำแบบทดสอบ

### 1. WTF per minute

http://commadot.com/wtf-per-minute/

ถ้าเอา code ที่เราเขียนให้เพื่ขียนยังไงให้อ่านง่าย สื่อสิ่งที่จะทำได้ชัดเจน

> “Indeed, the ratio of time sng it easy to read makes it easier to write.” - Robert C. Martin

### 2. ถ้าโปรแกรมพังเราต้องรู้

โปรแกรมที่เราเขียนไปแล้ว ยู่เสมอ

จงเขียน test ให้เพียงพอ ช่วยตรวจสอบก่อนที่จะ

### 3. ผู้ใช้ต้องแฮปปี้

ลองพัฒนา web applicationes ต่างๆและนำมาปรับใช้

## แบบทดสอบ "เที่ยวไหนดี"

### Task 1: API-Gateway

เนื่องจาก Software Engineมูลจาก service ต่าง ๆ ในวงใน

ซึ่งใน task นี้เราจะต้องสร้าง AP Section ถัดไป

** การสร้าง API-Gateway Seงด้วย วิธี หรือ ภาษาใดก็ได้ **

#### Requirements

สร้าง Search API ที่สามารถนำ key Server API

โดยค้นหาจาก ion และ tag จาก JSON data

สิ่งที่ client จะได้รับคือ list ขอrch เข้ามา

โดยจะต้องแน่ใจว่า API กต้องด้วย

##### ตัวอย่าง

```
GET /api/trips?keyword=ภูเขา

Response Status 200:

{
    "trips": ["
            ]
        },
        {
         
    ]
}
```

#### JSON Server

วิธีการ run json server
ถูก run ที่ port 9000

##### API Spec

```
GET /trips

Response Status 200:
[wongnai.com/p/1600",
            "ธรรมชาติ",
            "ตราด"
        ]
    }
]
```

### Task 2: React Web Application

การสร้าง Web Application คืองานหลักที่เหล่า Software Engineer, Fronะสบการณ์ท่องเที่ยว ก่อนที่จะตัดสินใจเดินทางออกไปยังที่ต่าง ๆ

เพื่อความลื่นไหลในการใช้งาน เเตรียมให้ เพื่อพัฒนา UX หรือ performance ของ website ให้ดียิ่งขึ้น

#### Requirement

สร้าง Web Application ที่PI Gateway ที่เราเขียนไว้ใน Task ที่ 1
jpg)

ในการแสดงผลข้อมูลที่ได้มา อไปนี้

- [ ] เมื่อกดชื่อทริป จะต้อง link ไปยัง url ที่ได้จาก trip data
- [ ] เมื่อกดอ่านต่อ จะต้อง link และส่งต่อไปให้เพื่อน สำหรับ keyword เดียวกัน (Optional)

## ระยะเวลา

โดย ปกติแล้วแบบทดสอบนี้จะใะมีธุระต่าง ๆ ในชีวิตประจำวัน
