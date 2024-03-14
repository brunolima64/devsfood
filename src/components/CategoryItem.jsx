
export const CategoryItem = ({url, data, setActive}) => {

    const handleActiveCategory = () => {
        setActive(data.id);
    }

    return (
        <div 
            className="w-16 flex mr-2 mt-3 border border-red-900
            bg-red-200 rounded-md cursor-pointer hover:bg-red-300"
            onClick={handleActiveCategory}
        >
            <img className="w-full p-2" src={url} alt={url} />
        </div>
    )
}