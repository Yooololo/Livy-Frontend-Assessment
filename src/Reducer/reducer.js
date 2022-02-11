const initialState = {
  allGnomes: [],
  gnomes: [],
  filteredGnomes: [],
};

export default function reducer(state = initialState, action) {
  const gnome = state.allGnomes;
  const gnomo = gnome.Brastlewark;
  switch (action.type) {
    case "GET_GNOMES":
      return {
        ...state,
        allGnomes: action.payload,
        gnomes: action.payload,
      };
    case "SEARCH_GNOME_NAME":
      const gnomosName = [];
      // eslint-disable-next-line array-callback-return
      gnomo.filter((gnome) => {
        if (gnome.name.toLowerCase().includes(action.payload.toLowerCase())) {
          gnomosName.push(gnome);
        }
      });
      gnomosName.length === 0 && gnomosName.push("");
      return {
        ...state,
        gnomes: gnomosName,
        filteredGnomes: gnomosName,
      };
    case "SEARCH_GNOME_ID":
      const gnomosId = [];
      const gnomoId = gnomo[parseInt(action.payload)];
      gnomoId ? gnomosId.push(gnomoId) : gnomosId.push("");
      return {
        ...state,
        gnomes: gnomosId,
        filteredGnomes: gnomosId,
      };
    case "FILTER_GNOMES_BY_PROFESSION":
      const gnomosProfession = [];
      // eslint-disable-next-line array-callback-return
      gnomo.filter((gnome) => {
        if (gnome.professions.includes(action.payload)) {
          gnomosProfession.push(gnome);
        }
      });
      const response = action.payload === "All" ? gnomo : gnomosProfession;
      return {
        ...state,
        gnomes: response,
        filteredGnomes: response,
      };
    case "FILTER_GNOMES_BY_AGE":
      const gnomosAge = [];
      let [minage, maxage] = action.payload;
      if (maxage === "") {
        maxage = Infinity;
      }
      // eslint-disable-next-line array-callback-return
      gnomo.filter((gnome) => {
        if (gnome.age >= minage && gnome.age <= maxage) {
          gnomosAge.push(gnome);
        }
      });
      gnomosAge.sort((a, b) => a.age - b.age);
      return {
        ...state,
        gnomes: gnomosAge,
        filteredGnomes: gnomosAge,
      };
    case "FILTER_GNOMES_BY_HEIGHT":
      const gnomosHeight = [];
      let [minheight, maxheight] = action.payload;
      if (maxheight === "") {
        maxheight = Infinity;
      }
      // eslint-disable-next-line array-callback-return
      gnomo.filter((gnome) => {
        if (gnome.height >= minheight && gnome.height <= maxheight) {
          gnomosHeight.push(gnome);
        }
      });
      gnomosHeight.sort((a, b) => a.height - b.height);
      return {
        ...state,
        gnomes: gnomosHeight,
        filteredGnomes: gnomosHeight,
      };
    case "FILTER_GNOMES_BY_WEIGHT":
      const gnomosWeight = [];
      let [minweight, maxweight] = action.payload;
      if (maxweight === "") {
        maxweight = Infinity;
      }
      // eslint-disable-next-line array-callback-return
      gnomo.filter((gnome) => {
        if (gnome.weight >= minweight && gnome.weight <= maxweight) {
          gnomosWeight.push(gnome);
        }
      });
      gnomosWeight.sort((a, b) => a.weight - b.weight);
      return {
        ...state,
        gnomes: gnomosWeight,
        filteredGnomes: gnomosWeight,
      };
    default:
      return state;
  }
}
