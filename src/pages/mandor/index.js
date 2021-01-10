import UserLayout from "../../components/UserLayout";
import { useState, useEffect } from 'react';
import ModalCreateMandor from '../../components/modal/ModalCreateMandor';

const Mandor = () => {

    const [isShowModal, setIsShowModal] = useState(false);

    const toggleClickOverlay = () => {
        setIsShowModal(!isShowModal)
    }

    return (
        <UserLayout>
            <div className="p-4">
                <div className="mb-4 text-xl">
                    <span>Mandor</span>
                </div>
                <div className="flex justify-end mb-2">
                    <button
                        onClick={() => toggleClickOverlay()}
                    >
                        Create Mandor
                    </button>
                </div>
                <div>
                    <table className="w-full table-fixed">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th className="w-24">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Rian</td>
                                <td>

                                </td>
                            </tr>
                            <tr className="">
                                <td>Anto</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Jhonny</td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <ModalCreateMandor
                    show={isShowModal}
                    onClickOverlay={toggleClickOverlay}
                />
            </div>
        </UserLayout>
    )
}

export default Mandor;