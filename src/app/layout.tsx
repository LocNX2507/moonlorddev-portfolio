import type { Metadata } from 'next'
import './globals.css'

import Footer from '@/components/Footer/Footer'
import Navbar from '@/components/Navbar/Navbar'
import { personSchema, organizationSchema } from '@/lib/schema'

const title = 'Moonlorddev | Fullstack & AI Engineer — Cloud, Microservices & Real-time Systems'

const description =
  'Senior Fullstack Developer with 5+ years building production systems: AI platforms (SSE streaming, LLM integration), enterprise chatbots (5M+ monthly messages), cloud infrastructure. Expert in Node.js, React, Kubernetes, microservices architecture, real-time systems (Socket.IO, Redis), DevOps (CI/CD, ArgoCD), and production optimization.'

const url = process.env.NEXT_PUBLIC_SITE_URL

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    'fullstack developer',
    'AI engineering',
    'cloud infrastructure',
    'microservices',
    'Kubernetes',
    'React',
    'Node.js',
    'TypeScript',
    'real-time systems',
    'SSE streaming',
    'socket.io',
    'DevOps',
    'CI/CD',
  ],
  category: 'technology',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'https://moonlorddev-portfolio.vercel.app'),
  alternates: {
    canonical: url,
  },
  openGraph: {
    title,
    description,
    url,
    siteName: 'Moonlorddev Portfolio',
    type: 'website',
    images: [
      {
        url: '/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'Moonlorddev - Fullstack & AI Engineer',
      },
    ],
  },
  twitter: {
    title,
    description,
    card: 'summary_large_image',
    images: '/twitter-image.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" data-theme="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body>
        <header>
          <Navbar />
        </header>
        {children}
        <Footer />
      </body>
    </html>
  )
}
