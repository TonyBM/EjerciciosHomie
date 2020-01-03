import React, { Component, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { infoArticle } from '../../actions/articles';

const ArticleInfo = (props) => {

  useEffect(() => {
    props.showArticle(props.match.params.id);
  }, []);

  const handleDelete = () => {
    fetch(`api/articles/${props.match.params.id}`, { method: 'DELETE' })
      .then(() => {
        props.history.push("/articles")
      })
      .catch(error => console.log('error', error));
  }

  console.log(props);

  return (
    <div>
      <h2>{props.article.id}: {props.article.title}</h2>
      <p>{props.article.content}</p>
      <p>
        <Link to={`/articles/${props.article.id}/edit`} className="btn btn-outline-dark">Edit</Link>
        <button onClick={handleDelete} className="btn btn-outline-dark">Delete</button>
        <Link to="/articles" className="btn btn-outline-dark">Close</Link>
      </p>
      <hr />
    </div>
  );
}

function mapStateToProps(state) {
  return {
    article: state.articlesReducer.article
  }
}

function mapDispatchToProps(dispatch) {
  return {
    showArticle: (id) => dispatch(infoArticle(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticleInfo);