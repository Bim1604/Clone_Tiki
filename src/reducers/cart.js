export default (items = [], action) => {
    switch (action.type) {
       case 'GET_ALL_ITEMS':
          return action.payload;
       case 'ADD_TO_CART':
          return action.payload
       case 'REMOVE_FROM_CART':
          return action.payload
       default:
          return items;
    }
 };