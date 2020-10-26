const para = document.querySelector('p');

function updateName() {
  let name = prompt("输入你的名字");
  para.textContent = "你好," + name + "!";
}
