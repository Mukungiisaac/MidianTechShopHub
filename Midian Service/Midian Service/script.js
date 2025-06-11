// eslint-disable-next-line no-unused-vars
function openModal(serviceName) {
  document.getElementById("serviceModal").style.display = "flex";
  document.getElementById("modalTitle").innerText = `Request: ${serviceName}`;
  document.getElementById("selectedService").value = serviceName;
}

function closeModal() {
  document.getElementById("serviceModal").style.display = "none";
}

// Optional: Handle form submission
document.getElementById("requestForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const service = document.getElementById("selectedService").value;
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  alert(`Request submitted for: ${service}\nName: ${name}\nEmail: ${email}\nMessage: ${message}`);
  
  // Reset and close modal
  this.reset();
  closeModal();

  // Optional: Send to backend (Flask, PHP, etc.)
});
