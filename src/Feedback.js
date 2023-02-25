// import './styles/style.css'

const Feedback = () => {
    return (
        <div>
            <h1>Send Us Feedback</h1>
            <form action="">
                <fieldset>
                    <label for="firstName">First Name: </label>
                    <input type="text" name="firstName" id="" required /><br />
                    <label for="lastName">Last Name: </label>
                    <input type="text" name="lastName" id="" required /><br />
                    <label for="email">Email Address: </label>
                    <input type="email" name="email" id="" required /><br />
                    <label for="location">Location (Optional): </label>
                    <input type="text" name="" id="" /><br />
                    <label for="message">Message: </label>
                    <input type="text" name="message" id="" required />

                </fieldset>
            </form>
            <hr />
        </div>
    )
}

export default Feedback