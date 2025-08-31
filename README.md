# 🟦 TypeScript

Welcome to my **TypeScript learning path** 🚀.  
This repo documents my setup, installation steps, concepts I covered, and the projects I built while mastering TS.

---

## 📦 Installation & Setup

### 1. Initialize Project
```bash
mkdir typescript-learning
cd typescript-learning
npm init -y
```
### 2. Install TypeScript
```
npm install -D typescript
npx tsc --init
```

### 3. Add Helpful Tools
```
npm install -D tsx @types/node
```
- TypeScript (typescript) → Type checking + compiler
- tsx → Run .ts files directly (no manual compile step)
- @types/node → Type definitions for Node.js

###  4. Update Scripts in package.json
```
"scripts": {
  "dev": "tsx watch src/index.ts",
  "build": "tsc -p tsconfig.json",
  "start": "node dist/index.js",
  "typecheck": "tsc -p tsconfig.json --noEmit"
}
```
### 5. Folder Structure
```
typescript-learning/
│── src/
│    └── index.ts
│── tsconfig.json
│── package.json
```
Run dev server:
```
npm run dev
```
