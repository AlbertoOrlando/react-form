import { useState } from "react"

// dati lista articoli
const articoli = [
    "Articolo 1",
    "Articolo 2",
    "Articolo 3"
]

export default function ListaArticoli() {

    // stato della ListaArticoli
    const [lista, setLista] = useState(articoli)
    // stato del nuovo articolo
    const [nuovoArticolo, setNuovoArticolo] = useState("")

    // funzione per rimuovere gli articoli
    const rimuoviArticolo = (index) => {
        const nuovaLista = lista.filter((articolo, i) => i !== index)
        setLista(nuovaLista)
    }


    return (
        <>
            <h1>Lista Articoli</h1>
            {lista.length === 0 ? <p>Non ci sono articoli</p> :
                <ul>
                    {lista.map((articolo, index) => (
                        <li key={index}>{articolo}
                            {/* <span><FontAwesomeIcon icon={faTrashCan} onClick={() => rimuoviArticolo(index)
                            } /></span> */}
                        </li>
                    ))}
                </ul>
            }
            <form onSubmit={(e) => e.preventDefault()}>
                <input
                    type="text"
                    value={nuovoArticolo}
                    placeholder="Nuovo articolo"
                    onChange={(e) => setNuovoArticolo(e.target.value)}
                />
                <button
                    onClick={() => {
                        setLista([...lista, nuovoArticolo])
                        setNuovoArticolo("")
                    }}
                >
                    Aggiungi Articolo
                </button>
            </form>

        </>
    )
}