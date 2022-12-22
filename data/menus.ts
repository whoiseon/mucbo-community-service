export declare type HeaderMenuType = {
  name: string,
  board: string,
  path: string
  subTable?: {
    name: string,
    board: string,
    table: string,
    path: string
  }[],
};

export const headerMenus = [
  {
    name: '공지사항',
    board: 'customer',
    path: '/customer/notice',
    subTable: [
      {
        name: '공지사항',
        board: 'customer',
        table: 'notice',
        path: '/customer/notice'
      },
      {
        name: '업데이트',
        board: 'customer',
        table: 'update',
        path: '/customer/update'
      }
    ]
  },
  {
    name: '전체글보기',
    board: 'board',
    path: '/board/all',
  },
  {
    name: '커뮤니티',
    board: 'community',
    path: '/community/free',
    subTable: [
      {
        name: '자유',
        board: 'community',
        table: 'free',
        path: '/community/free'
      },
      {
        name: '유머',
        board: 'community',
        table: 'humor',
        path: '/community/humor'
      },
      {
        name: '포토',
        board: 'community',
        table: 'photo',
        path: '/community/photo'
      },
      {
        name: '피해사례',
        board: 'community',
        table: 'crime',
        path: '/community/crime'
      },
      {
        name: '신고',
        board: 'community',
        table: 'report',
        path: '/community/report'
      },
      {
        name: '가입인사',
        board: 'community',
        table: 'hello',
        path: '/community/hello'
      }
    ]
  },
  {
    name: '게임들',
    board: 'games',
    path: '/games/sudden_attack',
    subTable: [
      {
        name: '서든어택',
        board: 'games',
        table: 'sudden_attack',
        path: '/games/sudden_attack'
      },
      {
        name: '오버워치',
        board: 'games',
        table: 'over_watch',
        path: '/games/over_watch'
      },
      {
        name: '배그',
        board: 'games',
        table: 'battle_ground',
        path: '/games/battle_ground'
      },
      {
        name: '발로란트',
        board: 'games',
        table: 'valorant',
        path: '/games/valorant'
      },
      {
        name: '던파',
        board: 'games',
        table: 'df',
        path: '/games/df'
      },
      {
        name: '롤',
        board: 'games',
        table: 'lol',
        path: '/games/lol'
      },
      {
        name: '메이플',
        board: 'games',
        table: 'maple_story',
        path: '/games/maple_story'
      },
      {
        name: '기타게임',
        board: 'games',
        table: 'etc_game',
        path: '/games/etc_game'
      },
      {
        name: '게임요청',
        board: 'games',
        table: 'request_game',
        path: '/games/request_game'
      },
    ]
  },
  {
    name: 'Q&A',
    board: 'qa',
    path: '/qa'
  }
];

export declare type FooterMapType = {
  title: string,
  menus: { name: string, path: string }[],
};

export const footerMap = [
  {
    title: '약관및정책',
    menus: [
      { name: '이용약관', path: '/termspolicy/service' },
      { name: '개인정보취급방침', path: '/termspolicy/privacy' },
      { name: '이메일주소무단수집거부', path: '/termspolicy/refusal' },
      { name: '게시물규제정책', path: '/termspolicy/policy' },
    ]
  },
  {
    title: '고객센터',
    menus: [
      { name: '공지사항', path: '/customer/notice' },
      { name: '도움말', path: '#' },
      { name: '문의하기', path: '#' },
      { name: '게시물 삭제요청', path: '#' },
      { name: '버그 및 건의', path: '#' },
    ]
  },
  {
    title: '광고센터',
    menus: [
      { name: '광고센터홈', path: '#' },
      { name: '제휴제안', path: '#' },
    ]
  },
]

export const mobileFooterMenus = [
  {
    name: '커뮤니티',
    board: 'community',
    path: '/community/free',
    icon: '/image/icon/community-icon.svg'
  },
  {
    name: '게임들',
    board: 'games',
    path: '/games/sudden_attack',
    icon: '/image/icon/games-icon.svg',
  },
  {
    name: 'Q&A',
    board: 'qa',
    path: '/qa',
    icon: '/image/icon/qa-icon.svg',
  },
  {
    name: '설정',
    board: 'config',
    path: '',
    icon: '/image/icon/config-icon.svg',
  }
]