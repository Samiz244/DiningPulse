# Backend Design — Partner Signup Lead Capture

## Role
Backend Lead — Marcus

## Objective
Design a safe and minimal backend endpoint to capture partner interest submissions.

---

## Endpoint

POST /api/partners/interest

---

## Request Body

Required:
- restaurantName: string
- contactName: string
- email: string

Optional:
- phone: string
- restaurantType: string
- locations: number or string
- notes: string

---

## Validation Rules

- restaurantName: required, non-empty
- contactName: required, non-empty
- email: required, valid format
- phone: optional, string
- locations: optional, must be numeric if provided

Reject request if:
- required fields missing
- email invalid
- payload malformed

---

## Response Contract

### Success
```json
{
  "success": true,
  "message": "Interest submitted"
}