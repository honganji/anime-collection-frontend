import React, { useEffect, useState } from 'react';
import "./CommentContainer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import Comment from './Comment';
import axios from 'axios';

function CommentContainer(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState({});
  const [input, setInput] = useState("");

  function onInputChange(e) {
    setInput(e.target.value);
  }

  function generateComments() {
    let commentList = [];
    data.map((element) => {
      commentList.push(<Comment userName={element["user_id"]} content={element["content"]} />);
    });
    return commentList;
  }

  async function getData() {
    const result = await axios.get(`https://anime-collection-api-v2.de.r.appspot.com/api/comments/${props.id}`);
    setData(result.data);
  }

  async function onSubmit(e) {
    e.preventDefault();
    const postResult = await axios.post("https://anime-collection-api-v2.de.r.appspot.com/api/comments", {
      "animeId": props.id,
      "userId": 1,
      "content": input
    });
    const getResult = await axios.get(`https://anime-collection-api-v2.de.r.appspot.com/api/comments/${props.id}`);
    setData(getResult.data);
    setInput("");
  }

  useEffect(() => {
    getData();
  }, []);
  return (
    <div id='comment-container'>
      {
        isOpen ?
          <div className='container'>
            <div className='comment-box'>
              <div className='comments'>
                {generateComments()}
              </div>
              <form onSubmit={(e) => onSubmit(e)}>
                <div className='input-box'>
                  <div className='item'>Comment</div>
                  <input className='box' type='text' placeholder={`write your comment!`} name={"input"} value={input} onChange={(e) => onInputChange(e)}></input>
                </div>
                <button type='submit' className='btn colored-btn send-btn'>Send</button>
              </form>
            </div>
            <FontAwesomeIcon icon={faXmark} className='closed-button' onClick={() => setIsOpen(!isOpen)} />
          </div>
          :
          <div className='floating-button' onClick={() => setIsOpen(!isOpen)}>comments</div>
      }
    </div>
  );
}

export default CommentContainer;
