import {Key, ReactNode} from "react";

export interface BoardType {
  error: {
    msg: string,
    code: number
  },
  message: {
    result: {
      list: {
        [key: string]: string | number | boolean | Key | null
          | { count: number } | { thumb: { [key: string]: string } }
      }[],
      total_count: number,
      title: string
    },
  }
}

export interface ViewType {
  error: {
    msg: string,
    code: number
  },
  message: {
    result: {
      [key: string]: any,
    },
    comment_list: {
      [key: string]: any,
    },
  }
}

export interface ViewUserType {
  error: {
    msg: string,
    code: number
  },
  message: {
    result: {
      [key: string]: string | number,
    },
  }
}

export interface ViewUserWriteDataType {
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
    },
  }
}