# My Youtube

A YouTube clone built with React, Redux Toolkit, and Tailwind CSS. Implements live chat, nested comments, video playback, and performance optimizations.

## Table of Contents

- [Features](#features)  
- [Tech Stack](#tech-stack)  
- [Getting Started](#getting-started)  
- [Credits](#credits)  

## Features

### Homepage & Navigation
- **Header** with logo, search bar, and menu toggle  
- **Sidebar** with navigation links and dynamic collapse/expand  
- **Search** functionality to fetch and display video results  
- **VideoContainer** and **VideoCard** components for listing videos  

### Watch Page
- **Video player** embedded via YouTube iframe based on URL query  
- **LiveChat** component with emoji picker for real-time chat simulation  
- **Comments** section with nested replies (n-level nesting)  
- **ChatMessage**, **CommentsList**, **Comment**, and **ChipsList** components  

### State Management
- **Redux Toolkit** store configuration (`appStore.js`)  
- Slices for:
  - `appSlice` (sidebar open/close)  
  - `searchSlice` (cached search results)  
  - `chatSlice` (live chat messages)  

### Performance & Optimization
- **useMemoExample** component demonstrating useMemo hook  
- Memoization in **ChatMessage**, **Comments**, and **VideoContainer** to prevent unnecessary re-renders  
- **helper.js** utility functions for debouncing and data transformations  

### Development Tools & Configuration
- **Parcel.js** as bundler with HMR, caching, code splitting, and production optimizations  
- **Tailwind CSS** for utility-first styling (`.postcssrc` config)  
- Babel for modern JavaScript and JSX support  
- Jest & React Testing Library for unit tests (configured via `jest.config.js`)  

## Tech Stack

- **React** 19.1.0  
- **React DOM** 19.1.0  
- **React Router** 7.5.1 & **React Router DOM** 7.5.1  
- **Redux Toolkit** 2.7.0 & **React Redux** 9.2.0  
- **Tailwind CSS** 4.1.4  
- **Emoji Picker React** 4.12.2  
- **Parcel** 2.14.4  
- **Jest** & **React Testing Library**  

## Getting Started

1. **Clone the repository**

   ```
   git clone https://github.com/bharatsinghani4/my-youtube.git
   cd my-youtube
   ```

2. **Install dependencies**

   ```
   npm install
   ```

3. **Start development server**

   ```
   npm start
   ```

4. **Run tests**

   ```
   npm test
   ```

5. **Build for production**

   ```
   npm run build
   ```

## Credits

Built by **Bharat Singhani**. Inspired by YouTube’s UI/UX and enriched with live chat and comment nesting features. 
