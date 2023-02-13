import './App.css';
import React, {useState} from 'react'


function App() {
  const fivePercent = 5
  const tenPercent = 10
  const fifteenPercent = 15
  const twentyFivePercent = 25
  const fiftyPercent = 50

  const [bill, setBill] = useState(0)
  const [tip, setTip] = useState(0)
  const [people, setPeople] = useState(1)
  const totalTip = bill * .01 * tip / parseFloat(people)
  const totalAmount = (parseFloat(bill) + parseFloat(totalTip)) / parseInt(people)

  const handleBill = (event) => {
    setBill(event.target.value)
  }

  const handleTip = (event) => {
    event.preventDefault()
    setTip(event.target.value)
  }

  const handleButtonTip = (event) => {
    event.preventDefault()
    setTip(event.target.value)
  }

  const handlePeople = (event) => {
    event.preventDefault()
    setPeople(event.target.value)
  }

  const handleReset = (event) => {
    event.preventDefault()
    setBill(0)
    setTip(0)
    setPeople(1)
  }

  return (
    <div className="flexColumn borderCushion">
      <div className='flexColumn'>
        <p>Bill</p>
          <input 
            type='number'
            value={bill}
            onChange={handleBill}
            />
            <p>Select Tip %</p>
            <label className='tipSelection'>
          <button className='button' onClick={handleButtonTip} value={fivePercent}>5%</button>
          <button className='button' onClick={handleButtonTip} value={tenPercent}>10%</button>
          <button className='button' onClick={handleButtonTip} value={fifteenPercent}>15%</button>
          <button className='button' onClick={handleButtonTip} value={twentyFivePercent}>25%</button>
          <button className='button' onClick={handleButtonTip} value={fiftyPercent}>50%</button>
          <input className='button' 
            type='number'
            value={tip}
            onChange={handleTip}
          />
          </label>
          <p>Number of People</p>
          <input 
            type='number'
            value={people}
            onChange={handlePeople}  
          />
      </div>
    <div>
      <p>Tip Amount {Math.round(100*totalTip)/100}</p>
      <p>Total {totalAmount}</p>
      <button onClick={handleReset}>Reset</button>
    </div>
    </div>
  );
}

export default App;
