import axios from "axios";
import { useState } from "react";

function Messages({ Messages }) {

    const [value, setValue] = useState();
    const refresh = () => {
        // re-renders the component
        setValue({});
    }

    function Delete(id) {
        if (window.confirm("Do You Really Want To Delete This User")) {
            axios.delete(`/api/Messages?id=${id}`)
                .then(res => {
                    alert(res.data.message);
                    refresh();
                });
        }
    }
    return (
        <>
            <div className="row g-0 pt-2">
                <div className=" col-sm-12 d-flex justify-content-center r-log-b-h1 p-3 bg-secondary">
                    <h2 className="text-white"><b>Messages</b></h2>
                </div>
            </div>
            <div className="container-fluid overflow-auto pt-2">
                <table className="table table-primary">
                    <thead>
                        <tr>
                            <th className="text-center">Name</th>
                            <th className="text-center">Email</th>
                            <th className="text-center">Message</th>
                            <th className="text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Messages.map((data) =>
                                <tr key={1}>
                                    <td className="text-center">{data.name}</td>
                                    <td className="text-center">{data.email}</td>
                                    <td className="text-center">{data.message}</td>
                                    <td className="text-center">
                                        <div>
                                            <button className="btn-danger" onClick={() => Delete(data._id)}><i className="fas fa-trash-alt"></i></button>
                                        </div>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default Messages;