import React,{useState} from 'react'
import people from '../data'

import { FaRegCommentDots } from 'react-icons/fa';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

const Review = () => {
const [index,setIndex] = useState(0);
const {id,name,job,image,info} = people[index];


const randomUser = function(){
  setIndex((index)=>{
let newUser = Math.trunc(Math.random() * people.length);
return newUser;
  })
}

const nextUser = ()=>{
  setIndex((index) => {
    if (index === people.length - 1) {
      let newIndex = 0;
      return newIndex;
    }else{
     let newIndex = index+1;
     return newIndex;
    }
  })
}


const prevUser = ()=>{
  setIndex((index)=>{
    if(index === 0){
      let newIndex = people.length-1;
      return newIndex;
    }else{
      let newIndex = index - 1;
      return newIndex;
    }
  })
}

  return (
    <article key={id} className="review">
      <div className="image_container">
        <img src={image} alt={name} className="person_img" />
        <span className="quote_icon">
          <FaRegCommentDots />
        </span>
      </div>
      <div className="author">
        <h3 className="name">{name}</h3>
        <p className="job">{job}</p>
        <p className="info">{info}</p>
      </div>
      <div className="btn_container">
        <button className="prev"   onClick = {()=>prevUser()}>
          <FaAngleLeft />
        </button>
        <button className="next" onClick = {()=>nextUser()}>
          <FaAngleRight />
        </button>
      </div>
      <button className="random" onClick={()=>randomUser()}>Random User</button>
    </article>
  );
}

export default Review