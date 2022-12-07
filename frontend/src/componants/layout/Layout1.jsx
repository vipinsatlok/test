import { page, wrapper } from "./layout1.module.scss"

const Layout1 = ({ children }) => {
    return (
        <div className={page}>
            <div className={wrapper}>
                {children}
            </div>
        </div>
    )
}

export default Layout1