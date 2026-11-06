# Lewi Maropo Portfolio

Personal portfolio of Lewi Maropo, a frontend developer. It is a single-page site that shows my skills, projects, and experience, with a contact form that sends messages straight to my email.

**Live demo:** [portofolio-1-seven-mu.vercel.app](https://portofolio-1-seven-mu.vercel.app/)

## Features

- Responsive layout built from a Figma design, tested from 320px to 1440px
- Project gallery with a See All toggle and links to live sites
- Accordion FAQ
- Contact form with success and failure popups
- Keyboard-friendly controls with visible focus states

## Tech stack

- [Next.js 16](https://nextjs.org) with the App Router
- React 19 and TypeScript
- Tailwind CSS 4
- Framer Motion
- shadcn/ui and Radix UI
- [Web3Forms](https://web3forms.com) for the contact form

## Getting started

Install the dependencies:

```bash
npm install
```

Create a `.env.local` file in the project root with your Web3Forms access key:

```bash
NEXT_PUBLIC_WEB3FORMS_KEY=your_access_key
```

Start the development server and open [http://localhost:3000](http://localhost:3000):

```bash
npm run dev
```

Without the access key the site still runs, but the contact form shows its failure popup.

## Scripts

| Command         | Description                  |
| --------------- | ---------------------------- |
| `npm run dev`   | Start the development server |
| `npm run build` | Build for production         |
| `npm run start` | Run the production build     |
| `npm run lint`  | Run ESLint                   |

## Project structure

```text
public/images/        Images, icons, and project screenshots
src/app/              Root layout, page, and global styles
src/components/       Navbar and page sections
```

## Contact

- GitHub: [LewzzJrs](https://github.com/LewzzJrs)
- LinkedIn: [lewi-maropo](https://linkedin.com/in/lewi-maropo)
