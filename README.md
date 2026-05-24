# Portfolio Website

A modern, clean, and responsive personal developer portfolio built with React.js and Tailwind CSS.

## Features

✨ **Modern Design**
- Minimal and attractive UI with smooth animations
- Light/Dark theme toggle with multiple color themes (Purple, Blue, Cyan, Pink)
- Glassmorphism and soft shadows
- Fully responsive for mobile, tablet, and desktop

🎯 **Sections**
- **Navbar**: Sticky navigation with theme selector
- **Hero**: Large heading with CTA buttons and social links
- **About**: Professional intro with stats and resume download
- **Skills**: Categorized skills with hover animations
- **Projects**: Filterable project cards with tech stack
- **Experience**: Timeline of work experience
- **Contact**: Contact form and social links
- **Footer**: Quick links and copyright

⚙️ **Tech Stack**
- React 18
- Tailwind CSS
- Framer Motion (animations)
- Lucide React (icons)
- Vite (bundler)

## Getting Started

### Prerequisites
- Node.js (v16+)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd ronak-codes
```

2. Install dependencies
```bash
npm install
```

3. Start development server
```bash
npm run dev
```

4. Open http://localhost:5173 in your browser

## Build for Production

```bash
npm run build
npm run preview
```

## Customization

### Easy to Edit

1. **Update Profile**: Edit `src/sections/Hero.jsx` to change your name and image
2. **Add Projects**: Edit `src/data/projects.js` - just add objects to the array
3. **Update Skills**: Edit `src/data/skills.js` to add/remove skills
4. **Change Theme Colors**: Edit `src/context/ThemeContext.jsx` to add custom colors
5. **Contact Info**: Update email, phone, location in `src/sections/Contact.jsx`

### Project Data Structure

```javascript
{
  id: 1,
  title: "Project Name",
  description: "Short description",
  image: "image_url",
  category: "Full Stack",
  tech: ["React", "Node.js", "MongoDB"],
  github: "https://github.com/...",
  demo: "https://demo.com"
}
```

## Folder Structure

```
src/
├── components/          # Reusable UI components
│   ├── Navbar.jsx
│   ├── ProjectCard.jsx
│   ├── SkillCard.jsx
│   ├── StatCard.jsx
│   └── ExperienceCard.jsx
├── sections/           # Page sections
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Skills.jsx
│   ├── Projects.jsx
│   ├── Experience.jsx
│   ├── Contact.jsx
│   └── Footer.jsx
├── context/           # React Context
│   └── ThemeContext.jsx
├── data/              # Data files
│   ├── projects.js
│   └── skills.js
├── assets/            # Images and static files
├── App.jsx
├── index.css
└── main.jsx
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Theme Customization

The portfolio comes with 4 built-in themes:
- **Purple** (default)
- **Blue**
- **Cyan**
- **Pink**

Add more themes in `src/context/ThemeContext.jsx`:

```javascript
const colorVariants = {
  yourTheme: { primary: 'rgb(255, 0, 0)', secondary: 'rgb(255, 100, 100)' },
};
```

## Tips

- Replace profile image URL with your own
- Update all social links with your profiles
- Customize color themes to match your brand
- Add smooth scrolling and animations
- Mobile-first responsive design

## License

This project is open source and available under the MIT License.

## Support

For questions or issues, feel free to open an issue on GitHub.

---

## Environment variables & keeping credentials private

- **Never commit** secrets or `.env*` files to the repository. The project reads EmailJS credentials from Vite environment variables prefixed with `VITE_` (see `.env.example`).

- To configure locally, copy `.env.example` to `.env.local` and add your real values:

```bash
cp .env.example .env.local
# then edit .env.local and replace the placeholders
```

- The project already ignores `.env` files via `.gitignore`. If you accidentally committed a `.env` file, remove it from the repository with:

```bash
git rm --cached .env.local
git commit -m "Remove local env with secrets"
git push
```

- If the secret has been pushed to a remote and you need to fully remove it from history, consider using tools like `git filter-repo` or the [BFG Repo-Cleaner]. After cleaning history, rotate the exposed keys in the provider (EmailJS) immediately.

- Minimal dev commands to restart after adding `.env.local`:

```bash
npm install
npm run dev
```

If you'd like, I can run a quick scan for other accidentally committed secrets and suggest next steps to fully remove them from git history.

Made with ❤️ by Your Name
