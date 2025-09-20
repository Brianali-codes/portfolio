"use client";

import { useEffect, useState } from "react";
import Parser from "rss-parser";

type CustomFeedItem = {
  title?: string;
  link?: string;
  pubDate?: string;
  contentSnippet?: string;
  "content:encoded"?: string;
};

function extractImage(content?: string): string | null {
  if (!content) return null;
  const match = content.match(/<img[^>]+src="([^">]+)"/);
  return match ? match[1] : null;
}

function extractText(content?: string, fallback?: string): string {
  if (!content) return fallback ?? "No description available.";
  // Strip HTML tags
  const text = content.replace(/<[^>]*>?/gm, "").trim();
  // Limit to ~200 chars
  return text.length > 200 ? text.slice(0, 200) + "..." : text;
}

export default function Blog() {
  const [items, setItems] = useState<CustomFeedItem[]>([]);

  useEffect(() => {
    async function fetchFeed() {
      try {
        const res = await fetch("/.netlify/functions/getFeed");
        const data: CustomFeedItem[] = await res.json();
        setItems(data);
      } catch (err) {
        console.error("Error fetching feed:", err);
      }
    }
    fetchFeed();
  }, []);
  

  return (
    <section className="max-w-4xl mx-auto px-6 py-16">
       <div className="my-6 h-[2px] w-full bg-white border-white border-dotted border-2"></div>
        <div className="flex justify-between items-center">
            <h2 className="text-2xl font-extrabold text-start">Blogs</h2>
            <h2 className="text-sm font-extrabold text-start">Brian ali on medium.com</h2>
        </div>
        
    <div className="h-5"></div>


      <div className="flex flex-col gap-12">
        {items.map((item, i) => {
          const image = extractImage(item["content:encoded"]);
          const description = extractText(item["content:encoded"], item.contentSnippet);

          return (
            <article
              key={i}
              className="rounded-2xl overflow-hidden border border-white/20 bg-white/10 backdrop-blur-lg shadow-lg transition hover:border-white/40"
            >
              {image && (
                <div className="w-full h-56 overflow-hidden">
                  <img
                    src={image}
                    alt={item.title ?? "Blog image"}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              <div className="p-6">
                <a
                  href={item.link ?? "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl font-bold text-white hover:text-blue-400 transition"
                >
                  {item.title ?? "Untitled"}
                </a>

                <p className="text-sm text-gray-300 mt-2">
                  {item.pubDate ? new Date(item.pubDate).toDateString() : "No date"}
                </p>

                <p className="mt-4 text-gray-200 leading-relaxed line-clamp-3">
                  {description}
                </p>

                <div className="mt-5">
                  <a
                    href={item.link ?? "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 font-medium hover:underline"
                  >
                    Read more →
                  </a>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
