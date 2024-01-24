import React, { useState, useEffect } from 'react'
import './App.css';
import leftarrow from "./images/left_arrow.svg"
import rightarrow from "./images/right_arrow.svg"
import exampleimage from "./images/earth.svg"
import heart from "./images/heart.svg"
import universe from "./images/universe.svg"


function App() {
  const [page, setPage] = useState(0);
  const [book, setBook] = useState(0);
  const [intro,setIntro] = useState(0);

  useEffect(()=>{
    setBook(book+1);
  },[intro])
  
  useEffect(()=>{
    const wrapper = document.getElementsByClassName('wrapper')[0];
    if (wrapper) {
      wrapper.style.opacity = "1";
      wrapper.style.transition="opacity 3s";
    }
    console.log("Intro Completed")
  },[book])

  const callIntro=()=>{
    setIntro(1);
  }
  const clickRight = () => {
    console.log("yes");
    if(intro===0)
    {
      callIntro();
    }
    else if (page === 0) {
      const leftButton=document.getElementsByClassName("left")[0];
      if(leftButton)
      {
        leftButton.style.display="block"
      }
      const element = document.getElementsByClassName("cover front")[0];
      if (element) {
        element.style.transform = 'rotateY(-180deg)';
      }
      const parent = document.getElementsByClassName('book')[0];
      if (parent) {
        parent.style.transform = 'rotateX(30deg) translateX(100px) translateY(20vh)';
      }
    }
    else if (page < 4 && page > 0) {
      const element = document.getElementsByClassName("page page" + page)[0];
      if (element) {
        element.style.transform = 'rotateY(-180deg)';
        element.style.zIndex = { page };
      }
      const parent = document.getElementsByClassName("cover front")[0];
      if (parent) {
        parent.style.zIndex = '0';
      }
    }
    else if(page===4) {
      const element = document.getElementsByClassName("cover back")[0];
      if (element) {
        element.style.transform = 'rotateY(-180deg)';
        element.style.zIndex = '4';
      }
      const parent = document.getElementsByClassName('book')[0];
      if (parent) {
        parent.style.transform = 'rotateX(30deg) translateX(200px)';
      }

      const rightButton=document.getElementsByClassName("right")[0]
      if(rightButton)
      {
        rightButton.style.display = "none";
      }
    }
    if(intro!==0)
    {
      setPage(page + 1);
    }
  }

  const clickLeft=()=>{
    if (page === 1) {
      const leftButton=document.getElementsByClassName("left")[0];
      if(leftButton)
      {
        leftButton.style.display="none"
      }
      const element = document.getElementsByClassName("cover front")[0];
      if (element) {
        element.style.transform = 'none';
        element.style.zIndex="1"
      }
      const parent = document.getElementsByClassName('book')[0];
      if (parent) {
        parent.style.transform = 'rotateX(30deg)';
      }
    }
    else if (page < 5 && page > 1) {
      const element = document.getElementsByClassName("page page"+ (page-1))[0];
      if (element) {
        element.style.transform = 'none';
        element.style.zIndex = "0";
      }
      const parent = document.getElementsByClassName("cover back")[0];
      if (parent) {
        parent.style.zIndex = '0';
      }
    }
    else if(page===5) {
      const element = document.getElementsByClassName("cover back")[0];
      if (element) {
        element.style.transform = 'none';
        element.style.zIndex = '1';
      }
      const parent = document.getElementsByClassName('book')[0];
      if (parent) {
        parent.style.transform = 'rotateX(30deg) translateX(100px) translateY(20vh)';
      }

      const rightButton=document.getElementsByClassName("right")[0]
      if(rightButton)
      {
        rightButton.style.display = "block";
      }
    }
    if(intro!==0)
    {
      setPage(page - 1);
    }
  }

  const renderBook=<div className="wrapper">
                    <div className="book">
                      <div className="cover front"></div>
                      <div className="cover back"></div>
                      <div className="page page1"></div>
                      <div className="page page2"></div>
                      <div className="page page3"></div>
                    </div>
                  </div>

  const renderIntro=<div>yes</div>
  return (
    <div className="App">
      {(intro==1)?renderBook:console.log('intro')}
      <button className="left" onClick={clickLeft}>
        <img src={leftarrow} alt="" />
      </button>
      <button className="right" onClick={clickRight}>
        <img src={rightarrow} alt="" />
      </button>
    </div>
  );
}

export default App;
