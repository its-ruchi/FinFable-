import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-blue-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="font-bold text-lg mb-2">FinFable</h3>
            <p className="text-sm">
              Make financial planning engaging through storytelling.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-2">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-blue-300 transition-colors" aria-label="Home">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-blue-300 transition-colors" aria-label="About">
                  About
                </Link>
              </li>
              <li>
                <Link href="/blogs" className="hover:text-blue-300 transition-colors" aria-label="Blogs">
                  Blogs
                </Link>
              </li>
              <li>
                <Link href="/dashboard" className="hover:text-blue-300 transition-colors" aria-label="Dashboard">
                  Dashboard
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-bold text-lg mb-2">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="hover:text-blue-300 transition-colors" aria-label="Privacy Policy">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-blue-300 transition-colors" aria-label="Terms of Service">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect Links */}
          <div>
            <h4 className="font-bold text-lg mb-2">Connect</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/contact" className="hover:text-blue-300 transition-colors" aria-label="Contact Us">
                  Contact Us
                </Link>
              </li>
              <li>
                <a
                  href="https://twitter.com/finfable"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-300 transition-colors"
                  aria-label="Twitter"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://facebook.com/finfable"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-300 transition-colors"
                  aria-label="Facebook"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/company/finfable"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-300 transition-colors"
                  aria-label="LinkedIn"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 border-t border-blue-700 pt-8 text-center">
          <p className="text-sm">&copy; 2025 FinFable. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
