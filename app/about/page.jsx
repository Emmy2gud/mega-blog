"use client";
import { useState } from "react";
import React from "react";

import {
  Send,
  MapPin,
  Phone,
  Mail,
  Globe,
  Facebook,
  Instagram,
  Twitter,
  Play,
  Clock,
  PhoneCall,
  Locate,
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
import GoogleMap from "@/components/about/Map";
import Map from "@/components/about/Map";

export default function page() {
  const users = [
    {
      id: 1,
      name: "James",
      role: "Founder",
      image_url: "/images/avatar/01.jpg",
    },
    {
      id: 2,
      name: "Louis Hoebregts",
      role: "Co-Founder",
      image_url: "/images/avatar/02.jpg",
    },
    {
      id: 3,
      name: "Mary",
      role: "Designer",
      image_url: "/images/avatar/03.jpg",
    },
    {
      id: 4,
      name: "Jon Kantner",
      role: "Photographer",
      image_url: "/images/avatar/04.jpg",
    },
    {
      id: 5,
      name: "Linda",
      role: "Developer",
      image_url: "/images/avatar/05.jpg",
    },
    {
      id: 6,
      name: "Cassie Evans",
      role: "Marketing",
      image_url: "/images/avatar/06.jpg",
    }
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
                  <Link href="/docs/components">About Us</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </header>

      <main className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
              We pay attention to your needs and do the best design.
            </h2>
            <p className="text-gray-600 leading-7 text-[15px]  font-medium mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor
              <br />
              incididunt ut labore et dolore magna aliqua. Egestas purus viverra
              accumsan in <br />
              nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit
              scelerisque. In <br />
              egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi
              tristique <br />
              senectus et netus. Mattis pellentesque id nibh tortor id aliquet
              lectus proin.
              <br />
              Sapien faucibus et molestie ac feugiat sed lectus vestibulum.
              Ullamcorper velit <br />
              sed ullamcorper morbi tincidunt ornare massa eget. Dictum varius
              duis at <br />
              consectetur lorem. Nisi vitae suscipit tellus mauris a diam
              maecenas sed enim. <br />
              Velit ut tortor pretium viverra suspendisse potenti nullam. Et
              molestie ac feugiat <br />
              sed lectus. Non nisi est sit amet facilisis magna. Dignissim diam
              quis enim
              <br />
              lobortis scelerisque fermentum. Odio ut enim blandit volutpat
              maecenas <br />
              volutpat. Ornare lectus sit amet est placerat in egestas erat..
            </p>
          </div>

          {/* Right Video/Image Card */}
          <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-lg">
                <Image
                  src={"/images/abstract/05.jpg"}
                  alt={""}
                  width={744}
                  height={444}
                  className="object-cover"
                />
            {/* <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1000&auto=format&fit=crop"
              alt="Design video thumbnail"
              className="w-full h-full object-cover"
            /> */}

            {/* Play Button Overlay */}
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center transition duration-300 hover:bg-black/40">
              <button className="w-16 h-16 flex items-center justify-center bg-white/80 hover:bg-white rounded-full shadow-lg transition">
                <Play className="w-8 h-8 text-orange-500" />
              </button>
            </div>
          </div>
        </div>
        <div className="mt-16 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Map Section */}
          <div className="md:col-span-2 rounded-2xl overflow-hidden shadow-lg">
            <Map />
          </div>

          {/* Info Section */}
          <div className=" rounded-2xl p-8 ">
            <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
              <div className="w-1 h-6 bg-orange-500 rounded-sm" />
              Mega News Information
            </h2>

            <ul className="space-y-5 text-gray-700 text-[15px]">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-orange-500 mt-1" />
                <div className="flex flex-col">
                  <span className="font-semibold text-gray-900">Email:</span>
                  <span>management@meganews.com</span>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-orange-500 mt-1" />
                <div className="flex flex-col">
                  <span className="font-semibold text-gray-900">
                    Phone Number:
                  </span>
                  <span>+1 (234) 567-8910</span>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <PhoneCall className="w-5 h-5 text-orange-500 mt-1" />
                <div className="flex flex-col">
                  <span className="font-semibold text-gray-900">Fax:</span>
                  <span>+1 (234) 567-8910</span>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <Locate className="w-5 h-5 text-orange-500 mt-1" />
                <div className="flex flex-col">
                  <span className="font-semibold text-gray-900">Address:</span>
                  <span>1234 Foxrun St. New Lenox, IL 123456</span>
                </div>
              </li>

              <li className="flex items-start gap-3 bg-gray-100 p-4 rounded-lg">
                <Clock className="w-5 h-5 text-orange-500 mt-1" />
                <div>
                  <p className="text-sm text-gray-800">
                    Responding 24 hours a day, 7 days a week
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-16 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Mega News team */}
 <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
              <div className="w-1 h-6 bg-orange-500 rounded-sm" />
              Mega News team 
            </h2>
          <div className="md:col-span-3 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
            {users.map((user) => (
              <div
                key={user.id}
                className="w-[152px] sm:w-[182px] flex flex-col items-center shadow-lg p-4 rounded-lg bg-white"
              >
                <Image
                  src={user.image_url}
                  alt={user.name}
                  width={80}
                  height={80}
                  className="w-20 h-20 rounded-full object-cover mb-4"
                />
                <p className="text-gray-800 font-medium text-center text-xs my-6" >{user.role}</p>
                <span className="text-gray-800 font-bold text-center text-base bg-gray-200 px-3 py-3 w-full rounded-lg">
                  {user.name}
                </span>
              </div>
            ))}
        </div>
         </div>
      </main>
    </div>
  );
}
