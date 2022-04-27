import { createContext } from 'react';

type Episode = {
  title: String;
  members: String;
  thumbnail: String;
  duration: Number;
  url: String;
};

type PlayerConstData = {
  episodeList: Episode[];
  currentEpisodeIndex: number;
  isPlaying: boolean;
  play: (episode: Episode) => void;
  togglePlay: () => void;
  setPlayingState: (state: boolean) => void;
};

export const PlayerContext = createContext({} as PlayerConstData);
