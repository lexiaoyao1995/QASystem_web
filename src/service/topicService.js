import Axios from "axios";

const API = process.env.API_PREFIX + '/topic';


export default {
  listAll(success) {
    Axios.get(API).then(res => success(res));

  }

}
