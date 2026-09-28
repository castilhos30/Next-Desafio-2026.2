import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://next-desafio-2026-2-nimk.vercel.app/sitemap.xml', //mudar o dominio dps
  };
}