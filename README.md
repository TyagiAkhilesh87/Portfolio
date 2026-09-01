<div align="center">
  <img src="./public/portrait-assets/ak-monogram-v1.png" alt="AK monogram" width="112" />

  # Akhilesh Kumar Tyagi

  ### Shopify Developer · Liquid · UI/UX · Full-Stack Engineering

  I build distinctive Shopify storefronts where conversion-focused commerce architecture meets thoughtful UI/UX and dependable frontend engineering.

  [![Live Portfolio](https://img.shields.io/badge/LIVE_PORTFOLIO-VISIT_SITE-98ed1b?style=for-the-badge&logo=vercel&logoColor=11110f&labelColor=11110f)](https://akhileshportfolio-one.vercel.app/)
  [![LinkedIn](https://img.shields.io/badge/LINKEDIN-CONNECT-ffffff?style=for-the-badge&logo=linkedin&logoColor=11110f&labelColor=11110f)](https://www.linkedin.com/in/akhilesh-kumar-tyagi-34286012a/)
  [![Email](https://img.shields.io/badge/EMAIL-LET'S_TALK-98ed1b?style=for-the-badge&logo=gmail&logoColor=11110f)](mailto:tyagiakhliesh87@gmail.com)
</div>

<br />

![Shopify storefront engineering with React, Next.js, TypeScript, GraphQL, Node.js and Figma](./public/github-shopify-techstack-hero-v1.png)

## Storefronts with a point of view

This repository contains my interactive developer portfolio: a recruiter-friendly showcase of real ecommerce work, live-store previews, resilient image fallbacks, case-study routes, and a design system built around clarity and motion.

The experience is intentionally more than a gallery. It demonstrates how I approach storefront storytelling, responsive implementation, interaction polish, performance-aware fallbacks, and maintainable frontend architecture.

## Selected commerce work

<table>
  <tr>
    <td width="33.33%" valign="top">
      <a href="https://www.mynamerings.com/">
        <img src="./public/project-previews/my-name-rings-v2.png" alt="My Name Rings storefront" />
      </a>
      <h3>My Name Rings</h3>
      <p>Personalized jewelry storefront focused on considered presentation and product discovery.</p>
      <a href="https://www.mynamerings.com/">Visit storefront ↗</a>
    </td>
    <td width="33.33%" valign="top">
      <a href="https://soleparfum.myshopify.com/">
        <img src="./public/project-previews/sole-parfum-hero-v2.png" alt="Sole Parfum storefront" />
      </a>
      <h3>Sole Parfum</h3>
      <p>Premium fragrance experience with a clear journey from discovery to product.</p>
      <a href="https://soleparfum.myshopify.com/">Visit storefront ↗</a>
    </td>
    <td width="33.33%" valign="top">
      <a href="https://bytestyleshop.com/">
        <img src="./public/project-previews/byte-style-shop.png" alt="Byte Style Shop storefront" />
      </a>
      <h3>Byte Style Shop</h3>
      <p>Characterful ecommerce presentation for gaming culture, electronics and PC products.</p>
      <a href="https://bytestyleshop.com/">Visit storefront ↗</a>
    </td>
  </tr>
</table>

The full portfolio includes ten projects across jewelry, fragrance, gaming, pets, sports, hospitality, commercial services, travel, and nutrition.

## What makes the experience different

- **Live storefront previews** with reliable screenshot fallbacks when external security policies block embedding.
- **Scroll-led project storytelling** that keeps featured work visible while recruiters explore each store.
- **Dedicated case-study routes** with consistent navigation back to the main portfolio.
- **Responsive motion system** built with reduced-motion support and deliberate section entrances.
- **Original visual direction** combining editorial portraiture, spatial commerce artwork, and an acid-lime design language.
- **Deployment-ready structure** built for Vercel today and a Supabase-backed content workflow later.

## Shopify-focused development

My primary focus is building and improving Shopify storefronts that feel intentional from the first interaction through checkout. I combine commerce thinking with frontend craft so the final experience supports both the customer journey and the team maintaining it.

- Shopify theme development and responsive storefront implementation
- Liquid sections, reusable blocks and merchant-friendly customization
- Product, collection and navigation experiences shaped around conversion
- Storefront performance, accessibility and device-aware quality
- GraphQL and API integrations for connected commerce workflows
- Figma-to-code implementation with close attention to spacing, typography, hierarchy and interaction states

> **Design to development:** I use Figma to understand the system behind a screen, then translate it into reusable, responsive components rather than treating the design as a static picture.

## Technology

<p>
  <img src="https://img.shields.io/badge/Next.js_16-11110f?style=flat-square&logo=next.js&logoColor=white" alt="Next.js" />
  <img src="https://img.shields.io/badge/React_19-11110f?style=flat-square&logo=react&logoColor=61DAFB" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-11110f?style=flat-square&logo=typescript&logoColor=3178C6" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Motion-11110f?style=flat-square&logo=framer&logoColor=98ed1b" alt="Motion" />
  <img src="https://img.shields.io/badge/Vercel-11110f?style=flat-square&logo=vercel&logoColor=white" alt="Vercel" />
  <img src="https://img.shields.io/badge/Shopify-11110f?style=flat-square&logo=shopify&logoColor=95BF47" alt="Shopify" />
  <img src="https://img.shields.io/badge/Liquid-11110f?style=flat-square&logo=shopify&logoColor=98ed1b" alt="Shopify Liquid" />
  <img src="https://img.shields.io/badge/Figma-11110f?style=flat-square&logo=figma&logoColor=F24E1E" alt="Figma" />
</p>

| Layer | Implementation |
| --- | --- |
| Interface | Next.js, React, TypeScript |
| Shopify | Liquid, theme sections, storefront UX, GraphQL and API integration |
| Design workflow | Figma, responsive translation, reusable components and interaction states |
| Motion | Motion for React, scroll progress, staged reveals |
| Visual system | Responsive CSS, Geist Sans, Geist Mono, Phosphor icons |
| Content | Typed local project collection, prepared for future Supabase integration |
| Build | Next.js production pipeline |
| Deployment | Vercel-ready with environment variables kept outside source control |

## Project structure

```text
app/
├── page.tsx                 # Main portfolio
├── portfolio-v4.css         # Visual and responsive system
├── work/[slug]/page.tsx     # Dynamic commerce case studies
└── resume/page.tsx          # Recruiter-friendly résumé

components/
├── PortfolioExperience.tsx  # Main interactive experience
└── CaseStorePreview.tsx     # Live/fallback storefront preview

content/projects.ts          # Typed portfolio project data
public/                      # Brand art, portraits and storefront captures
```

## Run locally

Requirements: Node.js 22.13 or newer.

```bash
git clone https://github.com/TyagiAkhilesh87/Portfolio.git
cd Portfolio
npm install
npm run dev
```

Then open `http://localhost:3000`.

### Production check

```bash
npm run lint
npm run build
npm run start
```

## Deploy to Vercel

**Production:** [akhileshportfolio-one.vercel.app](https://akhileshportfolio-one.vercel.app/)

1. Import this GitHub repository into Vercel.
2. Keep the framework configuration detected from the project.
3. Set `NEXT_PUBLIC_SITE_URL` to the production URL.
4. Deploy the `main` branch.

No online database is required for the current portfolio. Supabase can be connected later for project management, contact submissions, and authenticated admin workflows without changing the public presentation.

## Contact

**Akhilesh Kumar Tyagi**

[LinkedIn](https://www.linkedin.com/in/akhilesh-kumar-tyagi-34286012a/) · [GitHub](https://github.com/TyagiAkhilesh87) · [Email](mailto:tyagiakhliesh87@gmail.com)

---

<div align="center">
  <strong>Designed and engineered for thoughtful teams and ambitious commerce.</strong>
  <br />
  <sub>© 2026 Akhilesh Kumar Tyagi</sub>
</div>
