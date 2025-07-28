import Link from "next/link";
import Image from "next/image";
import { Instagram, Facebook, Twitter, Mail, MapPin } from "lucide-react";

const Footer = ({
  companyName = "Outscale Partners",
  logo = "/logo.svg",
  officeLocation = {
    address:
      "8th Floor, Block A, Vatika Business Park, Sohna Road, Sector 49, Gurugram, Haryana, 122018",
    title: "Office Location",
  },
  contactEmail = "info@amightga.com",
  quickLinks = [
    { label: "About", href: "/about" },
    { label: "Contact Us", href: "/contact" },
    { label: "Careers", href: "/careers" },
  ],
  services = {
    title: "OUR SERVICES",
    items: [
      { label: "Human Resource", href: "/services/hr" },
      { label: "Technology", href: "/services/technology" },
      { label: "Consulting", href: "/services/consulting" },
      { label: "Analytics", href: "/services/analytics" },
    ],
  },
  additionalServices = [
    { label: "Risk and Legal", href: "/services/risk-legal" },
    { label: "Customer Service", href: "/services/customer-service" },
    { label: "Sales and Marketing", href: "/services/sales-marketing" },
    { label: "Finance and Accounting", href: "/services/finance-accounting" },
  ],
  socialLinks = {
    instagram: "https://instagram.com/outscalepartners",
    facebook: "https://facebook.com/outscalepartners",
    twitter: "https://twitter.com/outscalepartners",
  },
  customLinks,
  className = "",
}) => {
  const currentYear = new Date().getFullYear();

  const SocialIcon = ({ platform, url, ariaLabel }) => {
    const icons = {
      instagram: Instagram,
      facebook: Facebook,
      twitter: Twitter,
    };

    const IconComponent = icons[platform];

    if (!IconComponent || !url) return null;

    return (
      <Link
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="w-8 h-8 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center transition-colors duration-200"
        aria-label={ariaLabel || `Visit our ${platform} page`}
      >
        <IconComponent className="w-4 h-4 text-white" />
      </Link>
    );
  };

  return (
    <footer
      className={`bg-black text-white py-6 h-full px-4 ${className}`}
      role="contentinfo"
      aria-label="Site footer"
    >
      <div className="w-[90%] mx-auto border-t-[1px] border-white pt-10">
        <div className="flex items-center flex-col sm:flex-row justify-between gap-16 ">
          {/* Company Info Section */}
          <div className="space-y-6 w-1/2">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              {logo ? (
                <Image
                  src={logo}
                  alt={`${companyName} logo`}
                  width={59}
                  height={40}
                  className="w-16 h-10"
                />
              ) : (
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <div className="w-4 h-4 bg-white rounded-full"></div>
                </div>
              )}
              <h2 className="text-xl font-bold">{companyName}</h2>
            </div>

            <div className="flex items-start lg:items-center flex-col lg:flex-row lg:justify-start gap-4">
              {/* Office Location */}
              <div>
                <h3 className="font-medium mb-3 flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  {officeLocation.title}
                </h3>
                <address className="text-[#D7D7D7] text-sm not-italic leading-relaxed max-w-sm">
                  {officeLocation.address}
                </address>
              </div>

              {/* Contact Email */}
              <div>
                <h3 className="font-medium mb-3">Mail</h3>
                <Link
                  href={`mailto:${contactEmail}`}
                  className="text-gray-300 text-sm hover:text-white transition-colors duration-200 flex items-center"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  {contactEmail}
                </Link>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-3 ">
              <SocialIcon
                platform="instagram"
                url={socialLinks.instagram}
                ariaLabel={`Follow ${companyName} on Instagram`}
              />
              <SocialIcon
                platform="facebook"
                url={socialLinks.facebook}
                ariaLabel={`Follow ${companyName} on Facebook`}
              />
              <SocialIcon
                platform="twitter"
                url={socialLinks.twitter}
                ariaLabel={`Follow ${companyName} on Twitter`}
              />
            </div>
          </div>

          <div className="grid gap-6 sm:gap-0 sm:grid-cols-3 lg:w-1/2">
            {/* Quick Links */}
            <div>
              <h3 className="font-medium mb-3 text-white uppercase tracking-wider text-sm">
                Quick Links
              </h3>
              <nav aria-label="Quick navigation links">
                <ul className="space-y-3">
                  {quickLinks.map((link, index) => (
                    <li key={index}>
                      <Link
                        href={link.href}
                        className="text-[#D7D7D7] hover:text-white transition-colors duration-200 text-sm"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                  {customLinks &&
                    customLinks.map((link, index) => (
                      <li key={`custom-${index}`}>
                        <Link
                          href={link.href}
                          className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                </ul>
              </nav>
            </div>

            {/* Main Services */}
            <div>
              <h3 className="font-medium mb-3 text-white uppercase tracking-wider text-sm">
                {services.title}
              </h3>
              <nav aria-label="Our services">
                <ul className="space-y-3">
                  {services.items.map((service, index) => (
                    <li key={index}>
                      <Link
                        href={service.href}
                        className="text-[#D7D7D7] hover:text-white transition-colors duration-200 text-sm"
                      >
                        {service.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
            {/* {Addition services} */}
            <div>
              <h3 className="font-medium mb-3 text-white uppercase tracking-wider invisible text-sm">
                Additional
              </h3>
              <nav aria-label="Our services">
                <ul className="space-y-3">
                  {additionalServices.map((service, index) => (
                    <li key={index}>
                      <Link
                        href={service.href}
                        className="text-[#D7D7D7] hover:text-white transition-colors duration-200 text-sm"
                      >
                        {service.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} {companyName}. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link
                href="/privacy-policy"
                className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-of-service"
                className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

// Usage Example:
/*
import Footer from '@/components/Footer';

// Basic usage
<Footer />

// With custom props
<Footer
  companyName="Your Company"
  logo="/path/to/logo.png"
  contactEmail="contact@yourcompany.com"
  quickLinks={[
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" }
  ]}
  socialLinks={{
    instagram: "https://instagram.com/yourcompany",
    facebook: "https://facebook.com/yourcompany",
    twitter: "https://twitter.com/yourcompany"
  }}
/>
*/
