import React, { useEffect, useState } from 'react';
import "./CommentContainer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import Comment from './Comment';
import { request } from '../../helpers/axios_helpers';
import Cookies from 'js-cookie';
import { useForm } from "react-hook-form"

export default function CommentContainer(props) {

  // if the comment container is open
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState({});
  const isLogin = Cookies.get('isLogin');

  const {
    register,
    resetField,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({
    criteriaMode: 'all',
  });

  // generate comment boxes
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

  // insert comments into the DB
  async function onSubmit(e) {
    await request(
      "POST",
      "/api/comments",
      {
        animeId: props.id,
        userId: Cookies.get('id'),
        content: getValues("content")
      }
    );
    const comments = await request(
      "GET",
      `api/comments/${props.id}`
    );
    resetField("content")
    setData(comments.data);
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
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className='input-box'>
                    <div className='item'>Comment</div>
                    <input
                      className='box'
                      {...register('content', {
                        required: {
                          value: true,
                          message: 'You must input something',
                        },
                      })}
                    />
                    {errors.content?.types?.required && <div className='error'>{errors.content?.types?.required}</div>}
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
