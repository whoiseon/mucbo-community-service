export declare type HeaderMenuType = {
  name: string,
  table: string,
  path: string
  subTable?: {
    name: string,
    table: string,
    path: string
  }[],
};

export const headerMenus = [
  {
    name: '공지사항',
    table: 'customer',
    path: '/customer/notice',
    subTable: [
      {
        name: '공지사항',
        table: 'customer',
        path: '/customer/notice'
      },
      {
        name: '업데이트',
        table: 'customer',
        path: '/customer/update'
      }
    ]
  },
  {
    name: '전체글보기',
    table: 'all',
    path: '/board/all'

  },
  {
    name: '커뮤니티',
    table: 'community',
    path: '/community/free',
    subTable: [
      {
        name: '자유',
        table: 'community',
        path: '/community/free'
      },
      {
        name: '유머',
        table: 'community',
        path: '/community/humor'
      },
      {
        name: '포토',
        table: 'community',
        path: '/community/photo'
      },
      {
        name: '피해사례',
        table: 'community',
        path: '/community/crime'
      },
      {
        name: '신고',
        table: 'community',
        path: '/community/report'
      },
      {
        name: '가입인사',
        table: 'community',
        path: '/community/hello'
      }
    ]
  },
  {
    name: '게임들',
    table: 'games',
    path: '/games/sudden_attack',
    subTable: [
      {
        name: '서든어택',
        table: 'games',
        path: '/games/sudden_attack'
      },
      {
        name: '오버워치',
        table: 'games',
        path: '/games/over_watch'
      },
      {
        name: '배그',
        table: 'games',
        path: '/games/battle_ground'
      },
      {
        name: '발로란트',
        table: 'games',
        path: '/games/valorant'
      },
      {
        name: '던전앤파이터',
        table: 'games',
        path: '/games/df'
      },
      {
        name: '리그오브레전드',
        table: 'games',
        path: '/games/lol'
      },
      {
        name: '메이플스토리',
        table: 'games',
        path: '/games/maple_story'
      },
      {
        name: '기타게임',
        table: 'games',
        path: '/games/etc_game'
      },
      {
        name: '게임요청',
        table: 'games',
        path: '/games/request_game'
      },
    ]
  },
  {
    name: 'Q&A',
    table: 'qa',
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