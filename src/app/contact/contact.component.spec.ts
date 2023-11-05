

document.getElementById("contact-form")?.addEventListener("submit", function (event) {
  event.preventDefault(); // Verhindert das Standardverhalten des Formulars

  // Formulardaten sammeln
  const emailInput = document.getElementById("email") as HTMLInputElement;
  const messageInput = document.getElementById("message") as HTMLTextAreaElement;

  const email = emailInput.value;
  const message = messageInput.value;

  // Validierung der E-Mail-Adresse
  if (!isValidEmail(email)) {
    alert("Bitte geben Sie eine gültige E-Mail-Adresse ein.");
    return;
  }

  // Validierung der Nachricht
  if (!email || !message) {
    alert("Bitte füllen Sie alle Felder aus.");
    return;
  }

  // Hier kannst du AJAX verwenden, um die Daten an den Server zu senden
  // ...

  // Rest des Codes bleibt unverändert
});

// Hilfsfunktion zur Überprüfung der E-Mail-Adresse
function isValidEmail(email: string): boolean {
  const emailRegex: RegExp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailRegex.test(email);
}
