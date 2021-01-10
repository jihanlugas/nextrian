import UserLayout from "../../components/UserLayout";
import { useState, useEffect } from 'react';
import ModalCreateAnggota from '../../components/modal/ModalCreateAnggota';

const Anggota = () => {

    const [isShowModal, setIsShowModal] = useState(false);

    const toggleClickOverlay = () => {
        setIsShowModal(!isShowModal)
    }

    return (
        <UserLayout>
            <div className="p-4">
                {[1,].map((num, index) => {
                    return (
                        <div className="mb-4 text-xl" key={index}>
                            <span>Anggota</span>
                        </div>
                    )
                })}

                <div className="flex justify-end mb-2">
                    <button
                        onClick={() => toggleClickOverlay()}
                    >
                        Create Anggota
                    </button>
                </div>
                <div>
                    <table className="w-full table-fixed">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Mandor</th>
                                <th className="w-24">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Al Gazali</td>
                                <td>Rian</td>
                                <td>

                                </td>
                            </tr>
                            <tr className="">
                                <td>Surya</td>
                                <td>Rian</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Bell</td>
                                <td>Jhonny</td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <ModalCreateAnggota
                    show={isShowModal}
                    onClickOverlay={toggleClickOverlay}
                />
            </div>
        </UserLayout>
    )
}

export default Anggota;