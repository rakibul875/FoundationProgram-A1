const describeValue = (val) => {
  var valueType = typeof val;
  var status = "";

  if (val) {
    status = "truthy";
  } else {
    status = "falsy";
  }

  return valueType + " | " + status;
};
