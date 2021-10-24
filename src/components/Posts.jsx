import React from "react";
import "../css/card.scss";
import { Col, Nav, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";

const Posts = ({ posts, loading }) => {
    if (loading) {
        return <h2>Loading...</h2>;
    }

    return (
        <div className="grid-container gap-4">
            {posts.map((p, index) => {
                return (
                    <div
                        className="max-w-sm rounded overflow-hidden shadow-lg bg_change"
                        key={p.name}
                    >
                        <img className="w-full" src={p.picture} alt={p.name} />
                        <div className="px-6 py-4">
                            <a
                                className="font-bold text-xl mb-2 link"
                                href={p.link}
                                target={"_blank"}
                            >
                                {p.name}
                            </a>
                            <p className="color_description text-base">
                                {p.name}
                            </p>
                            {p.date ? (
                                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 margin-s">
                                    {new Date(p.date).toLocaleDateString(
                                        navigator.language,
                                        {
                                            year: "numeric",
                                            month: "long",
                                            day: "numeric",
                                        }
                                    )}
                                </span>
                            ) : (
                                console.log(p)
                            )}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Posts;
