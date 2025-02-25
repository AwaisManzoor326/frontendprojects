document.addEventListener("DOMContentLoaded", () => {
  async function showMessage() {
    const yesButton = document.querySelector(".btn1");

    yesButton.addEventListener("click", () => {
      const messageElement = document.querySelector(".message");
      messageElement.innerHTML = "typing...⌛";

      setTimeout(() => {
        messageElement.innerHTML =
          "Actually, I like you ❤️, could you be my... ❤️🥺";

        // Hide the "Yes" button
        yesButton.style.display = "none";

        // Show the buttons
        showButtons();
      }, 2000);
    });
  }

  function showButtons() {
    const container = document.querySelector(".mt-5");

    if (!container) {
      console.error("Error: Container element not found.");
      return;
    }

    // Create "Of course ❤️" button
    let ofCourseBtn = document.createElement("button");
    ofCourseBtn.className = "btn btn-success text-white px-4 m-2";
    ofCourseBtn.innerText = "Of course ❤️";
    ofCourseBtn.onclick = () => acceptProposal(ofCourseBtn);

    // Create "Never 😏" button
    let neverBtn = document.createElement("button");
    neverBtn.className = "btn btn-danger text-white px-4 m-2 never-btn";
    neverBtn.innerText = "Never 😏";

    // Add hover effect to move the "Never" button
    neverBtn.onmouseover = () => {
      let x = Math.random() * (window.innerWidth - 100); // Adjust for screen width
      let y = Math.random() * (window.innerHeight - 100); // Adjust for screen height
      neverBtn.style.position = "absolute";
      neverBtn.style.left = `${x}px`;
      neverBtn.style.top = `${y}px`;
    };

    // Append buttons to the container
    container.appendChild(ofCourseBtn);
    container.appendChild(neverBtn);
  }

  function acceptProposal(ofCourseBtn) {
    const neverBtn = document.querySelector(".never-btn");
    const toastElement = document.getElementById("successToast");
    const toast = new bootstrap.Toast(toastElement);

    // Show toast
    toast.show();

    // Disable "Of course ❤️" button & hide "Never 😏"
    ofCourseBtn.disabled = true;
    if (neverBtn) neverBtn.style.display = "none";
  }

  // Call the function after DOM is loaded
  showMessage();
});