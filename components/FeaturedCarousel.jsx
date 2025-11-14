"use client";
import { useState } from "react";

import { Card } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";


const FeaturedCarousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  const currentItem = items[currentIndex];

  return (
    <Card className="relative overflow-hidden rounded-2xl h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] xl:h-[452px] group cursor-pointer transition-all duration-300 hover:shadow-2xl">
      <div className="absolute inset-0">
        <img 
          src={currentItem.image} 
          alt={currentItem.title}
          className="w-full h-full object-cover transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-overlay"></div>
        <div className="absolute inset-0 bg-gradient-primary opacity-40 mix-blend-multiply"></div>
      </div>
      
      {/* Navigation Arrows */}
      <Button
        variant="secondary"
        size="icon"
        onClick={prevSlide}
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-10 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300"
      >
        <ChevronLeft className="h-4 w-4 text-white" />
      </Button>
      
      <Button
        variant="secondary" 
        size="icon"
        onClick={nextSlide}
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-10 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300"
      >
        <ChevronRight className="h-4 w-4 text-white" />
      </Button>

      {/* Content */}
      <div className="relative h-full flex flex-col justify-end p-4 sm:p-6 md:p-7 lg:p-8 text-white">
        <div className="space-y-2 sm:space-y-3 md:space-y-3 lg:space-y-4">
          <div className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm opacity-90">
            <span className="px-2 py-1 rounded-full bg-white/20 backdrop-blur-sm">
              {currentItem.category}
            </span>
            <span>{currentItem.readTime}</span>
          </div>
          
          <h3 className="text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl font-medium leading-tight">
            {currentItem.title}
          </h3>
          
          <p className="text-xs sm:text-sm md:text-base lg:text-lg opacity-90 line-clamp-2 sm:line-clamp-3 max-w-lg">
            {currentItem.description}
          </p>

          {/* Carousel Indicators */}
          <div className="flex space-x-1 sm:space-x-2 pt-3 sm:pt-4">
            {items.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-white scale-125"
                    : "bg-white/50 hover:bg-white/75"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
};

export default FeaturedCarousel;