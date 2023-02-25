// import './styles/style.css'

const App = () => {
  const x = 3

  const pullData = (event) => {
    event.preventDefault()
    // make data base call to grab data with this query
    // need to re-render page
  }

  return (
    <div className="container">
      <h1>Welcome!</h1>
      <form>
        <div className="form-group">
          <label for="Zip_code">Enter Zip Code: </label>
          <input type="text" placeholder="00000" pattern="[0-9]{5,5}" className="form-control" /><br />
          <button class="btn btn-primary" type="submit">Submit</button>
        </div>
      </form>
    </div >
  )
}

export default App