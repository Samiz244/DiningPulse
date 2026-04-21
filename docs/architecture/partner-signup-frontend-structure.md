# Frontend Structure — Partner Signup Landing Page

## Role
Frontend Lead — Elena

## Objective
Define the UI structure, section layout, form behavior, and frontend states for the partner signup landing page.

## Route
- /partners
or
- /partner-signup

One route must be chosen and used consistently.

Preferred:
- /partners

## Page Structure

### 1. Hero Section
Purpose:
- explain what DiningPulse is in a few seconds
- make the value obvious to restaurant operators

Content:
- headline
- subheadline
- primary CTA button
- optional supporting visual or product summary

### 2. Problem Section
Purpose:
- describe the chaos DiningPulse solves

Examples:
- slow order handoff
- staff confusion
- missed drinks/items
- weak visibility across customer, kitchen, and staff

### 3. Value / Benefits Section
Purpose:
- explain why a restaurant should care

Examples:
- real-time coordination
- fewer mistakes
- clearer handoff between staff and kitchen
- better service speed
- stronger operational visibility

### 4. How It Works Section
Purpose:
- show simple operational flow

Flow:
- customer orders
- kitchen receives
- staff gets real-time visibility
- service is completed clearly

### 5. Partner Interest Form Section
Purpose:
- capture restaurant interest

Fields:
- restaurant name (required)
- contact name (required)
- email (required)
- phone (optional)
- restaurant type (optional)
- number of locations (optional)
- notes (optional)

### 6. Trust / Closing CTA Section
Purpose:
- reinforce action
- restate product value
- encourage form completion

---

## Form Behavior

### Validation Rules
Required:
- restaurant name
- contact name
- email

Email:
- must be valid format

Optional fields:
- may be blank

### States
Must support:
- idle
- validation error
- submitting
- success
- failure

### UX Rules
- submit button disables while submitting
- visible inline validation errors
- visible submission error
- visible real success state only after real success response
- no fake success copy
- duplicate rapid clicks must be prevented

---

## Responsive Requirements
Must work on:
- desktop
- tablet
- mobile

Must preserve:
- readable layout
- clear CTA visibility
- usable form controls

---

## Data Required From Backend
Expected success response:
- success: true
- message: string

Expected failure response:
- success: false
- error: string

---

## Out of Scope
- partner login
- partner dashboard
- billing
- subscriptions
- restaurant provisioning