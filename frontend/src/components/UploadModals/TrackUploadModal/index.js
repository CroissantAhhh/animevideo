import React, { useState } from 'react';
import { Modal } from '../../../context/Modal';
import TrackUploadPage from "./TrackUploadPage";

function TrackUploadModal({ album }) {
    const [showModal, setShowModal] = useState(false);
    return (
        <>
            <button className="upload-nav-button" onClick={() => setShowModal(true)}>Upload Track</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <TrackUploadPage album={album}></TrackUploadPage>
                </Modal>
            )}
        </>
    )
};

export default TrackUploadModal;
