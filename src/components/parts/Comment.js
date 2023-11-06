import React from 'react';
import "./Comment.css";

export default function Comment(props) {
  return (
    <div id='comment'>
      <div className='user-name'>{props.userName}</div>
      <div>{props.content}</div>
    </div>
  );
}
