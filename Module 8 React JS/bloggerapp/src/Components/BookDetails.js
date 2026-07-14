function BookDetails() {

  const books = [
    { id: 1, name: "React Basics", price: 450 },
    { id: 2, name: "JavaScript ES6", price: 550 },
    { id: 3, name: "Node.js", price: 600 }
  ];

  return (
    <div>
      <h2>Book Details</h2>

      {books.map(book => (
        <div key={book.id}>
          <p>
            {book.name} - ₹{book.price}
          </p>
        </div>
      ))}
    </div>
  );

}

export default BookDetails;