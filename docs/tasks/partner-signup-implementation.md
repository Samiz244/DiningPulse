# Implementation Task — Partner Signup Feature

## Frontend Engineer (Leo)

### Task
Implement the partner signup page and partner interest form in React.

### Scope
- create /partners route
- build marketing sections defined by Frontend Lead
- build partner interest form
- implement client-side validation
- implement loading, success, and error states
- connect form submission to Supabase-backed lead capture flow

### Do NOT
- fake submission success
- add payments
- add authentication
- modify unrelated pages
- add extra product features

### Files Allowed
- src/pages/*
- src/components/*
- src/lib/*
- src/styles/*
- routing files

### Done When
- page renders correctly
- form validates required fields
- success only appears after real successful submission
- visible error state exists
- mobile and desktop both work

---

## Backend / Data Engineer (Ava)

### Task
Implement safe lead capture using Supabase.

### Scope
- connect app to Supabase
- insert valid lead submissions into leads table
- return real success/failure result to frontend
- validate required fields before insert
- handle insert failure safely

### Do NOT
- add Stripe
- add auth
- add onboarding workflow
- expand beyond lead capture
- create fake success path

### Files Allowed
- src/lib/supabase*
- src/services/*
- lead submission helpers
- Supabase SQL or migration files directly related to leads

### Done When
- valid submission is stored correctly
- invalid or failed submission returns real failure
- frontend can distinguish success from failure