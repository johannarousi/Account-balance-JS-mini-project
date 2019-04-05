const personAccount = {
  firstName: "Johanna",
  lastName: "Rousi",
  incomes: { mainJob: 5000, sideJob: 600, passiveIncome: 800 },
  expenses: { rent: 500, food: 400, transport: 150, hobbies: 100 },
  totalIncomes: function() {
    return (
      this.incomes.mainJob + this.incomes.sideJob + this.incomes.passiveIncome
    );
  },
  totalExpenses: function() {
    return (
      this.expenses.rent +
      this.expenses.food +
      this.expenses.transport +
      this.expenses.hobbies
    );
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
