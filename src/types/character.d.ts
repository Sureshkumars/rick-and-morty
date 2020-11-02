export interface Character {
  name: string;
  imageUrl: string;
  lastLocation: string;
  totalEpisodes: number;
  characterId: number;
  species?: string;
}
export interface CharacterSearchResults {
  totalCount: number;
  totalPages: number;
  characters: Array<Character>;
}
