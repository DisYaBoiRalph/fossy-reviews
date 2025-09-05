# Fossy Reviews
[![NextJS][nextjs-shield]][nextjs-url] [![React][react-shield]][react-url] [![Visx][visx-shield]][visx-url] [![Jest][jest-shield]][jest-url]

A personal review site built with a static-first approach, featuring content management through Markdown/MDX, data visualization capabilities, and a modern UI powered by LiftKit.

## Features

### Content Management
- **Markdown/MDX Articles** - Write reviews and articles in Markdown with frontmatter metadata
- **Static Generation** - Fast, SEO-friendly static site generation with Next.js
- **Metadata Support** - Title, date, tags, and categories via frontmatter
- **React Components in Content** - Embed interactive components directly in articles using MDX

### Data Visualization
- **Interactive Graphs** - Audio measurements and data visualization with Chart.js/D3.js
- **Embeddable Charts** - Include graphs directly in Markdown content
- **Interactive Features** - Hover tooltips, multiple datasets, zoom/pan capabilities

### Video Integration
- **YouTube/Vimeo Embeds** - Seamless video integration in articles
- **Auto-embed Support** - Automatic video embedding from Markdown links

### UI & Design
- **LiftKit Integration** - Modern, accessible UI components
- **Responsive Design** - Optimized for desktop, tablet, and mobile
- **Theme Support** - Dark/light mode toggle
- **Clean Layout** - Home, Article, Category, and About page templates

### Discoverability
- **Featured Content** - Homepage showcasing recent and featured posts
- **Category Pages** - Static generation of category/tag pages
- **Client-side Search** - Fuzzy search functionality without backend requirements
- **Related Posts** - Tag-based content recommendations

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **UI Library**: LiftKit (design system)
- **Content**: Markdown/MDX with frontmatter
- **Styling**: CSS with LiftKit design tokens
- **Testing**: Jest + React Testing Library
- **Data Visualization**: Chart.js (planned)

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── articles/          # Articles listing
│   ├── reviews/           # Reviews (MDX content)
│   └── layout.tsx         # Root layout
├── components/            # LiftKit UI components
├── custom_components/     # Custom components
│   ├── buttons/          # NavBarButton component
│   ├── Footer.tsx        # Site footer
│   └── Header.tsx        # Site header
├── lib/                  # Utility functions
└── mdx-components.tsx    # MDX component mappings
```

## Getting Started

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd fossy-reviews
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Testing

The project includes comprehensive test coverage:

```bash
# Run all tests
npm run test

# Run tests in watch mode
npm run test -- --watch

# Generate coverage report
npm run test -- --coverage
```

**Test Coverage**: 100% across all metrics (statements, branches, functions, lines)

## Writing Content

### Markdown Articles
Create new articles in the `src/app/reviews/` directory:

```markdown
---
title: "My Review Title"
date: "2024-01-15"
tags: ["audio", "review"]
category: "reviews"
---

# Review Content

Your review content here...
```

### MDX with Components
Embed React components directly in your content:

```mdx
import { Graph } from '@/components/Graph'

# Audio Analysis

<Graph 
  data={audioData} 
  type="frequency-response" 
/>
```

## Customization

### Theming
The site supports dark/light mode through LiftKit's theming system. Toggle themes using the theme controller in the header.

### Adding New Components
1. Create component in `src/custom_components/`
2. Add corresponding test file
3. Export from `src/custom_components/index.ts`
4. Import and use in your pages

## Deployment

The site is optimized for static deployment:

```bash
# Build for production
npm run build

# Export static files
npm run export
```

Deploy to platforms like Vercel, Netlify, or GitHub Pages.

## Roadmap

### Phase 1: Content Foundation ✅
- [x] LiftKit UI integration
- [x] Basic page templates
- [x] Markdown/MDX support
- [x] Responsive design
- [x] Testing infrastructure

### Phase 2: Data Visualization (In Progress)
- [ ] Chart.js integration
- [ ] Interactive graph components
- [ ] MDX graph embedding

### Phase 3: Video Integration (Planned)
- [ ] YouTube/Vimeo embeds
- [ ] Auto-embed functionality

## Contributing

This is a personal project, but suggestions and feedback are welcome! Feel free to open issues for bugs or feature requests.

## License

This project is for personal use. Please respect the LiftKit license for the UI components.

---

Built using [LiftKit](https://github.com/chainlift/liftkit) and Next.js

<!-- MARKDOWN LINKS & IMAGES -->

[nextjs-shield]: https://img.shields.io/badge/Next.js-000000.svg?style=for-the-badge&logo=next.js&logoColor=white
[nextjs-url]: https://github.com/vercel/next.js
[css-shield]: https://img.shields.io/badge/CSS3-1572B6.svg?style=for-the-badge&logo=css3&logoColor=white
[css-url]: https://developer.mozilla.org/en-US/docs/Web/CSS
[jest-shield]: https://img.shields.io/badge/Jest-323330?style=for-the-badge&logo=Jest&logoColor=white
[jest-url]: https://jestjs.io/
[react-shield]: https://img.shields.io/badge/React-20232A.svg?style=for-the-badge&logo=react&logoColor=61DAFB
[react-url]: https://react.dev
[visx-shield]: https://img.shields.io/badge/Visx-FF1431?style=for-the-badge&logo=visx&logoColor=FFFFFF
[visx-url]: https://airbnb.io/visx/