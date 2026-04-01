# Platzi FC — Web Platform

> Plataforma web oficial de Platzi FC. Stack 100% gratuito construido sobre Next.js, Supabase, Cloudflare y Vercel.

[![CI](https://github.com/jacs4210/platzifc-web/actions/workflows/ci.yml/badge.svg)](https://github.com/jacs4210/platzifc-web/actions/workflows/ci.yml)
[![Lighthouse](https://github.com/jacs4210/platzifc-web/actions/workflows/lighthouse-audit.yml/badge.svg)](https://github.com/jacs4210/platzifc-web/actions/workflows/lighthouse-audit.yml)

## Estructura del Monorepo

```
platzifc-web/
├── apps/
│   ├── web/            → www.platzifc.com       (Next.js 14 + App Router)
│   ├── shop/           → shop.platzifc.com      (Next.js + Medusa.js)
│   └── tickets/        → tickets.platzifc.com   (Next.js)
├── services/
│   ├── match-ingest/   → Cloudflare Worker de ingesta de eventos
│   └── realtime/       → Módulo de canales Supabase Realtime
├── packages/
│   ├── ui/             → Librería de componentes compartida
│   ├── config/         → Configuraciones, constantes y env validation
│   ├── eslint-config/  → Reglas ESLint compartidas
│   └── ts-config/      → Configuraciones TypeScript base
└── cms/                → Decap CMS (Git-based, config.yml)
```

## Requisitos

- **Node.js** >= 20
- **pnpm** >= 9 (`npm install -g pnpm`)

## Inicio Rápido

```bash
# 1. Clonar el repositorio
git clone git@github.com:jacs4210/platzifc-web.git
cd platzifc-web

# 2. Instalar dependencias
pnpm install

# 3. Configurar variables de entorno
cp .env.example apps/web/.env.local
cp .env.example apps/shop/.env.local
cp .env.example apps/tickets/.env.local
# Editar cada .env.local con las credenciales reales

# 4. Iniciar en modo desarrollo (todas las apps en paralelo)
pnpm dev
```

## GitHub Actions (CI/CD)

| Workflow | Disparador | Qué hace |
|:---------|:-----------|:---------|
| `ci.yml` | PR a `main`/`develop` | Lint + Typecheck + Tests + Audit de seguridad |
| `deploy-preview.yml` | PR abierto/actualizado | Deploy en Vercel Preview + comenta URL en el PR |
| `deploy-production.yml` | Push a `main` | Deploy a producción + purga cache de Cloudflare |
| `lighthouse-audit.yml` | Push a `main` + PR + semanal | Auditoría Core Web Vitals (LCP/CLS/INP) |

### Secrets requeridos en GitHub

Configurar en **Settings → Secrets and variables → Actions**:

| Secret | Dónde obtenerlo |
|:-------|:----------------|
| `VERCEL_TOKEN` | vercel.com → Settings → Tokens |
| `VERCEL_ORG_ID` | `.vercel/project.json` tras `vercel link` |
| `VERCEL_PROJECT_ID` | `.vercel/project.json` tras `vercel link` |
| `CLOUDFLARE_ZONE_ID` | Cloudflare Dashboard → tu dominio → Zone ID |
| `CLOUDFLARE_API_TOKEN` | Cloudflare → My Profile → API Tokens |
| `LHCI_GITHUB_APP_TOKEN` | GitHub → Settings → Developer settings → Apps |

## Stack Tecnológico (Costo $0)

| Capa | Servicio |
|:-----|:---------|
| Hosting Frontend | Vercel Free |
| CDN + DNS + WAF | Cloudflare Free |
| CI/CD | GitHub Actions (ilimitado en repo público) |
| CMS | Decap CMS (Git-based, OSS) |
| Base de datos SQL | Supabase Free (PostgreSQL + Auth + Realtime) |
| Base de datos NoSQL | MongoDB Atlas M0 (Free Forever) |
| Cache | Upstash Redis Free |
| Bus de eventos | Upstash Kafka Free |
| Pagos | Stripe + MercadoPago (sin costo hasta primera venta) |
| Analytics | Umami OSS (autoalojado en Vercel) |

## Contribuir

1. Crear rama desde `develop`: `git checkout -b feature/nombre-feature`
2. Hacer cambios y commit: `git commit -m "feat: descripción"`
3. Abrir PR hacia `develop`
4. El CI se ejecuta automáticamente y Vercel genera el preview

---

**Platzi FC** — El club de la comunidad 🟢
