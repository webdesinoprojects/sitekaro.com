// Location page content templates based on service focus

export type ServiceFocus = 
  | "web-development"
  | "digital-marketing"
  | "seo-services"
  | "graphic-designing"
  | "content-writing"
  | "all-services";

export interface LocationTemplate {
  slug: string;
  title: string;
  description: string;
  content: any;
}

export const SERVICE_FOCUS_OPTIONS = [
  { value: "web-development", label: "Web Development" },
  { value: "digital-marketing", label: "Digital Marketing" },
  { value: "seo-services", label: "SEO Services" },
  { value: "graphic-designing", label: "Graphic Designing" },
  { value: "content-writing", label: "Content Writing" },
  { value: "all-services", label: "All Services" },
];

export function generateLocationTemplate(
  location: string,
  serviceFocus: ServiceFocus
): LocationTemplate {
  const templates = {
    "web-development": generateWebDevelopmentTemplate(location),
    "digital-marketing": generateDigitalMarketingTemplate(location),
    "seo-services": generateSEOTemplate(location),
    "graphic-designing": generateGraphicDesignTemplate(location),
    "content-writing": generateContentWritingTemplate(location),
    "all-services": generateAllServicesTemplate(location),
  };

  return templates[serviceFocus];
}

function generateWebDevelopmentTemplate(location: string): LocationTemplate {
  return {
    slug: `best-web-development-company-in-${location.toLowerCase().replace(/\s+/g, "-")}`,
    title: `Best Web Development Company in ${location} | Sitekaro`,
    description: `Looking for the best web development company in ${location}? Sitekaro offers professional web development, custom websites, e-commerce solutions, and web design services in ${location}, Delhi NCR.`,
    content: {
      hero: {
        subtitle: `Are you searching for a reliable web development company in ${location}? At Sitekaro, we help local businesses create modern, fast, and SEO-friendly websites that generate genuine leads and rank well on Google.`,
        ctaText: "Get a Free Quote",
        ctaLink: "/contact",
        secondaryCtaText: "Call Us Now",
        secondaryCtaLink: "tel:+919310851557",
        image: "/location-hero.png"
      },
      story: {
        title: `Why Your ${location} Business Needs Professional Web Development`,
        content: [
          `In today's digital landscape, your customers in ${location} are actively engaged online. A professionally developed website does more than just provide information; it serves as a powerful tool for your business growth.`,
          "Our custom web development services include responsive design, fast loading speeds, SEO optimization, and secure coding practices that ensure your website performs flawlessly across all devices.",
          `Whether you run a boutique, coaching center, clinic, or home-based service in ${location}, our web development solutions will help you stand out from competitors and attract the clientele you desire.`
        ],
        image: "/location-story.png"
      },
      leadingCompany: {
        title: `The Leading Web Development Company in ${location}`,
        content: `Located in Delhi NCR, Sitekaro is known for delivering high-converting websites for small businesses and startups. We're the go-to web development company in ${location} for WordPress, Shopify, Next.js, and custom-built platforms.`
      },
      services: [
        {
          title: "Custom Web Development",
          items: [
            "Mobile-responsive websites using modern technologies (Next.js, React, WordPress)",
            "Custom web applications tailored to your business needs",
            "E-commerce platforms with secure payment integration",
            "Fast-loading, SEO-optimized code for better rankings"
          ],
          image: "/location-service-1.png"
        },
        {
          title: "Website Design & UX",
          items: [
            "User-centric designs that convert visitors into customers",
            "Modern, professional layouts that reflect your brand",
            "Mobile-first responsive design approach",
            "Interactive elements and smooth animations"
          ],
          image: "/location-service-2.png"
        },
        {
          title: `Local Support in ${location}`,
          items: [
            `In-person consultations available in ${location}`,
            "Quick WhatsApp/call support for urgent changes",
            "Dedicated account manager who understands local business needs",
            "Ongoing maintenance and technical support"
          ],
          image: "/location-service-3.png"
        }
      ]
    }
  };
}

function generateDigitalMarketingTemplate(location: string): LocationTemplate {
  return {
    slug: `best-digital-marketing-agency-in-${location.toLowerCase().replace(/\s+/g, "-")}`,
    title: `Best Digital Marketing Agency in ${location} | Sitekaro`,
    description: `Top digital marketing agency in ${location} offering SEO, social media marketing, PPC advertising, content marketing, and online reputation management. Grow your business with Sitekaro.`,
    content: {
      hero: {
        subtitle: `Looking to grow your business online in ${location}? Sitekaro is a full-service digital marketing agency helping local businesses increase visibility, generate leads, and boost sales through data-driven strategies.`,
        ctaText: "Get Free Consultation",
        ctaLink: "/contact",
        secondaryCtaText: "Call Us Now",
        secondaryCtaLink: "tel:+919310851557",
        image: "/location-hero.png"
      },
      story: {
        title: `Why ${location} Businesses Choose Sitekaro for Digital Marketing`,
        content: [
          `In the competitive ${location} market, having a strong online presence is crucial. Our digital marketing strategies are designed to help you reach your target audience, engage them effectively, and convert them into loyal customers.`,
          "We combine SEO, social media marketing, PPC advertising, and content marketing to create comprehensive campaigns that deliver measurable results. Our team understands the local market dynamics and consumer behavior.",
          `From small startups to established businesses in ${location}, we've helped numerous clients achieve their digital marketing goals with transparent reporting and proven ROI.`
        ],
        image: "/location-story.png"
      },
      leadingCompany: {
        title: `Leading Digital Marketing Agency in ${location}`,
        content: `Sitekaro has been helping businesses in ${location} and across Delhi NCR grow their online presence since years. Our data-driven approach and local market expertise make us the preferred digital marketing partner for businesses of all sizes.`
      },
      services: [
        {
          title: "SEO & Local Search",
          items: [
            `Local SEO optimization for ${location} businesses`,
            "Google Business Profile setup and optimization",
            "Keyword research and on-page optimization",
            "Link building and citation management"
          ],
          image: "/location-service-1.png"
        },
        {
          title: "Social Media Marketing",
          items: [
            "Facebook, Instagram, LinkedIn, and Twitter management",
            "Content creation and posting schedule",
            "Paid social media advertising campaigns",
            "Community engagement and reputation management"
          ],
          image: "/location-service-2.png"
        },
        {
          title: "PPC & Performance Marketing",
          items: [
            "Google Ads campaign management",
            "Facebook and Instagram ads",
            "Conversion tracking and optimization",
            "Monthly performance reports and insights"
          ],
          image: "/location-service-3.png"
        }
      ]
    }
  };
}

function generateSEOTemplate(location: string): LocationTemplate {
  return {
    slug: `best-seo-company-in-${location.toLowerCase().replace(/\s+/g, "-")}`,
    title: `Best SEO Company in ${location} | Sitekaro`,
    description: `Professional SEO services in ${location}. Improve your search rankings with local SEO, technical SEO, on-page optimization, and link building. Get more organic traffic with Sitekaro.`,
    content: {
      hero: {
        subtitle: `Want to rank higher on Google in ${location}? Sitekaro offers expert SEO services that help local businesses improve their search visibility, drive organic traffic, and generate quality leads.`,
        ctaText: "Get SEO Audit",
        ctaLink: "/contact",
        secondaryCtaText: "Call Us Now",
        secondaryCtaLink: "tel:+919310851557",
        image: "/location-hero.png"
      },
      story: {
        title: `Why SEO Matters for ${location} Businesses`,
        content: [
          `When potential customers in ${location} search for products or services you offer, you want to be on the first page of Google. Our SEO strategies are designed to improve your rankings and drive qualified traffic to your website.`,
          "We use white-hat SEO techniques including keyword research, on-page optimization, technical SEO, quality link building, and local SEO to ensure sustainable, long-term results.",
          `Our team has helped numerous ${location} businesses achieve top rankings for competitive keywords, resulting in increased website traffic, more leads, and higher revenue.`
        ],
        image: "/location-story.png"
      },
      leadingCompany: {
        title: `Trusted SEO Company in ${location}`,
        content: `Sitekaro is a leading SEO company serving businesses in ${location} and across Delhi NCR. Our proven SEO strategies have helped clients achieve first-page rankings and significant increases in organic traffic.`
      },
      services: [
        {
          title: "Local SEO",
          items: [
            `Google Business Profile optimization for ${location}`,
            "Local citation building and NAP consistency",
            "Local keyword targeting and content optimization",
            "Review management and reputation building"
          ],
          image: "/location-service-1.png"
        },
        {
          title: "Technical & On-Page SEO",
          items: [
            "Website speed optimization and Core Web Vitals",
            "Mobile-friendliness and responsive design",
            "Schema markup and structured data",
            "Meta tags, headers, and content optimization"
          ],
          image: "/location-service-2.png"
        },
        {
          title: "Link Building & Content",
          items: [
            "High-quality backlink acquisition",
            "Guest posting and outreach campaigns",
            "SEO-optimized content creation",
            "Competitor analysis and strategy"
          ],
          image: "/location-service-3.png"
        }
      ]
    }
  };
}

function generateGraphicDesignTemplate(location: string): LocationTemplate {
  return {
    slug: `best-graphic-design-company-in-${location.toLowerCase().replace(/\s+/g, "-")}`,
    title: `Best Graphic Design Company in ${location} | Sitekaro`,
    description: `Professional graphic design services in ${location}. Logo design, brand identity, UI/UX design, and marketing materials. Creative designs that make your brand stand out.`,
    content: {
      hero: {
        subtitle: `Need stunning graphic designs for your ${location} business? Sitekaro offers professional graphic design services including logo design, brand identity, UI/UX design, and marketing materials that make your brand memorable.`,
        ctaText: "View Portfolio",
        ctaLink: "/portfolio",
        secondaryCtaText: "Call Us Now",
        secondaryCtaLink: "tel:+919310851557",
        image: "/location-hero.png"
      },
      story: {
        title: `Creative Graphic Design Solutions for ${location} Businesses`,
        content: [
          `In the competitive ${location} market, visual identity matters. Our graphic design services help businesses create a strong, memorable brand presence that resonates with their target audience.`,
          "From logo design to complete brand identity packages, we create designs that are not only visually appealing but also strategically aligned with your business goals and target market.",
          `Our designers understand the local ${location} market and create culturally relevant designs that connect with your audience while maintaining modern design standards.`
        ],
        image: "/location-story.png"
      },
      leadingCompany: {
        title: `Leading Graphic Design Company in ${location}`,
        content: `Sitekaro has been creating impactful designs for businesses in ${location} and across Delhi NCR. Our creative team combines artistic excellence with strategic thinking to deliver designs that drive results.`
      },
      services: [
        {
          title: "Logo & Brand Identity",
          items: [
            "Custom logo design with multiple concepts",
            "Complete brand identity packages",
            "Brand guidelines and style guides",
            "Business card and stationery design"
          ],
          image: "/location-service-1.png"
        },
        {
          title: "UI/UX Design",
          items: [
            "Website and mobile app UI design",
            "User experience research and wireframing",
            "Interactive prototypes and mockups",
            "Usability testing and optimization"
          ],
          image: "/location-service-2.png"
        },
        {
          title: "Marketing Materials",
          items: [
            "Social media graphics and templates",
            "Brochures, flyers, and posters",
            "Infographics and presentations",
            "Packaging and product design"
          ],
          image: "/location-service-3.png"
        }
      ]
    }
  };
}

function generateContentWritingTemplate(location: string): LocationTemplate {
  return {
    slug: `best-content-writing-services-in-${location.toLowerCase().replace(/\s+/g, "-")}`,
    title: `Best Content Writing Services in ${location} | Sitekaro`,
    description: `Professional content writing services in ${location}. SEO blog writing, website content, social media content, and copywriting that engages your audience and drives results.`,
    content: {
      hero: {
        subtitle: `Need compelling content for your ${location} business? Sitekaro offers professional content writing services including SEO blogs, website copy, social media content, and marketing materials that engage and convert.`,
        ctaText: "Get Started",
        ctaLink: "/contact",
        secondaryCtaText: "Call Us Now",
        secondaryCtaLink: "tel:+919310851557",
        image: "/location-hero.png"
      },
      story: {
        title: `Quality Content Writing for ${location} Businesses`,
        content: [
          `Content is the foundation of digital marketing success. For businesses in ${location}, having high-quality, engaging content is essential for attracting customers, building trust, and improving search rankings.`,
          "Our content writers create SEO-optimized, audience-focused content that not only ranks well on search engines but also resonates with your target customers and drives them to take action.",
          `From blog posts to website copy, we understand the ${location} market and create content that speaks directly to your local audience while maintaining professional quality and SEO best practices.`
        ],
        image: "/location-story.png"
      },
      leadingCompany: {
        title: `Professional Content Writing Services in ${location}`,
        content: `Sitekaro provides comprehensive content writing services to businesses in ${location} and across Delhi NCR. Our experienced writers create content that informs, engages, and converts your audience.`
      },
      services: [
        {
          title: "SEO Blog Writing",
          items: [
            "Keyword-optimized blog posts and articles",
            "Industry-specific content research",
            "Regular posting schedule management",
            "Internal linking and SEO optimization"
          ],
          image: "/location-service-1.png"
        },
        {
          title: "Website Content",
          items: [
            "Homepage and landing page copy",
            "Service and product descriptions",
            "About Us and company pages",
            "Call-to-action optimization"
          ],
          image: "/location-service-2.png"
        },
        {
          title: "Marketing Content",
          items: [
            "Social media posts and captions",
            "Email newsletters and campaigns",
            "Case studies and testimonials",
            "Brochures and marketing materials"
          ],
          image: "/location-service-3.png"
        }
      ]
    }
  };
}

function generateAllServicesTemplate(location: string): LocationTemplate {
  return {
    slug: `best-web-development-company-in-${location.toLowerCase().replace(/\s+/g, "-")}`,
    title: `Best Web Development & Digital Marketing Company in ${location} | Sitekaro`,
    description: `Complete digital solutions in ${location} - web development, SEO, digital marketing, graphic design, and content writing. Your trusted partner for online growth.`,
    content: {
      hero: {
        subtitle: `Are you searching for comprehensive digital solutions in ${location}? At Sitekaro, we offer web development, SEO, digital marketing, graphic design, and content writing services that help businesses grow online.`,
        ctaText: "Get a Free Quote",
        ctaLink: "/contact",
        secondaryCtaText: "Call Us Now",
        secondaryCtaLink: "tel:+919310851557",
        image: "/location-hero.png"
      },
      story: {
        title: `Why Your ${location} Business Needs Sitekaro`,
        content: [
          `In today's digital landscape, your customers in ${location} are actively engaged online. A comprehensive digital strategy that includes web development, SEO, and marketing is essential for business growth.`,
          "At Sitekaro, we provide end-to-end digital solutions under one roof. From building your website to marketing it effectively, we handle everything so you can focus on running your business.",
          `Whether you run a boutique, coaching center, clinic, or home-based service in ${location}, our integrated approach will help you establish a strong online presence and attract more customers.`
        ],
        image: "/location-story.png"
      },
      leadingCompany: {
        title: `The Leading Digital Solutions Provider in ${location}`,
        content: `Located in Delhi NCR, Sitekaro is known for delivering comprehensive digital solutions for small businesses and startups. We're the go-to partner in ${location} for all your web development, SEO, and digital marketing needs.`
      },
      services: [
        {
          title: "Website Development & Design",
          items: [
            "Custom websites using WordPress, Shopify, and modern frameworks",
            "E-commerce platforms with secure payment integration",
            "Mobile-responsive and SEO-optimized designs",
            "Website maintenance and support"
          ],
          image: "/location-service-1.png"
        },
        {
          title: "SEO & Digital Marketing",
          items: [
            `Local SEO optimization for ${location} businesses`,
            "Social media marketing and management",
            "PPC advertising and Google Ads",
            "Content marketing and email campaigns"
          ],
          image: "/location-service-2.png"
        },
        {
          title: "Design & Content Services",
          items: [
            "Logo design and brand identity",
            "UI/UX design for websites and apps",
            "SEO blog writing and website content",
            "Social media graphics and marketing materials"
          ],
          image: "/location-service-3.png"
        }
      ]
    }
  };
}
