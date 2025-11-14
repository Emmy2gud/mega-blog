"use client";
import { useState } from "react";
import React from "react";
   import { Filter, FilterIcon, Grip, HamburgerIcon, HamIcon, Logs, MenuSquare, Settings } from "lucide-react"; 
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Send,
  MapPin,
  Phone,
  Mail,
  Globe,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";
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
  Share,
} from "lucide-react";
import PostCard from "@/components/PostCard";
import Loader from "@/components/Loader";

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


const newposts = [
  {
    id: 1,
    title: "12 Mobile UX Design Trends For 2018",
    image: "/images/technology/04.jpg",
    content:
      "Things move quickly in the mobile app universe. To succeed in the field of mobile UX design, designers must have the foresight and prepare for new challenges around the corner",
    user: users[0].name,
    user_profile: users[0].image_url,
    date: "2022-12-06",
  },
  {
    id: 2,
    title: "What a Disabled Squirrel Taught Me About Life, Work, and Love",
    image: "/images/animal/03.jpg",
    content:
      "Why it helps to know what it's like, and the exquisite beauty of empathy These days, the wood patio area just outside my kitchen door is a riot ",
    user: users[1].name,
    user_profile: users[1].image_url,
    date: "2022-12-06",
  },
  {
    id: 3,
    title: "How to Become a Master Designer",
    image: "/images/abstract/06.jpg",
    content:
      "Many outsiders believe that designers are unicorns, gifted or special in some way. We have an innate ability to create gorgeous interfaces, a natural talent for matching complementary colors, an unexplainable intuition...",
    user: users[2].name,
    user_profile: users[2].image_url,
    date: "2022-12-06",
  },
  {
    id: 4,
    title: "No boat bottomfish: Jetty fishing on the Washington Coast",
    image: "/images/sport/01.jpg",
    content:
      "Cast from the rocks to bring home fresh fish tacos in this iconic spring and summer fishery. Are you looking to go fishing and bring home delicious.",
    user: users[3].name,
    user_profile: users[3].image_url,
    date: "2022-12-06",
  },
  {
    id: 5,
    title: "Becoming a Self-Driving Car & Machine Learning Engineer",
    image: "/images/car/01.jpg",
    content:
      "How I left my full-time job, studied at Udacity, and landed a job at BMW The past year has been quite a journey for me. A year ago I left my full-time",
    user: users[4].name,
    user_profile: users[4].image_url,
    date: "2022-12-06",
  },
  {
    id: 6,
    title:
      "This free course can teach you music programming basics in less than an hour",
    image: "/images/music/04.jpg",
    content:
      "A Berlin-based music software company, just released a free interactive music course that runs right in your browser. One thing that.",
    user: users[5].name,
    user_profile: users[4].image_url,
    date: "2022-12-06",
  },
];
  const trendyposts = [
    {
      id: 1,
      title: "How to build a self-driving car in one month",
      image: "/images/car/04.jpg",
      content:
        "Can I learn the necessary computer science to build the software part of a self-driving car in one month?",
      user: users[0].name,
      user_profile: users[1].image_url,
      date: "2022-12-06",
    },
    {
      id: 2,
      title: "Self-Improvement Has Become An Extreme Sport",
      image: "/images/car/05.jpg",
      content:
        "What we're told we must do each day to develop and be successful has gone out of control. We have endless lists of habits that we're supposed to do",
      user: users[1].name,
      user_profile: users[3].image_url,
      date: "2022-12-06",
    },
    {
      id: 3,
      title: "10 Cooking Lessons to Use in Everyday Life",
      image: "/images/food/04.jpg",
      content:
        "I recently stumbled upon this quote by Paul Theroux: 'Cooking requires confident guesswork and improvisation ",
      user: users[2].name,
      user_profile: users[6].image_url,
      date: "2022-12-06",
    },
    {
      id: 4,
      title:
        "Typography can make or break your design: a process for choosing type",
      image: "/images/technology/06.jpg",
      content:
        "One of the most important skills you can learn as a designer is how to choose type. This is because text is one of the primary ways designers ...",
      user: users[3].name,
      user_profile: users[5].image_url,
      date: "2022-12-06",
    },
  ];
    const topposts = [
    {
      id: 1,
      title: "House boating on Lake Shasta",
      image: "/images/sport/04.jpg",
      content:
        "The best way to spend a long 4th of July weekend. Wake boarding, swimming, barbecues, and bonfires.",
      user: users[0].name,
      user_profile: users[1].image_url,
      date: "2022-12-06",
    },
    {
      id: 2,
      title: "How to choose the right laptop for programming",
      image: "/images/technology/03.jpg",
      content:
        "Choosing the right laptop for programming can be a tough process. It's easy to get confused while researching the various options. There are many different laptop models out there, each with a different set of trade-offs",
      user: users[4].name,
      user_profile: users[3].image_url,
      date: "2022-12-06",
    },
  ];
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
        "Choosing the right laptop for programming can be a tough process. It's easy to get confused...",
      user: users[1].name,
      image: "/images/technology/07.jpg",
      user_profile: users[1].image_url,
      date: "2022-12-06",
    },
    {
      id: 3,
      title: "How we built the first real self-driving car",
      content:
        "Electric self-driving cars will save millions of lives and significantly accelerate the world's...",
      user: users[2].name,
      image: "/images/car/02.jpg",
      user_profile: users[2].image_url,
      date: "2022-12-06",
    },
    {
      id: 4,
      title: "How to Persuade Your Parents to Buy Fast Food",
      content:
        "Parents often don't want to buy fast food. They may be worried that it's too expensive, unhealthy...",
      user: users[3].name,
      image: "/images/food/07.jpg",
      user_profile: users[3].image_url,
      date: "2022-12-06",
    },
  ];
  return (
    <div>
        <Loader/>
      <header className=" ">
        {/* Category Tags */}
        <div className="bg-white  py-4 px-4 sm:px-6 lg:px-8">
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
                  <Link href="/docs/components">Category</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </header>

      <main className="py-8 px-4 sm:px-6">
        <Tabs defaultValue="new" className="w-full">


<div className="w-full bg-gray-100 rounded-lg py-2 px-4">
  <div className="flex items-center justify-between gap-2">
    {/* Carousel wrapper for tabs on small screens */}
    <div className="flex-1 overflow-x-auto scrollbar-hide">
      <TabsList className="flex gap-2 sm:gap-3 min-w-max">
        <TabsTrigger
          value="new"
          className="!bg-transparent data-[state=active]:!border-0 data-[state=active]:!text-orange-500 whitespace-nowrap"
        >
          New
        </TabsTrigger>
        <TabsTrigger value="trendy" className="!bg-transparent whitespace-nowrap">
          Trendy
        </TabsTrigger>
        <TabsTrigger value="popular" className="!bg-transparent whitespace-nowrap">
          Popular
        </TabsTrigger>
        <TabsTrigger value="top" className="!bg-transparent whitespace-nowrap">
          Top
        </TabsTrigger>
      </TabsList>
    </div>

    {/* Icons - only visible on large screens */}
    <div className="hidden lg:flex gap-2 sm:gap-3 flex-shrink-0">
      <Logs className="w-5 h-5 text-gray-600 cursor-pointer hover:text-orange-500" />
      <Grip className="w-5 h-5 text-gray-600 cursor-pointer hover:text-orange-500" />
    </div>
  </div>
</div>



          <TabsContent value="new">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
              {newposts.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>

            <div className="flex justify-center mt-8 sm:mt-10">
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationLink href="#">1</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#" isActive>
                      2
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">3</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationEllipsis />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationNext href="#" />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          </TabsContent>
             <TabsContent value="trendy">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
              {trendyposts.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>

            <div className="flex justify-center mt-8 sm:mt-10">
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationLink href="#">1</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#" isActive>
                      2
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">3</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationEllipsis />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationNext href="#" />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          </TabsContent>
                 <TabsContent value="top">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
              {topposts.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>

            <div className="flex justify-center mt-8 sm:mt-10">
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationLink href="#">1</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#" isActive>
                      2
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">3</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationEllipsis />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationNext href="#" />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          </TabsContent>
                     <TabsContent value="popular">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
              {popularposts.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>

            <div className="flex justify-center mt-8 sm:mt-10">
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationLink href="#">1</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#" isActive>
                      2
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">3</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationEllipsis />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationNext href="#" />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}