import React, { Component, useState } from 'react';
import Form from './Form';



const ArticleAdd = (props) => {

  const [title, useTitle] = useState('');
  const [content, useContent] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch('api/articles', {
      method: 'POST',
      body: JSON.stringify(article),
      headers: { 'Content-Type': 'application/json' }
    })
      .then(response => response.json())
      .then(data => {
        props.history.push(`/articles/${data.id}`);
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
    props.history.push("/articles");
  }

  const article = {
    title: title,
    content: content
  };
  const settings = {
    handleSubmit: handleSubmit,
    handleChange: handleChange,
    handleCancel: handleCancel,
    actionLabel: 'Create'
  };

  return (
    <div>
      <h1>{title}</h1>
      <Form article={article} settings={settings} />
    </div>
  );
}

export default ArticleAdd;