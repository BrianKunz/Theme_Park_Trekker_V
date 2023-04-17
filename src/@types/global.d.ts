interface User {
  id?: string;
  username: string;
  email?: string;
  password: string;
  admin?: boolean;
  trips?: Trip[];
  posts?: Post[];
  comments?: Comment[];
}

interface Post {
  id?: string;
  title: string;
  image?: string;
  description: string;
  created: Date;
  comments: Comment[];
  user?: User;
}

interface Comment {
  id?: string;
  time: Date;
  body: string;
  post: Post;
  user?: User;
}

interface Trip {
  id?: string;
  date: Date;
  title: string;
  start_date: Date;
  end_date: Date;
  flight?: string;
  user?: User;
}

interface CustomSessionData extends SessionData {
  user?: User;
}
