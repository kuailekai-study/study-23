const select = document.querySelector('select');
const para = document.querySelector('p');

select.addEventListener('change', LAU);

function LAU() {
  let choice = select.value;
  
  if (choice === "zh-cn") {
    para.textContent = "你好";
  } else if (choice === "zh-tw") {
    para.textContent = "你好";
  } else if (choice === "en-us") {
    para.textContent = "Hello";
  } else if (choice === "en-uk") {
    para.textContent = "Hello";
  } else {
    para.textContent = "";
  }
}
