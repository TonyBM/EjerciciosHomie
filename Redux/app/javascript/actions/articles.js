import * as actionTypes from '../constants/actionTypes';
import ArticlesApi from '../api/articlesApi';

export function addArticle(title, content) {
  return function (dispatch) {
    return ArticlesApi.createArticle(title,content).then(article => {
        return artile => {dispatch(successShowArticle(article));}
      })
      .catch(error => console.log('error', error));
  }
}
export function editArticle(id) {
  return {
    type: actionTypes.EDIT_ARTICLE,
    id: id
  };
}

export function infoArticle(id) {
  return function (dispatch) {
    return ArticlesApi.getArticle(id).then(article => {
        dispatch(successShowArticle(article))
      })
      .catch(error => console.log('error', error));
  }
}

export function successShowArticle(article){
  return {
    type: actionTypes.INFO_ARTICLE,
    article
  }
}

export function removeArticle(id) {
  return {
    type: actionTypes.REMOVE_ARTICLE,
    id: id
  };
}
export function pagedArticles(page = 1){
  return  function(dispatch){
    return ArticlesApi.getPagedArticles(page).then(articles => {
      dispatch(successLoadArticles(articles));
    }).catch(error => {
      console.log('error', error)
    });
  }
}

export function allArticles(page){
  return  function(dispatch){
    return ArticlesApi.getArticles(page).then(articles => {
      dispatch(successLoadArticles(articles));
    }).catch(error => {
      console.log('error', error)
    });
  }
}

export function successLoadArticles(articles) {
  return {
    type: actionTypes.ALL_ARTICLES,
    articles
  };
}