const SearchBar = ({placeholder, name, handleSearch}) => {

    const handleChange = (event) => {
        const { value } = event.target;
        handleSearch(value);
    }

    return(
        <div className="search">
            <input 
                type="text" 
                placeholder={placeholder} 
                className="w-[675px] h-[46px] rounded-[28px] p-5" 
                onChange={(e) => handleSearch(e.target.value)}
                name={name}
            />
        </div>
    )
}

export default SearchBar;