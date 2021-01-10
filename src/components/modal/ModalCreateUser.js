import Modal from "../Modal";
import { useEffect, useState } from "react";



const ModalCreateUser = ({ show, onClickOverlay, dispatch, selectedId, currData, isFetching, submitResult }) => {
    return (
        <Modal show={show} onClickOverlay={onClickOverlay}>
            <div className={"flex mb-4 text-xl"}>
                Create User
            </div>
        </Modal>
    )
}

export default ModalCreateUser;