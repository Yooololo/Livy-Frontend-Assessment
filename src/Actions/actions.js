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
      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        console.log(error.request);
      } else {
        console.log("Error:", error.message);
      }
    }
  };
}

export function searchGnomeName(name) {
  return { type: "SEARCH_GNOME_NAME", payload: name };
}

export function searchGnomeId(id) {
  return { type: "SEARCH_GNOME_ID", payload: id };
}

export function filterGnomesByProfession(profession) {
  return { type: "FILTER_GNOMES_BY_PROFESSION", payload: profession };
}

export function filterGnomesByAge(minage, maxage) {
  const ages = [minage, maxage];
  return { type: "FILTER_GNOMES_BY_AGE", payload: ages };
}

export function filterGnomesByHeight(minheight, maxheight) {
  const heights = [minheight, maxheight];
  return {
    type: "FILTER_GNOMES_BY_HEIGHT",
    payload: heights,
  };
}

export function filterGnomesByWeight(minweight, maxweight) {
  const weights = [minweight, maxweight];
  return {
    type: "FILTER_GNOMES_BY_WEIGHT",
    payload: weights,
  };
}
