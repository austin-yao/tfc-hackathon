import {
    BrowserRouter as Router,
    Routes, Route, Link
} from 'react-router-dom'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Main from './Main'
import Feedback from './Feedback'
import App from './App'
import CheckIn from './CheckIn'
import Login from './Login'


const Navigation = () => {
    const padding = {
        padding: 5
    }

    return (

        <Router>
            <div className="container">
                <Navbar collapseOnSelect bg="light" variant="light">
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#" as="span">
                                <Link style={padding} to='/'>Home</Link>
                            </Nav.Link>
                            <Nav.Link href="#" as="span">
                                <Link style={padding} to='/checkin'>Check In</Link>
                            </Nav.Link>
                            <Nav.Link href="#" as="span">
                                <Link style={padding} to='/contact'>Contact</Link>
                            </Nav.Link>
                            <Nav.Link href="#" as="span">
                                <Link style={padding} to='/login'>Volunteer Login</Link>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
            <Routes>
                <Route path='/' element={<App />}></Route>
                <Route path='/checkin' element={<CheckIn />}></Route>
                <Route path='/contact' element={<Feedback />}></Route>
                <Route path='/login' element={<Login />}></Route>
            </Routes>
        </Router>
    )
}

export default Navigation