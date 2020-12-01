$(document).ready(() => {
    // declaring global variables
    const signUpForm = $("form.signup");
    const usernameInput = $("input#newUser");
    const passwordInput = $("input#newPassword");
  
    // when user clicks the signup button, the input is validated
    signUpForm.on("submit", event => {
      event.preventDefault();
      const userData = {
        userName: usernameInput.val().trim(),
        password: passwordInput.val().trim()
      };
  
      if (!userData.password || !userData.userName) {
        handleLoginErr();
        return;
      }
      // If input is validated with no errors, run sign up function
      signUpUser(userData.userName, userData.password);
      usernameInput.val("");
      passwordInput.val("");
    });
  
//    posts new user to database
    function signUpUser( userName, password) {
      $.post("/api/signup", {
        userName: userName,
        password: password,
      })
    //   redirects to main page.  
        .then(() => {
          window.location.replace("/main.handlebars");
        })
        .catch(handleLoginErr);
    }
  
    function handleLoginErr(err) {
      $("#alert .msg").text("You must enter a username and password!");
      $("#alert").fadeIn(500);
    }
  });