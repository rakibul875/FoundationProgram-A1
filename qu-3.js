const validateUsername = (username) => {
  if (username.length < 4) {
    return "Too Short";
  }

  if (username.includes(" ")) {
    return "No Space Allowed";
  }

  var lowerUser = username.toLowerCase();
  if (lowerUser.includes("admin")) {
    return "Reserved Word";
  }

  return "Available";
};
const result = validateUsername("rahim islam");
console.log(result);
