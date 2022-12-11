export interface BoardType {
  error: {
    msg: string,
    code: number
  },
  message: {
    result: {
      list: {
        [key: string]: string | number | boolean | { count: number }
      }[],
      total_count: number,
      title: string
    },
  }
}