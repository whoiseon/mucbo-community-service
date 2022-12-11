import axios from "axios";

export const getPostAll = async (page: string | string[] | undefined) => {
  const response = await axios.get('https://cheatdot.com/api/v1/board/all.php', {
    params: {
      page: page || '1'
    }
  });

  return response.data;
}