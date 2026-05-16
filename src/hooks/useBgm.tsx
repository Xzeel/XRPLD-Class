import { useEffect, useState } from 'react';

const STORAGE_KEY = 'bgm-playing';
const AUDIO_SRC = '/audio/bye.mp3';

// Module-level singleton so all components share one audio instance
let audioInstance: HTMLAudioElement | null = null;
const listeners = new Set<(playing: boolean) => void>();

const getAudio = () => {
  if (typeof window === 'undefined') return null;
  if (!audioInstance) {
    audioInstance = new Audio(AUDIO_SRC);
    audioInstance.loop = true;
    audioInstance.volume = 0.8;
    audioInstance.addEventListener('play', () => listeners.forEach((l) => l(true)));
    audioInstance.addEventListener('pause', () => listeners.forEach((l) => l(false)));
  }
  return audioInstance;
};

let initialized = false;
const initOnce = () => {
  if (initialized) return;
  initialized = true;
  const audio = getAudio();
  if (!audio) return;
  const shouldPlay = localStorage.getItem(STORAGE_KEY) === 'true';
  if (shouldPlay) {
    const p = audio.play();
    if (p !== undefined) {
      p.catch(() => {
        const resume = () => {
          audio.play().catch(() => {});
          document.removeEventListener('click', resume);
          document.removeEventListener('touchstart', resume);
        };
        document.addEventListener('click', resume);
        document.addEventListener('touchstart', resume);
      });
    }
  }
};

export const useBgm = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false;
    return !!audioInstance && !audioInstance.paused;
  });

  useEffect(() => {
    initOnce();
    const listener = (playing: boolean) => setIsPlaying(playing);
    listeners.add(listener);
    const audio = getAudio();
    if (audio) setIsPlaying(!audio.paused);
    return () => {
      listeners.delete(listener);
    };
  }, []);

  const toggle = () => {
    const audio = getAudio();
    if (!audio) return;
    if (audio.paused) {
      audio.play().then(() => {
        localStorage.setItem(STORAGE_KEY, 'true');
      }).catch(() => {});
    } else {
      audio.pause();
      localStorage.setItem(STORAGE_KEY, 'false');
    }
  };

  return { isPlaying, toggle };
};
