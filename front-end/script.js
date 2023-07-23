function toggleForms() {
  const signupForm = document.getElementById("signup-form");
  const loginForm = document.getElementById("login-form");

  if (signupForm.style.display === "none") {
    signupForm.style.display = "block";
    loginForm.style.display = "none";
  } else {
    signupForm.style.display = "none";
    loginForm.style.display = "block";
  }
}

function signup(event) {
  event.preventDefault();

  // Get input values
  const name = document.getElementById("name").value;
  const gender = document.getElementById("gender").value;
  const designation = document.getElementById("designation").value;
  const phoneNumber = document.getElementById("phoneNumber").value;
  const password = document.getElementById("password").value;

  // Create signup request body
  const signupData = {
    name: name,
    gender: gender,
    designation: designation,
    phoneNumber: phoneNumber,
    password: password,
  };

  // Make a POST request to the signup API
  fetch("http://localhost:8000/api/v1/auth/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(signupData),
  })
    .then((response) => response.json())
    .then((data) => {
      // Handle signup response
      if (data.success) {
        // Redirect to login page
        document.getElementById("signup-form").style.display = "none";
        document.getElementById("login-form").style.display = "block";
      } else {
        // Show error message
        alert(data.message);
      }
    })
    .catch((error) => {
      console.error("Error:", error);
      alert("An error occurred during signup. Please try again.");
    });
}

function login(event) {
  event.preventDefault();

  // Get input values
  const phoneNumber = document.getElementById("loginPhoneNumber").value;
  const password = document.getElementById("loginPassword").value;

  // Create login request body
  const loginData = {
    phoneNumber: phoneNumber,
    password: password,
  };

  // Make a POST request to the login API
  fetch("http://localhost:8000/api/v1/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(loginData),
  })
    .then((response) => response.json())
    .then((data) => {
      // Handle login response
      if (data.success) {
        // Save access token in localStorage or session
        const accessToken = data.data.accessToken;
        localStorage.setItem("accessToken", accessToken);

        // Redirect to todo list page
        document.getElementById("login-form").style.display = "none";
        document.getElementById("todo-list").style.display = "block";

        // Fetch and display user's todo list
        fetchTodoList(accessToken);
      } else {
        // Show error message
        alert(data.message);
      }
    })
    .catch((error) => {
      console.error("Error:", error);
      alert("An error occurred during login. Please try again.");
    });
}


    
