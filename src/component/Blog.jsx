import React from "react";
import blog1 from "../assets/img/2.png";

function Blog(props) {
    return (
        <div className="border border-white rounded-lg shadow-sm overflow-hidden">

            {/* Blog Image */}
            <img
                src={props.image}
                alt={props.title}
                className="w-full h-[250px] object-cover"
            />

            {/* Blog Content */}
            <div className="p-6">

                <p className="text-sm text-blue-500">
                    {props.category}
                </p>

                <h2 className="text-2xl font-bold mt-2">
                    {props.title}
                </h2>

                <p className="text-sm mt-3">
                    {props.description}
                </p>

                <p className="text-xs mt-4">
                    {props.date}
                </p>

            </div>
        </div>
    );
}

export default Blog;