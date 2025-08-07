import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <header className="border-b border-gray-700 bg-[#111111]/95 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
              <span className="text-black font-bold text-sm">a</span>
            </div>
            <span className="text-xl font-semibold">atypica</span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-white hover:text-green-400 transition-colors"
            >
              Home
            </Link>
            <Link
              href="#"
              className="text-gray-300 hover:text-green-400 transition-colors"
            >
              AI Personas
            </Link>
            <Link
              href="#"
              className="text-gray-300 hover:text-green-400 transition-colors"
            >
              Company
            </Link>
            <Link
              href="#"
              className="text-gray-300 hover:text-green-400 transition-colors"
            >
              Pricing
            </Link>
          </nav>

          <Link href="/auth/signin">
            <Button className="bg-green-500 cursor-pointer hover:bg-green-600 text-black font-medium">
              Get Started
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
