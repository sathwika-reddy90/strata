import { Routes, Route } from "react-router-dom";
import Layout from "@/components/Layout";
import HomePage from "@/pages/HomePage";
import AboutPage from "@/pages/AboutPage";
import GalleryPage from "@/pages/GalleryPage";
import ProductsPage from "@/pages/ProductsPage";
import GraniteProductsPage from "@/pages/GraniteProductsPage";
import TilesProductsPage from "@/pages/TilesProductsPage";
import QuartzProductsPage from "@/pages/QuartzProductsPage";
import NaturalStoneProductsPage from "@/pages/NaturalStoneProductsPage";
import PortfolioPage from "@/pages/PortfolioPage";
import BlogPage from "@/pages/BlogPage";
import TestimonialsPage from "@/pages/TestimonialsPage";
import BrandsPage from "@/pages/BrandsPage";
import WhyChooseUsPage from "@/pages/WhyChooseUsPage";
import ContactPage from "@/pages/ContactPage";
import NotFoundPage from "@/pages/NotFoundPage";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/granite" element={<GraniteProductsPage />} />
        <Route path="/products/tiles" element={<TilesProductsPage />} />
        <Route path="/products/quartz" element={<QuartzProductsPage />} />
        <Route path="/products/natural-stone" element={<NaturalStoneProductsPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/testimonials" element={<TestimonialsPage />} />
        <Route path="/brands" element={<BrandsPage />} />
        <Route path="/why-choose-us" element={<WhyChooseUsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
