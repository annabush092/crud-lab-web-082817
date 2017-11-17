
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state={restaurants: [], reviews: []}, action) {
  switch(action.type) {
    case "NEW_RESTAURANT":
      return {...state, restaurants: [...state.restaurants, {id: cuid(), name: action.payload}]}
    case "DELETE_RESTAURANT":
      return {
        ...state,
        restaurants: state.restaurants.filter(r => (r.id !== action.payload)),
        reviews: state.reviews.filter(rev => (rev.restaurantID !== action.payload))
      }
    case "WRITE_REVIEW":
      return {
        ...state,
        reviews: [...state.reviews, {id: cuid(), ...action.payload}]
      }
    case "DELETE_REVIEW":
      return {
        ...state,
        reviews: state.reviews.filter(rev=> (
          rev.id !== action.payload
        ))
      }
    default:
      return state;
  }
}

// state = {
// restaurants: [
//   { id: 1, name: 'hello' },
// ],
// reviews: [
//   { id: 1, restaurantId: 1, text: 'it was good' }
// ]
// });
// }
