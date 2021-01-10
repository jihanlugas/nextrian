import UserLayout from "../components/UserLayout";
import { useState, useEffect } from 'react';
import ModalCreateUser from '../components/modal/ModalCreateUser';

const Home = () => {

    const [isShowModal, setIsShowModal] = useState(false);

    const toggleClickOverlay = () => {
        setIsShowModal(!isShowModal)
    }

    return (
        <UserLayout>
            <div className="p-4">
                <div className="mb-4 text-xl">
                    <span>Users</span>
                </div>
                <div className="flex justify-end mb-2">
                    <button
                        className='p-2 bg-blue-200'
                        onClick={() => toggleClickOverlay()}
                    >
                        Create User
                    </button>
                </div>
                <div>
                    <table className="w-full table-auto">
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Author</th>
                                <th>Views</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Intro to CSS</td>
                                <td>Adam</td>
                                <td>858</td>
                                <td></td>
                            </tr>
                            <tr className="">
                                <td>A Long and Winding Tour of the History of UI Frameworks and Tools and the Impact on Design</td>
                                <td>Adam</td>
                                <td>112</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Intro to JavaScript</td>
                                <td>Chris</td>
                                <td>1,280</td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <ModalCreateUser
                    show={isShowModal}
                    onClickOverlay={toggleClickOverlay}
                />
            </div>
        </UserLayout>
    )
}

export default Home;