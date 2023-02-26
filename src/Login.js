const Login = () => {
    return (
        <body class="container">
            <form action="checkin.html">
                <div class="form-group">
                    <label for="">Enter First Name: </label>
                    <input type="text" class="form-control" /><br />
                </div>
                <div class="form-group">
                    <label for="">Enter Last Name: </label>
                    <input type="text" class="form-control" /><br />
                </div>
                <div class="form-group">
                    <label for="">Email Address: </label>
                    <input type="email" name="" id="" class="form-control" /><br />
                </div>
                <div class="form-group">
                    <label for="">Volunteer verification code: </label>
                    <input type="text" name="" id="" pattern="[0-9]{5,5}" class="form-control" /><br />
                </div>
                <input type="submit" class="btn btn-primary" value="Submit" />
            </form>
        </body>
    )
}

export default Login