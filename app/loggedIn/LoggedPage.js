"use client";
import "./css/LoggedPage.css";
import React from "react";
import ItemList from "../components/ItemList.js";
import { useRouter } from 'next/navigation';
import { useEffect, useContext } from 'react';
import UserContext from '../context/UserContext';
import axios from 'axios';


const LoggedPage = () => {
    const [items, setItems] = React.useState([]);
    const { userData } = useContext(UserContext);
    
    const router = useRouter()

    const fetchItems = async () => {
        try {
            // const user1 = userData.user;
            // console.log(user1.username);
            const res = await axios.get('http://localhost:8085/api/items/' + userData.user.username);
            console.log(res.data);
            
            setItems(res.data);
            const item1 = res.data;
            console.log(item1);
        } catch (error) {
            console.error("Error fetching items: ", error);
        }
    };
    useEffect (() => {
        fetchItems();
        
    }, [userData.token]);

    const updateItemList = () => {
        fetchItems();
    }

    const deleteItem = (itemId) => {
        setItems(prevItems => prevItems.filter(item => item._id !== itemId));
    };
    
    return (
        <div className="background">
            <h1>Hello {userData.user ? userData.user.username : 'User'}!</h1>
            <div className="demo">
                <div id="toplevel">
                    <h2>Recent Activity</h2>
                    <button onClick={() => router.push('/add-activity')}>Add Activity</button>
                </div>
                <div>
                    <ItemList listItems={items.reverse()} setItems={setItems} updateAllItems={updateItemList}/>
                </div>
            </div>
        </div>
    );
    
    // return (
    //     <div className="background">
    //         <h1>Hello {userData.user ? userData.user.username : 'User'}!</h1>
    //         <div className="demo">
    //             <div id="toplevel"><h2>Recent Activity</h2><button onClick={() => router.push('/add-activity')}>Add Activity</button> </div>
    //             <div>
    //                 <ItemList listItems={items.reverse()} setItems={setItems} />
    //             </div>
    //         </div>
    //     </div>
    // );
};

export default LoggedPage;
