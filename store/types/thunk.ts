export interface GetPostsAllPrams {
  page: string | string[] | undefined
}

export interface GetPostsByTable {
  page: string | string[] | undefined,
  table: string | string[] | undefined
}

export interface GetViewPostParams {
  table: string | string[] | undefined,
  id: number,
}