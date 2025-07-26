"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "../components/ui/button"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-blue-600 text-white">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">
            FinFable
          </Link>
          <div className="hidden md:flex items-center space-x-6">
            <ul className="flex space-x-6 text-lg">
              <li>
                <Link href="/" className="hover:text-blue-200">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-blue-200">
                  About
                </Link>
              </li>
              <li>
                <Link href="/blogs" className="hover:text-blue-200">
                  Blogs
                </Link>
              </li>
              <li>
                <Link href="/dashboard" className="hover:text-blue-200">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-blue-200">
                  Contact
                </Link>
              </li>
            </ul>
            <div className="flex items-center space-x-4">
              <Button asChild variant="ghost" className="text-white hover:text-blue-200">
                <Link href="/login">Login</Link>
              </Button>
              <Button asChild variant="secondary" className="bg-white text-blue-600 hover:bg-blue-100">
                <Link href="/signup">Sign Up</Link>
              </Button>
            </div>
          </div>
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="mt-4 md:hidden">
            <button
              className="absolute top-4 right-4 text-white"
              onClick={() => setIsMenuOpen(false)} // Close menu on click
            >
              <X className="h-6 w-6" />
            </button>
            <ul className="flex flex-col space-y-2">
              <li>
                <Link href="/" className="block py-2 hover:text-blue-200">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="block py-2 hover:text-blue-200">
                  About
                </Link>
              </li>
              <li>
                <Link href="/blogs" className="block py-2 hover:text-blue-200">
                  Blogs
                </Link>
              </li>
              <li>
                <Link href="/dashboard" className="block py-2 hover:text-blue-200">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link href="/contact" className="block py-2 hover:text-blue-200">
                  Contact
                </Link>
              </li>
            </ul>
            <div className="mt-4 flex flex-col space-y-2">
              <Button asChild variant="ghost" className="text-white hover:text-blue-200 justify-start">
                <Link href="/login">Login</Link>
              </Button>
              <Button asChild variant="secondary" className="bg-white text-blue-600 hover:bg-blue-100 justify-start">
                <Link href="/signup">Sign Up</Link>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
