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

## 📚 Topics I Covered

Here’s the step-by-step journey with checkpoints ✅:

### ✅ 1. Basics (Foundations)

- What is TypeScript & why use it?
- Setting up a TS project (tsc --init, tsconfig.json)
- Type annotations: string, number, boolean, any, unknown
- Arrays & Tuples
- Enums
- Union & Intersection types
- Type inference

👉 Mini project: Student Record App (typed objects, arrays, functions)

## ✅ 2. Functions & Objects

- Function parameters & return types
- Optional & default params
- Rest params
- Object types
- Type aliases
- Interfaces vs Type aliases

👉 Mini project: Calculator with strict function signatures

## ✅ 3. Classes & OOP

- Classes, fields, methods
- Access modifiers: public, private, protected
- readonly & static
- Inheritance & abstract classes
- Interfaces with implements

👉 Mini project: Bank Account system (deposit, withdraw, balance)

## ✅ 4. Advanced Types

- Literal types
- Type narrowing (typeof, instanceof, custom guards)
- keyof & typeof operators
- Index signatures
- in operator narrowing
- Special types: never, unknown

👉 Mini project: Shape Area Calculator (circle, rectangle, triangle via discriminated unions)

## ✅ 5. Generics

- Generic functions
- Generic classes
- Constraints (extends)
- Default generics
- Reusable data structures

## ✅ 6. Utility Types

- Partial<T>, Required<T>, Readonly<T>
- Pick<T>, Omit<T>
- Record<K, T>
- ReturnType<T>, Parameters<T>

## ✅ 7. Modules & Config

- ES Modules vs CommonJS
- import / export
- Path mapping in tsconfig.json
- Declaration files (.d.ts)
- Ambient modules

👉 Mini project: Split app into modules (User, Auth, Utils)

## ✅ 8. Real-World Advanced Usage

- Zod with TypeScript → runtime + static validation
- Express + TS → typed routes & middlewares
- JWT Authentication → secure APIs with token validation
- Mongoose + TS → typed models & MongoDB queries
- React + TS → typed components, props, hooks
- UI Components (Button with Record, variants, cva)

## 🎯 What’s Next?

- Explore TypeScript with React more deeply (Recoil, Context API, Zustand with TS)
- Advanced type-level programming (conditional types, mapped types, infer)
- Build a full-stack project with TS + Node/Express + React

## 🚀 Quick Start (for anyone cloning this repo)
```
git clone https://github.com/priyanshusinghchouhan/Typescript.git
cd Typescript
npm install
npm run dev
```

## ✨ Summary

- This repo is my step-by-step journey into TypeScript:
- from basics → advanced types → generics → utility types → real-world backend/frontend integration.
- The goal: master TS for building full-stack, type-safe applications.

