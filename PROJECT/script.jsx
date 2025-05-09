const form = document.querySelector("#myForm");
form.addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent page reload
  const formData = new FormData(form);
  const username = formData.get("username");
  const password = formData.get("password");
  console.log("Username:", username);
  console.log("Password:", password);
});
const clear = () => {};
