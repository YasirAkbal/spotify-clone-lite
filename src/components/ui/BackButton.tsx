import { Button } from './Button';
import { BackIcon } from '@/assets/icons/BackIcon';
import { useNavigate } from 'react-router-dom';

export default function BackButton() {
  const navigate = useNavigate();
  return (
    <Button
      className="bg-transparent hover:bg-transparent focus-visible:ring-0 shadow-none self-start [&_svg]:size-6 p-0"
      onClick={() => navigate(-1)}
    >
      <BackIcon className="text-white" />
    </Button>
  );
}
