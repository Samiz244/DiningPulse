# Business Invariants — DiningPulse

These rules are NON-NEGOTIABLE.

## Orders
- no lost orders
- no duplicate orders

## Payments
- no duplicate payments
- no fake success
- must be server verified

## Realtime
- no stale data shown as live
- system must reflect true state

## Workflow
- no silent failures
- user must always see real system status

If any invariant is violated → system is broken