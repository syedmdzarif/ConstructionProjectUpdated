import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// The corrected, complete data endpoint using separate Hero and Section assets
app.get('/api/projects', (req, res) => {
  res.json([
    {
      id: 1,
      title: "Product Sourcing",
      phase: "Phase 01: Materials Shop",
      description: "Source premium eco-bricks, structural steel, and foundations directly from our yards.",
      // Images for Project 1
      heroImage: "/assets/1.jpg",       // Image shown on the Hero Header Slider
      sectionImage: "/assets/2.jpg", // Different image shown in the lower scrollable section
      image: "/assets/construction.jpg",            // Left as a safety fallback
      color: "from-orange-600 to-amber-500",
      redirectUrl: "/materials"
    },
    {
      id: 2,
      title: "Construction Services",
      phase: "Phase 02: Core Engineering",
      description: "Work with our licensed architects and master builders to lay down your framing structural skeleton.",
      // Images for Project 2
      heroImage: "/assets/3.jpg",
      sectionImage: "/assets/4.jpg",
      image: "/assets/interior.jpg",
      color: "from-blue-600 to-cyan-500",
      redirectUrl: "/construction-services"
    },
    {
      id: 3,
      title: "Interior Furnishing",
      phase: "Phase 03: Fit-Out Shop",
      description: "Browse bespoke Italian collections, curated smart-lighting, and finishings for ready spaces.",
      // Images for Project 3
      heroImage: "/assets/5.jpg",
      sectionImage: "/assets/6.jpg",
      image: "/assets/consultant.jpg",
      color: "from-purple-600 to-pink-500",
      redirectUrl: "/interior-shop"
    }
  ]);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});