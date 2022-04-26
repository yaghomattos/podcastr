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
  play: (episode: Episode) => void;
};

export const PlayerContext = createContext({} as PlayerConstData);
