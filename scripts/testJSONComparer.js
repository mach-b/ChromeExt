/**
 * @author Mark Burton
 */

function testJSONComparison() {


var jsonA = {
	"html" : "123456html",
	"head" : "123456head",
	"body" : "123456body",
	"script" : [{
		"script" : "123456script1"
	}, {
		"script" : "123456script2"
	}]
}

var jsonB = {
	"html" : "123456html",
	"head" : "123456head",
	"body" : "123456body",
	"script" : [{
		"script" : "123456script1"
	}, {
		"script" : "123456script2"
	}]
}

var jsonC = {
"html": "123456htmlx",
"head": "123456head",
"script": [
{"script": "123456script1x"},
{"script": "123456script2"}
]
}

console.log("Testing matching JSONs return empty object...")
var returned = compareJSONs(jsonA, jsonB);
console.log("Returned JSON = " + JSON.stringify(returned));
console.log("Mismatching values found = " + ((Object.keys(returned).length)!=0));

console.log("Testing mismatching JSONs return object containing unmatched keys and values...")
returned = compareJSONs(jsonA, jsonC);
console.log("Returned JSON = " + JSON.stringify(returned));
console.log("Mismatching values found = " + ((Object.keys(returned).length)!=0));
}

