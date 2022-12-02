import React ,{useState,useEffect,useRef}from "react";
import Table from "./table";


function Forms() {
    const userRef = useRef();
    const [formsData, setFormData] = useState({
        nom: "",
        prenom: "",
        telephone: "",
    });
    const [nameArray, setName] = useState([])


    useEffect(() => {
        userRef.current.focus();
    }, []);
    function changed(event) {
        setFormData(prevState => {
            return {
                ...prevState,
                [event.target.name]: event.target.value,
            }
        })
    }
    async function handleSubmit(e) {
        e.preventDefault();
        setName(prevState => {return [...nameArray , formsData] })
    }
    
    function ordonner(e) {
        setName([...nameArray].sort((a, b) => a.nom.localeCompare(b.nom)));
    }

    return (<div className="m-10">
        <form onSubmit={handleSubmit}>
            <label>Nom</label>
            <input className=" border border-black m-4 p-3 rounded "
                type="text"
                placeholder="nom"
                ref={userRef}
                onChange={changed}
                name="nom"
                value={formsData.nom}
            />
            <br />
            <label>prenom </label>
            <input className=" border border-black m-4 p-3 rounded "
                type="text"
                placeholder="prenom"
                onChange={changed}
                name="prenom"
                value={formsData.prenom}
            /><br />
            <label>Telephone </label>
            <input className=" border border-black m-4 p-3 rounded "
                type="text"
                placeholder="telephone"
                onChange={changed}
                name="telephone"
                value={formsData.telephone}
            />
            <br />
            <button type="Submit" className="border ml-80 m-4 p-1  px-3  bg-blue-600  text-white rounded-md " > Submit</button>
        </form>

        <Table
            headerClick={ordonner}
            tableauDeNom={nameArray} />
    </div>
    )
}
export default Forms

