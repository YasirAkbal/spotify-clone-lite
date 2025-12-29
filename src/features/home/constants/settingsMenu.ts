export interface SettingsMenuItem {
  id: string;
  label: string;
  to: string;
  variant?: 'default' | 'large';
  hasExternalIcon?: boolean;
}

export interface SettingsMenuSection {
  id: string;
  items: SettingsMenuItem[];
}

export const settingsMenuSections: SettingsMenuSection[] = [
  {
    id: 'account',
    items: [
      {
        id: 'view-account',
        label: 'Hesabı Görüntüle',
        to: '/account',
        variant: 'large',
        hasExternalIcon: true,
      },
      { id: 'profile', label: 'Profil', to: '/profile', variant: 'large' },
      { id: 'logout', label: 'Oturumu Kapat', to: '/logout', variant: 'large' },
    ],
  },
  {
    id: 'links',
    items: [
      { id: 'premium', label: 'Premium', to: '/premium' },
      { id: 'support', label: 'Destek', to: '/support' },
      { id: 'download', label: 'İndir', to: '/download' },
      { id: 'privacy', label: 'Gizlilik', to: '/privacy' },
      { id: 'terms', label: 'Hükümler', to: '/terms' },
    ],
  },
];
