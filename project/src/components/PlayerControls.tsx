import React from 'react';
import { Play, Pause, SkipBack, SkipForward, Volume2 } from 'lucide-react';

interface PlayerControlsProps {
  isPlaying: boolean;
  onPlayPause: () => void;
  onPrevious: () => void;
  onNext: () => void;
  onVolumeChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  volume: number;
}

export function PlayerControls({
  isPlaying,
  onPlayPause,
  onPrevious,
  onNext,
  onVolumeChange,
  volume
}: PlayerControlsProps) {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex items-center gap-6">
        <button
          onClick={onPrevious}
          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <SkipBack className="w-6 h-6 text-gray-700" />
        </button>
        
        <button
          onClick={onPlayPause}
          className="p-4 bg-indigo-600 rounded-full hover:bg-indigo-700 transition-colors"
        >
          {isPlaying ? (
            <Pause className="w-8 h-8 text-white" />
          ) : (
            <Play className="w-8 h-8 text-white" />
          )}
        </button>
        
        <button
          onClick={onNext}
          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <SkipForward className="w-6 h-6 text-gray-700" />
        </button>
      </div>
      
      <div className="flex items-center gap-2 w-full max-w-xs">
        <Volume2 className="w-4 h-4 text-gray-600" />
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={onVolumeChange}
          className="w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer"
        />
      </div>
    </div>
  );
}