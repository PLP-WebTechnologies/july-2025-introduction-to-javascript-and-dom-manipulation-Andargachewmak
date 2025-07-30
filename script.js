// ============================
// 🎯 Part 1: Variables + Conditionals
// ============================

// Greet the user based on input
document.getElementById("greetBtn").addEventListener("click", function () {
  const name = document.getElementById("username").value;
  const greetingMessage = document.getElementById("greetingMessage");

  if (name.trim() === "") {
    greetingMessage.textContent = "Please enter your name.";
  } else {
    greetingMessage.textContent = `Hello, ${name}! Welcome to JavaScript.`;
  }
});

// ============================
// ❤️ Part 2: Functions
// ============================

// Function 1: Calculate total price
function calculateTotal() {
  const price = parseFloat(document.getElementById("price").value);
  const qty = parseInt(document.getElementById("qty").value);
  const output = document.getElementById("totalOutput");

  if (isNaN(price) || isNaN(qty)) {
    output.textContent = "Please enter valid numbers.";
  } else {
    const total = price * qty;
    output.textContent = `Total Price: $${total.toFixed(2)}`;
  }
}

// Function 2: Reusable string formatter
function formatItem(index, value) {
  return `Item ${index}: ${value}`;
}

// ============================
// 🔁 Part 3: Loops
// ============================

function showNumbers() {
  const output = document.getElementById("loopOutput");
  output.innerHTML = ""; // Clear previous content

  for (let i = 1; i <= 5; i++) {
    const li = document.createElement("li");
    li.textContent = formatItem(i, i);
    output.appendChild(li);
  }
}

function showCountdown() {
  const output = document.getElementById("loopOutput");
  output.innerHTML = "";

  let count = 5;
  while (count >= 1) {
    const li = document.createElement("li");
    li.textContent = formatItem(6 - count, count);
    output.appendChild(li);
    count--;
  }
}

// ============================
// 🌐 Part 4: DOM Manipulation
// (already included above)
// ============================

// 1. Event listener (greet button)
// 2. DOM text update (output messages)
// 3. Dynamically create elements (li inside ul)
