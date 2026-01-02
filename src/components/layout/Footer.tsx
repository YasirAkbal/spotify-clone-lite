import { footerLinks, socialLinks } from './constants/footerData';
import type { FooterLink } from './constants/footerData';
import { FooterBottom } from './FooterBottom';

interface FooterLinkSectionProps {
  title: string;
  links: FooterLink[];
}

const FooterLinkSection = ({ title, links }: FooterLinkSectionProps) => (
  <div className="flex flex-col gap-2">
    <p className="text-white font-bold mb-1">{title}</p>
    <ul className="flex flex-col gap-2">
      {links.map((link) => (
        <li key={link.label}>
          <a
            href={link.href}
            target="_blank"
            className="text-encore-text-subdued hover:text-white hover:underline transition-colors text-base"
          >
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

export const Footer = () => {
  return (
    <footer data-testid="footer-div" className="bg-footer-background w-full mt-12 mb-30 px-2">
      {/* Top Section - Links and Social */}
      <div className="flex flex-col justify-between gap-6 mb-10">
        {/* Navigation Links */}
        <div className="flex flex-col gap-12">
          <FooterLinkSection {...footerLinks.company} />
          <FooterLinkSection {...footerLinks.communities} />
          <FooterLinkSection {...footerLinks.usefulLinks} />
          <FooterLinkSection {...footerLinks.plans} />
        </div>

        {/* Social Icons */}
        <div className="flex gap-4 mt-4">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              aria-label={social.label}
              title={social.label}
              className="flex items-center justify-center w-10 h-10 bg-footer-social-bg hover:bg-footer-border rounded-full transition-colors"
            >
              <social.icon size={16} className="text-white" />
            </a>
          ))}
        </div>
      </div>

      {/* Divider */}
      <hr className="border-footer-divider mb-8" />

      {/* Bottom Section */}
      <FooterBottom />
    </footer>
  );
};
