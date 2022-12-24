// Post

export interface GetPostsAllParams {
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

export interface GetViewUserInfoParams {
  mb_id: string | string[] | undefined,
}

export interface GetViewUserWriteDataParams {
  mb_id: string | string[] | undefined,
  page: string | string[] | undefined,
}

// User

export interface MemberLoginParams {
  id: string,
  password: string,
  session: string,
}

export interface  GetLoadMyInfoParams {
  session: string
}