import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET() {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>https://mpsolemanufacture.com/</loc><changefreq>weekly</changefreq><priority>1.0</priority></url>
  <url><loc>https://mpsolemanufacture.com/about</loc><changefreq>monthly</changefreq><priority>0.8</priority></url>
  <url><loc>https://mpsolemanufacture.com/contact</loc><changefreq>monthly</changefreq><priority>0.8</priority></url>
  <url><loc>https://mpsolemanufacture.com/privacy-policy</loc><changefreq>yearly</changefreq><priority>0.3</priority></url>
  <url><loc>https://mpsolemanufacture.com/terms-and-conditions</loc><changefreq>yearly</changefreq><priority>0.3</priority></url>
  <url><loc>https://mpsolemanufacture.com/disclaimer</loc><changefreq>yearly</changefreq><priority>0.3</priority></url>
  <url><loc>https://mpsolemanufacture.com/return-refund-cancellation-policy</loc><changefreq>yearly</changefreq><priority>0.3</priority></url>
</urlset>`;

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}
