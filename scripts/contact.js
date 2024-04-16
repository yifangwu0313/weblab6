// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.

// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.

(() => {
    let submit = document.querySelector("#submit-button");
    submit.addEventListener("click", () => {
      console.log("submit button clicked");
      let contact = document.querySelector("#contact-page");
      contact.innerHTML = "<p style='font-size: 24px;'>Thank you for your message!</p>";
    });
})();