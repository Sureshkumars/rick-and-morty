export const SEARCH_TERM = "Rick";
export const SEARCH_HOOK_URL =
  "https://rickandmortyapi.com/api/character/?name=Rick&page=1";
export const CHARACTER_API_URL = "https://rickandmortyapi.com/api/character/1";
export const SUCCESS_EPISODES_API_RESPONSE = [
  {
    id: 1,
    name: "Sample Episode",
    air_date: "December 9, 2013",
    episode: "S01E02",
    characters: ["https://rickandmortyapi.com/api/character/1"],
    url: "https://rickandmortyapi.com/api/episode/2",
    created: "2017-11-10T12:56:33.916Z",
  },
  {
    id: 2,
    name: "Lawnmower Dog",
    air_date: "December 9, 2013",
    episode: "S01E02",
    characters: ["https://rickandmortyapi.com/api/character/1"],
    url: "https://rickandmortyapi.com/api/episode/2",
    created: "2017-11-10T12:56:33.916Z",
  },
];

export const CHARACTER_API_RESPONSE = {
  id: 1,
  name: "Rick Sanchez",
  status: "Alive",
  species: "Human",
  type: "",
  gender: "Male",
  origin: {
    name: "Earth (C-137)",
    url: "https://rickandmortyapi.com/api/location/1",
  },
  location: {
    name: "Earth (Replacement Dimension)",
    url: "https://rickandmortyapi.com/api/location/20",
  },
  image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
  episode: [
    "https://rickandmortyapi.com/api/episode/1",
    "https://rickandmortyapi.com/api/episode/2",
  ],
  url: "https://rickandmortyapi.com/api/character/1",
  created: "2017-11-04T18:48:46.250Z",
};

export const SUCCESS_CHARACTER_DETAILS_HOOK_RESPONSE = {
  status: "loaded",
  payload: {
    name: "Rick Sanchez",
    imageUrl: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
    lastLocation: "Earth (Replacement Dimension)",
    totalEpisodes: 2,
    characterId: 1,
    species: "Human",
    status: "Alive",
    type: "",
    gender: "Male",
    origin: "Earth (C-137)",
    episode: [
      {
        airedDate: "December 9, 2013",
        name: "Sample Episode",
        season: "S01E02",
      },
      {
        airedDate: "December 9, 2013",
        name: "Lawnmower Dog",
        season: "S01E02",
      },
    ],
    createdAt: "2017-11-04T18:48:46.250Z",
  },
};

export const CHARACTER_SEARCH_API_RESPONSE = {
  info: { count: 2, pages: 1, next: null, prev: null },
  results: [
    {
      id: 1,
      name: "Rick",
      status: "Alive",
      species: "Alien",
      type: "",
      gender: "Male",
      origin: { name: "unknown", url: "" },
      location: {
        name: "Earth",
        url: "https://rickandmortyapi.com/api/location/16",
      },
      image: "/images/character-fallback.jpeg",
      episode: [
        "https://rickandmortyapi.com/api/episode/19",
        "https://rickandmortyapi.com/api/episode/1",
      ],
      url: "https://rickandmortyapi.com/api/character/384",
      created: "2018-01-10T19:50:19.351Z",
    },
    {
      id: 3,
      name: "Morty",
      status: "Alive",
      species: "Human",
      type: "",
      gender: "Male",
      origin: { name: "unknown", url: "" },
      location: {
        name: "Earth Dimension 1",
        url: "https://rickandmortyapi.com/api/location/108",
      },
      image: "/images/character-fallback.jpeg",
      episode: [
        "https://rickandmortyapi.com/api/episode/41",
        "https://rickandmortyapi.com/api/episode/19",
        "https://rickandmortyapi.com/api/episode/12",
      ],
      url: "https://rickandmortyapi.com/api/character/669",
      created: "2020-08-13T12:55:37.437Z",
    },
  ],
};

export const CHARACTER_SEARCH_HOOK_RESPONSE = {
  status: "loaded",
  payload: {
    totalCount: 2,
    totalPages: 1,
    characters: [
      {
        name: "Rick",
        imageUrl: "/images/character-fallback.jpeg",
        species: "Alien",
        lastLocation: "Earth",
        totalEpisodes: 2,
        characterId: 1,
      },
      {
        name: "Morty",
        imageUrl: "/images/character-fallback.jpeg",
        species: "Human",
        lastLocation: "Earth Dimension 1",
        totalEpisodes: 3,
        characterId: 3,
      },
    ],
  },
};
