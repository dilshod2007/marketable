 

document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('#employeeForm');
  const tableBody = document.querySelector('#tableBody');
  const deleteBtn = document.querySelector('#deleteBtn');
  const addBtn = document.querySelector('#addBtn');

  form.addEventListener('submit', function(event) {
    event.preventDefault();
  
    const name = document.querySelector('#name').value;
    const Amout = document.querySelector('#Amout').value;
    const price = document.querySelector('#price').value;

    const row = document.createElement('tr');
    const nameCell = document.createElement('td');
    const AmoutCell = document.createElement('td');
    const priceCell = document.createElement('td');
    const deleteCell = document.createElement('td');
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', function() {
      row.remove();
    });
    nameCell.textContent = name;
    AmoutCell.textContent = Amout;
    priceCell.textContent = price;
    deleteCell.appendChild(deleteBtn);
    row.appendChild(nameCell);
    row.appendChild(AmoutCell);
    row.appendChild(priceCell);
    tableBody.appendChild(row);

   
    form.reset();
    alert('Saved successfully!');

  });

  deleteBtn.addEventListener('click', function() {
    tableBody.innerHTML = '';
  });
});




