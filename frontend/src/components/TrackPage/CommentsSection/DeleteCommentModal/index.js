
import React, { useState } from 'react';
import { Modal } from "../../../../context/Modal";
import { useSelector, useDispatch } from 'react-redux';
import { deleteComment } from "../../../../store/comments";
import './DeleteCommentModal.css';

function DeleteCommentModal({ comment }) {
    const [showModal, setShowModal] = useState(false);
    const sessionUser = useSelector(state => state.session.user);
    const dispatch = useDispatch();

    const confirmDelete = async (e) => {
        await dispatch(deleteComment(comment.id))
    };

    return (
        <>
            <button style={{display: `${sessionUser?.id === comment.userId ? "block" : "none" }`}}
                    onClick={() => setShowModal(true)}>Delete</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <div className="delete-confirmation">
                        <h2>Are you sure you want to delete your comment?</h2>
                        <div className="delete-options">
                            <button onClick={confirmDelete}>Yes</button>
                            <button onClick={() => setShowModal(false)}>Cancel</button>
                        </div>
                    </div>
                </Modal>
            )}
        </>
    )
};

export default DeleteCommentModal;
