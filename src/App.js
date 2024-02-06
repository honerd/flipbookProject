import React, { useState, useEffect } from 'react'
import './App.css';
import leftarrow from "./images/left_arrow.svg"
import rightarrow from "./images/right_arrow.svg"
import earth from "./images/earth.svg"
import heart from "./images/heart3.svg"
import universe from "./images/universe1.svg"
import Hershey from "./images/Hershey's.jpg"


function App() {
  const [page, setPage] = useState(0);
  const [book, setBook] = useState(0);
  const [intro,setIntro] = useState(0);
  const [introPages,setIntroPages] = useState(0);
  const [outro,setOutro]=useState(0);
  const [outroPage,setOutroPage]=useState(0);

  useEffect(()=>{
    if(intro===1)
    {
      setBook(book+1);
    }
  },[intro])

  
  useEffect(() => {
      if(book===1)
      {
        const wrapper = document.getElementsByClassName('wrapper')[0];
        if (wrapper) {
          wrapper.style.opacity = "1";
          wrapper.style.transition = "opacity 3s 0.5s";
        }
      }
      console.log(book);
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

  const checkOutro=(direction)=>{
    if(direction==0)
    {
      if(outroPage===0)
      {
        console.log("outro out");
        const element=document.getElementsByClassName("outroWrapper")[0];
        if(element)
        {
          element.style.opacity="0";
        }
        setOutro(0);
      }
      if(outroPage<6)
      {
        const button=document.getElementsByClassName('right')[0];
        if(button)
        {
          button.style.visibility="visible";
        }
      }
      console.log(outroPage);
      if(outroPage!==0)
      {
        const element=document.getElementById("outroMessage"+(outroPage-1));
        if(element)
        {
          element.style.opacity="1";
        }
        const beforeElement=document.getElementById("outroMessage"+outroPage);
        if(beforeElement)
        {
          beforeElement.style.opacity="0";
        }
        setOutroPage(outroPage-1);
      }
    }
    if(direction==1)
    {
      if(outro===0)
      {
        console.log("outro initiated");
        const element=document.getElementsByClassName("outroWrapper")[0];
        if(element)
        {
          element.style.opacity="1";
        }
        setOutro(1);
      }
      else
      {
        const element=document.getElementById("outroMessage"+(outroPage+1));
        if(element)
        {
          element.style.opacity="1";
        }
        const beforeElement=document.getElementById("outroMessage"+outroPage);
        if(beforeElement)
        {
          beforeElement.style.opacity="0";
        }
        setOutroPage(outroPage+1);
        console.log("yes");
        console.log(element);
      }
      if(outroPage>=4)
      {
        const button=document.getElementsByClassName('right')[0];
        if(button)
        {
          button.style.visibility="hidden";
        }
      }
      console.log(outroPage);
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
        text.style.backgroundColor='inherit';
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
        text.style.backgroundColor='inherit';
      }

      const previousText=document.getElementsByClassName('pageTextContainer')[3-page];
      if(previousText)
      {
        previousText.style.left='-100vw';
        previousText.style.opacity='0';
        previousText.style.backgroundColor='#00203FFF';
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
      const wrapper = document.getElementsByClassName('wrapper')[0];
      if (wrapper) {
        wrapper.style.opacity = "0";
        wrapper.style.transition = "opacity 1s";
      }
    }
    else
    {
      checkOutro(1);
    }
    if(intro!==0)
    {
      setTimeout(checkChild,200)
      setPage(page + 1);
      console.log(page);
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
        prevText.style.backgroundColor='#00203FFF';
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
        text.style.backgroundColor='inherit';
      }

      const prevText=document.getElementById("textContainer"+(page));
      if(prevText)
      {
        prevText.style.left='100vw';
        prevText.style.backgroundColor='00203FFF';
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
      const wrapper = document.getElementsByClassName('wrapper')[0];
      if (wrapper) {
        wrapper.style.opacity = "1";
        wrapper.style.transition = "opacity 1s";
      }
    }
    else if(outro!=0)
    {
      checkOutro(0);
    }
    if(intro!==0)
    {
      checkChildLeft();
      setPage(page - 1);
      console.log(page);
    }
  }

  const renderBook=<div className="container">
    <div className="wrapper">
                    <div className="book">
                      <div className="cover front" ></div>
                      <div className="cover back" >
                        <div className="backCoverText">
                          Keep Moving Right
                        </div>
                      </div>
                      <div className="page page3" >
                      <div id="imageContainer3" className='imageContainer'>
                        <img src={heart} alt="" className='floatingImage'/>
                      </div>
                      <div className="pageTextContainer" id="textContainer3">
                          The place that I have in my heart for you!<br/>
                          The amount of respect I have garnered for you is huge.
                        </div>
                      </div>
                      <div className="page page2">
                      <div id="imageContainer2" className='imageContainer'>
                        <img src={universe} alt="" className='floatingImage'/>
                      </div>
                      <div className="pageTextContainer" id="textContainer2">
                          The Universe we live in is also massive.<br/>
                          But guess what there is one thing larger than all of it.
                        </div>
                      </div>
                      <div className="page page1" >
                        <div id="imageContainer1" className='imageContainer'>
                          <img src={earth} alt="" className='floatingImage'/>
                        </div>
                        <div className="pageTextContainer" id="textContainer1">
                          We seem insignificant in front of the size of the earth. It's massive.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="outroWrapper">
                    <div className="outroWordSpace">
                      <div id="outroMessage0" className="outroMessage">
                        <div className="Heading">Do you know why?</div>
                        <div className="subHeading">It's because you are that one source of positivity I can rely upon. You are one 
                        of the most hardworking people I have ever met. You know that I like you, but even beyond that is there anything you cannot do.</div>
                      </div>
                      <div id="outroMessage1" className="outroMessage">
                      <div className="Heading">Art To Wear Period</div>
                        <div className="subHeading">I know the time was rough on you guys. You guys worked your asses off.
                        But guess what I also learned two things during that time. One, I hate a day that goes past where I cannot talk to you or hear you.
                         And two, You are such a talented person that I seldom think how any of this ever works. How you keep coming up and thinking of new stuff</div>
                      </div>
                      <div id="outroMessage2" className="outroMessage">
                      <div className="Heading">Khushi Pravin Bora</div>
                        <div className="subHeading">As soon as this name got announced on the stage while watching the insta live, my heart legit exclaimed with joy. 
                        Khushi, you always outperform more than you give yourself credit for. That very moment made me want to give you a real tight hug.</div>
                      </div>
                      <div id="outroMessage3" className="outroMessage">
                      <div className="Heading">You're amazing inside out!</div>
                        <div className="subHeading">With all that has been happening around you I understand that taking time out must have been difficult. 
                        It has been hard all this while becuase truthfully speaking I have missed you, a lot actually. It's not a secret that I am attracted towards you.
                        But you have achieved something massive here. Truly massive, and I want you to give a pat on your own back and smile a big fat smile of relief. </div>
                      </div>
                      <div id="outroMessage4" className="outroMessage">
                      <div className="Heading">What more do I say</div>
                        <div className="subHeading">I admire you, cherish talking to you, am in awe of you, respect the hell out of you. 
                        I don't just say this lightly, infact I don't ever say this to anyone else. But you are different after all. Nothing should bring you down. 
                        Tough times come but I would always try to bring that smile back onto your face, because there is nothing more I can want. You are awesome bbg, truly awesome {'<'}3<br/><br/>
                        From your biggest well wisher ;{')'}</div>
                      </div>
                      <div id="outroMessage5" className="outroMessage">
                      <div className="Heading">
                        <div className="outroImage">
                          <img src={Hershey} alt="" className='hershey'/>
                        </div>
                      </div>
                        <div className="subHeading">And just because this is a Khushi Special ;{')'}</div>
                      </div>
                    </div>
                  </div>
  </div>

  const renderIntro=<div className="introWrapper">
    <div className="wordSpace">
      <div id="message0" className='message'>
        Hey! Hello.
      </div>
      <div id="message1" className='message'>
        There are certain things that form a fact.
      </div>
      <div id="message2" className='message'>
        Here are the largest facts presented to you.
      </div>
      <div id="message3" className='message'>
        Thinking about these give you a perspective for what matters and what doesn't in life.
      </div>
      <div id="message4" className='message'>
        Ready?
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
