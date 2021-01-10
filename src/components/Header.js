import { Fragment } from 'react'

const Header = ({ children, onClickOverlay }) => {
    return (
        <Fragment>
            <div className="h-16 p-4 bg-blue-300 flex justify-between items-center">
                <div onClick={() => onClickOverlay()}>Toggle Menu</div>
                <div>Profile</div>
            </div>
        </Fragment>
    )
}

export default Header;