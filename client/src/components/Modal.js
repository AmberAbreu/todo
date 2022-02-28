import React from "react";

export default function Modal({ setOpenModal, errorMsg }) {
    return (
        <div className="modalBackground">
            <div className="modalContainer">
                <div className="title">
                    <h1>Something went wrong.</h1>
                </div>
                <div className="description">
                    <p>{errorMsg}</p>
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
