import { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

const STORAGE_KEY = 'bgm-playing';

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = 0.8;

    const shouldPlay = localStorage.getItem(STORAGE_KEY) === 'true';
    if (shouldPlay) {
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => setIsPlaying(true))
          .catch(() => {
            // Autoplay blocked — resume on first user interaction
            const resume = () => {
              audio.play().then(() => setIsPlaying(true)).catch(() => {});
              document.removeEventListener('click', resume);
              document.removeEventListener('touchstart', resume);
            };
            document.addEventListener('click', resume);
            document.addEventListener('touchstart', resume);
          });
      }
    }
  }, []);

  const toggleMusic = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
      localStorage.setItem(STORAGE_KEY, 'false');
    } else {
      audio.play();
      setIsPlaying(true);
      localStorage.setItem(STORAGE_KEY, 'true');
    }
  };

  return (
    <>
      <audio ref={audioRef} src="/audio/LadyKillersII.mp3" loop />
      <button
        onClick={toggleMusic}
        className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-primary/20 backdrop-blur-md border border-primary/30 text-primary hover:bg-primary/30 transition-all duration-300 shadow-lg hover:shadow-primary/25 hover:scale-110"
        aria-label={isPlaying ? 'Matikan musik' : 'Nyalakan musik'}
      >
        {isPlaying ? (
          <Volume2 className="w-6 h-6 animate-pulse" />
        ) : (
          <VolumeX className="w-6 h-6" />
        )}
      </button>
    </>
  );
};

export default MusicPlayer;
