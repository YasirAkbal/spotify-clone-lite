import { useAppSelector, useAppDispatch } from '@/app/hooks';
import {
  setPlayingStatus,
  setCurrentTimestamp,
  setDuration,
  setVolumePercent,
  setMuted,
  setPreviousVolume,
} from '../store/mediaPlayerSlice';
import { useState, useRef } from 'react';

export interface ProgressBarControl {
  progressPercentage: number;
  handleProgressBarOnClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  progressBarHandleMouseDown: (e: React.MouseEvent<HTMLButtonElement>) => void;
  progressBarHandleMouseMove: (e: React.MouseEvent<HTMLButtonElement>) => void;
  progressBarHandleMouseUp: () => void;
}

export interface VolumeControl {
  volumePercent: number;
  isMuted: boolean;
  handleVolumeChange: (e: React.MouseEvent<HTMLButtonElement>) => void;
  handleMuteToggle: () => void;
  volumeHandleMouseDown: (e: React.MouseEvent<HTMLButtonElement>) => void;
  volumeHandleMouseMove: (e: React.MouseEvent<HTMLButtonElement>) => void;
  volumeHandleMouseUp: () => void;
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
  const [progressBarIsDragging, setProgressBarIsDragging] = useState(false);
  const [volumeIsDragging, setVolumeIsDragging] = useState(false);

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

    dispatch(setCurrentTimestamp(audioElement.currentTime));
  }

  function handleProgressBarOnClick(e: React.MouseEvent<HTMLButtonElement>) {
    const audioElement = ref.current;
    if (!audioElement || !duration) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const newTime = (clickX / rect.width) * duration;

    audioElement.currentTime = newTime;
  }

  function progressBarHandleMouseDown(e: React.MouseEvent<HTMLButtonElement>) {
    setProgressBarIsDragging(true);
    handleProgressBarOnClick(e);
  }

  function progressBarHandleMouseMove(e: React.MouseEvent<HTMLButtonElement>) {
    if (!progressBarIsDragging) return;
    handleProgressBarOnClick(e);
  }

  function progressBarHandleMouseUp() {
    setProgressBarIsDragging(false);
  }

  function handleVolumeChange(e: React.MouseEvent<HTMLButtonElement>) {
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
    setVolumeIsDragging(true);
    handleVolumeChange(e);
  }

  function volumeHandleMouseMove(e: React.MouseEvent<HTMLButtonElement>) {
    if (!volumeIsDragging) return;
    handleVolumeChange(e);
  }

  function volumeHandleMouseUp() {
    setVolumeIsDragging(false);
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
      progressBarHandleMouseMove,
      progressBarHandleMouseUp,
    },
    volumeControl: {
      volumePercent,
      isMuted,
      handleVolumeChange,
      handleMuteToggle,
      volumeHandleMouseDown,
      volumeHandleMouseMove,
      volumeHandleMouseUp,
    },
  };
}
