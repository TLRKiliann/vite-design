import './App.css'

function App() {

  return (
    <main>

      <div className='grid'>

        <div className='square-top square_1'>
          <p className='square_1--paragraph1'>text 1</p>
        </div>

        <div className='square-top square_2'>
          <p className='square_2--paragraph2'>text 2</p>
        </div>

        <div className='square'></div>
        <div className='square'></div>
        <div className='square'></div>

        <div className='square'></div>
        <div className='square'></div>
        <div className='square'></div>

        <div className='square'></div>
        <div className='square'></div>
        <div className='square'></div>

        <button className='button'>Snake</button>
        <button className='button'>K-2000</button>
        <button className='button'>one-after-one</button>

      </div>

    </main>
  )
}

export default App
