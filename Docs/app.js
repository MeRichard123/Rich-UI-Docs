const code = document.querySelector(".text");
const btn = document.querySelector(".code-btn");

function copy() {
  code.select();
  code.setSelectionRange(0, 99999);
  document.execCommand("copy");
}
