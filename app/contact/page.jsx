"use client";
import { useState } from "react";
import React from "react";

import { Send, MapPin, Phone, Mail, Globe, Facebook, Instagram, Twitter } from "lucide-react";
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
                  <Link href="/docs/components">Contacts</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </header>



    <main className="py-16 px-6 bg-gray-50">
      <form className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left: Form */}
          <div className="bg-white shadow-lg rounded-2xl p-8 border border-gray-100">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center gap-2">
              <Send className="w-5 h-5 text-orange-500" />
              Send Us a Message
            </h2>

            <div className="grid grid-cols-2 gap-4">
              {/* Name */}
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full border border-gray-300 focus:border-orange-500 focus:ring focus:ring-orange-100 rounded-md p-2 outline-none"
                  required
                />
              </div>

              {/* Email */}
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full border border-gray-300 focus:border-orange-500 focus:ring focus:ring-orange-100 rounded-md p-2 outline-none"
                  required
                />
              </div>

              {/* Subject */}
              <div className="mb-4 col-span-2">
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full border border-gray-300 focus:border-orange-500 focus:ring focus:ring-orange-100 rounded-md p-2 outline-none"
                  required
                />
              </div>

              {/* Message */}
              <div className="mb-4 col-span-2">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  className="w-full border border-gray-300 focus:border-orange-500 focus:ring focus:ring-orange-100 rounded-md p-2 outline-none"
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                className="col-span-2 w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 rounded-md transition duration-300 flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                Send Message
              </Button>
            </div>
          </div>

          {/* Right: Contact Info */}
          <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white rounded-2xl shadow-lg p-10 flex flex-col justify-center hidden lg:block ">
            <h1 className="text-3xl font-bold mb-6 border-b border-white/30 pb-2">
              Contact Us
            </h1>

            <div className="space-y-5 text-lg">
              <p className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                <span>
                  <span className="font-semibold">Address:</span> 198 West 21th
                  Street, Suite 721, New York NY 10016
                </span>
              </p>

              <p className="flex items-start gap-3">
                <Phone className="w-5 h-5 mt-1 flex-shrink-0" />
                <span>
                  <span className="font-semibold">Phone:</span> +1 235 2355 98
                </span>
              </p>

              <p className="flex items-start gap-3">
                <Mail className="w-5 h-5 mt-1 flex-shrink-0" />
                <span>
                  <span className="font-semibold">Email:</span> info@yoursite.com
                </span>
              </p>

              <p className="flex items-start gap-3">
                <Globe className="w-5 h-5 mt-1 flex-shrink-0" />
                <span>
                  <span className="font-semibold">Website:</span> yoursite.com
                </span>
              </p>
            </div>

            {/* Social Icons */}
            <div className="mt-10 flex gap-4">
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center bg-white/20 rounded-full hover:bg-white/40 transition"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center bg-white/20 rounded-full hover:bg-white/40 transition"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center bg-white/20 rounded-full hover:bg-white/40 transition"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </form>
    </main>
  );



    </div>
  );
}
