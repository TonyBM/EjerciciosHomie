import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import { addArticle, allArticles } from '../../actions/articles';
import PageButton from './PageButton.jsx';


let actualPage;
function ArticleList(props) {

  const [page, usePage] = useState(1);
  actualPage = page;
  useEffect(() => {
    props.listArticles();
  }, []);

  const clickAction = (newPage) =>{
    return () => {
      usePage(newPage);
      console.log(`Cambiaste a la página ${newPage}`);
      actualPage = newPage;
      props.listArticles(newPage);
    }
  }
  const generatedButtons = [];
  let pagesNumber =parseInt(props.number/3);
  for (let i=1; i<=pagesNumber;i++){
    generatedButtons.push(<PageButton page={i} key={i} selected= {actualPage == i} clickAction = {clickAction}/>);
  }
  return (
    <div>
      <h1>{page}</h1>
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
      {generatedButtons}
      <Link to={`/articles/new`}>Nuevo Articulo</Link>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    articles: state.articlesReducer.articles,
    number: state.articlesReducer.number
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addArticle: (title, content) => dispatch(addArticle(title, content)),
    listArticles: () => dispatch(allArticles(actualPage))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticleList);