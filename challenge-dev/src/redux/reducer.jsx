// reducer.js


const initialState = {
  characters: [],
  pages: '',
  gender: [],
  status: [], 
  species:[]
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_CHARACTERS':
      return {
        ...state,
        characters: action.payload.data,
        pages: action.payload.pages,
        gender: action.payload.gender,
        status: action.payload.status,
        species:action.payload.species,
      };

  case "GET_CHARACTER":
    return {
      ...state,
      characters: action.payload
    };
    case 'FILTER_CHARACTERS':
      return {
        ...state,
        characters: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
