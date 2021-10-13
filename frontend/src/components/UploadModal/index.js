import { Link } from "react-router-dom";
import React, { useState } from 'react';
import { Modal } from '../../context/Modal';

function UploadModal() {
    const [showModal, setShowModal] = useState(false);
    return (
        <>
            <button className="upload-nav-button" onClick={() => setShowModal(true)}>Upload</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <Link to="/upload/media" onClick={() => {setShowModal(false)}}>Media</Link>
                    <Link to="/upload/album" onClick={() => {setShowModal(false)}}>Album</Link>
                    <Link to="/upload/track" onClick={() => {setShowModal(false)}}>Track</Link>
                </Modal>
            )}
        </>
    )
};

export default UploadModal;
