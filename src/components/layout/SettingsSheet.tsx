import { NavLink } from 'react-router';
import { CloseIcon, UpRightArrowIcon } from '@/assets/icons';
import SettingsItem from './SettingsItem';
import { settingsMenuSections } from './constants/settingsMenu';

interface SettingsSheetProps {
  isOpen: boolean;
  onClose: () => void;
}

const BASE_DELAY = 100;
const DELAY_INCREMENT = 50;

export default function SettingsSheet({ isOpen, onClose }: SettingsSheetProps) {
  let delayCounter = 0;

  const getNextDelay = () => {
    const delay = BASE_DELAY + delayCounter * DELAY_INCREMENT;
    delayCounter++;
    return delay;
  };

  return (
    <div
      className={`
        fixed inset-0 w-full h-full 
        bg-black z-50 md:hidden
        transform transition-transform duration-500 ease-out 
        ${isOpen ? 'translate-x-0' : 'translate-x-full'}
      `}
    >
      <div className="px-10 mt-12">
        <CloseButton onClick={onClose} />

        <nav className="mt-16">
          {settingsMenuSections.map((section, sectionIndex) => (
            <div key={section.id}>
              {sectionIndex > 0 && (
                <SettingsItem isVisible={isOpen} delay={getNextDelay()}>
                  <Divider />
                </SettingsItem>
              )}

              <ul className="space-y-4">
                {section.items.map((item) => (
                  <li key={item.id}>
                    <SettingsItem isVisible={isOpen} delay={getNextDelay()} variant={item.variant}>
                      <NavLink to={item.to} className="flex items-center gap-x-4">
                        {item.label}
                        {item.hasExternalIcon && <UpRightArrowIcon size={24} />}
                      </NavLink>
                    </SettingsItem>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
}

function CloseButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="p-3 text-white text-2xl absolute top-4 right-2"
      aria-label="Ayarları Kapat"
    >
      <CloseIcon size={24} />
    </button>
  );
}

function Divider() {
  return <div className="w-4 border-b-2 my-8" />;
}
