
# Flowbit AI Agent – Learned Memory System (Final)

## Why you initially saw no learning
The system uses **confidence thresholds** to avoid unsafe automation.
Invoice #1 creates memory with confidence 0.65, which is **below auto-apply threshold**.
After reinforcement, Invoice #2 crosses threshold and is applied.

## Confidence Rules
- Initial memory: 0.50
- Human approval: +0.15
- Auto-apply threshold: 0.60
- Max confidence: 0.95
