import axios from 'axios';
class ArticlesApi {
  static getArticles(page = 1, per_page) {
    return axios.get('api/articles', {
      params: {
        page: page,
        per_page: per_page
      }
    })
      .then(response => {
        return response.data;
      })
      .catch(error => {
        return error;
      });
  }

  static getArticle(id) {
    return axios.get(`api/articles/${id}`)
      .then(response => {
        return response.data;
      })
      .catch(error => {
        return error;
      });
  }
  static createArticle(title, content) {

    return axios.post('api/articles', {
      title: title,
      content: content
    }
    )
      .then(response => { return response.data })
      .catch(error => console.log('error', error));
  }
}

export default ArticlesApi;