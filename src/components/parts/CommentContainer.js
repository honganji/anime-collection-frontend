import React, { useEffect, useState } from 'react';
import "./CommentContainer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import Comment from './Comment';
import { request } from '../../helpers/axios_helpers';
import Cookies from 'js-cookie';

export default function CommentContainer(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState({});
  const [input, setInput] = useState("");
  const isLogin = Cookies.get('isLogin');

  function onInputChange(e) {
    setInput(e.target.value);
  }

  function generateComments() {
    let commentList = [];
    data.map((element) => {
      commentList.push(<Comment userName={element["name"]} content={element["content"]} />);
    });
    return commentList;
  }

  async function getData() {
    const result = await request(
      "GET",
      `api/comments/${props.id}`
    );
    setData(result.data);
  }

  async function onSubmit(e) {
    e.preventDefault();
    await request(
      "POST",
      "/api/comments",
      {
        "animeId": props.id,
        "userId": Cookies.get('id'),
        "content": input
      }
    );
    const comments = await request(
      "GET",
      `api/comments/${props.id}`
    );
    setData(comments.data);
    setInput("");
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    isLogin == "true" ?
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
      : <></>
  );
}
