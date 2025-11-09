"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  AppWindowIcon,
  Cloud,
  CodeIcon,
  Eye,
  Film,
  ImageIcon,
  Plane,
  Plus,
  Save,
  Send,
  Trash,
  UserPen,
  VideoIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import PostCard from "../PostCard";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import React, { useState } from "react";
import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";
import { StatsGrid } from "./StatsGrid";
import { LineChartComponent } from "./LineChartComponent";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ProfilePostCard from "./ProfilePostCard";
import Link from "next/link";

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
const categories = [
  {
    id: 1,
    name: "Food",
    image: "/images/tag/01.jpg",
  },
  {
    id: 2,
    name: "Animal",
    image: "/images/tag/02.jpg",
  },
  {
    id: 3,
    name: "Car",
    image: "/images/tag/08.jpg",
  },
  {
    id: 4,
    name: "Sport",
    image: "/images/tag/03.jpg",
  },
  {
    id: 5,
    name: "Music",
    image: "/images/tag/04.jpg",
  },
  {
    id: 6,
    name: "Technology",
    image: "/images/tag/05.jpg",
  },
  {
    id: 7,
    name: "Abstract",
    image: "/images/tag/06.jpg",
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
      "Why it helps to know what it’s like, and the exquisite beauty of empathy These days, the wood patio area just outside my kitchen door is a riot ",
    user: users[1].name,
    user_profile: users[1].image_url,
    date: "2022-12-06",
  },
  {
    id: 3,
    title: "How to Become a Master Designer",
    image: "/images/abstract/06.jpg",
    content:
      "Many outsiders believe that designers are unicorns, gifted or special in some way. We have an innate ability to create gorgeous interfaces, a natural talent for matching complementary colors, an unexplainable intuition…",
    user: users[2].name,
    user_profile: users[2].image_url,
    date: "2022-12-06",
  },
  {
    id: 4,
    title: "No boat bottomfish: Jetty fishing on the Washington Coast",
    image: "/images/sport/01.jpg",
    content:
      "Cast from the rocks to bring home fresh fish tacos in this iconic spring and summer fishery. — Are you looking to go fishing and bring home delicious.",
    user: users[3].name,
    user_profile: users[3].image_url,
    date: "2022-12-06",
  },
  ,
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

const ProfileHeader = () => {
  const [images, setImages] = useState(Array(8).fill(null));
  const [value, setValue] = useState("");
  const toolbarOptions = [
    ["bold", "italic", "underline"],

    [{ color: [] }, { background: [] }],

    [{ align: [] }],

    ["link", "image"],

    ["clean"],
  ];
  const modules = {
    toolbar: toolbarOptions,
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const url = URL.createObjectURL(file);

    setImages((prev) => {
      const updated = [...prev];
      const emptyIndex = updated.findIndex((slot) => slot === null);

      if (emptyIndex !== -1) {
        updated[emptyIndex] = url;
      }

      return updated;
    });
  };

  const handleDelete = (index) => {
    setImages((prev) => {
      const updated = [...prev];
      updated[index] = null;
      return updated;
    });
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
    <Tabs defaultValue="marked" className="w-full">
      <div>
        <div className="bg-gray-100 p-6 rounded-lg">
          <div>
            <Image
              src="/images/abstract/05.jpg"
              alt="Profile Image"
              width={1491}
              height={150}
              className="rounded-lg w-[1491px] h-[150px]  mb-4"
            />
          </div>
          <div className="flex items-center justify-between gap-4 py-4 ">
            <div className="flex items-center gap-3">
              <Image
                src="/images/avatar/01.jpg"
                alt="Profile Image"
                width={80}
                height={80}
                className="rounded-lg"
              />
              <h2 className="text-xl font-bold">John Doe</h2>
            </div>

            <div>
              <TabsList className="flex justify-center gap-3">
                <TabsTrigger value="marked" className={"!bg-transparent"}>
                  Marked
                </TabsTrigger>
                <TabsTrigger value="sentpost" className={"!bg-transparent"}>
                  Send Post
                </TabsTrigger>
                <TabsTrigger value="posts" className={"!bg-transparent"}>
                  Posts
                </TabsTrigger>
              </TabsList>
            </div>

            <div>
              <Dialog>
                <form>
                  <DialogTrigger asChild>
                    <Button
                      variant="outline"
                      size="sm"
                      className={
                        "border-1 bg-transparent text-red-400 text-lg font-semibold"
                      }
                    >
                      <UserPen className="mr-2 h-4 w-4" />
                      Edit Profile
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                      <DialogTitle>Edit profile</DialogTitle>
                      <DialogDescription>
                        Make changes to your profile here. Click save when
                        you&apos;re done.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4">
                      <div className="grid gap-3">
                        <Label htmlFor="name-1">Name</Label>
                        <Input
                          id="name-1"
                          name="name"
                          defaultValue="Pedro Duarte"
                        />
                      </div>
                      <div className="grid gap-3">
                        <Label htmlFor="username-1">Username</Label>
                        <Input
                          id="username-1"
                          name="username"
                          defaultValue="@peduarte"
                        />
                      </div>
                                   <div className="grid gap-3">
                        <Label htmlFor="username-1">Profile Cover</Label>
                       <Input id="file" type="file" />
                      </div>
                      <div
                        className="flex flex-col items-center justify-center 
         border border-dashed border-gray-300 bg-gray-100 
         rounded-lg p-6 h-[209px]"
                      >
                        <ImageIcon className="w-16 h-16 text-gray-400 mb-3" />
                        <p className="text-sm text-gray-600">
                          Drop Banner Here, Paste Or
                        </p>

                        <label className="mt-4 cursor-pointer">
                          <input
                            type="file"
                            accept="image/*"
                            className="hidden"
                            onChange={handleImageChange}
                          />
                          <Button variant="outline" size="sm">
                            <Plus className="mr-2 h-4 w-4" /> Select
                          </Button>
                        </label>
                      </div>
                      
                    </div>
                    <DialogFooter>
                      <DialogClose asChild>
                        <Button variant="outline">Cancel</Button>
                      </DialogClose>
                      <Button type="submit" className={"bg-red-500"}>
                        Save changes
                      </Button>
                    </DialogFooter>
                  </DialogContent>
                </form>
              </Dialog>
            </div>
          </div>
        </div>

        <TabsContent value="marked">
          <div className="grid grid-cols-4 gap-2 pt-4">
            {newposts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>

          <div className="flex float-left  mt-10">
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

        <TabsContent value="sentpost">
          <Tabs defaultValue="sendvideo" className="w-full">
            <TabsList className="flex justify-center mt-3">
              <TabsTrigger
                value="sendvideo"
                className={
                  "data-[state=active]:!border-0 rounded-lg data-[state=active]:!bg-gray-100  data-[state=active]:after:content-[''] !font-medium !text-lg   data-[state=active]:after:absolute data-[state=active]:after:w-1  data-[state=active]:after:h-1 data-[state=active]:after:bg-orange-500    data-[state=active]:after:rounded-full data-[state=active]:after:right-24     data-[state=active]:before:mr-2 data-[state=active]:after:top-1/2 data-[state=active]:after:-translate-y-1/2  relative "
                }
              >
                Send Post
              </TabsTrigger>
              <TabsTrigger
                value="sentpost"
                className={
                  "data-[state=active]:!border-0 rounded-lg data-[state=active]:!bg-gray-100  data-[state=active]:after:content-[''] !font-medium !text-lg   data-[state=active]:after:absolute data-[state=active]:after:w-1  data-[state=active]:after:h-1 data-[state=active]:after:bg-orange-500    data-[state=active]:after:rounded-full data-[state=active]:after:right-27     data-[state=active]:before:mr-2 data-[state=active]:after:top-1/2 data-[state=active]:after:-translate-y-1/2  relative "
                }
              >
                Send Video
              </TabsTrigger>
            </TabsList>

            <TabsContent value="sendvideo">
              <form action="">
                <div className="grid grid-cols-4 gap-4">
                  <div className="col-span-3">
                    <div className="grid grid-cols-2 gap-3    w-full">
                      <label htmlFor="" className="flex flex-col p-4">
                        Title
                        <input
                          type="text"
                          className="w-100 mt-1 p-2 border-0 bg-gray-100  rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                        />
                      </label>
                      <label htmlFor="" className="flex flex-col  p-4">
                        Add tags
                        <input
                          type="text"
                          className="w-100 mt-1 p-2 border-0 bg-gray-100  rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                        />
                      </label>
                      <div className="col-span-2">
                        <label htmlFor="" className="flex flex-col   p-4">
                          Explanation
                          <ReactQuill
                            theme="snow"
                            value={value}
                            modules={modules}
                            onChange={setValue}
                            className="custom-quill mt-2"
                          />
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-1 ">
                    <label htmlFor="" className="flex flex-col  ">
                      Add image
                      <Empty className="border border-dashed bg-gray-100 h-[360px] ">
                        <EmptyHeader>
                          <EmptyMedia variant="icon">
                            <ImageIcon className="w-30 h-30 text-gray-400" />
                          </EmptyMedia>
                          <EmptyDescription>
                            Drop image here, paste or
                          </EmptyDescription>
                        </EmptyHeader>
                        <EmptyContent>
                          <Button variant="outline" size="sm">
                            <Plus className="mr-2 h-4 w-4" />
                            Select
                          </Button>
                        </EmptyContent>
                      </Empty>
                    </label>

                    <div className=" flex flex-row justify-between mt-3">
                      <Button variant="outline" size="sm">
                        <Save className="mr-2 h-4 w-4" />
                        Draft
                      </Button>
                      <Button variant="outline" size="sm">
                        <Eye className="mr-2 h-4 w-4" />
                        Preview
                      </Button>
                      <Button size="sm" className={"bg-red-500 text-white"}>
                        <Send className="mr-2 h-4 w-4" />
                        Public
                      </Button>
                    </div>
                  </div>
                </div>
              </form>
            </TabsContent>
            <TabsContent value="sentpost">
              {" "}
              <form action="">
                <div className="grid grid-cols-4 gap-4">
                  <div className="col-span-3">
                    <div className="grid grid-cols-2 gap-3    w-full">
                      <label htmlFor="" className="flex flex-col p-4">
                        Title
                        <input
                          type="text"
                          className="w-100 mt-1 p-2 border-0 bg-gray-100  rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                        />
                      </label>
                      <label htmlFor="" className="flex flex-col  p-4">
                        Add tags
                        <input
                          type="text"
                          className="w-100 mt-1 p-2 border-0 bg-gray-100  rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                        />
                      </label>
                      <div className="col-span-2">
                        <label htmlFor="" className="flex flex-col   p-4">
                          Explanation
                          <ReactQuill
                            theme="snow"
                            value={value}
                            modules={modules}
                            onChange={setValue}
                            className="custom-quill mt-2"
                          />
                        </label>

                        <label className="flex flex-col p-4 w-full">
                          Image Gallery
                          <div className="grid grid-cols-3 gap-3 p-3 mt-2 shadow-md rounded-lg border border-gray-200">
                            {/* LEFT SIDE — Dropzone */}
                            <div
                              className="flex flex-col items-center justify-center 
         border border-dashed border-gray-300 bg-gray-100 
         rounded-lg p-6 h-[319px]"
                            >
                              <ImageIcon className="w-16 h-16 text-gray-400 mb-3" />
                              <p className="text-sm text-gray-600">
                                Drop Image Here, Paste Or
                              </p>

                              <label className="mt-4 cursor-pointer">
                                <input
                                  type="file"
                                  accept="image/*"
                                  className="hidden"
                                  onChange={handleImageChange}
                                />
                                <Button variant="outline" size="sm">
                                  <Plus className="mr-2 h-4 w-4" /> Select
                                </Button>
                              </label>
                            </div>

                            {/* RIGHT SIDE — 8 slots */}
                            <div className="col-span-2 grid grid-cols-4 gap-3">
                              {images.map((img, index) => (
                                <div
                                  key={index}
                                  className="relative w-[131px] h-[131px] flex items-center justify-center
              border border-dashed border-gray-300 rounded-lg bg-gray-50 
              group overflow-hidden"
                                >
                                  {img ? (
                                    <>
                                      <Image
                                        src={img}
                                        alt="preview"
                                        fill
                                        className="object-cover"
                                        sizes="131px"
                                      />

                                      {/* Delete overlay */}
                                      <button
                                        type="button"
                                        onClick={() => handleDelete(index)}
                                        className="absolute inset-0 bg-black/40 flex items-center justify-center
                    opacity-0 group-hover:opacity-100 transition"
                                      >
                                        <Trash className="text-white w-7 h-7" />
                                      </button>
                                    </>
                                  ) : (
                                    <ImageIcon className="w-10 h-10 text-gray-300" />
                                  )}
                                </div>
                              ))}
                            </div>
                          </div>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-1 ">
                    <label htmlFor="" className="flex flex-col  ">
                      Add Video
                      <Empty className="border border-dashed bg-gray-100 h-[360px] ">
                        <EmptyHeader>
                          <EmptyMedia variant="icon">
                            <Film className="w-30 h-30 text-gray-400" />
                          </EmptyMedia>
                          <EmptyDescription>
                            Drop video here, paste or
                          </EmptyDescription>
                        </EmptyHeader>
                        <EmptyContent>
                          <Button variant="outline" size="sm">
                            <Plus className="mr-2 h-4 w-4" />
                            Select
                          </Button>
                        </EmptyContent>
                      </Empty>
                    </label>

                    <div className=" flex flex-row justify-between mt-3">
                      <Button variant="outline" size="sm">
                        <Save className="mr-2 h-4 w-4" />
                        Draft
                      </Button>
                      <Button variant="outline" size="sm">
                        <Eye className="mr-2 h-4 w-4" />
                        Preview
                      </Button>
                      <Button size="sm" className={"bg-red-500 text-white"}>
                        <Send className="mr-2 h-4 w-4" />
                        Public
                      </Button>
                    </div>
                  </div>
                </div>
              </form>
            </TabsContent>
          </Tabs>
        </TabsContent>
        <TabsContent value="posts">
          <div className="w-full  mt-8">
            <div className="grid grid-cols-4 gap-4">
              {/* LEFT SIDE — Line Chart */}
              <div className="col-span-3">
                <h2 className="text-2xl font-bold mb-6 flex">
                  <div className="min-w-[4px] h-[10px] mr mt-3 mr-2 bg-orange-600" />
                  View Posts
                </h2>

                <LineChartComponent />
              </div>

              <div className="col-span-1">
                <h2 className="text-2xl font-bold mb-6 flex">
                  <div className="min-w-[4px] h-[10px] mt-3 mr-2 bg-orange-600" />
                  Satisfaction Of Posts
                </h2>
                <StatsGrid />
              </div>
            </div>
          </div>
          {/* popular posts */}
          <div className="max-w-7xl mx-auto px-4 py-8 mb-10">
            <div className="max-w-7xl mx-auto px-4 py-8 mb-10">
              <h2 className="text-2xl font-bold  flex">
                <div className="min-w-[4px] min-h-[10px] mr-2 bg-orange-600" />
                Your Posts
              </h2>

              <div className="relative w-full">
                <Carousel
                  opts={{
                    align: "start",
                    loop: true,
                  }}
                  className="w-full"
                >
                  {/* Controls inside Carousel but visually placed at top right */}
                  <div className="absolute top-0 right-0 z-10 flex gap-2 p-2">
                    <CarouselPrevious className="static h-8 w-8 border rounded-full" />
                    <CarouselNext className="static h-8 w-8 border rounded-full" />
                  </div>

                  <CarouselContent className="pt-10">
                    {popularposts.map((post) => (
                      <CarouselItem
                        key={post.id}
                        className="basis-1/3 sm:basis-1/2 md:basis-1/4 lg:basis-1/4"
                      >
                        <Card className="border-none shadow-none bg-transparent">
                          <CardContent className="flex items-center justify-center p-2">
                            <ProfilePostCard post={post} />
                          </CardContent>
                        </Card>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                </Carousel>
              </div>
            </div>
          </div>
        </TabsContent>
      </div>
    </Tabs>
  );
};

export default ProfileHeader;
