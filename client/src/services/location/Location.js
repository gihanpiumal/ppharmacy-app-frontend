import { httpCollection } from "../http";

const subURL = "/location/";

export default {
  getLocation: async function (currentPage, pageSize) {
    let { data } = await httpCollection.getData(
      subURL +
        "get_all_location?pageNo=" +
        currentPage +
        "&pageSize=" +
        pageSize
    );
    return data;
  },

  addLocation: async function (params) {
    let { data } = await httpCollection.postData(
      subURL + "add_location",
      params
    );
    return data;
  },

  editLocation: async function (params, id) {
    let { data } = await httpCollection.putData(
      subURL + "edit_location/" + id + "/",
      params
    );
    return data;
  },

  deleteLocation: async function (id) {
    let { data } = await httpCollection.deleteData(
      subURL + "delete_location?id=" + id
    );
    return data;
  },

  getLocationByName: async function (location) {
    let { data } = await httpCollection.getData(
      subURL + "get_location_by_name?name=" + location
    );
    return data;
  },
};
