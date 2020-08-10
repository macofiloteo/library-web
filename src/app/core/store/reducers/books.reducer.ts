import { ActionReducer } from '@ngrx/store';

export const books: ActionReducer<Book[]> = ActionReduce;

export function ActionReduce(
  state: Book[] = undefined,
  action: MyAction
): Book[] {
  switch (action.type) {
    case 'ADD_ALL_BOOKS':
      const bookArray: Book[] = [];
      for (const key in action.payload) {
        if (action.payload[key] === undefined) {
          continue;
        }
        bookArray.push(action.payload[key]);
      }
      state = bookArray;
      return bookArray;
    // case 'UPDATE_BOOK':
    //   const x = state.map((s) => bookReduce(s, action));
    //   return x;
    default:
      return state;
  }
}

// function bookReduce(book: Book, action: MyAction): Book {
//   if (book.id === action.payload.id) {
//     switch (action.type) {
//       case 'UPDATE_BOOK':
//         book = action.payload.book;
//         return book;
//       default:
//         return book;
//     }
//   }
//   return book;
// }
