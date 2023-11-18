import { useState, useEffect } from 'react'
import './App.css'

function App() {

  //const [count, setCount] = useState<number>(0);
  const [isActivate, setIsActivate] = useState<boolean>(false);

  const handleClickBtn1 = () => {
    console.log("clicked 1")
  }

  const handleClickBtn2 = () => {
    console.log("clicked 2")
  }

  const handleClickBtn3 = () => {
    setIsActivate(true);
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      if (isActivate === true) {
        setIsActivate(false)
      }
    }, 1000)
    timer;
    return () => {
      console.log("useEffect done!")
      clearTimeout(timer);
    }
  }, [isActivate])

  return (
    <main>

      <div className='grid'>

        <div className='square-top square_1'>
          <p className='square_1--paragraph1'>text 1</p>
        </div>

        <div className='square-top square_2'>
          <p className='square_2--paragraph2'>text 2</p>
        </div>

        <div id='square1' className={isActivate === false ? 'square' : 'activated-square'}></div>
        <div id='square2' className={isActivate === false ? 'square' : 'activated-square'}></div>
        <div id='square3' className={isActivate === false ? 'square' : 'activated-square'}></div>

        <div id='square4' className={isActivate === false ? 'square' : 'activated-square'}></div>
        <div id='square5' className={isActivate === false ? 'square' : 'activated-square'}></div>
        <div id='square6' className={isActivate === false ? 'square' : 'activated-square'}></div>

        <div id='square7' className={isActivate === false ? 'square' : 'activated-square'}></div>
        <div id='square8' className={isActivate === false ? 'square' : 'activated-square'}></div>
        <div id='square9' className={isActivate === false ? 'square' : 'activated-square'}></div>

        <button type="button" onClick={handleClickBtn1} className='button'>Snake</button>
        <button type="button" onClick={handleClickBtn2} className='button'>K-2000</button>
        <button type="button" onClick={handleClickBtn3} className='button'>one-after-one</button>

      </div>

      <div >
        <p>
          Counter: {/*count*/}
        </p>
      </div>

    </main>
  )
}

export default App
