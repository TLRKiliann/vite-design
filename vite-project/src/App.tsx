import { useState, useEffect } from 'react';
import './App.css';

type ActivateProps = {
  boolOne: boolean;
  boolTwo: boolean;
}

function App() {

  const [count, setCount] = useState<number>(0);
  const [isActivate, setIsActivate] = useState<ActivateProps>({
    boolOne: false,
    boolTwo: false
  });

  const handleClickBtn1 = () => {
    console.log("clicked 1");
  }

  const handleClickBtn2 = () => {
    setIsActivate({
      ...isActivate,
        boolTwo: true
    })
    setCount(prev => prev + 1);
  }

  const handleClickBtn3 = () => {
    setIsActivate({
      ...isActivate,
        boolOne: true
    })
    setCount(prev => prev + 1);
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      if (isActivate.boolOne === true) {
        setIsActivate({
          ...isActivate,
            boolOne: false
        })
      }
    }, 2000)
    timer;
    return () => {
      clearTimeout(timer);
      console.log("useEffect done! (1)");
    }
  }, [isActivate.boolOne]);

  useEffect(() => {
    const timer2 = setTimeout(() => {
      if (isActivate.boolTwo === true) {
        setIsActivate({
          ...isActivate,
            boolTwo: false
        })
      }
    }, 2000)
    timer2;
    return () => {
      clearTimeout(timer2);
      console.log("useEffect done! (2)");
    }
  }, [isActivate.boolTwo]);
  
  console.log(isActivate.boolOne, "isActivate.boolOne");
  console.log(isActivate.boolTwo, "isActivate.boolTwo");

  console.log(count, "count");

  return (
    <main>

      <div className='grid'>

        <div className='square-top square_1'>
          <p className='square_1--paragraph1'>text 1</p>
        </div>

        <div className='square-top square_2'>
          <p className='square_2--paragraph2'>text 2</p>
        </div>

        <div 
          id='square1'
          className={isActivate.boolOne === false ? 'square' : 'activated-square'}>
        </div>
        <div 
          id='square2'
          className={isActivate.boolOne === false ? 'square' : 'activated-square'}></div>
        <div 
          id='square3'
          className={isActivate.boolOne === false ? 'square' : 'activated-square'}>
        </div>

        <div 
          id='square4'
          className={isActivate.boolOne === true
            ? 'activated-square' 
            : isActivate.boolTwo === false 
            ? 'square' 
            : 'activated-squaretwo'}>
        </div>
        <div 
          id='square5'
          className={isActivate.boolOne === true
            ? 'activated-square' 
            : isActivate.boolTwo === false 
            ? 'square' 
            : 'activated-squaretwo'}>
          <span>😃</span>
        </div>
        <div 
          id='square6'
          className={isActivate.boolOne === true
            ? 'activated-square' 
            : isActivate.boolTwo === false 
            ? 'square' 
            : 'activated-squaretwo'}>
        </div>

        <div 
          id='square7'
          className={isActivate.boolOne === false ? 'square' : 'activated-square'}></div>
        <div 
          id='square8'
          className={isActivate.boolOne === false ? 'square' : 'activated-square'}></div>
        <div 
          id='square9'
          className={isActivate.boolOne === false ? 'square' : 'activated-square'}></div>

        <button type="button" onClick={handleClickBtn1} className='button'>Snake</button>
        <button type="button" onClick={handleClickBtn2} className='button'>K-2000</button>
        <button type="button" onClick={handleClickBtn3} className='button'>one-after-one</button>

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
