import React from 'react';
import { RxAvatar } from 'react-icons/rx';
import commentsData from '../constants/nLevelComments';

const CommentsContainer = () => {
  return (
    <div className='pt-2'>
      <h2 className='p-2 text-2xl font-bold'>Comments</h2>
      <CommentList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;

const CommentList = ({ comments }) => {
  return comments.map((item,index) => (
    <div key={index}>
      <CommentItem data={item} />
      {item.replies && item.replies.length > 0 &&  (
        <div className='ml-5 border border-l-black'>
          <h2 className='pl-2'>Replies</h2>
          <CommentList key={item} comments={item.replies} />
        </div>
      )}
    </div>
  ));
};

const CommentItem = (props) => {
  const { name, text, replies } = props.data;
  return (
    <div className='flex items-center bg-gray-200 rounded-lg my-2 gap-2 p-2'>
      <span className='items-center'>
        <RxAvatar size={20} />
      </span>
      <div className='justify-between'>
        <h5>{name}</h5>
        <p>{text}</p>
      </div>
    </div>
  );
};
