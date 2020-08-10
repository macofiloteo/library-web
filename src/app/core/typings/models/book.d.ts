interface BookComment {
  id: number;
  timestamp: string;
  content: string;
  user: string;
  book: number;
}

interface Book {
  id: number;
  book_comments?: BookComment[];
  status: string;
  checkOutDate?: string;
  addedDate: string;
  title: string;
  author: string;
  owner: string;
  location: string;
  checkedOutBy?: string;
}
