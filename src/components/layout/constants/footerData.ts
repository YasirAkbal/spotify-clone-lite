import { InstagramIcon, TwitterIcon, FacebookIcon } from '../../../assets/icons';
import type { IconProps } from '../../../types/components/icons';

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterSection {
  title: string;
  links: FooterLink[];
}

export interface SocialLink {
  label: string;
  href: string;
  icon: React.ComponentType<IconProps>;
}

export const footerLinks: Record<string, FooterSection> = {
  company: {
    title: 'Şirket',
    links: [
      { label: 'Hakkında', href: 'https://www.spotify.com/tr-tr/about-us/contact/' },
      { label: 'Kariyer', href: 'https://www.lifeatspotify.com/' },
      { label: 'For the Record', href: 'https://newsroom.spotify.com/' },
    ],
  },
  communities: {
    title: 'Topluluklar',
    links: [
      { label: 'Sanatçılar İçin', href: 'https://artists.spotify.com/' },
      { label: 'Geliştiriciler', href: 'https://developer.spotify.com/' },
      { label: 'Reklam', href: 'https://ads.spotify.com/' },
      { label: 'Yatırımcılar', href: 'https://investors.spotify.com/' },
      { label: 'Satıcılar', href: 'https://spotifyforvendors.com/' },
    ],
  },
  usefulLinks: {
    title: 'Yararlı bağlantılar',
    links: [
      { label: 'Destek', href: 'https://support.spotify.com/' },
      { label: 'Ücretsiz Mobil Uygulama', href: 'https://www.spotify.com/tr-tr/download/' },
      { label: 'Ülkeye göre popüler', href: '#' },
      { label: 'Müziklerini içe aktar', href: 'https://www.spotify.com/tr-tr/import-music/' },
    ],
  },
  plans: {
    title: 'Spotify Planları',
    links: [
      { label: 'Premium Bireysel', href: 'https://www.spotify.com/tr-tr/premium/' },
      { label: 'Premium Duo', href: 'https://www.spotify.com/tr-tr/duo/' },
      { label: 'Premium Aile', href: 'https://www.spotify.com/tr-tr/family/' },
      { label: 'Premium Öğrenci', href: 'https://www.spotify.com/tr-tr/student/' },
      { label: 'Spotify Free', href: 'https://www.spotify.com/tr-tr/free/' },
    ],
  },
} as const;

export const socialLinks: SocialLink[] = [
  { label: 'Instagram', href: 'https://instagram.com/spotify', icon: InstagramIcon },
  { label: 'Twitter', href: 'https://twitter.com/spotify', icon: TwitterIcon },
  { label: 'Facebook', href: 'https://www.facebook.com/Spotify', icon: FacebookIcon },
];

export const legalLinks: FooterLink[] = [
  { label: 'Yasal', href: 'https://www.spotify.com/tr-tr/legal/' },
  {
    label: 'Güvenlik ve Gizlilik Merkezi',
    href: 'https://www.spotify.com/tr-tr/safetyandprivacy/',
  },
  { label: 'Gizlilik Politikası', href: 'https://www.spotify.com/tr-tr/legal/privacy-policy/' },
  { label: 'Reklamlar Hakkında', href: 'https://www.spotify.com/tr-tr/legal/privacy-policy/#s3' },
  { label: 'Erişilebilirlik', href: 'https://www.spotify.com/tr-tr/accessibility/' },
] as const;
