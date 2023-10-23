import User from "./cmp/User";

const App = () =>{

  const data = {
    name : "Amit kumar"
  }
  const design = (
  <>
  <h1>Welcome to redux</h1>
  <User />
  </>
    
  );

  return design;
}

export default App;