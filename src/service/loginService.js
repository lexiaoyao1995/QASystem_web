import Axios from "axios";

const API = process.env.API_PREFIX;

export default {
  login(username, password, success) {
    let params = new URLSearchParams();
    params.append('username', username);
    params.append('password', password);
    Axios.post(API + '/login', params).then(res => success(res));
  }
}
