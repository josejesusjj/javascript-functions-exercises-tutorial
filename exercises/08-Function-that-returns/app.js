var dollarToEuro = function(dollarValue){
	return dollarValue * 0.89;
}
var euroToYen = function(euroValue){
	return euroValue * 124.15;
}
//***** YOUR CODE BELOW ↓ ******///
let DollarToYens = dollarToEuro(137)*euroToYen(1)
console.log(DollarToYens)
