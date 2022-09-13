const changeBtn = document.getElementById('changeBtn');
const command = document.getElementById('command');
const bodyVar = document.body;

const getHex = () => {
  let result = [];
  let hexRef = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];

  for (let i = 0; i < 6; i++) {
    result.push(hexRef[Math.floor(Math.random() * 16)]);
  }

  return result.join('');
};

changeBtn.addEventListener('click', () => {
  let firstColor = getHex();
  let secondColor = getHex();
  let styleString = `background: linear-gradient(to right, #${firstColor}, #${secondColor})`;

  bodyVar.style = styleString;

  command.innerHTML = styleString;
});
