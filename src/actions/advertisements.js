import request from "superagent";

export const ADVERTISEMENTS_FETCHED = "ADVERTISEMENTS_FETCHED";
export const ADVERTISEMENT_FETCHED = "ADVERTISEMENT_FETCHED";
export const NEW_ADVERTISEMENT = "NEW_ADVERTISEMENT";
export const DELETE_ADVERTISEMENT_SUCCES = "DELETE_ADVERTISEMENT_SUCCES";
export const ADVERTISEMENT_UPDATE_SUCCESS = "ADVERTISEMENT_UPDATE_SUCCESS";

const baseUrl = "http://localhost:4000";

const advertisementsFetched = advertisements => ({
  type: ADVERTISEMENTS_FETCHED,
  payload: advertisements
});

export const loadAdvertisements = () => (dispatch, getState) => {
  console.log("trying to get advertisements");
  // when the state already contains events, we don't fetch them again
  // if (getState().advertisements.length) return;
  console.log(`${baseUrl}/advertisements`);
  // a GET /events request / function in a function, thunk
  request(`${baseUrl}/advertisements`)
    .then(response => {
      console.log(response);
      // dispatch an EVENTS_FETCHED action that contains the events
      dispatch(advertisementsFetched(response.body));
    })
    .catch(console.error);
};
