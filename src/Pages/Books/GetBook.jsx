import React, { useEffect, useState } from "react";
import axios from "axios";

const GetAllBook = () =>{
    const [data, setData] = useState([]);
    useEffect(() =>{
        const getdata = async () => {
            const response = await axios.get(`http://localhost:8080/api/v1/books`);
            setData(response.data);
        }
        getdata();
    })
    return (
        <div>
             <br />
                <div>
                    <h4>Danh sach: </h4>
                    <pre>{JSON.stringify(data.content, null , 2)}</pre>
                </div>
        </div>
    );
}
export default GetAllBook;