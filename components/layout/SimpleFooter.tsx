import Image from 'next/image';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export default function SimpleFooter() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-8 md:py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center md:text-left md:grid md:grid-cols-2 gap-8 md:gap-16 mb-8">
          {/* Left - Logo and About */}
          <div className="flex flex-col items-center md:items-start max-w-lg">
            <Image
              src="/logos/Superior Furniture and Mattress-01.png"
              alt="Superior Furniture and Mattress"
              width={700}
              height={210}
              className="w-48 md:w-64 lg:w-72 h-auto mb-4"
            />
            <p className="text-gray-700 leading-relaxed">
              Delaware&apos;s trusted source for quality furniture and mattresses.
              We&apos;re partnered with God&apos;s Way Thrift Store in Milford, bringing you
              superior comfort and style for your home.
            </p>
          </div>

          {/* Right - Contact */}
          <div className="w-full flex flex-col items-center md:items-start">
            <h3 className="font-semibold text-lg mb-4 text-gray-900">Contact Us</h3>
            <div className="space-y-4 w-full max-w-sm md:max-w-none">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-2 md:gap-3 text-gray-700">
                <MapPin className="w-5 h-5 text-brand-burgundy flex-shrink-0" />
                <div className="text-center md:text-left">
                  <p className="font-medium text-gray-900">Visit Our Showroom</p>
                  <p>Partnered with God&apos;s Way Thrift Store</p>
                  <p>1 Maple Ave, Milford, DE 19663</p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-center gap-2 md:gap-3 text-gray-700">
                <Phone className="w-5 h-5 text-brand-burgundy flex-shrink-0" />
                <a href="tel:+1234567890" className="hover:text-brand-burgundy transition-colors">
                  (123) 456-7890
                </a>
              </div>

              <div className="flex flex-col md:flex-row items-center gap-2 md:gap-3 text-gray-700">
                <Mail className="w-5 h-5 text-brand-burgundy flex-shrink-0" />
                <a href="mailto:info@superiorfurniturede.com" className="hover:text-brand-burgundy transition-colors break-all">
                  info@superiorfurniturede.com
                </a>
              </div>

              <div className="flex flex-col md:flex-row items-center md:items-start gap-2 md:gap-3 text-gray-700">
                <Clock className="w-5 h-5 text-brand-burgundy flex-shrink-0" />
                <div className="text-center md:text-left">
                  <p className="font-medium text-gray-900">Hours</p>
                  <p>Monday - Saturday: 10am - 6pm</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-gray-200 text-center text-sm text-gray-700">
          <p>&copy; 2025 Superior Furniture and Mattress. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
