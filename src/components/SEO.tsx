import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
}

function setMeta(name: string, content: string, attr: "name" | "property" = "name") {
  let el = document.querySelector<HTMLMetaElement>(`meta[${attr}="${name}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

export default function SEO({ title, description }: SEOProps) {
  useEffect(() => {
    const fullTitle = `${title} | Strata Surfaces`;
    document.title = fullTitle;
    setMeta("description", description);
    setMeta("og:title", fullTitle, "property");
    setMeta("og:description", description, "property");
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [title, description]);

  return null;
}
