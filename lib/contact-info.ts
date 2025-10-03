// Contact Information Configuration
// TODO: Update these values with actual business information before launch

export const CONTACT_INFO = {
  // Phone number - PLACEHOLDER - UPDATE REQUIRED
  phone: {
    raw: '+1234567890',
    display: '(123) 456-7890',
    // When updating, use format: raw: '+15551234567', display: '(555) 123-4567'
  },

  // Email - VERIFY THIS IS CORRECT
  email: 'info@superiorfurniturede.com',

  // Business Address
  address: {
    street: '1 Maple Avenue',
    city: 'Milford',
    state: 'DE',
    // TODO: VERIFY ZIP CODE - Is it 19663 or 19963?
    zip: '19663',
    full: '1 Maple Avenue, Milford, DE 19663',
    googleMapsUrl: 'https://maps.google.com/?q=1+Maple+Avenue,+Milford,+DE+19663',
  },

  // Business Hours - VERIFY WITH ROGER WOOD
  hours: {
    weekday: 'Monday - Saturday: 10am - 6pm',
    weekend: 'Sunday: Closed',
    details: [
      { days: 'Monday - Saturday', hours: '10:00 AM - 6:00 PM' },
      { days: 'Sunday', hours: 'Closed' },
    ],
  },

  // Business Information
  business: {
    name: 'Superior Furniture and Mattress',
    owner: 'Roger Wood',
    foundedYear: '2015',
    yearsInBusiness: '8+', // 2015 to 2025
    partnership: "God's Way Thrift Store",
  },
} as const;

// Brand claims - VERIFIED ONLY
export const BRAND_CLAIMS = {
  discountRange: '60-75% Off Retail',
  authorizedDealer: 'Authorized Ashley Furniture Dealer',
  mattressBrands: 'Beautyrest-quality mattresses',
  services: [
    'Free Delivery & Setup',
    'Free Mattress Removal',
    'Brand New Products',
  ],
} as const;

// Sample pricing - UPDATE WITH ACTUAL CURRENT PRICES
export const SAMPLE_PRICING = {
  queenMattress: {
    price: '$599',
    retail: '$2,000',
    description: 'Beautyrest-quality Queen Mattress',
  },
  sofa: {
    price: '$549.99',
    description: 'Ashley Sofa',
  },
  recliner: {
    price: '$379.99',
    description: 'Rocker Recliner',
  },
  diningSet: {
    price: '$599.99 - $799.99',
    description: 'Complete Dining Set',
  },
} as const;
