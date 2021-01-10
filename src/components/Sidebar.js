import { Fragment } from 'react'
import Link from 'next/link'

const Sidebar = ({ children, onClickOverlay, show }) => {
    return (
        <div className={show ? "z-10 inset-0 overflow-y-auto fixed" : "hidden"} >
            <div className="min-h-screen text-center p-0">
                <div className="fixed inset-0 transition-opacity" onClick={() => onClickOverlay()} aria-hidden="true">
                    <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                </div>
                <div className="fixed bg-white h-screen flex w-4/5 sm:w-80 sm:bg-red-200">
                    <div className={'flex bg-gray-500 flex-col w-full'}>
                        <div className="h-16 flex justify-center items-center">
                            <span className="text-3xl">Logo App</span>
                        </div>
                        <div className="bg-red-200 py-4">
                            <Link href={"/"}>
                                <a>
                                    <div className="p-4 hover:bg-gray-200 w-full flex">
                                        <span>Dashboard</span>
                                    </div>
                                </a>
                            </Link>
                            <Link href={"/mandor"}>
                                <a>
                                    <div className="p-4 hover:bg-gray-200 w-full flex">
                                        <span>Mandor</span>
                                    </div>
                                </a>
                            </Link>
                            <Link href={"/anggota"}>
                                <a>
                                    <div className="p-4 hover:bg-gray-200 w-full flex">
                                        <span>Anggota</span>
                                    </div>
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        // <Fragment>
        //     <div className={'hidden lg:flex lg:w-96 bg-gray-500 h-screen flex-col'}>
        //         <div className="h-16 flex justify-center items-center">
        //             <span className="text-3xl">Logo App</span>
        //         </div>
        //         <div className="bg-red-200 py-4">
        //             <Link href={"/"}>
        //                 <a>
        //                     <div className="p-4 hover:bg-gray-200">Dashboard</div>
        //                 </a>
        //             </Link>
        //             <Link href={"/mandor"}>
        //                 <a>
        //                     <div className="p-4 hover:bg-gray-200">Mandor</div>
        //                 </a>
        //             </Link>
        //             <Link href={"/anggota"}>
        //                 <a>
        //                     <div className="p-4 hover:bg-gray-200">Anggota</div>
        //                 </a>
        //             </Link>
        //         </div>
        //     </div>
        // </Fragment>
    )
}

export default Sidebar;