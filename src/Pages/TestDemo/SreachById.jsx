import React, { useState } from "react";
import axios from "axios";

const SreachById = () => {
    const [librariesId, setLibraryId] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(true);

    const Sreach = async (e) => {
        e.preventDefault();
        const response = await axios.get(`http://localhost:8080/api/v1/libraries/${librariesId}`);
        console.log('Library sreach: ', response.data);
        setLibraryId(response.data);
        setMessage(`'Library search id: ${librariesId}.'`);
        setLoading(false)

    }
    return (
        <div>
            <h1>Search a Library</h1>
            <form onSubmit={Sreach}>
                <label>
                    Library ID:
                    <input
                        type="text"
                        value={librariesId}
                        onChange={(e) => setLibraryId(e.target.value)}
                        required
                    />
                </label>
                <button type="submit">Search</button> {/* Nút "Delete" để gửi form */}
            </form>
            <p>{message}</p>
            <div>
                 <br />
                <h4>Danh Sách Libraries</h4>
                {loading ? (
                    <p>Loading...</p>
                ) : (
                    <div>
                        <pre>{JSON.stringify(librariesId, null, 2)}</pre>
                    </div>
                )}
            </div>
        </div>
    );
}
export default SreachById;