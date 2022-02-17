function getValues(inputValue){
    const totalIncome = document.getElementById('income-input');
    const incomeAmount = totalIncome.value;
    const foodExpense = document.getElementById('food-expense-input');
    const foodExpenseAmount = foodExpense.value;
    const rentExpense = document.getElementById('rent-expense-input');
    const rentExpenseAmount = rentExpense.value;
    const clothesExpense = document.getElementById('clothes-expense-input');
    const clothesExpenseAmount = clothesExpense.value;
    const totalExpensesAmount = parseFloat(foodExpenseAmount )  + parseFloat(rentExpenseAmount)  + parseFloat(clothesExpenseAmount);
    const balance = parseFloat(incomeAmount)  - totalExpensesAmount;
    const balanceAmount = document.getElementById('balance-amount');
    const balanceAmountText = balanceAmount.innerText;
    balanceAmount.innerText = parseFloat(balanceAmountText) + balance;


    const expenseAmount = document.getElementById('expense-amount');
   const expenseAmountText = expenseAmount.innerText;
   expenseAmount.innerText = parseFloat(expenseAmountText)  + totalExpensesAmount;
   totalIncome.value = '';
    foodExpense.value = '';
    rentExpense.value = '';
    clothesExpense.value = '';
    // return totalExpensesAmount;
}


document.getElementById('calculate-button').addEventListener('click',function(){
    getValues()
    
    // const savingInput = document.getElementById('saving-input');
    // const savingPercentage = savingInput.value;
    // const savingAmount = incomeAmount * (savingPercentage / 100);
    // console.log(savingAmount);
    
   
// })
// // document.getElementById('save-button').addEventListener('click', function(){

})