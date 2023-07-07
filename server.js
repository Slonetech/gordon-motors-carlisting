fetch('http://localhost:3000/cars')
  .then(response => response.json())
  .then(data => {
    // Assuming data is an array of car objects
    const carListContainer = document.getElementById('car-list');

    // Clear any existing content in the car list container
    carListContainer.innerHTML = '';

    // Iterate over each car object in the response data
    data.forEach(car => {
      // Create HTML elements for each car
      const carElement = document.createElement('div');
      carElement.innerHTML = `
        <p>Model: ${car.model}</p>
        <p>Price: ${car.price}</p>
        <p>Year: ${car.details.year}</p>
        <p>Condition: ${car.details.condition}</p>
        <p>Transmission: ${car.details.transmission}</p>
        <p>Fuel: ${car.details.fuel}</p>
        <p>Top Speed: ${car.details.top_speed}</p>
        <hr>
      `;

      // Append the car element to the car list container
      carListContainer.appendChild(carElement);
    });
  })
  .catch(error => {
    console.log('Error:', error);
  });
