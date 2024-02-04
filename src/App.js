import React, { useState, useEffect } from 'react'
import './App.css';
import leftarrow from "./images/left_arrow.svg"
import rightarrow from "./images/right_arrow.svg"
import earth from "./images/earth.svg"
import heart from "./images/heart3.svg"
import universe from "./images/universe1.svg"


function App() {
  const [page, setPage] = useState(0);
  const [book, setBook] = useState(0);
  const [intro,setIntro] = useState(0);
  const [introPages,setIntroPages] = useState(0);

  useEffect(()=>{
    setBook(book+1);
  },[intro])
  
  useEffect(() => {
    const wrapper = document.getElementsByClassName('wrapper')[0];
    if (wrapper) {
      wrapper.style.opacity = "1";
      wrapper.style.transition = "opacity 3s 0.5s";
    }
  }, [book]);

  const callIntro=()=>{
    if(introPages==4)
    {
      const element=document.getElementsByClassName("message");
      const elementArray = Array.from(element);
      elementArray.forEach((e)=>{
        e.style.opacity="1";
      })
      setIntro(1);
    }
    else
    {
      const element=document.getElementById("message"+(introPages+1));
      if(element)
      {
        element.style.opacity="1";
      }
      const beforeElement=document.getElementById("message"+introPages);
      if(beforeElement)
      {
        beforeElement.style.opacity="0";
      }
    }
    setIntroPages(introPages+1);
  }

  const checkChild=()=>{
    const child=document.getElementById("imageContainer" + (page+1));
    if(child)
    {
      child.style.backgroundColor="#00203FFF";
      child.style.transform = "translateY(-50vh) translateX(-100px) scale(4) rotateX(330deg)";
      child.style.opacity = "100";
    }
  }
  const removeImage=()=>{
    const child=document.getElementById("imageContainer" + (page));
    if(child)
    {
      child.style.backgroundColor="inherit";
      child.style.transform = "none";
      child.style.opacity = "0";
    }
  }
  const checkChildLeft=()=>{
    const child=document.getElementById("imageContainer" + (page-1));
    if(child)
    {
      child.style.backgroundColor="#00203FFF";
      child.style.transform = "translateY(-50vh) translateX(-100px) scale(4) rotateX(-30deg)";
      child.style.opacity = "100";
    }
  }

  const removeImageLeft=()=>{
    const child=document.getElementById("imageContainer" + (page));
    if(child)
    {
      child.style.backgroundColor="inherit";
      child.style.transform = "none";
      child.style.opacity = "0";
    }
  }
  const clickRight = () => {
    if(intro!=0)
    {
      removeImage();
    }
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
      const text=document.getElementsByClassName('pageTextContainer')[2];
      if(text)
      {
        text.style.left='0';
        text.style.opacity='1';
      }
    }
    else if (page < 4 && page > 0) {
      const element = document.getElementsByClassName("page page" + page)[0];
      if (element) {
        element.style.transform = 'rotateY(-180deg)';
        element.style.zIndex = { page };
      }
      const child=document.getElementById("imageContainer" + page);
      if(child)
      {
        child.style.visibility = "hidden";
      }
      const parent = document.getElementsByClassName("cover front")[0];
      if (parent) {
        parent.style.zIndex = '0';
      }
      const text=document.getElementsByClassName('pageTextContainer')[2-page];
      if(text)
      {
        text.style.left='0';
        text.style.opacity='1';
      }

      const previousText=document.getElementsByClassName('pageTextContainer')[3-page];
      if(previousText)
      {
        previousText.style.left='-100vw';
        previousText.style.opacity='0';
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
      setTimeout(checkChild,200)
      setPage(page + 1);
    }
  }

  const clickLeft=()=>{
    removeImageLeft();
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

      const prevText=document.getElementById("textContainer"+(page));
      if(prevText)
      {
        prevText.style.left='100vw';
        prevText.style.opacity='0';
      }
    }
    else if (page < 5 && page > 1) {
      const element = document.getElementsByClassName("page page"+ (page-1))[0];
      if (element) {
        element.style.transform = 'none';
        element.style.zIndex = "0";
      }
      const child=document.getElementById("imageContainer" + (page-1));
      if(child)
      {
        child.style.visibility = "visible";
      }
      const parent = document.getElementsByClassName("cover back")[0];
      if (parent) {
        parent.style.zIndex = '0';
      }
      const text=document.getElementById("textContainer"+(page-1));
      if(text)
      {
        text.style.left='0';
        text.style.opacity='1';
      }

      const prevText=document.getElementById("textContainer"+(page));
      if(prevText)
      {
        prevText.style.left='100vw';
        prevText.style.opacity='0';
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
      checkChildLeft();
      setPage(page - 1);
    }
  }

  const renderBook=<div className="wrapper">
                    <div className="book">
                      <div className="cover front" ></div>
                      <div className="cover back" ></div>
                      <div className="page page3" >
                      <div id="imageContainer3" className='imageContainer'>
                        <img src={heart} alt="" className='floatingImage'/>
                      </div>
                      <div className="pageTextContainer" id="textContainer3">
                          hello hi what's up
                        </div>
                      </div>
                      <div className="page page2">
                      <div id="imageContainer2" className='imageContainer'>
                        <img src={universe} alt="" className='floatingImage'/>
                      </div>
                      <div className="pageTextContainer" id="textContainer2">
                          hello hi what's up
                        </div>
                      </div>
                      <div className="page page1" >
                        <div id="imageContainer1" className='imageContainer'>
                          <img src={earth} alt="" className='floatingImage'/>
                        </div>
                        <div className="pageTextContainer" id="textContainer1">
                          hello hi what's up
                        </div>
                      </div>
                    </div>
                  </div>

  const renderIntro=<div className="introWrapper">
    <div className="wordSpace">
      <div id="message0" className='message'>
        hellohi
      </div>
      <div id="message1" className='message'>
        hello
      </div>
      <div id="message2" className='message'>
        hi
      </div>
      <div id="message3" className='message'>
        what's up
      </div>
      <div id="message4" className='message'>
        nothing much
      </div>
    </div>
  </div>
  return (
    <div className="App">
      {(intro==1)?renderBook:renderIntro}
      <button className="left" onClick={clickLeft}>
        <img src={leftarrow} alt="" className='buttonImage'/>
      </button>
      <button className="right" onClick={clickRight} >
        <img src={rightarrow} alt="" className="buttonImage"/>
      </button>
    </div>
  );
}

export default App;
