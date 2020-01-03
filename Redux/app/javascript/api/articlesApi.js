import axios from 'axios';
class ArticlesApi {
  static getArticles() {
    return axios.get('api/articles')
      .then(response => {
        return response.data;
      })
      .catch(error => {
        return error;
      });
  }

  static getArticle(id){
    return axios.get(`api/articles/${id}`)
      .then(response => {
        return response.data;
      })
      .catch(error => {
        return error;
      });
  }
  static createArticle(title,content){

    return axios.post('api/articles', {
        title: title,
        content: content
      }
    )
    .then(response => {return response.data})
    .catch(error => console.log('error', error));
  }
}

export default ArticlesApi;