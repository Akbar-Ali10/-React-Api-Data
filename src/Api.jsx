
import { useEffect, useState } from "react";

function Api() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos")
            .then((result) => result.json())
            .then((resp) => {
                console.warn("result", resp);
                setData(resp);
            });
    }, []);

    console.warn(data);

    return (
        <>
            <table border="" style={{ borderCollapse: "collapse", width: "100%" }}>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>ID</th>
                        <th>User ID</th>
                        <th>Completed</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index}>
                            <td>{item.title}</td>
                            <td>{item.id}</td>
                            <td>{item.userId}</td>
                            <td>{item.completed ? "Yes" : "No"}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}

export default Api;
