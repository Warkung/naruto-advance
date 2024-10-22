export interface IAllCharacter {
  data: ICharacterData;
  status: number;
}

export interface ICharacterData {
  characters: Character[];
  currentPage: number;
  pageSize: number;
  total: number;
}

export interface Character {
  id: number;
  name: string;
  images: string[];
  debut: Debut;
  family?: Family;
  jutsu: string[];
  natureType?: string[];
  personal: Personal;
  rank?: Rank;
  tools?: string[];
  voiceActors: VoiceActors;
  uniqueTraits?: string[];
}

export interface Debut {
  manga: string;
  anime: string;
  novel?: string;
  movie?: string;
  game: string;
  ova?: string;
  appearsIn: string;
}

export interface Family {
  creator?: string;
  "genetic template"?: string;
  son?: string;
  "great-grandfather"?: string;
  grandfather?: string;
  granduncle?: string;
  grandmother?: string;
  brother?: string;
  lover?: string;
  father?: string;
  wife?: string;
  granddaughter?: string;
  grandson?: string;
  mother?: string;
  niece?: string;
  "grandmother "?: string;
  aunt?: string;
  sister?: string;
  "first cousin once removed"?: string;
  "adoptive brother"?: string;
  host?: string;
  "genetic template/parent"?: string;
  "clone/brother"?: string;
  "pet "?: string;
  uncle?: string;
  cousin?: string;
  daughter?: string;
  "adoptive son"?: string;
  godfather?: string;
  "clone/son"?: string;
  nephew?: string;
  "adoptive mother"?: string;
  "adoptive sons"?: string;
  clone?: string;
  godson?: string;
}

export interface Personal {
  birthdate?: string;
  sex: string;
  age?: Age;
  height?: Height;
  weight?: Weight;
  bloodType?: string;
  kekkeiGenkai: any;
  classification: any;
  tailedBeast?: string;
  occupation: any;
  affiliation: string[];
  team: any;
  clan: any;
  titles?: string[];
  status?: string;
  kekkeiMōra?: string;
  partner: any;
  species?: string;
}

export interface Age {
  "Part I"?: string;
  "Part II"?: string;
  "Academy Graduate"?: string;
  "Chunin Promotion"?: string;
  "Blank Period"?: string;
  "Boruto Movie"?: string;
  "Boruto Manga"?: string;
}

export interface Height {
  "Part I"?: string;
  "Part II"?: string;
  "Blank Period"?: string;
  Gaiden?: string;
  "Boruto Movie"?: string;
  "Boruto Manga"?: string;
}

export interface Weight {
  "Part I"?: string;
  "Part II"?: string;
}

export interface Rank {
  ninjaRank: NinjaRank;
  ninjaRegistration?: string;
}

export interface NinjaRank {
  "Part I"?: string;
  "Part II"?: string;
  Gaiden?: string;
  "Blank Period"?: string;
}

export interface VoiceActors {
  japanese: any;
  english: any;
}
