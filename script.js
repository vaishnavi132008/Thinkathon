// LOGIN

const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const username =
        document.getElementById("username").value;

    const password =
        document.getElementById("password").value;

    if (username === "student" && password === "1234") {

        document.getElementById("loginPage").style.display = "none";

        document.getElementById("portalPage").style.display = "block";

        document.getElementById("loginMessage").textContent = "";

        showSection("addSection");

    } else {

        document.getElementById("loginMessage").textContent =
            "Invalid Username or Password";

    }

});


// SHOW SECTION

function showSection(sectionId) {

    document.getElementById("addSection")
        .classList.add("hidden");

    document.getElementById("recordsSection")
        .classList.add("hidden");

    document.getElementById(sectionId)
        .classList.remove("hidden");

    if (sectionId === "recordsSection") {

        displayRecords();

    }
}


// ADD RECORD

const outingForm =
    document.getElementById("outingForm");

outingForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const record = {

        name: document.getElementById("name").value,

        rollNo: document.getElementById("rollNo").value,

        outDate: document.getElementById("outDate").value,

        outTime: document.getElementById("outTime").value,

        travelMode:
            document.getElementById("travelMode").value,

        destination:
            document.getElementById("destination").value,

        purpose:
            document.getElementById("purpose").value,

        returnDate:
            document.getElementById("returnDate").value,

        returnTime:
            document.getElementById("returnTime").value

    };


    // Get existing records

    let records =
        JSON.parse(localStorage.getItem("travelRecords")) || [];


    // Add new record

    records.push(record);


    // Save records

    localStorage.setItem(
        "travelRecords",
        JSON.stringify(records)
    );


    document.getElementById("saveMessage").textContent =
        "Details saved successfully";


    // Clear form

    outingForm.reset();

});


// DISPLAY RECORDS

function displayRecords() {

    const container =
        document.getElementById("recordsContainer");

    let records =
        JSON.parse(localStorage.getItem("travelRecords")) || [];


    container.innerHTML = "";


    if (records.length === 0) {

        container.innerHTML =
            "<p>No records found</p>";

        return;

    }


    records.forEach(function(record, index) {

        const card =
            document.createElement("div");

        card.className = "record-card";

        card.innerHTML = `

            <h3>Travel Record ${index + 1}</h3>

            <p>
                <strong>Name:</strong>
                ${record.name}
            </p>

            <p>
                <strong>Roll No:</strong>
                ${record.rollNo}
            </p>

            <p>
                <strong>Out Date:</strong>
                ${record.outDate}
            </p>

            <p>
                <strong>Out Time:</strong>
                ${record.outTime}
            </p>

            <p>
                <strong>Travel Mode:</strong>
                ${record.travelMode}
            </p>

            <p>
                <strong>Destination:</strong>
                ${record.destination}
            </p>

            <p>
                <strong>Purpose:</strong>
                ${record.purpose}
            </p>

            <p>
                <strong>Return Date:</strong>
                ${record.returnDate}
            </p>

            <p>
                <strong>Return Time:</strong>
                ${record.returnTime}
            </p>

        `;

        container.appendChild(card);

    });

}


// LOGOUT / EXIT

function logout() {

    document.getElementById("portalPage").style.display =
        "none";

    document.getElementById("loginPage").style.display =
        "flex";

    document.getElementById("loginForm").reset();

    document.getElementById("outingForm").reset();

    document.getElementById("saveMessage").textContent = "";

}



Js
