
import React, { useState } from 'react';
import { Modal } from '../../../context/Modal';
import AlbumUploadPage from "./AlbumUploadPage";

function AlbumUploadModal({ medium }) {
    const [showModal, setShowModal] = useState(false);
    return (
        <>
            <button className="upload-album-button" onClick={() => setShowModal(true)}>Upload Album</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <AlbumUploadPage medium={medium}></AlbumUploadPage>
                </Modal>
            )}
        </>
    )
};

export default AlbumUploadModal;
