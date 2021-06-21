import {useState, useEffect} from 'react';
import axios from 'axios';

function Argonautes() {
    const [argonautes, setArgonautes] = useState([]);
    const [newArgonaute, setNewArgonaute] = useState(null);

    const getArgonautes = () => {
        axios.get(`${process.env.REACT_APP_API_URL}/argonautes`).then((results) => {
            setArgonautes(results.data);
        });
    };

    useEffect(() => getArgonautes(), []);

    const handleChange = (e) => {
        setNewArgonaute(e.target.value);
    };

    const submit = (e) => {
        e.preventDefault();
        if (newArgonaute) {
            axios.post(`${process.env.REACT_APP_API_URL}/argonautes`, {name: newArgonaute}).then(() => {
                setNewArgonaute(null);
                getArgonautes();
            }).catch(err => console.log(err));
        }
    };

    return (<>
            <h2>Ajouter un(e) Argonaute</h2>
            <form className="new-member-form">
                <label htmlFor="name">Nom de l&apos;Argonaute</label>
                <input id="name" name="name" type="text" placeholder="Charalampos" value={newArgonaute ?? ''}
                       onChange={handleChange}/>
                <button type="submit" onClick={submit}>Envoyer</button>
            </form>

            <h2>Membres de l'équipage</h2>
            <section className="member-list">
                <ul>{argonautes.map(item => <li key={item.id} className="member-item">{item.name}</li>)}</ul>
            </section>
        </>
    );
}

export default Argonautes;