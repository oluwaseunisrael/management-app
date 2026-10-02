import React from "react";

function Service(props) {
    return (
        <div className="p-6 border border-white rounded-lg shadow-sm">
            <props.icon size={40} />

            <h2 className="text-xl font-bold mt-4">
                {props.title}
            </h2>

            <p className="text-sm mt-2">
                {props.description}
            </p>
        </div>
    );
}

export default Service;