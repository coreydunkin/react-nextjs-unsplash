export interface IunsplashDataResult {
  data: IunsplashDataItem[],
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
  sponsorship: {impression_urls: [], tagline: string, tagline_url: string, sponsor: {}}
  topic_submissions: {}
  updated_at: string
  urls: {raw: string, full: string, regular: string, small: string, thumb: string}
  user: {id: string, updated_at: string, username: string, name: string, first_name: string}
  width: number
}