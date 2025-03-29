import { useState } from 'react'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 bg-white bg-opacity-95 shadow backdrop-blur">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <a href="#" className="text-xl font-bold text-gray-900">
              Chatswood Catering
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a
                href="#about"
                className="rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-orange-500 hover:text-white"
              >
                About
              </a>
              <a
                href="#cuisines"
                className="rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-orange-500 hover:text-white"
              >
                Cuisines
              </a>
              <a
                href="#services"
                className="rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-orange-500 hover:text-white"
              >
                Services
              </a>
              <a
                href="#testimonials"
                className="rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-orange-500 hover:text-white"
              >
                Testimonials
              </a>
              <a
                href="#contact"
                className="rounded-md bg-orange-500 px-3 py-2 text-sm font-medium text-white hover:bg-orange-600"
              >
                Contact Us
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-orange-500 hover:text-white focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="space-y-1 px-2 pb-3 pt-2">
            <a
              href="#about"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-orange-500 hover:text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#cuisines"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-orange-500 hover:text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              Cuisines
            </a>
            <a
              href="#services"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-orange-500 hover:text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </a>
            <a
              href="#testimonials"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-orange-500 hover:text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonials
            </a>
            <a
              href="#contact"
              className="block rounded-md bg-orange-500 px-3 py-2 text-base font-medium text-white hover:bg-orange-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </a>
          </div>
        </div>
      )}
    </nav>
  )
} 