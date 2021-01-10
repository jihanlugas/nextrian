import { Fragment } from 'react'

const Header = ({ children }) => {
    return (
        <Fragment>
            <div className="h-16 p-4 bg-blue-300 flex justify-between items-center">
                <div>Logo</div>
                <div>Profile</div>
            </div>
        </Fragment>
    )
}

export default Header;