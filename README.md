# Smart Lite Shop - E-Commerce Migration

A modern e-commerce application built with React 19, Vite, TypeScript, and Tailwind CSS. This project migrated from a legacy Create React App (CRA) structure using Bootstrap to a high-performance modern stack.

## 🚀 Technologies

- **React 19**: Latest version of the UI library.
- **Vite 6**: Next-generation frontend tooling.
- **TypeScript**: Static typing for enhanced developer experience and reliability.
- **Tailwind CSS**: Utility-first CSS framework for custom, premium designs.
- **Redux**: Global state management for the shopping cart.
- **Auth0**: Hosted user authentication through Universal Login.

## ✨ Key Features

- **Modern UI/UX**: Completely redesigned interface using Tailwind CSS, featuring glassmorphism effects, smooth transitions, and a mobile-first responsive layout.
- **Optimized Cart**: Real-time cart management with Redux.
- **Dynamic Product Detail**: Interactive views for exploring products.
- **Secure Checkout**: Seamless payment simulation with various methods.
- **Auth0 Authentication**: Hosted sign-in configured for your Auth0 application.

## 🛠️ Getting Started

### Prerequisites

- Node.js (Latest LTS version recommended)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure Auth0 by copying `.env.example` to `.env` and setting your application domain and client ID. In the Auth0 application settings, add your local and deployed site origins to Allowed Callback URLs, Allowed Logout URLs, and Allowed Web Origins. For local development, use `http://localhost:5173` for each. Enable the Refresh Token grant and Refresh Token Rotation for the application to keep authentication across refreshes and renew tokens. The SDK stores its token cache in browser local storage; protect the app from cross-site scripting (XSS) vulnerabilities.

4. Start the development server:
   ```bash
   npm run dev
   ```

## 🏗️ Build

To create a production-ready bundle:

```bash
npm run build
```

## 📝 License

Distributed under the MIT License.
