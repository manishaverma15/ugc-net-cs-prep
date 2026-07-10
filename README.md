# UGC NET CS Preparation

This app is a Next.js study portal for UGC NET Computer Science preparation. It groups the main syllabus units into dedicated practice sections and provides MCQ-based question practice with answer checking and explanations.

## Features

- Unit-based landing page for all major CS topics
- JSON-backed question banks per unit
- Interactive MCQ practice experience
- Direct link to the UGC NET previous papers archive

## Project structure

- app/page.tsx: landing page with unit cards
- app/units/[slug]/page.tsx: dynamic unit practice page
- components/unit-question-bank.tsx: interactive MCQ experience
- data/units/*.json: unit question data
- lib/units.ts: unit registry and lookup helpers

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000 to view the app.

## Next steps

- Add more real previous-year questions from the UGC NET archive to each unit JSON file
- Expand explanations and add topic-wise notes
- Add filters for year, difficulty, and question type
