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

export default function NotFound() {
  return (
    <div>
        <Loader/>
      <main className="py-16 px-6 ">
        {/* errror page */}
        <div className="max-w-3xl mx-auto text-center">
          <h1
            className="text-9xl font-bold text-orange-500 mb-4"
            style={{
              textShadow: "4px 4px 12px rgba(245, 158, 11, 0.6)",
            }}
          >
            404
          </h1>

          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Page Not Found
          </h2>
          <p className="text-gray-700 mb-8">
            OOPS! Page you're looking for doesn't exist. Please use search for
            help.
          </p>
        </div>
      </main>
    </div>
  );
}
