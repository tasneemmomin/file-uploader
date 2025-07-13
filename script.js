function uploadFile() {
  const file = document.getElementById('fileInput').files[0];
  
  if (!file) {
    document.getElementById('message').innerText = "No file selected!";
    return;
  }

  // Simulating upload
  document.getElementById('message').innerText = ` File "${file.name}" uploaded (simulated)!`;
}
