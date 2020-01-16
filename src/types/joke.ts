export interface JokeInterface {
  value: string;
  url: string;
  icon_url: string;
}

export interface JokeList {
  jokes: Array<JokeInterface>;
}
