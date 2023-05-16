import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


export const UserPage = () => {

    const [user, setUser] = useState([]);
    const { id } = useParams();

    const getUser = async() => {
        try {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
            const data = response.data;

            setUser(data);
            
        }catch (error) {
            console.log(error)
         };
    };

    useEffect(() => {
       getUser();
    }, []);

    if (user) {
        return (
            <main>
                <h1>{user.name}</h1>
                <ul>
                    <li>Email: {user.email}</li>
                    <li>Telefone: {user.phone}</li>
                    <li>Site: {user.website}</li>
                    <li>Company: {user.company?.name}</li>
                    <li>Endereço: {user.address?.street}, {user.address?.suite}, 
                    {user.address?.city}, {user.address?.zipcode}</li>
                </ul>
            </main>
        );
    };
};