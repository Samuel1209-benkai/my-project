import React from 'react'

function Table(props) {
  return (
  <div>
        <div>
     <table className="border-collapse border border-slate-400   ... ">
            <thead>
                <tr >
                    <th className="border border-slate-400 px-10 p-2">
                        <h3>Prenom</h3>
                    </th>
                    <th className="border border-slate-400  px-10 p-2">
                        <h3>Nom</h3>
                    </th>
                    <th className="border border-slate-400  px-10 p-2">
                        <h3>Telephone</h3>
                    </th>
                </tr>
            </thead>
            <tbody>
                { props.tableauDeNom.map(item => {
                    return (
                        <tr>
                            <td className="border border-slate-400  px-10 p-2"> {item.nom}</td>
                            <td className="border border-slate-400  px-10 p-2">{item.prenom}</td>
                            <td className="border border-slate-400  px-10 p-2">{item.telephone}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    </div>

        <button onClick={props.headerClick} className="border ml-80 m-4 p-1  px-3  bg-green-600  text-white rounded-md "  > Order</button>

    </div>
  )
}

export default Table