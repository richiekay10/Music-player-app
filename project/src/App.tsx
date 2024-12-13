import React, { useState, useRef, useEffect } from 'react';
import { songs } from './data/songs';
import { PlayerControls } from './components/PlayerControls';
import { ProgressBar } from './components/ProgressBar';

function App() {
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [currentTime, setCurrentTime] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  const currentSong = songs[currentSongIndex];

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => setCurrentTime(audio.currentTime);
    audio.addEventListener('timeupdate', updateTime);
    return () => audio.removeEventListener('timeupdate', updateTime);
  }, []);

  const handlePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handlePrevious = () => {
    setCurrentSongIndex((prev) => (prev === 0 ? songs.length - 1 : prev - 1));
    setIsPlaying(true);
  };

  const handleNext = () => {
    setCurrentSongIndex((prev) => (prev === songs.length - 1 ? 0 : prev + 1));
    setIsPlaying(true);
  };

  const handleSeek = (time: number) => {
    if (audioRef.current) {
      audioRef.current.currentTime = time;
      setCurrentTime(time);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-100 to-white flex items-center justify-center p-8">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md">
        <div className="flex flex-col items-center gap-6">
          <img
            src={currentSong.coverArt}
            alt={`${currentSong.title} cover`}
            className="w-64 h-64 rounded-lg object-cover shadow-md"
          />
          
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-800">{currentSong.title}</h2>
            <p className="text-gray-500">{currentSong.artist}</p>
          </div>

          <ProgressBar
            currentTime={currentTime}
            duration={currentSong.duration}
            onSeek={handleSeek}
          />

          <PlayerControls
            isPlaying={isPlaying}
            onPlayPause={handlePlayPause}
            onPrevious={handlePrevious}
            onNext={handleNext}
            onVolumeChange={handleVolumeChange}
            volume={volume}
          />

          <audio
            ref={audioRef}
            src={currentSong.url}
            onEnded={handleNext}
            autoPlay={isPlaying}
          />
        </div>
      </div>
    </div>
  );
}

export default App;