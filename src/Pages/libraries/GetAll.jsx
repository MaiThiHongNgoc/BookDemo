import React, { useEffect, useState } from "react";
import axios from "axios";

const FetchAllData = () => {
    const [data, setData] = useState([]); // State để lưu trữ dữ liệu từ API
    const [loading, setLoading] = useState(true); // State để kiểm tra trạng thái loading

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/v1/libraries');
                setData(response.data); // Lưu dữ liệu từ response vào state
                setLoading(false); // Đánh dấu loading đã hoàn thành
            } catch (error) {
                console.error('Error fetching data:', error);
                setLoading(false); // Đánh dấu loading đã hoàn thành, có thể xử lý lỗi ở đây
            }
        };

        fetchData(); // Gọi hàm fetchData khi component được mount
    }, []);

    return (
        <div>
             <br />
             <h4>Danh Sách:</h4>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <div>
                    <pre>{JSON.stringify(data.content, null , 2)}</pre>
                </div>
            )}
        </div>
    );
};

export default FetchAllData;
