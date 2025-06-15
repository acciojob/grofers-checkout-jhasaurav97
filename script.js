const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
const prices = document.querySelectorAll(".price"); 
  let total = 0;
  prices.forEach((priceCell) => {
    total += Number(priceCell.textContent);
  });
  const totalRow = document.createElement("tr");
  const totalCell = document.createElement("td");
  totalCell.colSpan = 2; 
  const ansSpan = document.createElement("span");
  ansSpan.id = "ans";
  ansSpan.textContent = total;
  totalCell.appendChild(ansSpan);
  totalRow.appendChild(totalCell);
  document.querySelector("table").appendChild(totalRow);
  getSumBtn.disabled = true;
};

getSumBtn.addEventListener("click", getSum);

