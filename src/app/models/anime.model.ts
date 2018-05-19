export interface Anime{
    mal_id: number;
    link_canonical: string;
    title: string;
    title_english: string;
    title_japanese: string;
    title_synonyms: string;
    image_url: string;
    type: string;
    source: string;
    episodes: number;
    status: string;
    airing: boolean;
    airing_string: string;
    aired: {from: string, to: string};
    duration: string;
    rating: string;
    score: number;
    score_by: number;
    rank: number;
    popularity: number;
    members: number;
    favourites: number;
    synopsis: string;
    background: string;
    premiered: string;
    broadcast: string;
    related: {
        Adaptation: {mal_id: number, type: string, url: string[], title: string}[]
        'Side story': {mal_id: number, type: string, url: string[], title: string}[]
        Summary: {mal_id: number, type: string, url: string[], title: string}[]
    };
    producer: {url: string[], name: string}[];
    licensor: {url: string[], name: string}[];
    studio: {url: string[], name: string}[];
    genre: {url: string, name: string}[];
    opening_theme: string[];
    ending_thtme: string[];
}