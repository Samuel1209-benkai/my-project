import React ,{useState,useEffect,useRef}from "react";
import Forms from './component/forms';
import Table from "./component/table";
function App() {
  const [formsData, setFormData] = useState({
    nom: "",
    prenom: "",
    telephone: "",
});
const [nameArray, setName] = useState([])

async function handleSubmit(e) {
  e.preventDefault();
  setName(prevState => {return [...nameArray , formsData] })
}

function ordonner(e) {
  setName([...nameArray].sort((a, b) => a.nom.localeCompare(b.nom)));
}
function handlechanged(event) {
  setFormData(prevState => {
      return {
          ...prevState,
          [event.target.name]: event.target.value,
      }
  })
}

  return (
    <div className="App">
      <Forms submit ={handleSubmit}
      data ={formsData}
      changed={handlechanged}/>
      <Table
            headerClick={ordonner}
            tableauDeNom={nameArray} />
    </div>
  );
}

export default App;
