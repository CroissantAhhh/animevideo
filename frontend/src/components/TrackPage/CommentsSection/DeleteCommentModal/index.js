
import React, { useState } from 'react';
import { Modal } from "../../../../context/Modal";
import { useSelector, useDispatch } from 'react-redux';
import { deleteComment } from "../../../../store/comments";

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
                    <h2>Are you sure you want to delete your comment?</h2>
                    <button onClick={confirmDelete}>Yes</button>
                    <button onClick={() => setShowModal(false)}>Cancel</button>
                </Modal>
            )}
        </>
    )
};

export default DeleteCommentModal;
