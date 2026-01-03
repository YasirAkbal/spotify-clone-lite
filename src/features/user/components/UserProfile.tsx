import { DefaultUserProfileAvatarIcon } from '@/assets/icons';
import BackButton from '@/components/ui/BackButton';

// Mini component for user info display
interface UserInfoItemProps {
  label: string;
  value: string;
}

const UserInfoItem = ({ label, value }: UserInfoItemProps) => (
  <div className="flex flex-col gap-1">
    <span className="text-sm text-gray-400 uppercase font-medium">{label}:</span>
    <span className="text-white">{value}</span>
  </div>
);

export default function UserProfile() {
  return (
    <div>
      <section className="flex flex-col -m-4 px-4 pt-4 pb-6 bg-gradient-to-b from-spotify-lightgray via-spotify-gray to-background-base">
        <BackButton />
        <div className="flex items-center p-2 mt-4 gap-x-4">
          <div className="rounded-full border-none p-8 bg-spotify-gray shadow-md">
            <DefaultUserProfileAvatarIcon size={64} className="" />
          </div>

          <h1 className="text-larger-2">yasirakbal</h1>
        </div>
      </section>

      <section className="mt-12 px-2">
        <h2 className="text-larger-2">Hesap Bilgileri</h2>

        <div className="flex flex-col gap-4 mt-6">
          <UserInfoItem label="Kullanıcı Adı" value="yasirakbal" />
          <UserInfoItem label="E-posta" value="yasirakbal@example.com" />
          <UserInfoItem label="Takipçi Sayısı" value="14" />
          <UserInfoItem label="Ülke" value="Türkiye" />
          <UserInfoItem label="Ürün" value="Ücretsiz" />
        </div>
      </section>
    </div>
  );
}
