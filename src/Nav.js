import {
    BrowserRouter as Router,
    Routes, Route, Link
} from 'react-router-dom'
import Main from './Main'
import Feedback from './Feedback'
import App from './App'


const Nav = () => {
    const padding = {
        padding: 5
    }

    return (
        <Router>
            <div>
                <Link style={padding} to='/'>Home</Link>
                <Link style={padding} to='/help'>Help</Link>
                <Link style={padding} to='/contact'>Contact</Link>
            </div>

            <Routes>
                <Route path='/' element={<App />}></Route>
                <Route path='/help' element={<App />}></Route>
                <Route path='/contact' element={<Feedback />}></Route>
            </Routes>
        </Router>
    )
}

export default Nav