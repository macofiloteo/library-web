type MyActionType =
  // Backtest
  'ADD_ALL_BOOKS' | 'UPDATE_CURRENT_BOOK';

declare interface MyAction {
  type: MyActionType;
  payload?: any;
}
