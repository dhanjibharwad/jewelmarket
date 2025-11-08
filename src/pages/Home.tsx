import React from "react";
import HeroCarousel from "@/components/Hero";
import CategoryGrid from "@/components/CategoryGrid";
import VideoCarousel from "@/components/DiamondStories";
import JewelAssurance from "@/components/Jewelassurance";
import BusinessConsultationSection from "@/components/Bsol";
import TrustSection from "@/components/Trustsection";
import JewelryCategories from "@/components/JewelryCategories";


const Home: React.FC = () => {
  return (
    <main className="flex flex-col">
     
        <HeroCarousel />
        <CategoryGrid />
        <VideoCarousel />
        <JewelAssurance />
        <BusinessConsultationSection />
        <TrustSection />
        <JewelryCategories />
    </main>
  );
};

export default Home;
