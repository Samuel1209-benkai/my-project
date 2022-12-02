import React ,{useState,useEffect,useRef}from "react";
import Table from "./table";


function Forms(props) {
    const userRef = useRef();
    useEffect(() => {
        userRef.current.focus();
    }, []);
 

    return (<div className="m-10">
        <form onSubmit={props.submit}>
            <label>Nom</label>
            <input className=" border border-black m-4 p-3 rounded "
                type="text"
                placeholder="nom"
                ref={userRef}
                onChange={props.changed}
                name="nom"
                value={props.data.nom}
            />
            <br />
            <label>prenom </label>
            <input className=" border border-black m-4 p-3 rounded "
                type="text"
                placeholder="prenom"
                onChange={props.changed}
                name="prenom"
                value={props.data.prenom}
            /><br />
            <label>Telephone </label>
            <input className=" border border-black m-4 p-3 rounded "
                type="text"
                placeholder="telephone"
                onChange={props.changed}
                name="telephone"
                value={props.data.telephone}
            />
            <br />
            <button type="Submit" className="border ml-80 m-4 p-1  px-3  bg-blue-600  text-white rounded-md " > Submit</button>
        </form>

        
    </div>
    )
}
export default Forms

