import React from "react";

export default function Modal({ setOpenModal }) {
    return (
        <div className="modalBackground">
            <div className="modalContainer">
                <div className="title">
                    <h1>Something went wrong.</h1>
                </div>
                <div className="description">
                    <p>Please try again.</p>
                </div>
                <div className="modalFooter">
                    <button
                        className="modal-btn"
                        onClick={() => setOpenModal(false)}
                    >
                        Continue
                    </button>
                </div>
            </div>
        </div>
    );
}
