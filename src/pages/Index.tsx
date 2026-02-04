import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import FeaturedSection from "@/components/home/FeaturedSection";
import LatestProducts from "@/components/home/LatestProducts";
import CoursesSection from "@/components/home/CoursesSection";
import AboutPreview from "@/components/home/AboutPreview";
import FounderSection from "@/components/home/FounderSection";
import NewsletterSection from "@/components/home/NewsletterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <FeaturedSection />
        <LatestProducts />
        <CoursesSection />
        <AboutPreview />
        <FounderSection />
        <NewsletterSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
