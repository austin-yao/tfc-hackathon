import { useState, useEffect } from 'react'

import App from './App.js'
import Feedback from './Feedback.js'
import Navigation from './Nav'
import Footer from './Footer'

const Main = () => {
    const [feedback, setFeedback] = useState(false)
    const pageToShow = feedback ? <Feedback /> : <App />
    const changePage = () => {
        console.log("here")
        setFeedback(!feedback)
    }
    return (
        <div>
            <Navigation />
            <Footer />
        </div>
    )
}

export default Main