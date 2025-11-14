import React from "react";
import HeroCarousel from "@/components/Hero";
import CategoryGrid from "@/components/CategoryGrid";
import VideoCarousel from "@/components/DiamondStories";
import JewelAssurance from "@/components/Jewelassurance";
import BusinessConsultationSection from "@/components/Bsol";
import TrustSection from "@/components/Trustsection";
import JewelryCategories from "@/components/JewelryCategories";
import GiftingCardsDemo from "@/components/Giftcard";
import PopupDemo from "@/components/Popup";
import JewelryShowcase from "@/components/Collection";
import JewelryCards from "@/components/Bigcard";
import JewelryCollections from "@/components/Trendingcollection";
import TestimonialSection from "@/components/testimonial";


const Home: React.FC = () => {
  return (
    <main className="flex flex-col">

        <PopupDemo/>
     
        <HeroCarousel />
        <CategoryGrid />
        <VideoCarousel />
        <JewelAssurance />
        <BusinessConsultationSection />
        <TrustSection />
        <JewelryCategories />
        <GiftingCardsDemo />
        <JewelryShowcase/>
        <JewelryCards/>
        <JewelryCollections/>
        <TestimonialSection/>
        
    </main>
  );
};

export default Home;
