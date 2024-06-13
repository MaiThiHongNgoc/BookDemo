import React, { useState } from "react";
import axios from "axios";

const DeleteLibrary = () => {
    const [libraryId, setLibraryId] = useState(""); // State để lưu id của thư viện cần xóa
    const [message, setMessage] = useState(""); // State để lưu thông báo kết quả xóa

    // Xử lý khi người dùng nhấn nút "Delete"
    const handleDelete = async (e) => {
        e.preventDefault(); // Ngăn chặn hành động mặc định của form
        try {
            // Gửi request DELETE đến backend
            const response = await axios.delete(`http://localhost:8080/api/v1/libraries/${libraryId}`);
            console.log('Library deleted:', response.data); // Log dữ liệu trả về từ backend (nếu cần)
            setMessage(`Library with ID ${libraryId} deleted successfully.`);
            // Xử lý khi thành công, ví dụ: thông báo thành công, redirect,...
        } catch (error) {
            console.error('Error deleting library:', error); // Xử lý khi có lỗi, ví dụ: thông báo lỗi,...
            setMessage(`Error deleting library with ID ${libraryId}.`);
        }
    };

    return (
        <div>
            <h1>Delete a Library</h1>
            <form onSubmit={handleDelete}>
                <label>
                    Library ID:
                    <input
                        type="text"
                        value={libraryId}
                        onChange={(e) => setLibraryId(e.target.value)} // Cập nhật state khi người dùng nhập liệu
                        required // Yêu cầu người dùng nhập liệu
                    />
                </label>
                <button type="submit">Delete</button> {/* Nút "Delete" để gửi form */}
            </form>
            <p>{message}</p> {/* Hiển thị thông báo kết quả xóa */}
        </div>
    );
};

export default DeleteLibrary;
