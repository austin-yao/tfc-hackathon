// import './styles/style.css'
import face from './deps/face.png'

const App = () => {
  const x = 3
  return (
    <div>
      <h1>Welcome!</h1>
      <form>
        <label for="Zip_code">Enter Zip Code: </label>
        <input type="text" placeholder="00000" pattern="[0-9]{5,5}" /><br />
        <label for="location">Enter Location: </label>
        <input type="text" placeholder="--my Location--" /><br />
        <input type="submit" value="Submit" class="submit" />
      </form>
      <hr />
      <footer>
        &copy;votingq | By TFC | <a href="">Terms and Conditions</a> | <a href="">Privacy</a> <a href=""><img
          src={face} alt="Facebook" width="20px" /></a>
      </footer>
    </div >
  )
}

export default App