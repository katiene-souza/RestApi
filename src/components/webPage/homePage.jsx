import axios from "axios";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";



export const HomePage = () => {

    const [users, setUsers] = useState([]);

    const getUsers = async() => {
        try {
            const response = await axios.get("https://jsonplaceholder.typicode.com/users/");
            const data = response.data;

            setUsers(data);
            
        }catch (error) {
            console.log(error)
         };
    };

    useEffect(() => {
       getUsers();
    },[]);

    return (
        <main>
            {users.map((users) => {
                return (
                    <li key={users.id}>
                       <Link to={`userPage/${users.id}`}>{users.name}</Link> 
                    </li>
                )
            })}    
        </main>
    );
};