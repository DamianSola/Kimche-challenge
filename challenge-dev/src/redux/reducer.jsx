// reducer.js


const initialState = {
  characters: [],
  allCharacters:[],
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
        allCharacters:action.payload.data,
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
    case 'FILTER_GENDER':
      return {
        ...state,
        characters: state.allCharacters.filter(e => e.gender === action.payload),
      };
      case 'FILTER_STATUS':
      return {
        ...state,
        characters: state.allCharacters.filter(e => e.status ===  action.payload),
      };
      case 'FILTER_SPECIES':
        return {
          ...state,
          characters: state.allCharacters.filter(e => e.species ===  action.payload),
        };
      // case 'FILTER_CHARACTERS':
      //   return {
      //     ...state,
      //     characters: action.payload
      //   };
    default:
      return state;
  }
};

export default reducer;
