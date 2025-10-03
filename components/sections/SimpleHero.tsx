export default function SimpleHero() {
  return (
    <section className="bg-gradient-to-br from-white via-brand-cream/30 to-white py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
            Delaware&apos;s Home for
            <br />
            <span className="text-brand-burgundy">Superior Sleep & Style</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
            Quality furniture and mattresses designed for comfort, built to last.
            Located in Milford, Delaware.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <a
              href="tel:+1234567890"
              className="inline-flex items-center justify-center px-8 py-4 bg-brand-burgundy text-white font-semibold rounded-lg hover:bg-brand-burgundy-dark transition-colors text-lg"
            >
              Call Us Today
            </a>
            <a
              href="https://maps.google.com/?q=1+Maple+Ave+Milford+DE+19663"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-brand-burgundy font-semibold rounded-lg hover:bg-gray-50 transition-colors border-2 border-brand-burgundy text-lg"
            >
              Visit Our Showroom
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
