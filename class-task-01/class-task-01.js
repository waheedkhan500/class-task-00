
// ***************** Welcome Message ******************

function displayWelcomeMessage() {
    let userName = prompt("Enter your name here:")
    userName = userName.charAt(0).toUpperCase() + userName.slice(1);
    alert("Welcome Mr: "+ userName)
}
displayWelcomeMessage()