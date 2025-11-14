'use client'
import { Search, User, ChevronDown, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Image from "next/image"
import { useState, useEffect } from "react"
import Link from "next/link"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

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

  // Close menus when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isUserMenuOpen && !event.target.closest('.user-menu-container')) {
        setIsUserMenuOpen(false)
      }
    }
    
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isUserMenuOpen])

  return (
    <div className={`sticky top-0 z-50 transition-shadow duration-300 ${isScrolled ? "shadow-md" : "shadow-sm"}`}>
      {/* Header */}
      <nav className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo and Mobile Menu Button */}
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <span className="text-2xl font-bold text-orange-500">MEGA</span>
                <span className="text-2xl font-bold text-orange-500">.news</span>
              </div>
              <div className="md:hidden ml-4">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="p-2 rounded-md text-gray-700 hover:text-orange-500 focus:outline-none"
                >
                  {isMenuOpen ? (
                    <X className="h-6 w-6" />
                  ) : (
                    <Menu className="h-6 w-6" />
                  )}
                </Button>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex md:items-center md:space-x-8">
              <Link href="/" className="text-black text-lg hover:text-orange-500 font-medium transition-colors">
                Home
              </Link>
              <Link href="/category" className="text-black text-lg hover:text-orange-500 font-medium transition-colors">
                Categories
              </Link>
              <Link href="/about" className="text-black text-lg hover:text-orange-500 font-medium transition-colors">
                About Us
              </Link>
              <Link href="/contact" className="text-black text-lg hover:text-orange-500 font-medium transition-colors">
                Contact Us
              </Link>
          
            </div>

            {/* Search and User */}
            <div className="hidden md:flex md:items-center md:space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder="Search articles..."
                  className="pl-10 pr-4 w-64 bg-gray-50 border border-gray-200 rounded-full focus:ring-1 focus:ring-orange-500 focus:border-transparent"
                />
              </div>
              <div className="relative user-menu-container">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                  className="flex items-center space-x-2 text-gray-700 hover:text-orange-500"
                >
                  <div className="flex items-center">
                    <Image
                      src="/images/avatar/02.jpg"
                      alt="User Avatar"
                      width={32}
                      height={32}
                      className="rounded-full"
                    />
                  </div>
                  <div className="flex items-center space-x-0.5">
                    <span className="font-semibold">Jon Kantner</span>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </Button>
                
                {/* User Dropdown Menu */}
                {isUserMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 border border-gray-200">
                    <Link href="/auth/login" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Login
                    </Link>
                    <Link href="/auth/register" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Sign Up
                    </Link>
                    <Link href="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Profile
                    </Link>
                  </div>
                )}
              </div>
            </div>

            {/* Mobile User Menu */}
            <div className="md:hidden flex items-center">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                className="p-1 text-gray-700 hover:text-orange-500"
              >
                <Image
                  src="/images/avatar/02.jpg"
                  alt="User Avatar"
                  width={32}
                  height={32}
                  className="rounded-full"
                />
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link 
                href="/" 
                className="block px-3 py-2 rounded-md text-base font-medium text-black hover:text-orange-500"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/category" 
                className="block px-3 py-2 rounded-md text-base font-medium text-black hover:text-orange-500"
                onClick={() => setIsMenuOpen(false)}
              >
                Categories
              </Link>
              <Link 
                href="/about" 
                className="block px-3 py-2 rounded-md text-base font-medium text-black hover:text-orange-500"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
              <Link 
                href="/contact" 
                className="block px-3 py-2 rounded-md text-base font-medium text-black hover:text-orange-500"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
              </Link>
              <Link 
                href="/blog" 
                className="block px-3 py-2 rounded-md text-base font-medium text-black hover:text-orange-500"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
              <Link 
                href="/profile" 
                className="block px-3 py-2 rounded-md text-base font-medium text-black hover:text-orange-500"
                onClick={() => setIsMenuOpen(false)}
              >
                Profile
              </Link>
              <div className="mt-4 px-3">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    placeholder="Search articles..."
                    className="pl-10 pr-4 w-full bg-gray-50 border border-gray-200 rounded-full focus:ring-1 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>
              </div>
              <div className="mt-4 px-3 space-y-2">
                <Link 
                  href="/auth/login" 
                  className="block w-full text-center px-4 py-2 border border-gray-300 rounded-md text-base font-medium text-gray-700 bg-white hover:bg-gray-50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Login
                </Link>
                <Link 
                  href="/auth/register" 
                  className="block w-full text-center px-4 py-2 border border-transparent rounded-md text-base font-medium text-white bg-orange-500 hover:bg-orange-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
        )}
        
        {/* Mobile User Menu */}
        {isUserMenuOpen && !isMenuOpen && (
          <div className="md:hidden absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 border border-gray-200 user-menu-container">
            <Link 
              href="/auth/login" 
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              onClick={() => setIsUserMenuOpen(false)}
            >
              Login
            </Link>
            <Link 
              href="/auth/register" 
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              onClick={() => setIsUserMenuOpen(false)}
            >
              Sign Up
            </Link>
            <Link 
              href="/profile" 
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              onClick={() => setIsUserMenuOpen(false)}
            >
              Profile
            </Link>
          </div>
        )}
      </nav>
    </div>
  )
}