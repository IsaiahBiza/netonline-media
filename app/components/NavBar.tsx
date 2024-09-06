'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'; // Importing icons

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false); // State to track mobile menu open/close
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State to track services dropdown open/close

  // Function to toggle the mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Function to toggle the dropdown for services
  const toggleDropdown = (open: boolean) => {
    setIsDropdownOpen(open);
  };

  return (
    <header className="bg-lightGrey text-darkGrey sticky top-0 z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <Link href="/">
          <Image 
            src="/logo.png" 
            alt="Netonline Media AI-powered business solutions" 
            width={150} 
            height={50} 
            className="cursor-pointer"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8 relative">
          <Link href="/" className="py-2 hover:text-primaryRed transition duration-200">Home</Link>

          {/* Services with Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => toggleDropdown(true)}
            onMouseLeave={() => toggleDropdown(false)}
          >
            <Link href="/services" className="py-2 hover:text-primaryRed transition duration-200">Services</Link> {/* Wrap Services in Link */}
            {isDropdownOpen && (
              <div className="absolute left-0 top-[90%] mt-0 w-48 bg-white shadow-lg rounded-lg py-2 z-10">
                <Link href="/services/custom-ai" className="block px-4 py-2 hover:bg-gray-200">Custom Generative AI</Link>
                <Link href="/services/ai-content" className="block px-4 py-2 hover:bg-gray-200">AI-Powered Content Creation</Link>
                <Link href="/services/ai-chatbots" className="block px-4 py-2 hover:bg-gray-200">LLM-Based Chatbots</Link>
                <Link href="/services/ai-personalization" className="block px-4 py-2 hover:bg-gray-200">AI-Driven Personalization</Link>
              </div>
            )}
          </div>

          <Link href="/about" className="py-2 hover:text-primaryRed transition duration-200">About Us</Link>
          <Link href="/contact" className="py-2 hover:text-primaryRed transition duration-200">Contact</Link>

          {/* Get Started button */}
          <Link href="/qualifying-form" className="ml-4 bg-primaryRed text-white py-2 px-4 rounded-lg hover:bg-red-600 transition">
            Get Started
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? (
              <AiOutlineClose className="text-3xl text-primaryRed" /> // Close icon when menu is open
            ) : (
              <AiOutlineMenu className="text-3xl text-primaryRed" /> // Hamburger icon when menu is closed
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <nav className="md:hidden bg-darkGrey text-white">
          <Link href="/" className="block px-4 py-2 hover:text-primaryRed transition duration-200" onClick={toggleMenu}>
            Home
          </Link>
          <Link href="/services" className="block px-4 py-2 hover:text-primaryRed transition duration-200" onClick={toggleMenu}>
            Services
          </Link>
          <Link href="/about" className="block px-4 py-2 hover:text-primaryRed transition duration-200" onClick={toggleMenu}>
            About Us
          </Link>
          <Link href="/contact" className="block px-4 py-2 hover:text-primaryRed transition duration-200" onClick={toggleMenu}>
            Contact
          </Link>

          {/* Mobile Get Started button */}
          <Link href="/qualifying-form" className="block px-4 py-2 bg-primaryRed text-white rounded-lg mt-4 hover:bg-red-600 transition duration-200" onClick={toggleMenu}>
            Get Started
          </Link>
        </nav>
      )}
    </header>
  );
}
