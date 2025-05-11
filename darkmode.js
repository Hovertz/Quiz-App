let darkmode = localStorage.getItem("darkmode");

const themeSwitch = document.getElementById("theme-switch");

const enableDarkmode = () => {
  document.body.classList.add("dark-mode");
  localStorage.setItem("darkmode", "active");

  const football = document.getElementById("football");
  const source = football.src;
  const filename = source.substring(0, source.length - 4);
  const filetype = source.slice(-3);
  console.log("source: ", source);
  console.log("filename: ", filename);
  football.src = filename + "_dark." + filetype;
};

const disableDarkmode = () => {
  document.body.classList.remove("dark-mode");
  localStorage.setItem("darkmode", null);

  const football = document.getElementById("football");
  const source = football.src;
  let filename = source.substring(0, source.length - 4);
  filename = filename.substring(0, filename.length - 5);
  const filetype = source.slice(-4);
  console.log("source: ", source);
  console.log("filename: ", filename);
  console.log("filename + filetype", filename + filetype);
  football.src = filename + filetype;
};

if (darkmode === "active") enableDarkmode();

themeSwitch.addEventListener("click", () => {
  darkmode = localStorage.getItem("darkmode");
  darkmode !== "active" ? enableDarkmode() : disableDarkmode();
});
