import { Volume2, VolumeX } from 'lucide-react';
import { useBgm } from '@/hooks/useBgm';

const MusicPlayer = () => {
  const { isPlaying, toggle } = useBgm();

  return (
    <button
      onClick={toggle}
      className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-primary/20 backdrop-blur-md border border-primary/30 text-primary hover:bg-primary/30 transition-all duration-300 shadow-lg hover:shadow-primary/25 hover:scale-110"
      aria-label={isPlaying ? 'Matikan musik' : 'Nyalakan musik'}
    >
      {isPlaying ? (
        <Volume2 className="w-6 h-6 animate-pulse" />
      ) : (
        <VolumeX className="w-6 h-6" />
      )}
    </button>
  );
};

export default MusicPlayer;
