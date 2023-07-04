// Function to generate car component HTML
function generateCarHTML(car) {
    return `
      <img src="${car.image}" alt="${car.make} ${car.model}">
      <h2>${car.make} ${car.model}</h2>
      <p>Make: ${car.make}</p>
      <p>Model: ${car.model}</p>
      <p>Year: ${car.year}</p>
      <p>Mileage: ${car.mileage}</p>
      <p>Price: ${car.price}</p>
      <a href="#" class="btn">View Details</a>
    `;
  }
  
  // JavaScript code to populate car listings
  const car1 = {
    make: "XYZ",
    model: "ABC",
    year: 2022,
    mileage: "10,000 miles",
    price: "$20,000",
    image: "car1.jpg"
  };
  
  const car2 = {
    make: "PQR",
    model: "DEF",
    year: 2021,
    mileage: "8,000 miles",
    price: "$18,000",
    image: "car2.jpg"
  };
  
  // Get car listing elements by their IDs
  const car1Element = document.getElementById('car1');
  const car2Element = document.getElementById('car2');
  
  // Generate car component HTML and insert it into the respective car listing elements
  car1Element.innerHTML = generateCarHTML(car1);
  car2Element.innerHTML = generateCarHTML(car2);  