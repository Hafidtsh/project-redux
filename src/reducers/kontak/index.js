const { type } = require("@testing-library/user-event/dist/type");

const initialState = {};

const kontak = (state = initialState, action) => {
  switch ((action, type)) {
    default:
      return state;
  }
};

export default kontak;
