'use strict';

let money = prompt("Ваш бюджет на месяц?", " "),
    time = prompt("Введите дату в формате YYYY-MM-DD", " ");

    console.log(money);
    console.log(time);

let appData = {
    cash: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};
let q1 = prompt("Введите обязательную статью расходов в этом месяце"," "),
let q2 = prompt("Во сколько обойдется?"," "),
let q3 = prompt("Введите обязательную статью расходов в этом месяце"," "),
let q4 = prompt("Во сколько обойдется?"," ");

appData.expenses.q1 = q2;
appData.expenses.q3 = q4;

    alert(appData.cash / 30);

//console.log(appData.cash);
