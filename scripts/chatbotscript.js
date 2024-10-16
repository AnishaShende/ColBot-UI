document.addEventListener("DOMContentLoaded", function () {
  const inputField = document.querySelector(".input-field");
  const chatbotBody = document.querySelector(".chatbot-body");
  const inputIcon = document.querySelector(".input-icon"); // Select the send icon

  // Function to send the message (triggered by either Enter key or click)
  function sendMessage() {
    const userInput = inputField.value.trim();
    if (userInput) {
      appendMessage(userInput, "user");
      inputField.value = ""; // Clear the input field
      setTimeout(() => {
        appendMessage("I'm still learning to respond!", "bot");
      }, 1000);
    }
  }

  // Send message on Enter key press
  inputField.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      sendMessage();
    }
  });

  // Send message on send icon click
  inputIcon.addEventListener("click", function () {
    sendMessage();
  });

  // Append message to the chatbot body
  function appendMessage(text, sender) {
    const message = document.createElement("div");
    message.classList.add("response-message");
    message.textContent = text;

    const messageContainer = document.createElement("div");
    messageContainer.classList.add("response");
    if (sender === "bot") {
      messageContainer.appendChild(message);
    } else {
      message.style.backgroundColor = "#ba68c8";
      message.style.color = "#fff";
      messageContainer.appendChild(message);
      messageContainer.style.justifyContent = "flex-end";
    }

    chatbotBody.appendChild(messageContainer);
    chatbotBody.scrollTop = chatbotBody.scrollHeight; // Scroll to the bottom
  }
});
