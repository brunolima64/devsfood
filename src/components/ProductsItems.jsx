import NavigateNextIcon from '@mui/icons-material/NavigateNext';

export const ProductsItems = ({data, activeCategorie}) => {

    return (
        <>
        {data.id_cat === activeCategorie &&
  
        <div className="p-3 rounded-md bg-white">
            <div className="flex">
                <img className='w-36 mr-2' src={data.image} alt={data.image} />
                <div className='flex-1'>
                    <p className='text-lg font-bold mb-1'>{data.name}</p>
                    <p>R$ {data.price}</p>
                    <p className='text-sm'>{data.ingredients}</p>
                </div>
                <div className="flex justify-center items-center w-16 h-auto">
                    <NavigateNextIcon style={{ fontSize: '50px', color: '#8B0000', cursor: 'pointer' }}/>
                </div>
            </div>
        </div>
        }
        
        {activeCategorie === 0 &&
        <div className="p-3 rounded-md bg-white">
            <div className="flex">
                <img className='w-36 mr-2' src={data.image} alt={data.image} />
                <div className='flex-1'>
                    <p className='text-lg font-bold mb-1'>{data.name}</p>
                    <p>R$ {data.price}</p>
                    <p className='text-sm'>{data.ingredients}</p>
                </div>
                <div className="flex justify-center items-center w-16 h-auto">
                    <NavigateNextIcon style={{ fontSize: '50px', color: '#8B0000', cursor: 'pointer' }}/>
                </div>
            </div>
        </div>
        }
        </>
    )
}