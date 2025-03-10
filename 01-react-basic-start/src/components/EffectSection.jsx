import { useCallback, useEffect, useState } from "react";
import Button from "./Button/Button";
import Modal from "./Modal/Modal";
import useInput from "./hooks/useInput";

export default function EffectSection() {
    const input = useInput();
    const [modal, setModal] = useState(false);
    const [loading, setLoading] = useState(false);
    const [users, setUsers] = useState([]);

    const fetchUsers = useCallback(async () => {
        setLoading(true);
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await response.json();
        setUsers(users);
        setLoading(false);
    });

    useEffect(() => {
        fetchUsers();
    }, []);

    return (
        <section>
            <h3>Effects</h3>

            <Button onClick={() => {setModal(true)}} style={{ marginBottom: '1rem' }}>Открыть информацию</Button>

            <Modal open={modal}>
                <h3>Hello from modal</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem asperiores deserunt adipisci, ullam sed quidem voluptas fuga quaerat illum sunt esse est libero distinctio, voluptatum corrupti atque ex possimus necessitatibus?</p>
                <Button onClick={() => {setModal(false)}}>CLose Modal</Button>
            </Modal>

            {loading && <p>Loading ...</p>}
            {!loading && <>
                    <input type="text" className="control" {...input} />
                    <ul style={{margin: '1rem 0'}}>
                        {users.filter((user) =>  user.name.toLowerCase().includes(input.value.toLowerCase()))
                        .map((user) => {
                            return <li key={user.id}>{user.name}</li>
                        })}
                    </ul>
                </>}
        </section>
    )
}