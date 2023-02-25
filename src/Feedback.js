// import './styles/style.css'

const Feedback = () => {
    return (
        <div className="container">
            <h1>Send Us Feedback</h1>
            <form action="">
                <fieldset>
                    <div className="form-group">
                        <label for="firstName">First Name: </label>
                        <input type="text" name="firstName" id="" required className="form-control" /><br />
                    </div>
                    <div className="form-group">
                        <label for="lastName">Last Name: </label>
                        <input type="text" name="lastName" id="" required className="form-control" /><br />
                    </div>
                    <div className="form-group">
                        <label for="email">Email Address: </label>
                        <input type="email" name="email" id="" required className="form-control" /><br />
                    </div>
                    <div className="form-group">
                        <label for="location">Location (Optional): </label>
                        <input type="text" name="" id="" className="form-control" /><br />
                    </div>
                    <div className="form-group">
                        <label for="message">Message: </label>
                        <input type="text" name="message" id="" required className="form-control" />
                    </div>
                </fieldset>
            </form>
        </div>
    )
}

export default Feedback