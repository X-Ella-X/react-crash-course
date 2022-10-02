function AppExample() {
  const name = "Ella";
  const x = false;
  return (
    <div className="container">
      <h1>Hello From React</h1>
      <h2>Hello {name}</h2>
      <h2>Hello {1 + 1}</h2>
      <h2>Hello {x ? "Jep" : "Nope"}</h2>
    </div>
  );
}

// Die Überschriften befinden sich in einem div. Sollte es Elemente geben, die in kein div, sondern eigenständig existieren sollen, dann sollte der Code trotzdem in empty angle brackets <> umfasst sein, ungefähr so:
// <>
//   <h1>Hello From React</h1>
//   <h2>Hello World</h2>
// </>

export default AppExample;
