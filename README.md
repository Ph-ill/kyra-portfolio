# Kyra Scargill - Portfolio

A personal portfolio website for Kyra Scargill, Talent Acquisition & People Operations Consultant. Built with Astro and Tailwind CSS v4, forked and significantly redesigned from [Ph-ill/Phill-Scargill-Portfolio](https://github.com/Ph-ill/Phill-Scargill-Portfolio).

Live at: [builtbykyra.com](https://builtbykyra.com)

## Changes Made from Original (Phill's Portfolio)

### Complete Content Overhaul
- **Rebranded** for Kyra Scargill (Willans) — Talent Acquisition & People Operations Consultant
- **New config structure**: Expanded `src/config.ts` with HR/consulting-specific sections (specializations, case studies, testimonials, clients, contact form)
- **Accent color**: Changed from blue to warm tan (`#d4a574`)

### New Sections & Components
- **Statement**: Full-width POV/positioning statement block
- **Specialties**: Icon-driven service cards with outcome-focused copy
- **Clients**: Logo grid showcasing notable client brands (Netflix, Google, Snap, Spotify, etc.)
- **Case Studies**: Project showcase redesigned for consulting engagements
- **Testimonials**: Social proof section with quotes
- **DualCTA**: Two-column call-to-action block
- **Contact**: Full contact form with server-side email sending via Nodemailer (`src/pages/api/contact.js`)

### Design & UI Overhaul
- **Redesigned Hero**: Removed profile photo and thought bubble; replaced with highlights list and dual CTA buttons
- **Global stylesheet** (`src/styles/global.css`): Heavily expanded with new component styles, animations, and layout utilities
- **Footer**: Rebuilt with consulting-appropriate links and branding
- **Header**: Simplified navigation updated for new section structure

### Technical Infrastructure
- **Contact API**: Server-side contact form handler with SMTP email delivery
- **Docker**: Updated `docker-compose.yml` and `docker-compose-simple.yml` for this deployment
- **Environment config**: New `env.example` with SMTP and site URL variables

## Technologies Used

- **Frontend**: Astro, Tailwind CSS v4, TypeScript
- **Backend**: Node.js, Nodemailer
- **Deployment**: Docker, Nginx Proxy Manager, Portainer GitOps
- **Hosting**: Self-hosted on home server

## Development

```bash
npm run dev       # Start development server
npm run build     # Build for production
npm run preview   # Preview production build
```

## Contact

- **LinkedIn:** [Kyra Willans](https://linkedin.com/in/kyrawillans)

## License

This project is MIT licensed. See LICENSE.md for details.
