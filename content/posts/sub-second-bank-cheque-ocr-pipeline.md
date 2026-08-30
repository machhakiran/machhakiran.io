---
title: "Building a Sub-Second Bank Cheque OCR Pipeline with Computer Vision & Fraud Scoring"
date: "2026-08-20"
slug: "sub-second-bank-cheque-ocr-pipeline"
tags: ["Computer Vision", "OCR", "FinTech", "Banking", "FastAPI"]
author: "Kiran Machha"
---

# Building a Sub-Second Bank Cheque OCR Pipeline with Computer Vision & Fraud Scoring

Processing high volumes of physical bank cheques remains one of the most resource-intensive bottlenecks in banking operations. Cheque clearing houses process thousands of cheques daily, requiring human verification of handwritten amounts, payee names, MICR bands, and signatures.

In this deep dive, we walk through the engineering behind our **Bank Cheque OCR Automation API**, which achieves **850ms average latency** and **99.1% extraction confidence**.

---

## 1. The Challenge of Financial Document Understanding

Unlike clean printed invoices, bank cheques present unique complexities:
- **Handwritten vs Printed Fields**: Payee and amount lines are handwritten in cursive, while account numbers and branch codes are printed.
- **Magnetic Ink Character Recognition (MICR)**: Cheque numbers and clearing transit codes adhere to strict E-13B font standards requiring specialized validation.
- **Fraud & Alteration Detection**: Cheques must be cross-checked for numeric-to-written amount consistency and tampering traces.

---

## 2. Multi-Stage Pipeline Architecture

```
Cheque Scan (JPG/PNG)
        │
        ▼
┌──────────────────┐
│  Upload Gateway  │ (FastAPI Async Stream)
└────────┬─────────┘
         │
         ▼
┌──────────────────┐
│ CV Preprocessing │ (Adaptive Thresholding, Deskew, Noise Removal)
└────────┬─────────┘
         │
         ▼
┌──────────────────┐
│ Field Extraction │ (Payee, Date, Amount Numeric + Words, MICR)
└────────┬─────────┘
         │
         ▼
┌──────────────────┐
│ Validation Rules │ (Numeric vs Written Cross-Check, Date Check)
└────────┬─────────┘
         │
         ▼
Core Banking JSON (850ms, 99.1% Confidence Score)
```

---

## 3. Automated Validation & Fraud Scoring

To eliminate clearance errors, the validation engine executes three mandatory checks:

1. **Amount Parity Rule**: Numeric digits (e.g. `50,000.00`) must match the parsed English written text (`Fifty Thousand Only`). If a discrepancy occurs, the confidence score drops and triggers a human-in-the-loop audit flag.
2. **MICR Checksum Validation**: The 9-digit routing transit number is verified against the bank's routing directory.
3. **Date Range Verification**: Cheques older than 90–180 days (stale-dated) or dated in the future (post-dated) are flagged automatically.

---

## 4. Key Performance Results

- **Processing Latency**: 850 milliseconds per image.
- **Manual Effort Reduction**: 75% operational time saved across back-office operations.
- **Throughput**: 5,000+ cheques processed per batch worker.
