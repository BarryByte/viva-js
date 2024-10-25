// HTML for form to add a transaction
<form id="transactionForm">
    <label for="type">Type:</label>
    <select id="type">
      <option value="credit">Income</option>
      <option value="debit">Expense</option>
    </select>
    <label for="amount">Amount:</label>
    <input type="number" id="amount" required>
    <button type="submit">Add Transaction</button>
  </form>

// HTML for displaySummary
<div id="summary">
    <h3>Summary</h3>
    <p>Total Income: <span id="total-income">0</span></p>
    <p>Total Expense: <span id="total-expense">0</span></p>
    <p>Balance: <span id="balance">0</span></p>
  </div>


// Logic 

// first initialise an empty list which will store all the transactions.
// Now there are 3 functions addTransaction, calculateTotal and displaySummary
// there can be two types of transactions credit and debit
// we will maintain 3 variables currentBalance, totalIncome and totalExpense to manage the balance
// addTransaction function will take two arguments type and amount
// if the type is credit then add the amount to the current balance
// if the type is debit then subtract the amount from the current balance
// add the transaction to the list of transactions

// calculateTotal function will calculate the total income, total expense and the balance every time a transaction happens
// displaySummary function will display the total income, total expense and the balance in the HTML


const transaction = [];
let currentBalance = 0;
let totalIncome = 0;
let totalExpense = 0;
function addTransaction(type, amount) {
  transaction.push({ type, amount });
  if (type === "credit") {
    currentBalance += amount;
    totalIncome += amount;
  } else {
    currentBalance -= amount;
    totalExpense += amount;
  }
  calculateTotal();
}

function calculateTotal() {
  displaySummary(totalIncome, totalExpense, currentBalance);
}

function displaySummary(totalIncome, totalExpense, balance) {
  document.getElementById("total-income").textContent = totalIncome;
  document.getElementById("total-expense").textContent = totalExpense;
  document.getElementById("balance").textContent = balance;
}
