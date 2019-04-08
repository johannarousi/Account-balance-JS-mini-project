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

const personAccount = {
  firstName: "Johanna",
  lastName: "Rousi",
  incomes: [
    {
      id: "income",
      description: "salary",
      amount: 3500,
      time: displayDateTime()
    },
    {
      id: "income",
      description: "side-job",
      amount: 600,
      time: displayDateTime()
    },
    {
      id: "income",
      description: "passiveIncome",
      amount: 800,
      time: displayDateTime()
    }
  ],
  expenses: [
    {
      id: "expense",
      description: "rent",
      amount: 500,
      time: displayDateTime()
    },
    {
      id: "expense",
      description: "transport",
      amount: 150,
      time: displayDateTime()
    },
    {
      id: "expense",
      description: "hobbies",
      amount: 100,
      time: displayDateTime()
    }
  ],
  totalIncomes: function() {
    let sum = 0;
    this.incomes.forEach(income => (sum += income.amount));
    return sum;
  },
  totalExpenses: function() {
    let sum = 0;
    this.expenses.forEach(expense => (sum += expense.amount));
    return sum;
  },
  accountInfo: function() {
    return `Total of incomes: ${this.totalIncomes()}\nTotal of expenses: ${this.totalExpenses()}`;
  },
  addIncome: function(property, value) {
    return (this.incomes.property = value);
  },
  addExpence: function(property, value) {
    return (this.expenses.property = value);
  },
  accountBalance: function() {
    return this.totalIncomes() - this.totalExpenses();
  }
};
// console.log(personAccount);
// console.log(personAccount.accountBalance());
console.log(personAccount.totalExpenses());
