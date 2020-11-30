$(document).ready(() => {
    // declaring global variables
    const signInForm = $("form.signIn");
    const userInput = $("input#userName");
    const passwordInput = $("input#userPassword");
  
    // When user clicks submit, we validate their input
    signInForm.on("submit", event => {
      event.preventDefault();
      const userData = {
        user: userInput.val().trim(),
        password: passwordInput.val().trim()
      };
  
      if (!userData.email || !userData.password) {
        return;
      }
  
      // once the input is entered, the sign in fuction is ran
      signInUser(userData.user, userData.password);
      userInput.val("");
      passwordInput.val("");
    });
  
    // after sign in, the user is redirected to main page.  
    function signInUser(user, password) {
      $.post("/api/login", {
        user: user,
        password: password
      })
        .then(() => {
          window.location.replace("/main");
          // If there's an error, log the error
        })
        .catch(err => {
          console.log(err);
        });
    }
  });