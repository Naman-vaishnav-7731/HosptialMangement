import { Link } from "react-router-dom";

const SideBar = ({middleMenus, endMenus, logo}) => {

    const renderMenus = (menusArr) => {
        return(
            menusArr.map((menu) => {
                return(
                    <li key={menu.title} className="p-3">
                        <Link className="p-3 flex justify-start items-center text-white font-normal text-lg w-[100%] gap-8 hover:bg-[#9795CD] rounded-[8px] border-1" to={menu.path}>
                            <span className="w-[50%">{menu.icon}</span>
                            <span className="w-[50%] font-Helvetica">{menu.title}</span>
                        </Link>
                    </li>
                )
        }))
    }

    return(
        <div className="side-bar flex bg-[#312E81] w-72 h-full flex-col items-center fixed rounded-s-[15px]">
            <div className="logo h-[15%] flex justify-center items-center">
                <Link to={"/"} className="font-bold text-3xl leading-8 text-white font-helvetica-rounded">{logo}</Link>
            </div>
            <div className="middle-menus h-[30%]">
                <ul className="meus flex flex-col">{renderMenus(middleMenus)}</ul>
                <hr color="#939393" className="h-[1px] w-56 mt-7"/>
            </div>
            <div className="end-menus h-[20%] mt-auto">
                <ul className="meus flex flex-col">{renderMenus(endMenus)}</ul>
            </div>
        </div>
    )
}

export default SideBar;