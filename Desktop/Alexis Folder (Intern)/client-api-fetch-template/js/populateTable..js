function fetchUserData() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(populateTable)
      .catch(error => console.error('Error fetching user data:', error));
  }
  
  function populateTable(users) {
    const tableBody = document.getElementById('user-table-body');
  
    users.forEach(user => {
      const row = createTableRow(user);
  
      // Create a "View" button for each row
      const viewButton = document.createElement('button');
      viewButton.textContent = 'View';
      viewButton.addEventListener('click', () => {
        // Open the modal and populate with user details
        openModal(user);
      });
  
      // Create a cell to hold the button
      const buttonCell = document.createElement('td');
      buttonCell.appendChild(viewButton);
  
      // Append the button cell to the row
      row.appendChild(buttonCell);
  
      // Append the row to the table body
      tableBody.appendChild(row);
    });
  }
  
  function createTableRow(user) {
    const row = document.createElement('tr');
  
    ['id', 'name', 'email', 'phone', 'website', 'company'].forEach(key => {
      const cell = document.createElement('td');
      if (key === 'company') {
        cell.textContent = user.company.name;
      } else {
        cell.textContent = user[key];
      }
      row.appendChild(cell);
    });
  
    return row;
  }
  
  function openModal(user) {
    // Get the modal element
    const modal = document.getElementById('myModal');
  
    // Get the elements where you want to display user details in the modal
    const modalContent = document.getElementById('modal-content');
    modalContent.innerHTML = `
      <p>ID: ${user.id}</p>
      <p>Name: ${user.name}</p>
      <p>Email: ${user.email}</p>
      <p>Phone: ${user.phone}</p>
      <p>Website: ${user.website}</p>
      <p>Company: ${user.company.name}</p>
    `;
  
    // Display the modal
    modal.style.display = 'block';

    // Get the close button element
    const closeButton = document.querySelector('.close');

    // Function to close the modal
    function closeModal() {
      modal.style.display = 'none';
    }

    // Event listener for the close button
    closeButton.addEventListener('click', closeModal);
  }
  
  // Call the fetchUserData function to fetch and populate the table
  fetchUserData();