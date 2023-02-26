import axios from 'axios'
import { useState, useEffect } from 'react'

const CheckIn = () => {
    const [checkInCount, setCheckInCount] = useState(0)
    const [checkOutCount, setCheckOutCount] = useState(0)
    const [peopleAvailable, setPeopleAvailable] = useState(0)

    // useEffect(() => {
    //     axios
    //         .get('http://localhost:8080')
    //         .then((response) => {
    //             setCheckInCount(response.checkInCount)
    //             setCheckOutCount(response.checkOutCount)
    //             setPeopleAvailable(response.peopleAvailable)
    //         })
    // }, [])

    // useEffect(() => {
    //     const connection = mysql.createConnection({
    //         host: 'hackathon.czqw02dfjhzq.us-east-2.rds.amazonaws.com',
    //         user: 'hackathon',
    //         password: 'testtest',
    //         database: 'LOCATIONS_DB'
    //     });

    //     connection.connect((error) => {
    //         if (error) {
    //             console.error('Error connecting to database:', error);
    //         } else {
    //             console.log('Connected to database');
    //         }
    //     });

    //     return () => {
    //         connection.end((error) => {
    //             if (error) {
    //                 console.error('Error disconnecting from database:', error);
    //             } else {
    //                 console.log('Disconnected from database');
    //             }
    //         });
    //     }
    // }, []);

    // useEffect(() => {
    //     const connection = mysql.createConnection({
    //         host: 'hackathon.czqw02dfjhzq.us-east-2.rds.amazonaws.com',
    //         user: 'hackathon',
    //         password: 'testtest',
    //         database: 'LOCATIONS_DB'
    //     });
    //     connection.query('UPDATE NUMBERS SET number = checkInCount WHERE count = "CheckInCount"; UPDATE NUMBERS SET number = checkOutCount WHERE count = "CheckOutCount"; UPDATE NUMBERS SET number = checkInCount-checkOutCount WHERE count = "peopleAvailable"',
    //         (error, results, fields) => {
    //             if (error) {
    //                 console.error('Error updating count:', error);
    //             } else {
    //                 console.log('Count updated');
    //             }
    //         });
    // }, [checkInCount, checkOutCount]);




    useEffect(() => {
        if (checkInCount < checkOutCount) {
            setPeopleAvailable(0)
        } else {
            setPeopleAvailable(checkInCount - checkOutCount)
        }
    }, [checkInCount, checkOutCount])

    const checkIn = (event) => {
        event.preventDefault()
        const type = event.target.checkInOut.value
        console.log(type)
        if (type == "checkIn") {
            setCheckInCount(checkInCount + 1);
            setPeopleAvailable(checkInCount - checkOutCount)
        } else {
            setCheckOutCount(checkOutCount + 1);
            setPeopleAvailable(checkInCount - checkOutCount)
        }
    }

    return (
        <div className="container">
            <h1>Check In/Out</h1>
            <form onSubmit={checkIn}>
                <label for="checkInOut">Select Check In or Check Out:</label>
                <select class="form-control" id="checkInOut">
                    <option value="checkIn">Check In</option>
                    <option value="checkOut">Check Out</option>
                </select>
                <br /><br />
                <div className="form-group">
                    <label for="voterID">Enter Voter ID:</label>
                    <input placeholder="12345678" class="form-control" type="text" id="voterID" />
                </div>
                <input type="hidden" value="123" />
                <br />
                <button class="btn btn-primary" type="submit">Check</button>
            </form>
            <br /><br />
            <h2>Check In/Out Count:</h2>
            <p>Check Ins: <span id="checkInCount">{checkInCount}</span></p>
            <p>Check Outs: <span id="checkOutCount">{checkOutCount}</span></p>
            <p>People Available: <span id="peopleAvailable">{peopleAvailable}</span></p>
        </div >
    )
}

export default CheckIn