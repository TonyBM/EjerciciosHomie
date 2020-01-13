import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import { addArticle, allArticles } from '../../actions/articles';
import PageButton from './PageButton.jsx';


let actualPage;
let per_page = 3;
function ArticleList(props) {

  const [pageNumber, usePage] = useState(1);
  actualPage = pageNumber;
  useEffect(() => {
    props.listArticles();
  }, []);

  const changePage = (newPage) => {
    return () => {
      usePage(newPage);
      actualPage = newPage;
      props.listArticles(newPage);
    }
  }
  const article_pages = [];
  let pagesNumber = parseInt(props.PageNumber / per_page);

  for (let page = 1; page <= pagesNumber; page++) {
    article_pages.push(<PageButton page={page} key={page} selected={actualPage == page} clickAction={changePage} />);
  }

  return (
    <div>
      <h1>{pageNumber}</h1>
      {
        props.articles.map((article) => {
          return (
            <div key={article.id}>
              <h2><Link to={`/articles/${article.id}`}>{article.title}</Link></h2>
              {article.content}
              <hr />
            </div>
          );
        })
      }
      {article_pages}
      <Link to={`/articles/new`}>Nuevo Articulo</Link>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    articles: state.articlesReducer.articles,
    PageNumber: state.articlesReducer.number
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addArticle: (title, content) => dispatch(addArticle(title, content)),
    listArticles: () => dispatch(allArticles(actualPage, per_page))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticleList);