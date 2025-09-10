# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

This is a personal portfolio website for Iker Garcia Ramirez (flipasg), built as a React single-page application. The site showcases professional experience, projects, skills, and blog posts in a modern, responsive design.

## Development Commands

### Core Development
- **Start development server**: `npm run dev` or `npm start`
- **Build for production**: `npm run build`
- **Preview production build**: `npm run preview` or `npm run serve`
- **Deploy to GitHub Pages**: `npm run deploy`

### Code Quality
- **Lint TypeScript files**: `npm run lint`
- **Format code**: `npm run format`
- **Run pre-commit checks**: Automatically runs on commit via husky (lint + format)

### Development Server
- Development server runs on default Vite port (usually 5173)
- Preview server runs on port 3000 (configured via `--port 3000`)

## Architecture & Code Structure

### Technology Stack
- **Frontend Framework**: React 19 with TypeScript
- **Build Tool**: Vite with React plugin and SVGR support
- **UI Framework**: Material-UI (MUI) v6 with Emotion styling
- **Deployment**: GitHub Pages via gh-pages

### Project Structure
```
src/
├── components/          # React components for each page section
│   ├── Hero.tsx        # Landing section with name and social links
│   ├── AboutMe.tsx     # Personal introduction
│   ├── Projects.tsx    # Professional experience display
│   ├── Skills.tsx      # Technical skills showcase
│   ├── Blog.tsx        # Blog posts section
│   ├── Footer.tsx      # Site footer
│   ├── SocialLinks.tsx # Social media links component
│   └── ActionButtons.tsx # Call-to-action buttons
├── data/               # Static data and type definitions
│   ├── projects.ts     # Professional experience data
│   ├── skills.ts       # Skills and technologies data
│   └── posts.ts        # Blog posts data
├── assets/             # Images, icons, and static files
├── App.tsx             # Main app component with theme setup
└── main.tsx            # React app entry point
```

### Key Patterns

#### Data Structure
- All content data is centralized in `src/data/` as TypeScript files
- Type-safe interfaces defined for `Project`, `Skill`, and blog post data
- Content is imported directly into components for static rendering

#### Component Architecture
- Single-page application with section-based components
- Each major page section is a separate component (Hero, AboutMe, Projects, etc.)
- Components use MUI's Grid2 system for responsive layouts
- Custom MUI theme defined in App.tsx with consistent color palette and typography

#### Styling Approach
- Custom MUI theme with defined breakpoints (xs: 0, sm: 700, md: 850, lg: 1024, xl: 1280)
- Typography uses "Mukta Mahee" font family loaded from Google Fonts
- Colors: Primary (#00224e), Secondary (#c6d9ff), Background (#FBFBFB)
- Responsive design with mobile-first approach

#### Path Resolution
- Absolute imports configured via `@/*` alias pointing to `src/*`
- Vite configuration includes path alias setup
- SVG imports handled by vite-plugin-svgr

## Development Guidelines

### Code Quality Standards
- TypeScript strict mode enabled
- ESLint with comprehensive React, TypeScript, and accessibility rules
- Prettier formatting with specific configuration (single quotes, no semicolons, trailing commas)
- Husky pre-commit hooks ensure code quality before commits

### Content Updates
- Professional experience: Update `src/data/projects.ts`
- Skills and technologies: Update `src/data/skills.ts`
- Blog posts: Update `src/data/posts.ts`
- Personal information: Update `src/components/Hero.tsx` and `src/components/AboutMe.tsx`

### Asset Management
- Images stored in `src/assets/`
- Favicon and meta images referenced from assets
- SVG files can be imported as React components via SVGR

### Deployment Process
1. `npm run predeploy` - Builds the project
2. `npm run deploy` - Deploys to GitHub Pages using gh-pages
3. Site is hosted at https://flipasg.github.io/

### Performance Considerations
- Vite provides fast HMR during development
- Production builds are optimized and minified
- Static imports for better tree-shaking
- Responsive images and lazy loading should be considered for assets

## Browser Support
- Modern browsers as defined in browserslist configuration
- Development: Latest Chrome, Firefox, and Safari
- Production: >0.2% usage, not dead, not Opera Mini, not IE 11
