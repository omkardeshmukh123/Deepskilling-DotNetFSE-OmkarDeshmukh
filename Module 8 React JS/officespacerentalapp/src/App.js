import officeImg from "./office.jpg";

function App() {

  const offices = [
    {
      id: 1,
      name: "Sky Tower",
      rent: 55000,
      address: "Pune"
    },
    {
      id: 2,
      name: "Tech Park",
      rent: 75000,
      address: "Mumbai"
    },
    {
      id: 3,
      name: "Business Hub",
      rent: 62000,
      address: "Bangalore"
    }
  ];

  return (
    <div>

      <h1>Office Space Rental App</h1>

      <img
        src={officeImg}
        alt="Office Space"
        width="400"
      />

      <hr />

      {offices.map((office) => (

        <div key={office.id}>

          <h2>{office.name}</h2>

          <h3
            style={{
              color:
                office.rent < 60000
                  ? "red"
                  : "green"
            }}
          >
            Rent : ₹{office.rent}
          </h3>

          <h3>
            Address : {office.address}
          </h3>

          <hr />

        </div>

      ))}

    </div>
  );
}

export default App;