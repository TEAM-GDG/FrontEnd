const post = [
  {
    post_id: 1,
    title: '프사 바꿨는데 너무 귀엽지 않나요?',
    image_path:
      'https://s3-alpha-sig.figma.com/img/4379/3e6f/3e3d29d1fe9eebe2de276979215ec983?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LWuOkCkeBAc4mXInVmzF4daUKD3eDdhdHBZ00uTMtPzAEI8SaFwuY7B4C6GoSx3P9Oq1EVylu~MUeBrmKlk1wBPmw4qLcZs0tvTJRWrWeGdzp2ZqBEREIac7~Rnbvg35q3Ec7ZLMv4HUxw~r2zRq9xMewurKQTZ7pK1MXzFJwHAzkaSQKoC6gzy5pppViIKFuLLs14ycgd5ekl3ls4OsUzdTHV-VMwLxcU-Y8nBJ~1ZiWEzVNqp4A7DVRBQK~9TYhL3dpbrkZaegogpkFQ~PqPX~ebuv9pbwBaQIksHCe6grAHVEKwZEDmEjFSpKNKlzHV4MiutFPvCooe0VUz-jlA__',
    name: '잠많은시금치',
    created_at: '1시간 전',
    view_count: 1214,
    like_count: 32,
    comment_count: 20,
  },
  {
    post_id: 2,
    title: '잠도 안오고 너무 의지했던것에 대한 ...',
    image_path: null,
    name: '불타는망곰이',
    created_at: '2시간 전',
    view_count: 929,
    like_count: 99,
    comment_count: 32,
  },
  {
    post_id: 3,
    title: '이태원 쪽에 맛집 추천해주실 수 있나욤',
    image_path: null,
    name: '박새로이',
    created_at: '2시간 전',
    view_count: 1999,
    like_count: 22,
    comment_count: 11,
  },
  {
    post_id: 4,
    title: '커비 아시는 분 ㅋㅋㅋㅋㅋㅋ',
    image_path:
      'https://s3-alpha-sig.figma.com/img/28e1/f9ba/42031cebe6da0a288988e3ed1d63703c?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EC8WNESQfsgdWayUmnuGzP0S7uslNYCmi15ht~HGO0KFyD5xFO7I33Yn53FCuOOk~8VGQ1vyyUwqMfn6LeedGVc1lC1fWKhqbc5Wx-j8g8L7jx~hG4ArlM0WFdCSJ6OYfWPHpkliAhP42SQHxC~l-yzga7fVFSWe3YX4ofrFDKqu0~3DTJ3rVjmYgGUANy9gGDWnSVwLj4Lj34BCiTUaZEtdURBxw36eKZohSUBIUbgJDhAbs4rsGMlZQ6Sx4qiJw0-ztwjZr3nbn8e5LQ0cDcpuzJbNZXKfFicxRmHSqmZYIn0~nJvfLYa5GmFOnv56Hfr63m1O4gsX5DpqTfFHHg__',
    name: '별의 공주',
    created_at: '4시간 전',
    view_count: 842,
    like_count: 13,
    comment_count: 10,
  },
  {
    post_id: 5,
    title: '햄부기 안 주면 죽을거임',
    image_path:
      'https://health.chosun.com/site/data/img_dir/2024/04/19/2024041901914_0.jpg',
    name: '55yong',
    created_at: '4시간 전',
    view_count: 709,
    like_count: 36,
    comment_count: 32,
  },
  {
    post_id: 6,
    title: '나는 집 갈거임',
    image_path: null,
    name: 'tkdgml822',
    created_at: '6시간 전',
    view_count: 4912,
    like_count: 95,
    comment_count: 99,
  },
  {
    post_id: 7,
    title: '살려주셈',
    image_path: null,
    name: '12seungheon',
    created_at: '7시간 전',
    view_count: 454,
    like_count: 45,
    comment_count: 12,
  },
  {
    post_id: 8,
    title: '난 개발 안할거임',
    image_path: null,
    name: 'dohun1109',
    created_at: '7시간 전',
    view_count: 4234,
    like_count: 42,
    comment_count: 75,
  },
  {
    post_id: 9,
    title: '난 운전할거임',
    image_path: null,
    name: 'kingxeesu',
    created_at: '9시간 전',
    view_count: 481,
    like_count: 59,
    comment_count: 10,
  },
  {
    post_id: 10,
    title: '나는매일학교가는버스안에서',
    image_path: null,
    name: 'seo-garden',
    created_at: '9시간 전',
    view_count: 523,
    like_count: 15,
    comment_count: 66,
  },
];

const posts = (state = post, action) => {
  switch (action.type) {
    case 'ADD_POST':
      return state.concat(action.data);
    case 'DELETE_POST':
      return state.filter(post => post.id !== action.id);
    default:
      return state;
  }
};

export default posts;
