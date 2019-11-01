import Axios from "axios";

const API = process.env.API_PREFIX + '/topic';


export default {
  listAll(success) {
    Axios.get(API).then(res => success(res));
  },
  getArticlesByTopicId(id, success) {
    Axios.get(`${API}/${id}`).then(res => success(res));
  },

  insertArticle(topicId, data, success) {
    Axios.post(`${API}/${topicId}`, data).then(res => success(res));

  }

}
