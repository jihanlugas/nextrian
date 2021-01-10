import { Fragment } from 'react'
import Link from 'next/link'

const Sidebar = ({ children }) => {
    return (
        <Fragment>
            <div className={'hidden lg:flex lg:w-96 bg-gray-500 h-screen flex-col'}>
                <div className="h-16 flex justify-center items-center">
                    <span className="text-3xl">Logo App</span>
                </div>
                <div className="bg-red-200 py-4">
                    <Link href={"/"}>
                        <a>
                            <div className="p-4 hover:bg-gray-200">Dashboard</div>
                        </a>
                    </Link>
                    <Link href={"/users"}>
                        <a>
                            <div className="p-4 hover:bg-gray-200">Users</div>
                        </a>
                    </Link>
                </div>
            </div>
        </Fragment>
    )
}

export default Sidebar;