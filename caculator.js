var operand1 = 0;
var operand2 = 0;
var operator1 = "+";
var result = 0;
var x1 = 0;
var x2 = 0;
var x3 = 0;
var x4 = 0;
var x5 = 0;
var expression1 = "";
var expression2 = "";
var expression3 = "";
var expression4 = "";
var expression5 = "";
function ChangeOperator() {
    if ( operator1 == "+" ) {
        operator1 = "-";
    } // if
    else if ( operator1 == "-" ) {
        operator1 = "×";
    } // else if
    else if ( operator1 == "×" ) {
        operator1 = "÷";
    } // else if
    else if ( operator1 == "÷" ) {
        operator1 = "+";
    } // else if

    document.getElementById('operator').innerHTML = operator1;
}

function Caculate() {
    if ( operator1 == "+" ) {
        result = parseInt(operand1) + parseInt(operand2);
    } // if
    else if ( operator1 == "-" ) {
        result = parseInt(operand1) - parseInt(operand2);
    } // else if
    else if ( operator1 == "×" ) {
        result = parseInt(operand1) * parseInt(operand2);
    } // else if
    else if ( operator1 == "÷" ) {
        result = parseInt(operand1) / parseInt(operand2);
    } // else if
} // caculate()

function Showresult() {
    operand1 = document.getElementById('operand1').value;
    operand2 = document.getElementById('operand2').value;

    expression5 = expression4;
    expression4 = expression3;
    expression3 = expression2;
    expression2 = expression1;
    expression1 = operand1 + " " + operator1 + " " + operand2 + " =" ;
    Caculate();
    x5 = x4;
    x4 = x3;
    x3 = x2;
    x2 = x1;
    x1 = result;
    document.getElementById('statement1').innerHTML = expression1;
    document.getElementById('statement2').innerHTML = expression2;
    document.getElementById('statement3').innerHTML = expression3;
    document.getElementById('statement4').innerHTML = expression4;
    document.getElementById('statement5').innerHTML = expression5;
    document.getElementById('result').innerHTML = result;
    document.getElementById('result1').innerHTML = x1;
    document.getElementById('result2').innerHTML = x2;
    document.getElementById('result3').innerHTML = x3;
    document.getElementById('result4').innerHTML = x4;
    document.getElementById('result5').innerHTML = x5;
}