import { useState, useEffect } from 'react'

import App from './App.js'
import Feedback from './Feedback.js'
import Nav from './Nav'

const Main = () => {
    const [feedback, setFeedback] = useState(false)
    const pageToShow = feedback ? <Feedback /> : <App />
    const changePage = () => {
        console.log("here")
        setFeedback(!feedback)
    }
    return (
        <div>
            <Nav />
        </div>
    )
}

export default Main