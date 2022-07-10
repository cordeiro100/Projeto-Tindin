export interface Game {
  _id: string;
  title: string;
  description: string;
  photos: Photo[];
  genres: string[];
  platforms: string[];
  tags: string[];
  rating: number;
  totalVotes: number;
  videos: any[];
  createdAt: string;
  updateAt: string;
  mediumPrice: number;
  releaseYear: number;
}

export interface Photo {
  name: string;
  url: string;
  _id: string;
}
