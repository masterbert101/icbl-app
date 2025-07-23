<script>
  let name = $state("");
  let email = $state("");
  let message = $state("");

  // Form submission handler
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission

    // Send form data to your backend endpoint
    const response = await fetch("/api/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, message }),
    });

    const result = await response.json();

    if (response.ok) {
      alert("Message sent successfully!");
      name = "";
      email = "";
      message = "";
    } else {
      alert(`Error: ${result.message}`);
    }
  };
</script>

<form onsubmit={handleSubmit}>
  <label for="name">Name:</label>
  <input type="text" id="name" bind:value={name} required /><br />

  <label for="email">Email:</label>
  <input type="email" id="email" bind:value={email} required /><br />

  <label for="message">Message:</label><br />
  <textarea id="message" bind:value={message} rows="4" cols="50" required
  ></textarea><br />

  <button type="submit">Send</button>
</form>
