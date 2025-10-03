export default function SimpleCTA() {
  return (
    <section className="py-20 bg-brand-burgundy text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="font-serif text-4xl md:text-5xl font-bold">
            Ready to Transform Your Home?
          </h2>
          <p className="text-xl text-brand-cream/90">
            Visit our showroom in Milford or give us a call to learn more about our
            furniture and mattress selection.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <a
              href="tel:+1234567890"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-brand-burgundy font-semibold rounded-lg hover:bg-brand-cream transition-colors text-lg"
            >
              (123) 456-7890
            </a>
            <a
              href="https://maps.google.com/?q=1+Maple+Ave+Milford+DE+19663"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-white font-semibold rounded-lg hover:bg-white/10 transition-colors border-2 border-white text-lg"
            >
              Get Directions
            </a>
          </div>

          <p className="text-sm text-brand-cream/70 pt-4">
            Partnered with God&apos;s Way Thrift Store • 1 Maple Ave, Milford, DE 19663
          </p>
        </div>
      </div>
    </section>
  );
}
