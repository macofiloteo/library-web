import { ActionReducer } from '@ngrx/store';

export const currentBook: ActionReducer<Book> = ActionReduce;

export function ActionReduce(state: Book, action: MyAction): Book {
  switch (action.type) {
    case 'UPDATE_CURRENT_BOOK':
      if (!action.payload) {
        return state;
      }

      state = action.payload;
      return state;
    default:
      return state;
  }
}
