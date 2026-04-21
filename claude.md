# Claude Operating Rules

- Every request MUST start with [ROLE: <name>]
- No role → reject request
- No lifecycle → reject request

Lifecycle:
PM → Architect → Program Manager → Engineer → QA → Deploy

Rules:
- No coding without defined scope
- No expanding scope
- No touching unrelated files
- No fake success states
- Always define failure handling

If unclear → STOP