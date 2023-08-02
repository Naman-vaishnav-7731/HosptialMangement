import SearchBar from "./searchBar";
import { BsBell } from 'react-icons/bs';

const TopBar = ({handleSearch}) => {

    return(
        <div className="topbar w-[90%] p-5 flex justify-around mt-[48px]">
           <SearchBar placeholder={`🔍 Search Patient`} name="search" handleSearch={handleSearch} />
           <button className="appoinment-button w-[236px] h-[40px] bg-[#312E81] rounded-[38px] text-white">Make a Appointment</button>
           <button className="appoinment-button w-[134px] h-[40px] bg-[#312E81] rounded-[38px] text-white">Add Patient</button>
           <button className="appoinment-button w-[39px] h-[39px] bg-[#312E81] rounded-[38px] text-white"><BsBell size={20} className="ml-2"/></button>
        </div>
    )
}

export default TopBar;