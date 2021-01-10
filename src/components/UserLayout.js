import { useState, useEffect } from 'react';
import { Fragment } from 'react'
import Header from "./Header"
import Sidebar from "./Sidebar"
import MainLayout from "./MainLayout"

const AdminLayout = ({ children }) => {

    const [show, setShow] = useState(false);

    const onClickOverlay = () => {
        setShow(!show)
    }

    return (
        <MainLayout>
            <Sidebar show={show} onClickOverlay={onClickOverlay} />
            <div className={'w-full h-screen overflow-y-scroll'}>
                <Header onClickOverlay={onClickOverlay} />
                <div className="">
                    {children}
                </div>
            </div>
        </MainLayout>
    )
}

export default AdminLayout;