export interface SeriesModel {
    _id: string;
    imdb_id: string;
    tvdb_id: string;
    title: string;
    year: string;
    slug: string;
    num_seasons: number;
    images: ImagesModel;
    rating: RatingModel;
}

export interface ImagesModel {
    poster: string;
    fanart: string;
    banner: string;
}

export interface RatingModel {
    percentage: string;
    watching: string;
    votes: number;
    loved: number;
    hated: number;
}
