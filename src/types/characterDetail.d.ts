interface EpisodeDetails {
  name: string;
  airedDate: string;
  season?: string;
}
export interface CharacterDetails {
  name: string;
  imageUrl: string;
  lastLocation: string;
  totalEpisodes: number;
  characterId: number;
  species: string;
  status: string;
  type: string;
  gender: string;
  origin: string;
  episode: Array<EpisodeDetails>;
  createdAt?: string;
}
