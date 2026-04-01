# Portfolio Website

A modern, responsive portfolio website inspired by [cotishq.xyz](https://www.cotishq.xyz/).

## Features

- 🌓 Dark/Light theme toggle
- ✨ Smooth animations with Framer Motion
- 📱 Fully responsive design
- 🎨 Modern UI with Tailwind CSS
- ⚡ Built with Next.js 14 and TypeScript

## Sections

- **Hero Section** - Introduction with avatar, name, and bio
- **Social Links** - Connect via email, Twitter, GitHub, LinkedIn
- **Tech Stack** - Categorized list of technologies and tools
- **Projects** - Showcase of your work with live demos and code links
- **Blogs & Notes** - Section for your blog posts
- **Footer** - Copyright and fun message

## Prerequisites

Before you begin, make sure you have the following installed on your system:

- **Node.js** (version 18.0 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn** or **pnpm**

To check if you have Node.js installed, run:
```bash
node --version
npm --version
```

## Installation & Setup

### Step 1: Install Dependencies

Open your terminal in the project directory and run:

```bash
npm install
```

This will install all the required packages listed in `package.json`:

**Production Dependencies:**
- `next` - Next.js framework
- `react` & `react-dom` - React library
- `framer-motion` - Animation library
- `lucide-react` - Icon library
- `next-themes` - Theme management

**Development Dependencies:**
- `typescript` - TypeScript compiler
- `@types/node`, `@types/react`, `@types/react-dom` - TypeScript type definitions
- `tailwindcss` - CSS framework
- `postcss` & `autoprefixer` - CSS processing

### Step 2: Run the Development Server

After installation is complete, start the development server:

```bash
npm run dev
```

You should see output like:
```
  ▲ Next.js 14.2.5
  - Local:        http://localhost:3000
  - Ready in 2.3s
```

### Step 3: Open in Browser

Open your browser and navigate to:
```
http://localhost:3000
```

You should now see your portfolio website running locally!

## Available Scripts

- `npm run dev` - Start development server (with hot reload)
- `npm run build` - Create production build
- `npm start` - Start production server (after building)
- `npm run lint` - Run ESLint to check for code issues

## Customization

### Personal Information

Update the following files with your information:

- `components/hero.tsx` - Name, handle, and bio
- `components/social-links.tsx` - Social media links
- `components/projects.tsx` - Your projects
- `components/footer.tsx` - Copyright name

### Tech Stack

Edit `components/tech-stack.tsx` to update your technologies.

### Projects

Add your projects in `components/projects.tsx` with:
- Title and description
- Tech stack used
- Live demo URL
- Code repository URL

## Build for Production

```bash
npm run build
npm start
```

## Package Details

### Required Packages

All packages are automatically installed when you run `npm install`. Here's what each one does:

**Core Framework:**
- `next@14.2.5` - React framework for production
- `react@^18.3.1` - UI library
- `react-dom@^18.3.1` - React DOM renderer

**Styling & UI:**
- `tailwindcss@^3.4.7` - Utility-first CSS framework
- `postcss@^8.4.40` - CSS transformer
- `autoprefixer@^10.4.19` - CSS vendor prefixer

**Features:**
- `framer-motion@^11.3.19` - Animation library for smooth transitions
- `lucide-react@^0.427.0` - Beautiful icon components
- `next-themes@^0.3.0` - Dark/light theme switching

**TypeScript:**
- `typescript@^5.5.4` - TypeScript compiler
- `@types/node@^20.14.12` - Node.js type definitions
- `@types/react@^18.3.3` - React type definitions
- `@types/react-dom@^18.3.0` - React DOM type definitions

## Troubleshooting

### Issue: `npm install` fails
- Make sure you have Node.js 18+ installed
- Try deleting `node_modules` and `package-lock.json`, then run `npm install` again
- Check your internet connection

### Issue: Port 3000 is already in use
- Stop the other process using port 3000, or
- Run `npm run dev -- -p 3001` to use a different port

### Issue: TypeScript errors
- Make sure all dependencies are installed: `npm install`
- Restart your IDE/editor
- Run `npm run build` to check for errors

## Tech Stack

- **Next.js 14** - React framework
- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Lucide React** - Icons
- **next-themes** - Theme management

## License

MIT

