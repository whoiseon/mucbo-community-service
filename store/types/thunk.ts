export interface GetPostsAllPrams {
  page: number
}

export interface GetPostsByTable {
  page: number,
  table: string | string[] | undefined
}