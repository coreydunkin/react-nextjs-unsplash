export interface IunsplashDataResult {
  data: {total: number, totalPages: number, results: IunsplashDataItem[]},
  loading: boolean,
  error: boolean
}

export interface IunsplashDataItem {
  alt_description: null | string,
  blur_hash: string,
  categories: []
  color: string
  created_at: string,
  current_user_collections: []
  description: null | string,
  height: number
  id: string,
  liked_by_user: boolean,
  likes: number
  links: {self: string, html: string, download: string, download_location: string}
  promoted_at: null | number | string,
  sponsorship: {impression_urls: [], tagline: string, tagline_url: string, sponsor: {}},
  topic_submissions: {},
  updated_at: string,
  urls: {raw: string, full: string, regular: string, small: string, thumb: string},
  user: {id: string, updated_at: string, username: string, name: string, first_name: string, profile_image: {small: string, medium: string, large: string}, links: {html: string}},
  width: number
}

export interface IGalleryDataContext extends IunsplashDataResult{
  page: number,
  query: string,
  limit: number,
  setPage: Function,
  setQuery: Function
}