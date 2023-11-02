import React, { useEffect, useState } from 'react';
import "./CommentContainer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import Comment from './Comment';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function CommentContainer(props) {
  const navigator = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState({});
  const [input, setInput] = useState("");

  const apiUrl = process.env.REACT_APP_ENV === "DEV" ? process.env.REACT_APP_LOCALHOST_API_URL : process.env.REACT_APP_GCLOUD_API_URL;

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
    const result = await axios.get(`${apiUrl}/api/comments/${props.id}`);
    console.log(result.data);
    setData(result.data);
  }

  async function onSubmit(e) {
    const postResult = await axios.post(`${apiUrl}/api/comments`, {
      "animeId": props.id,
      "userId": 1,
      "content": input
    });
    const getResult = await axios.get(`${apiUrl}/api/comments/${props.id}`);
    console.log(postResult.data);
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
              <form onSubmit={(e) => onSubmit(e)} >
                <div className='input-box'>
                  <div className='item'>Comment</div>
                  <textarea className='box' placeholder={`write your comment!`} name={"input"} value={input} onChange={(e) => onInputChange(e)}></textarea>
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
