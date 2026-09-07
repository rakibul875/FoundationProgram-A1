function describeValue(val) {
  var valueType = typeof val;
  var status = "";

  if (val) {
    status = "truthy";
  } else {
    status = "falsy";
  }

  return valueType + " | " + status;
}
const result1 = describeValue("");
console.log(result1);
