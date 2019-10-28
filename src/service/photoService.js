import Axios from "axios";

const API = process.env.API_PREFIX + '/photo';

export default {
  listAlbums(success) {
    Axios.get(`${API}/albums`).then(res => success(res));
  },

  getPicById(id) {
    return `${API}/${id}`;
  },

  getPhotoByAlbum(id, success) {
    Axios.get(`${API}/album/${id}`).then(res => success(res));
  }


}
