/**
 * @author Mark Burton
 */




function startJSONBuilderTest() {
	var objectA = {};
	var objectB = {};


	console.log("STARTING BASIC INSERTION TEST.");
	insertValueIntoJSON(objectA, "key1", "value1");
	insertValueIntoJSON(objectA, "key2", "value2");
	insertValueIntoJSON(objectA, "key3", "value3");
	console.log("    "+JSON.stringify(objectA));

	insertValueIntoJSON(objectB, "key1", "value1");
	insertValueIntoJSON(objectB, "key2", "value2");
	insertValueIntoJSON(objectB, "key3", "value3");
	console.log("    "+JSON.stringify(objectB));

	console.log("FORCE ARRAY CREATION.");
	insertValueIntoJSON(objectA, "key3", "valueX");
	console.log("    "+JSON.stringify(objectA));
}
