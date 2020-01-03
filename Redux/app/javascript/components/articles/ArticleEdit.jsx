import React, { Component,useState } from 'react';
import Form from './Form';


const ArticleEdit = (props) => {

  const [title, useTitle] = useState('');
  const [content, useContent] = useState('');
  const componentDidMount = () => {
    fetch(`api/articles/${props.match.params.id}`)
      .then(response => response.json())
      .then((data) => {
        useTitle(data.title);
        useContent(data.content);
      })
      .catch(error => console.log('error', error));
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(`api/articles/${props.match.params.id}`, {
      method: 'PATCH',
      body: JSON.stringify(article),
      headers: { 'Content-Type': 'application/json' }
    })
      .then(response => response.json())
      .then(data => {
        props.history.push(`/articles/${props.match.params.id}`);
      })
      .catch(error => console.log('error', error));
  }

  const handleChange = (event) => {
    if (event.target.name == "title") {
      useTitle(event.target.value);
    } else {
      useContent(event.target.value);
    }
  }

  const handleCancel = () => {
    props.history.push(`/articles/${props.match.params.id}`);
  }

  const article = {
    title: title,
    content: content
  };
  const settings = {
    handleSubmit: handleSubmit,
    handleChange: handleChange,
    handleCancel: handleCancel,
    actionLabel: 'Update'
  };
  return (
    <div>
      <h1>Edit {title}</h1>
      <Form article={article} settings={settings} />
    </div>
  );
}

export default ArticleEdit;