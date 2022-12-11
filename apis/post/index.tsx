import axios from "axios";

export interface getPostQueryParams {
  [key: string]: string | string[] | undefined,
}

export const getPost = async ({ board, table, page }: getPostQueryParams) => {
  try {
    if (board === 'board' && table === 'all') {
      const response = await axios.get('https://cheatdot.com/api/v1/board/all.php', {
        params: {
          page: page || '1'
        }
      });

      return response.data;
    } else {
      const response = await axios.get('https://cheatdot.com/api/v1/board/board.php', {
        params: {
          page,
          bo_table: table,
        }
      });

      return response.data;
    }
  } catch (error) {
    throw error;
  }
}