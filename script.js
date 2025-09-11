 function greetUser(name) {
      if (name && name.trim() !== "") {
        alert(`Hi, ${name.trim()}! Welcome to my portfolio.`);
      } else {
        alert("Hi! Welcome to my portfolio.");
      }
    }

    // Ask for the user's name and pass it to the function
    const userName = prompt("Hi there! like to share your name?");
    greetUser(userName);
