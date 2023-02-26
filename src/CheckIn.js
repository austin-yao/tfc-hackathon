const CheckIn = () => {
    return (
        <div>
            <h1>Check In/Out</h1>
            <label for="checkInOut">Select Check In or Check Out:</label>
            <select id="checkInOut">
                <option value="checkIn">Check In</option>
                <option value="checkOut">Check Out</option>
            </select>
            <br /><br />
            <label for="voterID">Enter Voter ID:</label>
            <input type="text" id="voterID" />
            <button onclick="check()">Check</button>
            <br /><br />
            <h2>Check In/Out Count:</h2>
            <p>Check Ins: <span id="checkInCount">0</span></p>
            <p>Check Outs: <span id="checkOutCount">0</span></p>
            <p>People Available: <span id="peopleAvailable">0</span></p>

            <script>
                let checkInCount = 0;
                let checkOutCount = 0;

                function check() {
                    let checkInOut = document.getElementById("checkInOut").value;
                let voterID = document.getElementById("voterID").value;

                if (checkInOut === "checkIn") {
                    checkInCount++;
} else if (checkInOut === "checkOut") {
                    checkOutCount++;
}

                document.getElementById("checkInCount").innerHTML = checkInCount;
                document.getElementById("checkOutCount").innerHTML = checkOutCount;

                let peopleAvailable = checkInCount - checkOutCount;
                document.getElementById("peopleAvailable").innerHTML = peopleAvailable;
}
            </script>
        </body>
        </div >
    )
}