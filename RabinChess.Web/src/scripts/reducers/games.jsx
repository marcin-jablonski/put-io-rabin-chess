import {httpGet} from '../utils/api'

const games = (state = [], action) => {
  switch(action.type) {
    case 'GET_GAMES': {
      var newState;
      httpGet('api/Games').then(response => newState = response);
      return newState ? newState : state;
    }
    default: {
      return state;
    }
  }
}

export default games;
