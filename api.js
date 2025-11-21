// api.js — handles API call for the contact form

export async function sendContactForm(payload) {
  try {
    const response = await fetch("https://your-api-url.com/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    });

    return response;
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
}
