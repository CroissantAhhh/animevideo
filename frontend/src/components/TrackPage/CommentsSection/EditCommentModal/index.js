
import React, { useState } from 'react';
import { Modal } from "../../../../context/Modal";
import { useSelector } from 'react-redux';
import EditCommentForm from "./EditCommentForm";

function EditCommentModal({ comment }) {
    const [showModal, setShowModal] = useState(false);
    const sessionUser = useSelector(state => state.session.user);

    return (
        <>
            <button className="open-edit-modal" style={{display: `${sessionUser?.id === comment.userId ? "block" : "none" }`}}
                    onClick={() => setShowModal(true)}>Edit</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <EditCommentForm comment={comment}></EditCommentForm>
                    <button className="close-modal" onClick={() => setShowModal(false)}>Cancel</button>
                </Modal>
            )}
        </>
    )
};

export default EditCommentModal;
