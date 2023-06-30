function login() {
    window.location='./homeindex.html';
}

function signup() {
    window.location='./signupindex.html';
}

function loginredirect() {
    window.location='./index.html';
}

function register() {
    
    username = reg_username.value
    emailid = reg_emailid.value
    password1 = reg_password1.value
    password2 = reg_password2.value
    
    userDetails = {
        username,
        emailid,
        password1,
        password2
    }

    if (username in localStorage)  {
        alert("Username already exist")
    } else if (emailid in localStorage) {
        alert("Email Id already exist")
    } else if (password1 !== password2) {
        alert("Password is not equal")
    } else {
        localStorage.setItem(username,JSON.stringify(userDetails))
        localStorage.setItem(emailid,JSON.stringify(userDetails))
        alert("SignUp successful")
        window.location='./index.html';
    }
}

function login() {

    userid = login_userid.value;
    password = login_password.value;

    if (userid in localStorage) {
        userDetails = JSON.parse(localStorage.getItem(userid))
        if (password == userDetails.password1) {
            alert("Login successful")
            window.location = "./homeindex.html"
        } else {
            alert("invalid password")
        }
    } else {
        alert("invalid username or password")
    }
}

function logout() {
    window.location = "./index.html"
}

function displayIncome() {
    
    let inputText = document.getElementById("inputIncomeText").value;
    let inputValue = document.getElementById("inputIncome").value;
    let inputDate = document.getElementById("inputIncomeDate").value;
    let inputTime = document.getElementById("inputIncomeTime").value;
    let savings = document.getElementById("savings").innerHTML;
    
    if ((inputText == + "") || (inputValue == + "")) {
        alert("Add Atleast First Two Inputs.")
    } else {

        document.getElementById("savings").innerHTML = Number(savings) + Number(inputValue);
        document.getElementsByClassName("accordion-body-table1")[0].innerHTML += 
        `
        <tr class="accordion-body">
            <td>${inputText}:</td>
            <td>${inputValue}</td>
            <td>${inputDate}</td>
            <td>${inputTime}</td>
        </tr>
        `
    }
}

function clearIncomeHistory() {

    let removeIncome = document.getElementsByClassName("accordion-body-table1");
    for (let i in removeIncome) {
    removeIncome[i].innerHTML = 
    `
    <tr class="accordion-body">
        <th>Income info</th>
        <th>Amount</th>
        <th>Date of the day</th>
        <th>Time of the day</th>
    </tr>
    `
    }
}

function buttonReset() {
    document.getElementById("savings").innerHTML = "0"
}

function displayExpense() {

    let inputText = document.getElementById("inputExpenseText").value;
    let inputValue = document.getElementById("inputExpense").value;
    let inputDate = document.getElementById("inputExpenseDate").value;
    let inputTime = document.getElementById("inputExpenseTime").value;
    let savings = document.getElementById("savings").innerHTML;
    
    if ((inputText == + "") || (inputValue == + "")) {
        alert("Add Atleast First Two Inputs.")
    } else {

        document.getElementById("savings").innerHTML = Number(savings) - Number(inputValue);
        document.getElementsByClassName("accordion-body-table2")[0].innerHTML += 
        `
        <tr class="accordion-body">
            <td>${inputText}:</td>
            <td>${inputValue}</td>
            <td>${inputDate}</td>
            <td>${inputTime}</td>
        </tr>
        `
    }
}

function clearExpenseHistory() {

    let removeExpense = document.getElementsByClassName("accordion-body-table2");
    for (let i in removeIncome) {
    removeExpense[i].innerHTML = 
    `
    <tr class="accordion-body">
        <th>Expense info</th>
        <th>Amount</th>
        <th>Date of the day</th>
        <th>Time of the day</th>
    </tr>
    `
    }
}


