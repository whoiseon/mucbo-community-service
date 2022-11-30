export declare type ChatDataType = {
  id: number,
  user: {
    nickname: string,
    level: string,
  },
  body: {
    message: string,
  }
};

const chatDummyData = [
  {
    id: 0,
    user: {
      nickname: '먹보',
      level: '2'
    },
    body: {
      message: '안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요',
    }
  },
  {
    id: 1,
    user: {
      nickname: '강동원',
      level: '4'
    },
    body: {
      message: '네네 하이요',
    }
  },
  {
    id: 2,
    user: {
      nickname: '김두한',
      level: '6'
    },
    body: {
      message: '뭐야 저건 -ㅅ-',
    }
  }
]

export default chatDummyData;
