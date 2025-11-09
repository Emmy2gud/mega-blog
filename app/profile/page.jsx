"use client";
import { useState } from "react";
import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Frown, Meh, Smile, Laugh, Angry } from "lucide-react";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import FeaturedCarousel from "@/components/FeaturedCarousel";
import Image from "next/image";
import Link from "next/link";
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Bookmark,
  Calendar,
  Folder,
  MessageCircleMore,
  Plus,
  Reply,
  Send,
  Share,
} from "lucide-react";
import PostCard from "@/components/PostCard";
import ProfileHeader from "@/components/profile/ProfileHeader";

export default function page() {
  const users = [
    {
      id: 1,
      name: "James",
      image_url: "/images/avatar/01.jpg",
    },
    {
      id: 2,
      name: "Louis Hoebregts",
      image_url: "/images/avatar/02.jpg",
    },
    {
      id: 3,
      name: "Mary",
      image_url: "/images/avatar/03.jpg",
    },
    {
      id: 4,
      name: "Jon Kantner",
      image_url: "/images/avatar/04.jpg",
    },
    {
      id: 5,
      name: "Linda",
      image_url: "/images/avatar/05.jpg",
    },
    {
      id: 6,
      name: "Cassie Evans",
      image_url: "/images/avatar/06.jpg",
    },
    {
      id: 7,
      name: "Patricia",
      image_url: "/images/avatar/07.jpg",
    },
  ];

  const topposts = [
    {
      id: 1,
      title: "How to Spend the Perfect Day on Croatia’s Most Magical Island",
      image: "/images/car/03.jpg",
      subtitle: "Subhead",

      date: "2022-12-06",
    },
    {
      id: 2,
      title: "How to Spend the Perfect Day on Croatia’s Most Magical Island",
      image: "/images/animal/04.jpg",
      subtitle: "Subhead",
      date: "2022-12-06",
    },
    {
      id: 3,
      title: "How to Spend the Perfect Day on Croatia’s Most Magical Island",
      image: "/images/dance/06.jpg",
      subtitle: "Subhead",
      date: "2022-12-06",
    },
    {
      id: 4,
      title: "How to Spend the Perfect Day on Croatia’s Most Magical Island",
      image: "/images/food/04.jpg",
      subtitle: "Subhead",
      date: "2022-12-06",
    },
    {
      id: 5,
      title: "How to Spend the Perfect Day on Croatia’s Most Magical Island",
      image: "/images/sport/05.jpg",
      subtitle: "Subhead",
      date: "2022-12-06",
    },
  ];

  const [selected, setSelected] = useState(null);

  const reactions = [
    { id: 1, icon: <Angry />, color: "text-red-500" },
    { id: 2, icon: <Frown />, color: "text-orange-400" },
    { id: 3, icon: <Meh />, color: "text-yellow-400" },
    { id: 4, icon: <Smile />, color: "text-green-500" },
    { id: 5, icon: <Laugh />, color: "text-blue-500" },
  ];

  const handleSelect = (id) => {
    setSelected(id);
  };

    const popularposts = [
    {
      id: 1,
      title: "Opening Day of Boating Season, Seattle WA",
      content:
        "Of course the Puget Sound is very watery, and where there is water, there are boats. Today is...",
      user: users[0].name,
      image: "/images/sport/05.jpg",
      user_profile: users[0].image_url,
      date: "2022-12-06",
    },
    {
      id: 2,
      title: "How to choose the right laptop for programming",
      content:
        "Choosing the right laptop for programming can be a tough process. It’s easy to get confused...",
      user: users[1].name,
      image: "/images/technology/07.jpg",
      user_profile: users[1].image_url,
      date: "2022-12-06",
    },
    {
      id: 3,
      title: "How we built the first real self-driving car",
      content:
        "Electric self-driving cars will save millions of lives and significantly accelerate the world’s...",
      user: users[2].name,
      image: "/images/car/02.jpg",
      user_profile: users[2].image_url,
      date: "2022-12-06",
    },
    {
      id: 4,
      title: "How to Persuade Your Parents to Buy Fast Food",
      content:
        "Parents often don’t want to buy fast food. They may be worried that it’s too expensive, unhealthy...",
      user: users[3].name,
      image: "/images/food/07.jpg",
      user_profile: users[3].image_url,
      date: "2022-12-06",
    },
  ];
  return (
    <div>
      <header className=" ">
        {/* Category Tags */}
        <div className="bg-white border-b border-gray-200 py-4 px-14">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="/">Home</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />

              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="/docs/components">Profile Marked</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
          
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        
  
      </header>

      <main className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div>
            <ProfileHeader />
        </div>
      </main>
    </div>
  );
}
