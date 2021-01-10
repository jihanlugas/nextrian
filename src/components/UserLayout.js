import { Fragment } from 'react'
import Header from "./Header"
import Sidebar from "./Sidebar"
import MainLayout from "./MainLayout"

const AdminLayout = ({ children }) => {
    return (
        <MainLayout>
            <Sidebar />
            <div className={'w-full min-h-screen'}>
                <Header />
                <div>
                    {children}
                </div>
            </div>
        </MainLayout>
    )
}

export default AdminLayout;