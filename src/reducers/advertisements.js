import {
  ADVERTISEMENTS_FETCHED,
  NEW_ADVERTISEMENT,
  DELETE_ADVERTISEMENT_SUCCES,
  ADVERTISEMENT_UPDATE_SUCCESS
} from "../actions/advertisements";
// import advertisement from "./advertisement";

export default function(state = [], action = {}) {
  // console.log('ADVERTISEMENTS_FETCHED payload @ reducer?', action.payload)
  switch (action.type) {
    case ADVERTISEMENTS_FETCHED:
      return action.payload;

    case NEW_ADVERTISEMENT: // by putting the new ad here in the 'all' ads reducer, you immidiately get the ad on your screen.
      return [action.payload, ...state];

    case DELETE_ADVERTISEMENT_SUCCES:
      return state.filter(
        advertisement => advertisement.id !== Number(action.payload.id)
      );

    case ADVERTISEMENT_UPDATE_SUCCESS:
      return state.map(advertisement => {
        if (advertisement.id === action.advertisement.id) {
          return action.payload;
        } else {
          return advertisement;
        }
      });

    default:
      return state;
  }
}
