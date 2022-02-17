document.getElementById('calculate-button').addEventListener('click',function(event){
    event.preventDefault();
    const totalIncome = document.getElementById('income-input');
    const incomeAmount = totalIncome.value;
    const foodExpense = document.getElementById('food-expense-input');
    const foodExpenseAmount = foodExpense.value;
    const rentExpense = document.getElementById('rent-expense-input');
    const rentExpenseAmount = rentExpense.value;
    const clothesExpense = document.getElementById('clothes-expense-input');
    const clothesExpenseAmount = clothesExpense.value;
    const totalExpensesAmount = parseFloat(foodExpenseAmount )  + parseFloat(rentExpenseAmount)  + parseFloat(clothesExpenseAmount);
    
   
})

// incomeAmount * (percentage / 100)