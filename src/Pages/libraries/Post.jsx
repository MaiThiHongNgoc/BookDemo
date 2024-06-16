import React, { useState } from "react";
import axios from "axios";

const CreateLibrary = () => {
    const [libraryName, setLibraryName] = useState(""); // State để lưu tên thư viện từ người dùng
    const [message, setMessage] = useState("");

    // Xử lý khi người dùng nhấn nút "Submit"
    const handleSubmit = async (e) => {
        e.preventDefault(); // Ngăn chặn hành động mặc định của form
        try {
            // Gửi request POST đến backend
            const response = await axios.post('http://localhost:8080/api/v1/libraries/', {
                name: libraryName // Truyền tên thư viện từ state vào body của request
            });
            console.log('Library created:', response.data); // Log dữ liệu trả về từ backend (nếu cần)
            setMessage(`Library created successfully.`);
            // Xử lý khi thành công, ví dụ: thông báo thành công, redirect,...
        } catch (error) {
            console.error('Error creating library:', error); // Xử lý khi có lỗi, ví dụ: thông báo lỗi,...
        }
    };

    return (
        <div>
            <h1>Create a Library</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Library Name:
                    <input
                        type="text"
                        value={libraryName}
                        onChange={(e) => setLibraryName(e.target.value)} // Cập nhật state khi người dùng nhập liệu
                        required // Yêu cầu người dùng nhập liệu
                    />
                </label>
                <button type="submit">Submit</button> {/* Nút "Submit" để gửi form */}
            </form>
            <p>{message}</p>
        </div>
    );
};

export default CreateLibrary;
