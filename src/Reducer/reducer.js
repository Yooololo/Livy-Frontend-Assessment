const initialState = {
  allGnomes: [],
  gnomes: [],
  filteredGnomes: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "GET_GNOMES":
      return {
        ...state,
        allGnomes: action.payload,
        gnomes: action.payload,
      };
    case "SEARCH_GNOME_NAME":
      return {
        ...state,
        gnomes: action.payload,
        filteredGnomes: action.payload,
      };
    case "SEARCH_GNOME_ID":
      return {
        ...state,
        gnomes: action.payload,
        filteredGnomes: action.payload,
      };
    case "FILTER_GNOMES_BY_PROFESSION":
      return {
        ...state,
        gnomes: action.payload,
        filteredGnomes: action.payload,
      };
    case "FILTER_GNOMES_BY_AGE":
      return {
        ...state,
        gnomes: action.payload,
        filteredGnomes: action.payload,
      };
    case "FILTER_GNOMES_BY_HEIGHT":
      return {
        ...state,
        gnomes: action.payload,
        filteredGnomes: action.payload,
      };
    case "FILTER_GNOMES_BY_WEIGHT":
      return {
        ...state,
        gnomes: action.payload,
        filteredGnomes: action.payload,
      };
    default:
      return state;
  }
}
