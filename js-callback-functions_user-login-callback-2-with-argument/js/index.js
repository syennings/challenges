console.clear();

function handleUserLogin(onSuccess) {
  onSuccess("Jane Doe");
}

// The exercise starts here!


// not anonymous
function showWelcomeMessage(username) {
  console.log(`hello ${username}! You are logged in now.`);
}

handleUserLogin(showWelcomeMessage);


//anonymous

handleUserLogin(function (username) {
  console.log(`hello ${username}! You are logged in now.`);
});
