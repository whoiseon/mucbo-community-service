export declare type HeaderMenuType = {
  name: string,
  path: string
};

export const headerMenus = [
  {
    name: '공지사항',
    path: '/customer/notice',
  },
  {
    name: '전체글보기',
    path: '/board/all'
  },
  {
    name: '커뮤니티',
    path: '/community/free'
  },
  {
    name: '게임들',
    path: '/games/sudden_attack'
  },
  {
    name: 'Q&A',
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