import { GlobeIcon } from '../../assets/icons';
import { legalLinks } from './constants/footerData';

export const FooterBottom = () => {
  return (
    <div className="flex flex-col  gap-4">
      {/* Legal Links */}
      <div className="flex flex-wrap items-center gap-4">
        {legalLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            className="text-footer-text-muted hover:text-white text-xs transition-colors"
          >
            {link.label}
          </a>
        ))}
        <button className="text-footer-text-muted hover:text-white text-xs transition-colors">
          Tanımlama Bilgisi Ayarları
        </button>
      </div>

      {/* Copyright */}
      <p className="text-footer-text-muted text-xs">© 2025 Spotify AB</p>

      {/* Language Selector */}
      <button className="flex items-center gap-2 px-3 py-1 border border-footer-border rounded-full text-white text-sm font-bold hover:border-white hover:scale-105 transition-all w-fit">
        <GlobeIcon size={16} className="text-white" />
        Türkçe
      </button>
    </div>
  );
};
