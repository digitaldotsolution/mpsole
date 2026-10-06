import { NextResponse } from 'next/server';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/lib/firebase';

export const dynamic = 'force-dynamic';

const isMpSoleWebsite = (website?: string): boolean => {
  const w = (website || '').trim();
  return ['MP Sole', 'Website 2 (Next.js)', 'All Websites', 'mpsole.com', 'mpsolemanufacture.com'].includes(w);
};

const FALLBACK_BLOGS = [
  {
    slug: 'best-quality-shoe-sole-manufacturing-karachi',
    lastmod: '2026-09-15',
  },
];

export async function GET() {
  let blogUrls = '';

  try {
    const querySnapshot = await getDocs(collection(db, 'blogs'));
    const validBlogs: Array<{ slug: string; lastmod: string }> = [];

    querySnapshot.forEach((docSnap) => {
      const data = docSnap.data();
      if (
        isMpSoleWebsite(data.targetWebsite) &&
        data.status !== 'Archived' &&
        data.status !== 'Hidden' &&
        data.status !== 'Draft'
      ) {
        const slug = data.slug || docSnap.id;
        const rawDate = data.updatedAt || data.publicationDate || data.createdAt;
        let lastmod = '';
        if (rawDate?.toDate) {
          lastmod = rawDate.toDate().toISOString().split('T')[0];
        } else if (rawDate) {
          const d = new Date(rawDate);
          if (Number.isFinite(d.getTime())) {
            lastmod = d.toISOString().split('T')[0];
          }
        }
        if (!lastmod) {
          lastmod = '2026-10-02';
        }
        validBlogs.push({ slug, lastmod });
      }
    });

    if (validBlogs.length > 0) {
      blogUrls = validBlogs
        .map(
          (b) => `  <url>
    <loc>https://mpsolemanufacture.com/blog/${b.slug}</loc>
    <lastmod>${b.lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`
        )
        .join('\n');
    }
  } catch (error) {
    console.warn('Could not fetch dynamic blogs for sitemap, using fallback:', error);
  }

  // Fallback if no blogs retrieved from database
  if (!blogUrls) {
    blogUrls = FALLBACK_BLOGS.map(
      (b) => `  <url>
    <loc>https://mpsolemanufacture.com/blog/${b.slug}</loc>
    <lastmod>${b.lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`
    ).join('\n');
  }

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://mpsolemanufacture.com/blog</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
${blogUrls}
</urlset>`;

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}
