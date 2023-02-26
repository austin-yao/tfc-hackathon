// import './styles/style.css'
import './styles/map.css'
import axios from 'axios'
import { useState, useEffect } from 'react'
import map from './deps/mapsnathan.jpeg'
import Map from './Map.js'
import GoogleMapReact from 'google-map-react';
import { Icon } from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/map-marker'
import { Container } from 'react-bootstrap'

const App = () => {
  const x = 3
  const [zipCode, setZipCode] = useState(0)

  let display = null
  const [display2, setDisplay2] = useState(null)

  const submit = (event) => {
    event.preventDefault()
    console.log(event.target.zipcode.value)
    setZipCode(Number(event.target.zipcode.value))
  }

  useEffect(() => {
    if (zipCode > 1000) {
      const url = `http://localhost:8080/Zip_code/${zipCode}`
      console.log(url)
      axios
        .get(url)
        .then((response) => {
          console.log(23)
          console.log(response.data)
          setDisplay2(<div className="container"><ul> {response.data.map(loc => <li><b>{loc.name}</b><br /> Wait Time: {loc.Wait_time} minutes</li>)} </ul><Map locations={response.data} /></div>)
        }).catch((error) => {
          console.log("HERE")
          console.log(error)
          setDisplay2(<div><h1>Fail</h1></div>)
        })
    } else {
      setDisplay2(null)
    }
  }, [zipCode])



  const handleBackChange = () => {
    setZipCode(0)
    setDisplay2(null)
  }

  if (zipCode < 1000) {
    display = (<form onSubmit={submit}>
      <div className="form-group">
        <label for="Zip_code">Enter Zip Code: </label>
        <input name="zipcode" type="text" placeholder="00000" pattern="[0-9]{5,5}" className="form-control" /><br />
        <button class="btn btn-primary" type="submit">Submit</button>
      </div>
    </form>)
  }

  return (
    <div className="container">
      <h1>Welcome!</h1>
      {display}
      {display2}
      {zipCode > 1000 &&
        <button class="btn btn-primary" onClick={handleBackChange}>Back</button>
      }
    </div >
  )
}

export default App