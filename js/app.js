function getValues(){
    // getting all the element by id 
    const totalIncome = document.getElementById('income-input');
    const incomeAmount = totalIncome.value;
    const foodExpense = document.getElementById('food-expense-input');
    const foodExpenseAmount = foodExpense.value;
    const rentExpense = document.getElementById('rent-expense-input');
    const rentExpenseAmount = rentExpense.value;
    const clothesExpense = document.getElementById('clothes-expense-input');
    const clothesExpenseAmount = clothesExpense.value;

    // calculation for total expenses 
    const totalExpensesAmount = parseFloat(foodExpenseAmount )  + parseFloat(rentExpenseAmount)  + parseFloat(clothesExpenseAmount);

    // calculation for balance 
    const balance = parseFloat(incomeAmount)  - totalExpensesAmount;
    const balanceAmount = document.getElementById('balance-amount');
    const balanceAmountText = balanceAmount.innerText;

    // balance amount with previous 
    balanceAmount.innerText = parseFloat(balanceAmountText) + balance;

    // expense amount with previuos 
    const expenseAmount = document.getElementById('expense-amount');
    const expenseAmountText = expenseAmount.innerText;
    expenseAmount.innerText = parseFloat(expenseAmountText)  + totalExpensesAmount;

    if(totalExpensesAmount>incomeAmount){
        document.getElementById('short-income').style.display = 'block';
    } 
}
// for perncentage saving 
function savings (){
    const totalIncome = document.getElementById('income-input');
    const incomeAmount = totalIncome.value;
    const savingPercentage = document.getElementById('saving-input');
    const savingPercentageAmount = savingPercentage.value;

    // calculating saving amount perncentage based 
    const savingAmount = parseFloat(incomeAmount) *  ( parseFloat(savingPercentageAmount) / 100);
    const savingAmountPercent = document.getElementById('saving-amount-percent');
    savingAmountPercent.innerText = savingAmount;
    const foodExpense = document.getElementById('food-expense-input');
    const foodExpenseAmount = foodExpense.value;
    const rentExpense = document.getElementById('rent-expense-input');
    const rentExpenseAmount = rentExpense.value;
    const clothesExpense = document.getElementById('clothes-expense-input');
    const clothesExpenseAmount = clothesExpense.value;

    // calculating total expenses 
    const totalExpensesAmount = parseFloat(foodExpenseAmount )  + parseFloat(rentExpenseAmount)  + parseFloat(clothesExpenseAmount);
    const balance = parseFloat(incomeAmount)  - totalExpensesAmount;
    const finalBalance = document.getElementById('final-balance');
    const finalBalanceText = finalBalance.innerText;
    finalBalance.innerText = balance - savingAmount;

    // error condition 
    if(savingAmount>balance){
        document.getElementById('short-balance').style.display = 'block';
    }

// clearing the input field 
    totalIncome.value = '';
    foodExpense.value = '';
    rentExpense.value = '';
    clothesExpense.value = '';
    savingPercentage.value = '';
}

// function calling 
document.getElementById('calculate-button').addEventListener('click',function(){
    getValues();
})
document.getElementById('save-button').addEventListener('click',function(){
    savings();
})



