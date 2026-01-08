// src/data/projectsData.js

const generateSlug = (title) => {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
};


const projectsData = [
  {
    id: "residence-at-vasant-kunj",
    slug: generateSlug("Residence at Vasant Kunj"), // "residence-at-vasant-kunj"
    title: "Residence at Vasant Kunj",
    location: "New Delhi",
    category: "Residential",
    year: "2023",
    area: "4,800 sq.ft.",
    description: "A serene modern sanctuary that harmoniously blends natural light with minimalist elegance. The design emphasizes open spatial flow, premium materials, and a deep connection with nature.",
    features: [
      "Italian Statuario marble flooring",
      "Custom teak wood millwork",
      "Lutron home automation",
      "Double-height living area",
      "Private Japanese zen courtyard"
    ],
    images: [
      "https://images.unsplash.com/photo-1618221195710-dd6d7372e13d?auto=format&fit=crop&w=2400&q=90",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2400&q=90",
      "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&w=2400&q=90",
      "https://images.unsplash.com/photo-1616046229478-9901c4a64748?auto=format&fit=crop&w=2400&q=90",
      "https://images.unsplash.com/photo-1600210492493-094691112b03?auto=format&fit=crop&w=2400&q=90"
    ]
  },
  {
    id: "penthouse-at-mahindra-luminare",
    slug: generateSlug("Penthouse at Mahindra Luminare"),
    title: "Penthouse at Mahindra Luminare",
    location: "Gurugram",
    category: "Residential",
    year: "2023",
    area: "6,200 sq.ft.",
    description: "Ultra-luxury triplex penthouse with panoramic golf course views and bespoke Italian finishes.",
    features: ["Private elevator", "Rooftop infinity pool", "Wine cellar", "Home theatre"],
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2400&q=90",
      "https://images.unsplash.com/photo-1618221195710-dd6d7372e13d?auto=format&fit=crop&w=2400&q=90",
      "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&w=2400&q=90"
    ]
  }, 
  
  {
    id: "villa-at-defence-colony",
    slug: generateSlug("villa-at-defence-colony"),
    title: "Villa AT Defence Colony",
    location: "Gurugram",
    category: "Residential",
    year: "2023",
    area: "6,200 sq.ft.",
    description: "Ultra-luxury triplex penthouse with panoramic golf course views and bespoke Italian finishes.",
    features: ["Private elevator", "Rooftop infinity pool", "Wine cellar", "Home theatre"],
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2400&q=90",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2400&q=90",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2400&q=90",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2400&q=90",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2400&q=90",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2400&q=90",
      "https://images.unsplash.com/photo-1618221195710-dd6d7372e13d?auto=format&fit=crop&w=2400&q=90",
      "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&w=2400&q=90"
    ]
  },  
  {
    id: "Residence-at-GK1",
    slug: generateSlug("Residence-at-GK1"),
    title: "Residence at GK1",
    location: "Gurugram",
    category: "Residential",
    year: "2023",
    area: "6,200 sq.ft.",
    description: "Ultra-luxury triplex penthouse with panoramic golf course views and bespoke Italian finishes.",
    features: ["Private elevator", "Rooftop infinity pool", "Wine cellar", "Home theatre"],
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2400&q=90",
      "https://images.unsplash.com/photo-1618221195710-dd6d7372e13d?auto=format&fit=crop&w=2400&q=90",
      "https://images.unsplash.com/photo-1618221195710-dd6d7372e13d?auto=format&fit=crop&w=2400&q=90",
      "https://images.unsplash.com/photo-1618221195710-dd6d7372e13d?auto=format&fit=crop&w=2400&q=90",
      "https://images.unsplash.com/photo-1618221195710-dd6d7372e13d?auto=format&fit=crop&w=2400&q=90",
      "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&w=2400&q=90"
    ]
  },
   {
    id: "Sky-Villa-at-Aerocity",
    slug: generateSlug("Sky-Villa-at-Aerocity"),
    title: "Sky Villa at Aerocity",
    location: "Gurugram",
    category: "Residential",
    year: "2023",
    area: "6,200 sq.ft.",
    description: "Ultra-luxury triplex penthouse with panoramic golf course views and bespoke Italian finishes.",
    features: ["Private elevator", "Rooftop infinity pool", "Wine cellar", "Home theatre"],
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2400&q=90",
      "https://images.unsplash.com/photo-1618221195710-dd6d7372e13d?auto=format&fit=crop&w=2400&q=90",
      "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&w=2400&q=90"
    ]
  },  
  {
    id: "Farmhouse-at-Chattarpur",
    slug: generateSlug("Farmhouse-at-Chattarpur"),
    title: "Farmhouse at Chattarpur",
    location: "Gurugram",
    category: "Residential",
    year: "2023",
    area: "6,200 sq.ft.",
    description: "Ultra-luxury triplex penthouse with panoramic golf course views and bespoke Italian finishes.",
    features: ["Private elevator", "Rooftop infinity pool", "Wine cellar", "Home theatre"],
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2400&q=90",
      "https://images.unsplash.com/photo-1618221195710-dd6d7372e13d?auto=format&fit=crop&w=2400&q=90",
      "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&w=2400&q=90"
    ]
  },
    {
    id: "Duplex-at-Anant-Raj-Estate",
    slug: generateSlug("Duplex-at-Anant-Raj-Estate"),
    title: "Duplex at Anant Raj Estate",
    location: "Gurugram",
    category: "Residential",
    year: "2023",
    area: "6,200 sq.ft.",
    description: "Ultra-luxury triplex penthouse with panoramic golf course views and bespoke Italian finishes.",
    features: ["Private elevator", "Rooftop infinity pool", "Wine cellar", "Home theatre"],
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2400&q=90",
      "https://images.unsplash.com/photo-1618221195710-dd6d7372e13d?auto=format&fit=crop&w=2400&q=90",
      "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&w=2400&q=90"
    ]
  },
  
  // Add more projects exactly like this...
];

export default projectsData;