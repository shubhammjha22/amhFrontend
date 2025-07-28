import { ArrowRight, icons, Play } from "lucide-react";

// Mock API for dynamic content
export const mockApi = {
  // Get all available pages
  async getPages() {
    return {
      pages: [
        {
          slug: "home",
          title: "Home",
          path: "/",
        },
        {
          slug: "services",
          title: "Services",
          path: "/services",
        },
        {
          slug: "services/hr",
          title: "Human Resource",
          path: "/services/hr",
        },
        {
          slug: "solutions",
          title: "Solutions",
          path: "/solutions",
        },
        {
          slug: "about",
          title: "About",
          path: "/about",
        },
        {
          slug: "contact",
          title: "Contact",
          path: "/contact",
        },
        {
          slug: "business-assessment",
          title: "Business Assessment",
          path: "/business-assessment",
        },
        {
          slug: "assessment",
          title: "Assessment",
          path: "/assessment",
        },
        {
          slug: "careers",
          title: "Careers",
          path: "/careers",
        },
      ],
    };
  },

  // Get page content by slug
  async getPageContent(slug) {
    const content = {
      home: {
        hero: {
          title: "Less Busywork.",
          subtitle: "More Bold Moves.",
          description:
            "Transform your business with intelligent automation and strategic outsourcing solutions.",
          ctaText: "Take the Outscale Readiness Assessment",
          ctaLink: "/assessment",
        },
        problems: {
          title: "What's Slowing You Down?",
          description:
            "Growth shouldn't feel messy, expensive, or unpredictable. But for many businesses, behind-the-scenes inefficiencies and patchwork processes quietly eat up profit, overload teams, and open the door to costly mistakes. These hidden draft factors can slow you down when you least expect it or just when you're ready to scale.",
          subtitle:
            "Select the pain point below that hits closest to home for you.",
          items: [
            {
              id: "hidden-costs",
              title: "Hidden Costs",
              description:
                "Quiet inefficiencies that bleed profit behind the scenes.",
              ctaText: "How we Fix It",
              image: "/api/placeholder/300/200",
            },
            {
              id: "overloaded-teams",
              title: "Overloaded Teams",
              description: "Top talent buried in busywork, not strategy.",
              ctaText: "How we Fix It",
              image: "/api/placeholder/300/200",
            },
            {
              id: "processes-dont-scale",
              title: "Processes That Don't Scale",
              description: "Old workflows crack under new demands.",
              ctaText: "How we Fix It",
              image: "/api/placeholder/300/200",
            },
            {
              id: "compliance-risks",
              title: "Compliance Risks",
              description:
                "One slip can cost reputation, trust, or potential fines.",
              ctaText: "How we Fix It",
              image: "/api/placeholder/300/200",
            },
            {
              id: "poor-visibility",
              title: "Poor Visibility",
              description: "Leaders flying blind without real-time insights.",
              ctaText: "How we Fix It",
              image: "/api/placeholder/300/200",
            },
            {
              id: "leaders-in-weeds",
              title: "Leaders in the Weeds",
              description:
                "Key personnel and leadership stuck firefighting instead of moving big ideas forward.",
              ctaText: "How we Fix It",
              image: "/api/placeholder/300/200",
            },
          ],
        },
        services: {
          title: "Where Excellence Meets Innovation",
          description:
            "Transforming businesses through the perfect synthesis of elite talent, intelligent systems, and relentless improvement.",
          items: [
            {
              icon: "users",
              title: "Elite Talent",
              subtitle: "World-class professionals",
              description:
                "Handpicked experts who drive innovation and deliver exceptional results across every project.",
              ctaText: "Learn more",
              ctaLink: "/services/talent",
            },
            {
              icon: "brain",
              title: "Intelligent Systems",
              subtitle: "AI-powered solutions",
              description:
                "Cutting-edge technology platforms that optimize performance and accelerate digital transformation.",
              ctaText: "Learn more",
              ctaLink: "/services/systems",
            },
            {
              icon: "trending-up",
              title: "Relentless Improvement",
              subtitle: "Continuous evolution",
              description:
                "Constant refinement and optimization to ensure sustained growth and competitive advantage.",
              ctaText: "Learn more",
              ctaLink: "/services/improvement",
            },
          ],
        },
        formula: {
          title: "Our Formula is simple",
          description:
            "At Outscale, we're not just supporting growth—we're engineering it.",
          subtitle:
            "We've partnered with ambitious companies to drive smarter growth. Acting as an extension of your team, our global experts move fast, innovate, and execute with precision.",
          items: [
            {
              icon: "users",
              title: "Elite talent",
              color: "green",
            },
            {
              icon: "settings",
              title: "Intelligent systems",
              color: "blue",
            },
            {
              icon: "trending-up",
              title: "Relentless improvement",
              color: "emerald",
            },
          ],
          result: "Success",
        },
        difference: {
          title: "The Outscale Difference",
          items: [
            {
              title: "Automation Where It Matters",
              description:
                "We automate routine tasks to cut waste and free your team for high-value moves.",
              image: "/api/placeholder/400/300",
            },
            {
              title: "Elite Talent on Demand",
              description:
                "Skilled specialists who know your industry and deliver with speed and care.",
              image: "/api/placeholder/400/300",
            },
            {
              title: "Clarity",
              description:
                "Live dashboards that give your leaders crystal-clear visibility into performance.",
              image: "/api/placeholder/400/300",
            },
          ],
        },
      },
      services: {
        hero: {
          title: "Our Services",
          subtitle: "Comprehensive Solutions",
          description:
            "Discover how our elite talent, intelligent systems, and relentless improvement can transform your business.",
          ctaText: "Get Started",
          ctaLink: "/contact",
        },
      },
      solutions: {
        hero: {
          title: "Solutions",
          subtitle: "Tailored for Your Industry",
          description:
            "Industry-specific solutions designed to address your unique challenges and opportunities.",
          ctaText: "Explore Solutions",
          ctaLink: "/contact",
        },
      },
      about: {
        hero: {
          title: "About Outscale Partners",
          subtitle: "Excellence Through Innovation",
          description:
            "We're a team of passionate professionals dedicated to helping businesses achieve extraordinary growth.",
          ctaText: "Join Our Team",
          ctaLink: "/careers",
        },
      },
      contact: {
        hero: {
          title: "Contact Us",
          subtitle: "Let's Start Something Great",
          description:
            "Ready to transform your business? Get in touch with our team today.",
          ctaText: "Schedule a Call",
          ctaLink: "/schedule",
        },
      },
      "business-assessment": {
        hero: {
          title: "Business Assessment",
          subtitle: "Let's Start Something Great",
          description:
            "Ready to transform your business? Get in touch with our team today.",
          ctaText: "Schedule a Call",
          ctaLink: "/schedule",
        },
      },
      assessment: {
        hero: {
          title: "Assessment",
          subtitle: "Let's Start Something Great",
          description:
            "Ready to transform your business? Get in touch with our team today.",
          ctaText: "Schedule a Call",
          ctaLink: "/schedule",
        },
      },
      careers: {
        hero: {
          title: "Careers",
          subtitle: "Let's Start Something Great",
          description:
            "Ready to transform your business? Get in touch with our team today.",
          ctaText: "Schedule a Call",
          ctaLink: "/schedule",
        },
      },
      "services/hr": {
        hero: {
          title: "Human Resource",
          subtitle: "Let's Start Something Great",
          description:
            "Ready to transform your business? Get in touch with our team today.",
          ctaText: "Schedule a Call",
          ctaLink: "/schedule",
        },
      },
    };

    return content[slug] || null;
  },

  // Get navigation data
  async getNavigation() {
    return {
      logo: {
        text: "Outscale Partners",
        link: "/",
      },
      links: [
        {
          text: "Services",
          href: "/services",
          children: [
            { text: "Human Resources", href: "/services/hr" },
            { text: "Finance and Accounting", href: "/services/finance" },
            { text: "Technology", href: "/services/technology" },
            { text: "Analytics", href: "/services/analytics" },
            { text: "Risk and Legal", href: "/services/risk" },
            { text: "Customer Service", href: "/services/customer-service" },
            { text: "Sales and Marketing", href: "/services/sales" },
            { text: "Consulting", href: "/services/consulting" },
          ],
        },
        {
          text: "Solutions",
          href: "/solutions",
        },
        { text: "About", href: "/about" },
        { text: "Contact", href: "/contact" },
      ],
      cta: {
        text: "Get Started",
        href: "/contact",
      },
    };
  },
};

export const heroSection = [
  {
    id: "about-us",
    badge: {
      label: "About Outscale Partners",
    },
    heading: {
      line1: "We Don't Just Support Growth.",
      line2: "We Engineer It.",
    },
    description: [
      "At Outscale Partners, we believe growth shouldn't come with growing pains. We're here to eliminate the friction that slows modern businesses down — the hidden inefficiencies, overloaded teams, outdated workflows, and operational blind spots that quietly drain momentum just when you're ready to scale.",
      "We partner with ambitious organizations that think bigger than average — those who know that operational excellence isn't just a back-office function, but a growth catalyst.",
    ],
    ctaButtons: [
      {
        text: "Take Free Assessment",
        type: "primary",
        icon: ArrowRight,
        routeKey: "BUSINESS_ASSESSMENT", // maps to ROUTES.BUSINESS_ASSESSMENT
      },
      {
        text: "Get in Touch",

        type: "outline",
      },
    ],
    image: {
      alt: "Modern business team collaborating on growth strategies",
      src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    },
  },
  {
    id: "service-hr",
    badge: {
      label: "Human Resources Excellence",
    },
    heading: {
      line1: "Empowering Workforces.",
      line2: "Transforming Outcomes.",
    },
    description: [
      "From talent acquisition to advanced analytics, our HR solutions are engineered to drive measurable workforce impact.",
    ],
    ctaButtons: [
      {
        text: "Explore Our HR Capabilities",
        type: "primary",
        icon: ArrowRight,
        routeKey: "BUSINESS_ASSESSMENT", // maps to ROUTES.BUSINESS_ASSESSMENT
      },
      {
        text: "Watch Demo",
        icon: Play,
        type: "outline",
      },
    ],
    image: {
      alt: "Modern business team collaborating on growth strategies",
      src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    },
  },
  {
    id: "business-assessment",
    badge: {
      label: "Operations Excellence Platform",
      color: "green",
    },
    heading: {
      line1: "Are You Ready to Grow",
      line2: "Without Growing Pains?",
    },
    description: [
      "At Outscale, we partner with growth-focused companies to handle the critical operations that slow them down, so they can do more of what they love with confidence.",
    ],
    ctaButtons: [
      {
        type: "primary",
        text: "Take Free Assessment",
        icon: ArrowRight,
        href: "/assessment",
      },
      {
        type: "outline",
        text: "Learn More",
      },
    ],
    stats: [
      {
        value: "500+",
        label: "Companies Scaled",
      },
      {
        value: "40%",
        label: "Average Cost Reduction",
      },
      {
        value: "3x",
        label: "Faster Growth",
      },
    ],
  },
  {
    id: "contact-us",
    badge: {
      label: "Ready to Connect",
      color: "green",
    },
    heading: {
      line1: "Let's Engineer Growth",
      line2: "Together",
    },
    description: [
      "Whether you're looking to streamline operations, scale faster, or explore a partnership — we're ready to help.",
    ],
    ctaButtons: [
      {
        type: "primary",
        text: "Schedule a Discovery Call",
        icon: ArrowRight,
        href: "/assessment",
      },
      {
        type: "outline",
        text: "Submit an Inquiry",
      },
    ],
  },
  {
    id: "careers",
    badge: {
      label: "Join Our Team",
      color: "green",
    },
    heading: {
      line1: "Build Your Career in",
      line2: "Operational Excellence",
    },
    description: [
      "Join a team of experts who are redefining how businesses scale. Help organizations worldwide transform their operations and achieve sustainable growth.",
    ],
    ctaButtons: [
      {
        type: "primary",
        text: "View Open Positions",
        icon: ArrowRight,
        href: "/assessment",
      },
      {
        type: "outline",
        text: "Learn About Our Culture",
      },
    ],
  },
];

export const jobListing = [
  {
    id: "1",
    title: "Senior HR Operations Specialist",
    department: "Human Resources",
    location: "Remote",
    type: "Full-time",
    level: "Senior",
    salary: "$85k - $120k",
    description:
      "Lead HR operations initiatives and optimize people processes for our growing client base. You'll work directly with C-level executives to implement scalable HR solutions.",
    requirements: [
      "5+ years in HR operations or consulting",
      "Experience with HRIS systems and automation",
      "Strong analytical and problem-solving skills",
      "Excellent communication and client management abilities",
    ],
    posted: "3 days ago",
  },
  {
    id: "2",
    title: "Business Operations Analyst",
    department: "Operations",
    location: "New York, NY",
    type: "Full-time",
    level: "Mid-level",
    salary: "$70k - $95k",
    description:
      "Analyze business processes and identify optimization opportunities across multiple client engagements. Support data-driven decision making for operational improvements.",
    requirements: [
      "3+ years in business analysis or operations",
      "Proficiency in data analysis tools (SQL, Excel, Python)",
      "Experience with process mapping and optimization",
      "Strong presentation and stakeholder management skills",
    ],
    posted: "1 week ago",
  },
  {
    id: "3",
    title: "Customer Success Manager",
    department: "Customer Success",
    location: "Remote",
    type: "Full-time",
    level: "Mid-level",
    salary: "$75k - $100k",
    description:
      "Drive client satisfaction and growth through strategic relationship management. Ensure successful implementation and ongoing optimization of our services.",
    requirements: [
      "4+ years in customer success or account management",
      "Experience in B2B SaaS or consulting environment",
      "Track record of driving client growth and retention",
      "Strong project management and communication skills",
    ],
    posted: "2 weeks ago",
  },
  {
    id: "4",
    title: "Product Marketing Manager",
    department: "Marketing",
    location: "San Francisco, CA",
    type: "Full-time",
    level: "Senior",
    salary: "$95k - $130k",
    description:
      "Lead go-to-market strategies for our operational excellence solutions. Develop compelling messaging and positioning for our target markets.",
    requirements: [
      "5+ years in product marketing or related field",
      "Experience in B2B technology or professional services",
      "Strong writing and content creation skills",
      "Data-driven approach to marketing optimization",
    ],
    posted: "4 days ago",
  },
  {
    id: "5",
    title: "Financial Operations Consultant",
    department: "Finance",
    location: "Remote",
    type: "Full-time",
    level: "Senior",
    salary: "$90k - $125k",
    description:
      "Design and implement financial processes for our clients. Lead financial optimization projects and provide strategic CFO-level support.",
    requirements: [
      "CPA or equivalent financial certification",
      "6+ years in financial operations or consulting",
      "Experience with financial systems and automation",
      "Strong analytical and strategic thinking abilities",
    ],
    posted: "5 days ago",
  },
  {
    id: "6",
    title: "Technology Integration Specialist",
    department: "Technology",
    location: "Austin, TX",
    type: "Full-time",
    level: "Mid-level",
    salary: "$80k - $110k",
    description:
      "Implement and optimize technology solutions for operational efficiency. Work with clients to integrate systems and automate processes.",
    requirements: [
      "4+ years in systems integration or technical consulting",
      "Experience with APIs, databases, and automation tools",
      "Strong problem-solving and troubleshooting skills",
      "Ability to translate business needs into technical solutions",
    ],
    posted: "1 week ago",
  },
];
