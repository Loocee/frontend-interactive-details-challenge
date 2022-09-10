$(document).ready(function () {

const name = $("#input-name");
const number = $("#input-number");
const month = $("#input-month");
const year = $("#input-year");
const cvc = $("#input-cvc");
const submit = $("#submit");
const numberOutput = $("#number-output");
const nameOutput = $("#name-output");
const dateOutput = $("#date-output");
const cvcOutput = $("#cvc-output");
const form = $("#fill");


let nameValue = " ";
let upperCaseName = " ";
let numberValue = 0;
let numberSlice = 0;
let monthValue = 00;
let yearValue = 00;
let cvcValue = 0;

var errorName = false;
var errorNumber = false;
var errorMonth = false;
var errorYear = false;
var errorCvc = false;


name.on("input", function () {
checkName();
});

number.on("input", function () {
  checkNumber();
});

month.on("input", function () {
  checkMonth();
  monthYear();
});

year.on("input", function () {
  checkYear();
  monthYear();
});

cvc.on("input", function () {
  checkCvc();
});

function checkName() {
  nameValue = name.val();
  var pattern = /^[a-zA-Z\s]*$/;
  if (pattern.test(nameValue) && nameValue !== " ") {
    upperCaseName = nameValue.toUpperCase();
    $(".name-error").css("display", "none");
    name.removeClass("error");
    nameOutput.html(upperCaseName);
  } else {
    name.addClass("error");
    $(".name-error").css("display", "block");
    nameOutput.html("JANE APPLESEED");
    errorName = true;
  }
}

function checkNumber() {
  numberValue = number.val();
  var pattern = /[0-9]/g;
  if (pattern.test(numberValue)) {
    if (numberValue.length === 16) {
    number.removeClass("error");
    $(".number-error").css("display", "none");
    numberSlice = numberValue.slice(0, 4) + " " + numberValue.slice(4, 8) + " " + numberValue.slice(8, 12) + " " + numberValue.slice(12, 16);
    numberOutput.html(numberSlice);
  } else {
    $(".number-error").html("Please type 16 digits");
    $(".number-error").css("display", "block");
    numberOutput.html("0000 0000 0000 0000");
    errorNumber = true;
  }}
   else {
    number.addClass("error");
    $(".number-error").html("Wrong fromat, numbers only");
    $(".number-error").css("display", "block");
    numberOutput.html("0000 0000 0000 0000");
    errorNumber = true;
  }
}

function checkMonth() {
  monthValue = month.val();
  var pattern = /[0-9]/g;
  if (pattern.test(monthValue) && monthValue !== " ") {
    if (pattern.test(monthValue) && monthValue > 00 && monthValue <= 12) {
      month.removeClass("error");
      $(".month-blank-error").css("display", "none");
    } else {
      $(".month-blank-error").html("Invalid format");
      $(".month-blank-error").css("display", "block");
      monthValue = "00";
      errorMonth = true;
    }
  } else {
    month.addClass("error");
    $(".month-blank-error").html("Can't be blank");
    $(".month-blank-error").css("display", "block");
    monthValue = "00";
    errorMonth = true;
  }
}

function checkYear() {
  yearValue = year.val();
  var pattern = /[0-9]/g;
  if (pattern.test(yearValue) && yearValue !== " ") {
    if (pattern.test(yearValue) && yearValue > 00 && yearValue.length === 2) {
      year.removeClass("error");
      $(".month-blank-error").css("display", "none");
    } else {
      $(".month-blank-error").html("Invalid format");
      $(".month-blank-error").css("display", "block");
      yearValue = "00";
      errorYear = true;
    }
  } else {
    year.addClass("error");
    $(".month-blank-error").html("Can't be blank");
    $(".month-blank-error").css("display", "block");
    yearValue = "00";
    errorYear = true;
  }
}

function checkCvc() {
  cvcValue = cvc.val();
  var pattern = /[0-9]/g;
  if (pattern.test(cvcValue) && cvcValue !== " ") {
    if (pattern.test(cvcValue) && cvcValue > 00 && cvcValue.length === 3) {
      cvc.removeClass("error");
      $(".cvc-blank-error").css("display", "none");
      cvcOutput.html(cvcValue);
    } else {
      $(".cvc-blank-error").html("Invalid format");
      $(".cvc-blank-error").css("display", "block");
      errorCvc = true;
    }
  } else {
    cvc.addClass("error");
    $(".cvc-blank-error").html("Can't be blank");
    $(".cvc-blank-error").css("display", "block");
    errorCvc = true;
    cvcOutput.html("000");
  }
}

function monthYear() {
  if (errorMonth === false && errorYear === false) {
    dateOutput.html(monthValue + "/" + yearValue);
  } else {
    dateOutput.html(monthValue + "/" + yearValue);
  }
}

form.on("submit", function (e) {
  errorName = false;
  errorNumber = false;
  errorMonth = false;
  errorYear = false;
  errorCvc = false;

  checkName();
  checkNumber();
  checkMonth();
  checkYear();
  checkCvc();

  if (errorName === false && errorNumber === false && errorMonth === false && errorYear === false && errorCvc === false) {
    form.css("display", "none");
    $(".completed-state").css("display", "block");
    e.preventDefault();
    return true;
  } else {
    form.css("display", "block");
    $(".completed-state").css("display", "none");
    return false;
  }
})

$("#continue").on("click", function () {
  name.val("");
  number.val("");
  month.val("");
  year.val("");
  cvc.val("");
  nameOutput.html("JANE APPLESEED");
  numberOutput.html("0000 0000 0000 0000");
  dateOutput.html("00/00");
  cvcOutput.html("000");
  form.css("display", "block");
  $(".completed-state").css("display", "none");
  errorName = false;
  errorNumber = false;
  errorMonth = false;
  errorYear = false;
  errorCvc = false;
  nameValue = " ";
  upperCaseName = " ";
  numberValue = 0;
  numberSlice = 0;
  monthValue = 00;
  yearValue = 00;
  cvcValue = 0;
});
});
