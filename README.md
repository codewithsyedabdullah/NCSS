# NCSS — NUST Computer Science Society

![Vite](https://img.shields.io/badge/built%20with-Vite-646CFF?logo=vite)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-v4-06B6D4?logo=tailwindcss)
![License](https://img.shields.io/badge/license-MIT-green)

The official website of the NUST Computer Science Society — a community of builders and innovators.

## Tech Stack

- **Vite** — Build tool
- **React 19** — UI framework
- **TypeScript** — Language
- **Tailwind CSS v4** — Styling
- **Framer Motion** — Animations
- **Three.js** — 3D graphics

## Getting Started

`ash
npm install
npm run dev
`

## Build

`ash
npm run build
`
"@

# PR 14: Add Vercel config adjustment
New-PR-Simple -branch "update-vercel" -msg "Update Vercel configuration" -body "Updates vercel.json with improved routing and headers." -file "vercel.json" -content @"
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ],
  "headers": [
    {
      "source": "/assets/(.*)",
      "headers": [
        { "key": "Cache-Control", "value": "public, max-age=31536000, immutable" }
      ]
    }
  ]
}
