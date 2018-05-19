export interface AnimeSearchArray{
    result: AnimeSearch[];
}

export interface AnimeSearch{
    id: number;
    url: string;
    image_url: string;
    title: string;
    description: string;
    type: string;
    score: number;
    episodes: number;
    members: number;
}
