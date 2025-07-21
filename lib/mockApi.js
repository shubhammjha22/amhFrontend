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
        { text: "Services", href: "/services" },
        { text: "Solutions", href: "/solutions" },
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
