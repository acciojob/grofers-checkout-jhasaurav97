const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
const table = document.querySelector("table");
  let prices = 0;
  const totalPrice = document.querySelectorAll(".price");
  const tr = document.createElement("tr")
  totalPrice.forEach((price) => {
    prices += parseInt(price.textContent);
    tr.innerHTML = `
    <td class="price">${prices}</td>
    `
  });
  table.appendChild(tr);
  
};

getSumBtn.addEventListener("click", getSum);

