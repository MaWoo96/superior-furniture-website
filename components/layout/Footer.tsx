import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-24 lg:pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <Image
              src="/logos/Superior Furniture and Mattress-01.png"
              alt="Superior Furniture and Mattress"
              width={180}
              height={54}
              className="mb-4 brightness-0 invert"
            />
            <p className="text-sm mb-4">
              Delaware&apos;s home for superior sleep & style. Quality furniture and mattresses for every room.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-brand-burgundy transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-brand-burgundy transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h3 className="text-white font-semibold mb-4">Shop</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/categories/living-room" className="hover:text-brand-burgundy transition-colors">Living Room</Link></li>
              <li><Link href="/categories/bedroom" className="hover:text-brand-burgundy transition-colors">Bedroom</Link></li>
              <li><Link href="/categories/mattresses" className="hover:text-brand-burgundy transition-colors">Mattresses</Link></li>
              <li><Link href="/categories/dining" className="hover:text-brand-burgundy transition-colors">Dining</Link></li>
              <li><Link href="/categories/office" className="hover:text-brand-burgundy transition-colors">Office</Link></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-white font-semibold mb-4">Customer Service</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/financing" className="hover:text-brand-burgundy transition-colors">Financing Options</Link></li>
              <li><Link href="/delivery" className="hover:text-brand-burgundy transition-colors">Delivery & Setup</Link></li>
              <li><Link href="/returns" className="hover:text-brand-burgundy transition-colors">Returns & Exchanges</Link></li>
              <li><Link href="/warranty" className="hover:text-brand-burgundy transition-colors">Warranty Information</Link></li>
              <li><Link href="/faq" className="hover:text-brand-burgundy transition-colors">FAQ</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Visit Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                <span>
                  Partnered with God&apos;s Way Thrift Store<br />
                  1 Maple Ave<br />
                  Milford, DE 19663
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-2" />
                <a href="tel:+1234567890" className="hover:text-brand-burgundy transition-colors">
                  (123) 456-7890
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-2" />
                <a href="mailto:info@superiorfurniturede.com" className="hover:text-brand-burgundy transition-colors">
                  info@superiorfurniturede.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-sm">
            <div>
              <p className="font-semibold text-white mb-1">Free Delivery</p>
              <p className="text-xs">On orders over $999</p>
            </div>
            <div>
              <p className="font-semibold text-white mb-1">100-Night Trial</p>
              <p className="text-xs">On select mattresses</p>
            </div>
            <div>
              <p className="font-semibold text-white mb-1">Secure Payment</p>
              <p className="text-xs">SSL encrypted checkout</p>
            </div>
            <div>
              <p className="font-semibold text-white mb-1">Expert Support</p>
              <p className="text-xs">Local Delaware team</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 text-sm text-center md:text-left">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>&copy; 2025 Superior Furniture and Mattress. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link href="/privacy" className="hover:text-brand-burgundy transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-brand-burgundy transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
