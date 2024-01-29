function submitForm() {
  // Retrieve data from inputs
  const name = document.getElementById("name").value;
  const lastName = document.getElementById("lastName").value;

  // Create an object with the form data
  const formData = {
    name: name,
    lastName: lastName,
  };

  // Convert the object to a JSON string
  const jsonString = JSON.stringify(formData, null, 2);

  // Display the JSON string in the DOM
  document.getElementById("output").innerText = jsonString;
}
