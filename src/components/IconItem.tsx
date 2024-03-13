
type Props = {
    url: string;
}
export const IconItem = ({url}: Props) => {
    return (
        <div className="w-12 h-auto p-2 m-2 rounded-md bg-red-700 border border-white cursor-pointer">
            <img className="w-full" src={url} alt={url} />
        </div>
    )
}