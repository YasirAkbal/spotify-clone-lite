import React from 'react';
import { Button, type ButtonProps } from './Button';
import { PlayIcon } from '@/assets/icons';

interface PlayButtonProps extends Omit<ButtonProps, 'size'> {}

export const PlayButton = React.forwardRef<HTMLButtonElement, PlayButtonProps>(
  ({ className = '', ...props }, ref) => {
    return (
      <Button
        ref={ref}
        data-testid="play-button"
        variant="default"
        size="icon"
        className={`rounded-full bg-spotify-green hover:bg-[#1ed760] w-14 h-14 [&_svg]:size-7 ${className}`}
        {...props}
      >
        <PlayIcon className="text-black" />
      </Button>
    );
  }
);

PlayButton.displayName = 'PlayButton';
