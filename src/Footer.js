import face from './deps/face.png'
const Footer = () => {
    return (
        <div className="container">
            <hr />
            <footer>
                &copy;votingq | By TFC | <a href="">Terms and Conditions</a> | <a href="">Privacy</a> <a href=""><img
                    src={face} alt="Facebook" width="20px" /></a>
            </footer>
        </div>
    )
}

export default Footer