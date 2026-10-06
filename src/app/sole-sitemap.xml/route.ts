import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET() {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>https://mpsolemanufacture.com/sole-types</loc><changefreq>monthly</changefreq><priority>0.9</priority></url>
  <url><loc>https://mpsolemanufacture.com/sole-types/pu-sole-gents</loc><changefreq>monthly</changefreq><priority>0.9</priority></url>
  <url><loc>https://mpsolemanufacture.com/sole-types/ladies-jelly-sole</loc><changefreq>monthly</changefreq><priority>0.9</priority></url>
  <url><loc>https://mpsolemanufacture.com/sole-types/tr-sole</loc><changefreq>monthly</changefreq><priority>0.9</priority></url>
  <url><loc>https://mpsolemanufacture.com/sole-types/medicated-sole</loc><changefreq>monthly</changefreq><priority>0.9</priority></url>
</urlset>`;

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}
