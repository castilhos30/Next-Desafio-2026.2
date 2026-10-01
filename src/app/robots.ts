import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://castilhosbecare.com.br/sitemap.xml', //mudar o dominio dps
  };
}