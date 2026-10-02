import { useEffect, useState } from "react";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { db } from "./firebase";

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  publishedDate: string;
  publicationDate: string;
  author: string;
  contentHtml: string;
  featuredImage: { url: string; alt: string };
  seo?: {
    metaTitle?: string;
    metaDescription?: string;
    focusKeywords?: string[];
    canonicalUrl?: string;
    robots?: string;
  };
  status: string;
  targetWebsite?: string;
  featured?: boolean;
  order?: number;
  tags?: string[];
}

export const isMpSoleWebsite = (website?: string): boolean => {
  const w = (website || "").trim();
  return ["MP Sole", "Website 2 (Next.js)", "All Websites", "mpsole.com", "mpsolemanufacture.com"].includes(w);
};

// Static default fallback blog for MP Sole
export const STATIC_FALLBACK_BLOGS: BlogPost[] = [
  {
    id: "mp-sole-karachi-mfg",
    slug: "best-quality-shoe-sole-manufacturing-karachi",
    title: "Best Quality Shoe Sole Manufacturing in Karachi, Pakistan",
    excerpt: "Discover best quality shoe sole manufacturing in Karachi, Pakistan. Skilled workers, strong materials & trusted quality for all shoe types.",
    category: "Sole Manufacturing",
    readTime: "6 min read",
    publishedDate: "Sep 15, 2026",
    publicationDate: "2026-09-15T00:00:00.000Z",
    author: "MP Sole® Editorial",
    status: "Published",
    featured: true,
    order: 1,
    targetWebsite: "MP Sole",
    tags: ["Shoe Sole", "Karachi", "Polyurethane", "Footwear Manufacturing"],
    featuredImage: {
      url: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&q=80",
      alt: "Shoe Sole Manufacturing in Karachi"
    },
    seo: {
      metaTitle: "Best Quality Shoe Sole Manufacturing in Karachi, Pakistan | MP Sole®",
      metaDescription: "Discover best quality shoe sole manufacturing in Karachi, Pakistan. Skilled workers, strong materials & trusted quality for all shoe types.",
      focusKeywords: ["shoe sole manufacturing", "karachi footwear", "pu sole factory"],
      canonicalUrl: "https://mpsolemanufacture.com/blog-details"
    },
    contentHtml: `
      <p>Karachi is one of the biggest industrial hubs in Pakistan. It is also a busy center for footwear manufacturing and component tooling. Many small and large factories operate here daily, producing different parts of shoes. One crucial component is the shoe sole—the foundation that absorbs impact, provides traction, and determines shoe longevity.</p>
      
      <h2>Why Karachi Is Famous for Footwear Tooling</h2>
      <p>Karachi possesses a rich heritage of leather craftsmanship and polymer engineering. Skilled toolmakers, advanced molding technology, and decades of compounding experience make Karachi a preferred sourcing destination for regional and international footwear brands.</p>

      <h2>Core Polymers Used in High-Performance Soles</h2>
      <ul>
        <li><strong>Polyurethane (PU):</strong> Lightweight, exceptional flex fatigue resistance, and microcellular cushioning for casual and safety shoes.</li>
        <li><strong>EVA / Phylon:</strong> Ultra-lightweight shock absorption, ideal for sports shoes and lifestyle sneakers.</li>
        <li><strong>Thermoplastic Polyurethane (TPU):</strong> Superior abrasion resistance, slip prevention, and aesthetic clarity.</li>
        <li><strong>Vulcanized Rubber:</strong> Heavy-duty wet traction and oil resistance for industrial work boots.</li>
      </ul>

      <h2>Direct Factory Partnership with MP Sole®</h2>
      <p>MP Sole® provides complete in-house CAD/CAM mold engineering, custom Shore durometer hardness compounding, and rapid sampling within 7 business days. Contact our technical team today for high-volume contract manufacturing.</p>
    `
  }
];

export function usePublishedBlogs() {
  const [posts, setPosts] = useState<BlogPost[]>(STATIC_FALLBACK_BLOGS);
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");

  useEffect(() => {
    try {
      const q = collection(db, "blogs");
      const unsubscribe = onSnapshot(
        q,
        (snapshot) => {
          if (snapshot.empty) {
            setPosts(STATIC_FALLBACK_BLOGS);
            setStatus("ready");
            return;
          }

          const matched: BlogPost[] = [];

          snapshot.forEach((docSnap) => {
            const data = docSnap.data();
            // Filter blogs intended for MP Sole or All Websites (allow Published or Draft)
            if (isMpSoleWebsite(data.targetWebsite) && data.status !== "Archived" && data.status !== "Hidden") {
              const rawDate = data.publicationDate || data.createdAt;
              const date = rawDate?.toDate ? rawDate.toDate() : new Date(rawDate || 0);
              const validDate = Number.isFinite(date.getTime());

              matched.push({
                id: docSnap.id,
                slug: data.slug || docSnap.id,
                title: data.title || "Untitled Article",
                excerpt: data.seo?.metaDescription || data.excerpt || "",
                category: data.category || "Sole Manufacturing",
                readTime: typeof data.readTime === "number" ? `${data.readTime} min read` : (data.readTime || "5 min read"),
                publishedDate: validDate
                  ? date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })
                  : "Recent",
                publicationDate: validDate ? date.toISOString() : new Date().toISOString(),
                author: data.author || "MP Sole® Editorial",
                contentHtml: data.contentHtml || "",
                featuredImage: (data.featuredImage?.url && data.featuredImage.url.trim() && !data.featuredImage.url.includes("blog1.jpg") && !data.featuredImage.url.includes("1400"))
                  ? { url: data.featuredImage.url.trim(), alt: data.featuredImage.alt || data.title || "" }
                  : { url: "", alt: "" },
                seo: data.seo,
                status: data.status || "Published",
                targetWebsite: data.targetWebsite,
                featured: Boolean(data.featured),
                order: typeof data.order === "number" ? data.order : 99,
                tags: Array.isArray(data.tags) ? data.tags : [],
              });
            }
          });

          // Fallback to static blogs if none found in cloud
          if (matched.length === 0) {
            setPosts(STATIC_FALLBACK_BLOGS);
          } else {
            // Sort: featured first, then by order, then newest
            matched.sort((a, b) => {
              if (Boolean(b.featured) !== Boolean(a.featured)) {
                return Number(Boolean(b.featured)) - Number(Boolean(a.featured));
              }
              if ((a.order ?? 99) !== (b.order ?? 99)) {
                return (a.order ?? 99) - (b.order ?? 99);
              }
              return new Date(b.publicationDate).getTime() - new Date(a.publicationDate).getTime();
            });
            setPosts(matched);
          }

          setStatus("ready");
        },
        (error) => {
          console.warn("MP Sole blogs could not be loaded from Firestore (using fallback):", error);
          setPosts(STATIC_FALLBACK_BLOGS);
          setStatus("ready");
        }
      );

      return () => unsubscribe();
    } catch (e) {
      console.warn("Failed to subscribe to blogs:", e);
      setPosts(STATIC_FALLBACK_BLOGS);
      setStatus("ready");
    }
  }, []);

  return { posts, status };
}
