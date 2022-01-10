import axios from "axios";

export function getGnomes() {
  return async function (dispatch) {
    try {
      const response = await axios.get(
        "https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json"
      );
      return dispatch({
        type: "GET_GNOMES",
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function searchGnomeName(name) {
  return async function (dispatch) {
    try {
      const response = await axios.get(
        "https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json"
      );
      const gnome = response.data;
      const gnomo = gnome.Brastlewark;
      const gnomos = [];
      //eslint-disable-next-line
      gnomo.filter((gnome) => {
        if (gnome.name.toLowerCase().includes(name.toLowerCase())) {
          gnomos.push(gnome);
        }
      });
      gnomos.length === 0 && gnomos.push("");
      return dispatch({
        type: "SEARCH_GNOME_NAME",
        payload: gnomos,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function searchGnomeId(id) {
  return async function (dispatch) {
    try {
      const response = await axios.get(
        "https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json"
      );
      const gnome = response.data;
      const gnomo = gnome.Brastlewark[parseInt(id)]
        ? gnome.Brastlewark[parseInt(id)]
        : "";
      const gnomos = [];
      gnomos.push(gnomo ? gnomo : "");
      return dispatch({
        type: "SEARCH_GNOME_ID",
        payload: gnomos,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function filterGnomesByProfession(profession) {
  return async function (dispatch) {
    try {
      const response = await axios.get(
        "https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json"
      );
      const gnome = response.data;
      const gnomo = gnome.Brastlewark;
      const gnomos = [];
      //eslint-disable-next-line
      gnomo.filter((gnome) => {
        if (gnome.professions.includes(profession)) {
          gnomos.push(gnome);
        }
      });
      return dispatch({
        type: "FILTER_GNOMES_BY_PROFESSION",
        payload: profession === "All" ? gnome : gnomos,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function filterGnomesByAge(minage, maxage) {
  return async function (dispatch) {
    try {
      const response = await axios.get(
        "https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json"
      );
      const gnome = response.data;
      const gnomo = gnome.Brastlewark;
      const gnomos = [];
      //eslint-disable-next-line
      gnomo.filter((gnome) => {
        if (gnome.age >= minage && gnome.age <= maxage) {
          gnomos.push(gnome);
        }
      });
      gnomos.sort((a, b) => a.age - b.age);
      return dispatch({
        type: "FILTER_GNOMES_BY_AGE",
        payload: gnomos,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function filterGnomesByHeight(minheight, maxheight) {
  return async function (dispatch) {
    try {
      const response = await axios.get(
        "https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json"
      );
      const gnome = response.data;
      const gnomo = gnome.Brastlewark;
      const gnomos = [];
      //eslint-disable-next-line
      gnomo.filter((gnome) => {
        if (gnome.height >= minheight && gnome.height <= maxheight) {
          gnomos.push(gnome);
        }
      });
      gnomos.sort((a, b) => a.height - b.height);
      return dispatch({
        type: "FILTER_GNOMES_BY_HEIGHT",
        payload: gnomos,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function filterGnomesByWeight(minweight, maxweight) {
  return async function (dispatch) {
    try {
      const response = await axios.get(
        "https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json"
      );
      const gnome = response.data;
      const gnomo = gnome.Brastlewark;
      const gnomos = [];
      //eslint-disable-next-line
      gnomo.filter((gnome) => {
        if (gnome.weight >= minweight && gnome.weight <= maxweight) {
          gnomos.push(gnome);
        }
      });
      gnomos.sort((a, b) => a.weight - b.weight);
      return dispatch({
        type: "FILTER_GNOMES_BY_WEIGHT",
        payload: gnomos,
      });
    } catch (error) {
      console.log(error);
    }
  };
}
