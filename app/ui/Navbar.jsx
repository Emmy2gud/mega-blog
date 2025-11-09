import { Search, User, ChevronLeft, ChevronRight, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Image from "next/image"

export default function Navbar() {
  const categories = [
    { name: "PHP", color: "bg-orange-600 hover:bg-orange-700" },
    { name: "AI News", color: "bg-yellow-500 hover:bg-yellow-600" },
    { name: "Gadgets", color: "bg-amber-700 hover:bg-amber-800" },
    { name: "Technology", color: "bg-green-600 hover:bg-green-700" },
    { name: "Business", color: "bg-yellow-400 hover:bg-yellow-500" },
    { name: "Productivity", color: "bg-purple-600 hover:bg-purple-700" },
    { name: "Marketing", color: "bg-blue-600 hover:bg-blue-700" },
    { name: "Design", color: "bg-gray-700 hover:bg-gray-800" },
  ]

  const featuredArticles = [
    {
      id: 1,
      title: "How to Drive a Car Safely",
      description:
        "Driving a car is a responsibility that requires constant attention and adherence to safety protocols to ensure the well-being of all road users.",
      image: "/placeholder.svg?height=240&width=360",
      readTime: "5 min read",
    },
    {
      id: 2,
      title: "How to Make Dance Music",
      description:
        "Creating electronic dance music involves understanding rhythm, melody, and the technical aspects of music production software and equipment.",
      image: "/placeholder.svg?height=240&width=360",
      readTime: "8 min read",
    },
    {
      id: 3,
      title: "Why I Stopped Using Multiple Monitor",
      description:
        "After years of using multiple monitors for productivity, I discovered that a single monitor setup can actually improve focus and workflow efficiency.",
      image: "/placeholder.svg?height=240&width=360",
      readTime: "6 min read",
    },
  ]

  return (
    <div >
      {/* Header */}
      <nav className="bg-white shadow-sm pt-3">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo and Navigation */}
            <div className="flex items-center space-x-8">
              <div className="flex items-center">
                <span className="text-2xl font-bold text-orange-500">MEGA</span>
                <span className="text-2xl font-bold text-orange-500">.news</span>
              </div>

              <nav className="hidden md:flex space-x-8">
                <a href="#" className="text-black text-lg hover:text-orange-500 font-medium transition-colors">
                  Categories
                </a>
                <a href="#" className="text-black text-lg hover:text-orange-500 font-medium transition-colors">
                  Pages
                </a>
                <a href="#" className="text-black text-lg hover:text-orange-500 font-medium transition-colors">
                  Contact Us
                </a>
                <a href="#" className="text-black text-lg hover:text-orange-500 font-medium transition-colors">
                  About Us
                </a>
              </nav>
            </div>

            {/* Search and User */}
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-60 top-1/2 transform -translate-y-1/2 text-gray-800 w-4 h-4" />
                <Input
                  placeholder="Search articles..."
                  className="pl-4 w-72 bg-gray-50 border border-gray-200 rounded-3 focus:ring-1 focus:ring-orange-500 focus:border-transparent"
                />
              </div>
              <Button
                variant="ghost"
                size="sm"
                className="flex items-center   p-5 space-x-2 text-gray-700 hover:text-orange-500"
              >
              
                <div className="flex items-center  ">
                    <Image
                        src="/images/avatar/02.jpg"
                        alt="User Avatar"
                        width={32}
                        height={32}
                        className="rounded-sm"
                    />
                </div>
                <div className="flex items-center space-x-0.5  text-center justify-center align-middle">
       <span className="font-semibold">Jon Kantner</span> <ChevronDown className="w-4 h-4  items-center  text-center justify-center" />
                </div>
         
              </Button>
            </div>
          </div>
        </div>
      </nav>

    </div>
  )
}
