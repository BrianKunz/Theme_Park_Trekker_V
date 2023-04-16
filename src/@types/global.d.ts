interface User {
  id?: string;
  username: string;
  email?: string;
  password: string;
  admin?: boolean;
}

interface Post {
  id: string;
  username: string;
  title: string;
  image: string;
  description: string;
  time: Date;
  comments: Comment[];
}

interface Comment {
  id: string;
  username: string;
  time: Date;
  body: string;
  post: Post;
}

interface Trip {
  id: string;
  username: string;
  date: Date;
  title: string;
  start_date: Date;
  end_date: Date;
  flight: string;
}
