import { useAppSelector, useAppDispatch } from '@/app/hooks';
import {
  setPlayingStatus,
  setCurrentTimestamp,
  setDuration,
  setVolumePercent,
  setMuted,
  setPreviousVolume,
} from '../store/mediaPlayerSlice';
import { useRef } from 'react';

export interface ProgressBarControl {
  progressPercentage: number;
  handleProgressBarOnClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  progressBarHandleMouseDown: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export interface VolumeControl {
  volumePercent: number;
  isMuted: boolean;
  handleVolumeChange: (e: React.MouseEvent<HTMLButtonElement>) => void;
  handleMuteToggle: () => void;
  volumeHandleMouseDown: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export interface UseMediaPlayerReturn {
  ref: React.RefObject<HTMLAudioElement | null>;
  isPlaying: boolean;
  duration: number;
  currentTimestamp: number;
  handlePlayPause: () => void;
  handleEnded: () => void;
  handleLoadedMetadata: () => void;
  handleTimeUpdate: () => void;
  progressBar: ProgressBarControl;
  volumeControl: VolumeControl;
}

export default function useMediaPlayer(): UseMediaPlayerReturn {
  const ref = useRef<HTMLAudioElement>(null);
  const dispatch = useAppDispatch();
  const isPlaying = useAppSelector((state) => state.mediaPlayer.isPlaying);
  const currentTimestamp = useAppSelector((state) => state.mediaPlayer.currentTimestamp);
  const duration = useAppSelector((state) => state.mediaPlayer.duration);
  const volumePercent = useAppSelector((state) => state.mediaPlayer.volumePercent);
  const isMuted = useAppSelector((state) => state.mediaPlayer.isMuted);
  const previousVolume = useAppSelector((state) => state.mediaPlayer.previousVolume);
  const lastUpdateRef = useRef(0);

  function handlePlayPause() {
    const audioElement = ref.current;
    if (!audioElement) return;

    if (isPlaying) {
      audioElement.pause();
      dispatch(setPlayingStatus(false));
    } else {
      audioElement.play();
      dispatch(setPlayingStatus(true));
    }
  }

  function handleEnded() {
    dispatch(setPlayingStatus(false));
    dispatch(setCurrentTimestamp(0));
  }

  function handleLoadedMetadata() {
    const audioElement = ref.current;
    if (!audioElement) return;

    dispatch(setDuration(audioElement.duration));
  }

  function handleTimeUpdate() {
    const audioElement = ref.current;
    if (!audioElement) return;

    const now = Date.now();

    // throttling
    if (now - lastUpdateRef.current > 100) {
      dispatch(setCurrentTimestamp(audioElement.currentTime));
      lastUpdateRef.current = now;
    }
  }

  function handleProgressBarOnClick(
    e: React.MouseEvent<HTMLButtonElement> | { currentTarget: HTMLButtonElement; clientX: number }
  ) {
    const audioElement = ref.current;
    if (!audioElement || !duration) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
    const newTime = (clickX / rect.width) * duration;

    audioElement.currentTime = newTime;
    dispatch(setCurrentTimestamp(newTime));
  }

  function progressBarHandleMouseDown(e: React.MouseEvent<HTMLButtonElement>) {
    const progressBarElement = e.currentTarget;

    const handleMouseMove = (event: MouseEvent) => {
      handleProgressBarOnClick({
        currentTarget: progressBarElement,
        clientX: event.clientX,
      });
    };

    const handleMouseUp = () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  }

  function handleVolumeChange(
    e: React.MouseEvent<HTMLButtonElement> | { currentTarget: HTMLButtonElement; clientX: number }
  ) {
    const audioElement = ref.current;
    if (!audioElement) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const newVolume = Math.min(Math.max((clickX / rect.width) * 100, 0), 100);

    audioElement.volume = newVolume / 100;
    dispatch(setVolumePercent(newVolume));
    dispatch(setMuted(newVolume === 0));
  }

  function volumeHandleMouseDown(e: React.MouseEvent<HTMLButtonElement>) {
    const volumeControlElement = e.currentTarget;

    const handleMouseMove = (event: MouseEvent) => {
      handleVolumeChange({
        currentTarget: volumeControlElement,
        clientX: event.clientX,
      });
    };

    const handleMouseUp = () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  }

  function handleMuteToggle() {
    const audioElement = ref.current;
    if (!audioElement) return;

    if (isMuted) {
      audioElement.volume = previousVolume / 100;
      dispatch(setVolumePercent(previousVolume));
      dispatch(setMuted(false));
    } else {
      dispatch(setPreviousVolume(volumePercent));
      audioElement.volume = 0;
      dispatch(setVolumePercent(0));
      dispatch(setMuted(true));
    }
  }

  const progressPercentage = duration > 0 ? (currentTimestamp / duration) * 100 : 0;

  return {
    ref,
    isPlaying,
    duration,
    currentTimestamp,
    handlePlayPause,
    handleEnded,
    handleLoadedMetadata,
    handleTimeUpdate,
    progressBar: {
      progressPercentage,
      handleProgressBarOnClick,
      progressBarHandleMouseDown,
    },
    volumeControl: {
      volumePercent,
      isMuted,
      handleVolumeChange,
      handleMuteToggle,
      volumeHandleMouseDown,
    },
  };
}
