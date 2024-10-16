function toggleChatbot() {
  var chatbotWindow = document.getElementById("chatbotWindow");

  // Toggle display of chatbot
  if (
    chatbotWindow.style.display === "none" ||
    chatbotWindow.style.display === ""
  ) {
    chatbotWindow.style.display = "block";

    // Load chatbot.html content only when opened
    fetch("chatbot.html")
      .then((response) => response.text())
      .then((data) => {
        chatbotWindow.innerHTML = data;
      })
      .catch((error) => console.log("Error loading chatbot: ", error));
  } else {
    chatbotWindow.style.display = "none";
  }
}

// // function toggleChatbot() {
// //   const chatbotWindow = document.getElementById("chatbotWindow");
// //   chatbotWindow.style.display =
// //     chatbotWindow.style.display === "none" || !chatbotWindow.style.display
// //       ? "block"
// //       : "none";
// // }
// console.log("inside script");
// function toggleChatbot() {
//   console.log("toggled");
//   const chatbotWindow = document.getElementById("chatbotWindow");
//   if (chatbotWindow.innerHTML === "") {
//     // Load the chatbot HTML content when the chatbot is first opened
//     console.log("loading the content");
//     loadChatbotContent();
//     console.log("loaded");
//   }
//   chatbotWindow.classList.toggle("visible");
// }

// // Load chatbot.html content dynamically
// function loadChatbotContent() {
//   console.log("fetched chatbot.html");
//   fetch("chatbot.html")
//     .then((response) => response.text())
//     .then((data) => {
//       document.getElementById("chatbotWindow").innerHTML = data;
//       // Once the content is loaded, load the chatbot script manually
//       console.log("chatbot loaded");
//       loadChatbotScript();
//     })

//     .catch((error) => console.log("Error loading chatbot:", error));
// }

// // Load chatbot JavaScript after content is loaded
// function loadChatbotScript() {
//   console.log("loading the chatbot script");
//   const script = document.createElement("script");
//   console.log("loaded chatbot script");
//   script.src = "chatbotscript.js"; // Make sure the path is correct
//   document.body.appendChild(script);
// }
