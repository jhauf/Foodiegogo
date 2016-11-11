import { RECEIVE_CATEGORY } from '../actions/category_actions';
import merge from 'lodash/merge';



const CategoryReducer = (oldState = "", action) => {
  switch (action.type) {
    case RECEIVE_CATEGORY:
      return action.category;
    default:
      return oldState;
  }
};

export default CategoryReducer;
