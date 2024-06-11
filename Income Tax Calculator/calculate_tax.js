"use strict";
const $ = selector => document.querySelector(selector);

var income;

const processEntry = () => {
	income = parseInt($("#income").value);
	if (isNaN(income) || income < 0) {
		alert("Please, enter a valid number format and greater than 0. ");
		$("#income").value = "";
		$("#income").focus;
	}
	calculateTax();
}
//Amor da vida...Deus nos Abençoa
const calculateTax = () => {
	let incomeTax;

	if (income >= 0 && income <= 9225) {
		$("#tax").value = income * (10 / 100).toFixed(2);
	}
	else if (income > 9225 && income <= 37450) {
		incomeTax = parseFloat(((9225 * 10 / 100) + ((income - 9225) * 15 / 100)).toFixed(2));
		$("#tax").value = (incomeTax);
	}
	else if (income > 37450 && income <= 90750) {
		incomeTax = parseFloat(((9225 * 10 / 100) + ((37450 - 9225) * 15 / 100) + ((income - 37450) * 25 / 100)).toFixed(2));
		$("#tax").value = (incomeTax);
	}
	else if (income > 90750 && income <= 189300) {
		incomeTax = parseFloat(((9225 * 10 / 100) + ((37450 - 9225) * 15 / 100) + ((90750 - 37450) * 25 / 100) + ((income - 90750) * 28 / 100)).toFixed(2));
		$("#tax").value = (incomeTax);
	}
	else if (income > 189300 && income <= 411500) {
		incomeTax = parseFloat((((9225 * 10 / 100)) + ((37450 - 9225) * 15 / 100) + ((90750 - 37450) * 25 / 100) + ((189300 - 90750) * 28 / 100) + ((income - 189300) * 33 / 100)).toFixed(2));
		$("#tax").value = (incomeTax);
	}
	else if (income > 411500 && income <= 413200) {
		incomeTax = parseFloat(((9225 * 10 / 100) + ((37450 - 9225) * 15 / 100) + ((90750 - 37450) * 25 / 100) + ((189300 - 90750) * 28 / 100) + ((411500 - 189300) * 33 / 100) + ((income - 411500) * 35 / 100)).toFixed(2));
		$("#tax").value = (incomeTax);
	}
	else if (income > 413200) {
		incomeTax = parseFloat(((9225 * 10 / 100) + ((37450 - 9225) * 15 / 100) + ((90750 - 37450) * 25 / 100) + ((189300 - 90750) * 28 / 100) + ((411500 - 189300) * 33 / 100) + ((413200 - 411500) * 35 / 100) + ((income - 413200) * 39.6 / 100)).toFixed(2));
		$("#tax").value = (incomeTax);
	}
}

document.addEventListener("DOMContentLoaded", () => {
	// add event handlers
	$("#calculate").addEventListener("click", processEntry);
	$("#income").focus;
});