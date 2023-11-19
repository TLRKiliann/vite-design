import { useState, useEffect } from 'react';
import { FaReact, FaGithub, FaStackOverflow, FaSass } from "react-icons/fa";
import { SiTypescript, SiTailwindcss, SiMysql } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

import './App.css';

type ActivateProps = {
  boolOne: boolean;
  boolTwo: boolean;
  boolThree: boolean;
}

function App() {

  const [count, setCount] = useState<number>(0);
  const [isActivate, setIsActivate] = useState<ActivateProps>({
    boolOne: false,
    boolTwo: false,
    boolThree: false
  });

  const handleClickBtn1 = () => {
    setIsActivate({
      ...isActivate,
        boolOne: true
    })
    setCount(prev => prev + 1);
  }

  const handleClickBtn2 = () => {
    setIsActivate({
      ...isActivate,
        boolTwo: true
    })
    setCount(prev => prev + 1);
  }

  const handleClickBtn3 = () => {
    setIsActivate((prev) => ({
      ...isActivate,
        boolThree: !prev.boolThree
    }))
    setCount(prev => prev + 1);
  }

  // reset first animation after 2700 ms
  useEffect(() => {
    const timer = setTimeout(() => {
      if (isActivate.boolOne === true) {
        setIsActivate({
          ...isActivate,
            boolOne: false
        })
      }
    }, 2700)
    timer;
    return () => {
      clearTimeout(timer);
      console.log("useEffect done! (1)");
    }
  }, [isActivate.boolOne]);

  // reset second animation after 3200 ms
  useEffect(() => {
    const timer2 = setTimeout(() => {
      if (isActivate.boolTwo === true) {
        setIsActivate({
          ...isActivate,
            boolTwo: false
        })
      }
    }, 3200)
    timer2;
    return () => {
      clearTimeout(timer2);
      console.log("useEffect done! (2)");
    }
  }, [isActivate.boolTwo]);

  console.log(isActivate.boolOne, "isActivate.boolOne");
  console.log(isActivate.boolTwo, "isActivate.boolTwo");
  console.log(count, "count");

  let boolOne: boolean = isActivate.boolOne;
  let boolTwo: boolean = isActivate.boolTwo;
  let boolThree: boolean = isActivate.boolThree;

  return (
    <main>

      <div className='grid'>

        <div className='square-top square_1'>
          <p className='square_1--paragraph1'>Have</p>
        </div>

        <div className='square-top square_2'>
          <p className='square_2--paragraph2'>Fun !</p>
        </div>

        <div 
          id={boolThree === true ? 'square1': '1'}
          className={boolOne === false ? 'square' : 'activated-square'}>
            <span><FaGithub /></span>
        </div>
        <div 
          id={boolThree === true ? 'square2': '2'}
          className={boolOne === false ? 'square' : 'activated-square'}>
            <span><FaReact /></span>
          </div>
        <div 
          id={boolThree === true ? 'square3': '3'}
          className={boolOne === false ? 'square' : 'activated-square'}>
            <span><FaStackOverflow /></span>
        </div>

        <div 
          id={boolThree === true ? 'square4': '4'}
          className={boolOne === true
            ? 'activated-square' 
            : boolTwo === false 
              ? 'square' 
              : 'activated-squaretwo'}>
                <span><TbBrandNextjs /></span>
        </div>
        <div 
          id={boolThree === true ? 'square5': '5'}
          className={boolOne === true
            ? 'activated-square'
            : boolTwo === false 
              ? 'square' 
              : 'activated-squaretwo'}>
          <span>😃</span>
        </div>
        <div 
          id={boolThree === true ? 'square6': '6'}
          className={boolOne === true
            ? 'activated-square' 
            : boolTwo === false 
              ? 'square' 
              : 'activated-squaretwo'}>
                <span><SiTypescript /></span>
        </div>

        <div 
          id={boolThree === true ? 'square7': '7'}
          className={boolOne === false ? 'square' : 'activated-square'}>
            <span><FaSass /></span>
          </div>
        <div 
          id={boolThree === true ? 'square8': '8'}
          className={boolOne === false ? 'square' : 'activated-square'}>
            <span><SiTailwindcss /></span>
          </div>
        <div 
          id={boolThree === true ? 'square9': '9'}
          className={boolOne === false ? 'square' : 'activated-square'}>
            <span><SiMysql /></span>
          </div>

        <button type="button" onClick={handleClickBtn1} className='button'>one-after-one</button>
        <button type="button" onClick={handleClickBtn2} className='button'>K-2000</button>
        <button type="button" onClick={handleClickBtn3} className='button'>
          {boolThree === false ? "rotation" : "reset"}
        </button>

      </div>

      <div >
        <p>
          Counter: {count}
        </p>
      </div>

    </main>
  )
}

export default App;
