import { ImagesModel, RatingModel } from './series.model';

export interface SeriesDetailModel {
    _id: string;
    imdb_id: string;
    tvdb_id: string;
    title: string;
    year: string;
    slug: string;
    synopsis: string;
    runtime: string;
    country: string;
    network: string;
    air_day: string;
    air_time: string;
    status: string;
    num_seasons: string;
    last_updated: number;
    __v: number;
    episodes: EpisodesModel[];
    genres: string[];
    images: ImagesModel;
    rating: RatingModel;
}

export interface EpisodesModel {
    torrents: TorrentsModel;
    watched: WatchedModel;
    first_aired: number;
    data_based: boolean;
    overview: string;
    title: string;
    episode: number;
    season: number;
    tvdb_id: number;
}

export interface TorrentsModel {
    '0'?: TorrentItemModel;
    '480p'?: TorrentItemModel;
    '720p'?: TorrentItemModel;
    '1080p'?: TorrentItemModel;
}

export interface TorrentItemModel {
    url: string;
    seeds: number;
    peers: number;
    provider: string;
}

export interface WatchedModel {
    watched: boolean;
}

