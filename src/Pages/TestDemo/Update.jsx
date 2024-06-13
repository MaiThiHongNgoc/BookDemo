import React, { useState } from "react";
import axios from "axios";

const UpdateLibrary = () => {
    const [libraryId, setLibraryId] = useState(""); // State để lưu id của thư viện cần cập nhật
    const [newLibraryName, setNewLibraryName] = useState(""); // State để lưu tên mới của thư viện
    const [message, setMessage] = useState(""); // State để lưu thông báo kết quả cập nhật

    // Xử lý khi người dùng nhấn nút "Update"
    const handleUpdate = async (e) => {
        e.preventDefault(); // Ngăn chặn hành động mặc định của form
        try {
            // Gửi request PUT đến backend
            const response = await axios.put(`http://localhost:8080/api/v1/libraries/${libraryId}`, {
                name: newLibraryName // Truyền tên mới của thư viện vào body của request
            });
            console.log('Library updated:', response.data); // Log dữ liệu trả về từ backend (nếu cần)
            setMessage(`Library with ID ${libraryId} updated successfully.`);
            // Xử lý khi thành công, ví dụ: thông báo thành công, redirect,...
        } catch (error) {
            console.error('Error updating library:', error); // Xử lý khi có lỗi, ví dụ: thông báo lỗi,...
            setMessage(`Error updating library with ID ${libraryId}.`);
        }
    };

    return (
        <div>
            <h1>Update a Library</h1>
            <form onSubmit={handleUpdate}>
                <label>
                    Library ID:
                    <input
                        type="text"
                        value={libraryId}
                        onChange={(e) => setLibraryId(e.target.value)} // Cập nhật state khi người dùng nhập liệu
                        required // Yêu cầu người dùng nhập liệu
                    />
                </label>
                <label>
                    New Library Name:
                    <input
                        type="text"
                        value={newLibraryName}
                        onChange={(e) => setNewLibraryName(e.target.value)} // Cập nhật state khi người dùng nhập liệu
                        required // Yêu cầu người dùng nhập liệu
                    />
                </label>
                <button type="submit">Update</button> {/* Nút "Update" để gửi form */}
            </form>
            <p>{message}</p> {/* Hiển thị thông báo kết quả cập nhật */}
        </div>
    );
};

export default UpdateLibrary;
