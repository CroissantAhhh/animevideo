import React, { useState } from 'react';
import { Modal } from '../../../context/Modal';
import MediaUploadPage from "./MediaUploadModal";

function MediaUploadModal() {
    const [showModal, setShowModal] = useState(false);
    return (
        <>
            <button className="upload-nav-button" onClick={() => setShowModal(true)}>Upload Media</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <MediaUploadPage></MediaUploadPage>
                </Modal>
            )}
        </>
    )
};

export default MediaUploadModal;
