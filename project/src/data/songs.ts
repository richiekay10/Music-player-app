export interface Song {
  id: number;
  title: string;
  artist: string;
  duration: number;
  url: string;
  coverArt: string;
}

export const songs: Song[] = [
  {
    id: 1,
    title: "Forest Lullaby",
    artist: "Lesfm",
    duration: 180,
    url: "https://cdn.pixabay.com/download/audio/2022/01/18/audio_d0a13f69d2.mp3",
    coverArt: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&w=300&q=80"
  },
  {
    id: 2,
    title: "Into The Night",
    artist: "prazkhanal",
    duration: 200,
    url: "https://cdn.pixabay.com/download/audio/2022/11/22/audio_febc508520.mp3",
    coverArt: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=300&q=80"
  },
  {
    id: 3,
    title: "Summer Nights",
    artist: "SoulProd",
    duration: 195,
    url: "https://cdn.pixabay.com/download/audio/2022/10/25/audio_946b147546.mp3",
    coverArt: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=300&q=80"
  }
];