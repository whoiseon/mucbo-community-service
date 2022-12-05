export interface BoardType {
  error: {
    message: string,
    code: string
  },
  message: {
    result: {
      list: {
        [key: string]: string | number | boolean | { count: number }
      }[],
      total_count: number,
      title: string
    }
  }
}