// import './styles/style.css'
import axios from 'axios'
import { useState, useEffect } from 'react'

const App = () => {
  const x = 3
  const [zipCode, setZipCode] = useState(0)

  let display

  const submit = (event) => {
    event.preventDefault()
    console.log(event.target.zipcode.value)
    setZipCode(Number(event.target.zipcode.value))
  }

  const pullData = () => {
    // axios .get('http://localhost:8000', { params: { zipcode: zipCode } }).then((response) => {
    // list of locations and wait-times. need to put onto google maps API
    // }).catch((error) => {
    // console.log(error)
    // })
    return (<div><h1>Hello</h1></div>)
  }

  const handleBackChange = () => {
    setZipCode(0)
  }

  if (zipCode < 10000) {
    display = (<form onSubmit={submit}>
      <div className="form-group">
        <label for="Zip_code">Enter Zip Code: </label>
        <input name="zipcode" type="text" placeholder="00000" pattern="[0-9]{5,5}" className="form-control" /><br />
        <button class="btn btn-primary" type="submit">Submit</button>
      </div>
    </form>)
  } else {
    console.log(zipCode)
    display = pullData()
  }

  return (
    <div className="container">
      <h1>Welcome!</h1>
      {display}
      {console.log(zipCode)}
      {zipCode > 9999 &&
        <button class="btn btn-primary" onClick={handleBackChange}>Back</button>
      }
    </div >
  )
}

export default App