// GLOBAL VARIABLES
const descriptionInput = document.querySelector(".description-input");
const amountInput = document.querySelector(".amount-input");
const selectInput = document.querySelector(".income-or-expense");
const addButton = document.querySelector(".add-button");
const incomeDiv = document.querySelector(".income-div");
const expenseDiv = document.querySelector(".expense-div");
const resultText = document.querySelector(".result-text");
const incomeUl = document.querySelector(".income-ul");
const expenseUl = document.querySelector(".expense-ul");

const displayDateTime = () => {
  let now = new Date();
  let year = now.getFullYear();
  let month = now.getMonth() + 1;
  let date = now.getDate();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  if (hours < 10) {
    hours = "0" + hours;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  let dateMonthYear = date + "." + month + "." + year;
  let time = hours + ":" + minutes;
  let fullTime = dateMonthYear + " " + time;
  return fullTime;
};

// save inputs
const saveInputs = e => {
  e.preventDefault();
  let descValue = descriptionInput.value;
  let amountValue = amountInput.value;
  let selectValue = selectInput.value;

  let inputs = {
    id: selectValue,
    description: descValue,
    amount: amountValue,
    time: displayDateTime()
  };

  // show the added inputs when clicked
  const createNewInput = obj => {
    let { id, description, amount, time } = obj;
    let incomeorexpense = `<li>
      <span>${description}</span>
      <span>${amount} €</span>
      <span>${time}</span>
    </li>
    `;
    if (id == "income") {
      incomeUl.insertAdjacentHTML("beforeend", incomeorexpense);
    } else if (id == "expense") {
      expenseUl.insertAdjacentHTML("beforeend", incomeorexpense);
    }
  };
  createNewInput(inputs);

  // Store the new input and old inputs to local storage
  // Test if inputs is null
  if (localStorage.getItem("storedInputs") === null) {
    let storedInputs = [];
    // Init array
    storedInputs.push(inputs);
    // Set to local storage, if the item we want to save is not a string we have to stringify it
    localStorage.setItem("storedInputs", JSON.stringify(storedInputs));
  } else {
    // Get storedInputs from local storage
    let inputsFromLs = JSON.parse(localStorage.getItem("storedInputs"));
    // add inputs from local storage to an arrey
    inputsFromLs.push(inputs);
    // Re-set back to local storage
    localStorage.setItem("storedInputs", JSON.stringify(inputsFromLs));
  }
  // count account balance
  countBalance();
  // Empty the input fields
  descriptionInput.value = "";
  amountInput.value = "";
};

const createContent = obj => {
  let { description, amount, time } = obj;

  return `<li>
  <span>${description}</span>
  <span>${amount} €</span>
  <span>${time}</span>
</li>
`;
};

function showStoredInputs() {
  let inputsFromLs = JSON.parse(localStorage.getItem("storedInputs"));
  if (inputsFromLs) {
    console.log(inputsFromLs);
    incomeUl.innerHTML = "";
    expenseUl.innerHTML = "";
    let contentsIncome = "";
    let contentsExpense = "";
    inputsFromLs.forEach(input => {
      if (input.id == "income") {
        contentsIncome += createContent(input);
        incomeUl.innerHTML = contentsIncome;
      } else if (input.id == "expense") {
        contentsExpense += createContent(input);
        expenseUl.innerHTML = contentsExpense;
      }
    });
  } else {
    return inputsFromLs;
  }
}

// show all previous inputs when the page has loaded
showStoredInputs();

const countBalance = () => {
  let inputsFromLs = JSON.parse(localStorage.getItem("storedInputs"));
  let sumI = 0;
  let sumE = 0;
  let balance;
  if (inputsFromLs === null) {
    resultText.innerHTML = `This account is for ${personAccount.firstName} ${
      personAccount.lastName
    }. Account Balance is: 0.`;
  } else {
    inputsFromLs.forEach(input => {
      if (input.id === "income") {
        sumI = sumI + Number(input.amount);
      } else {
        sumE = sumE + Number(input.amount);
      }
    });
  }
  balance = sumI - sumE;

  resultText.innerHTML = `This account is for ${personAccount.firstName} ${
    personAccount.lastName
  }. Account Balance is: ${balance}.`;
};
countBalance();
addButton.addEventListener("click", saveInputs);
// localStorage.clear();
