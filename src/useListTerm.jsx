import useUserStatus from "./useUserStatus"

export default function useStatus(props) {
    const isOnline = useUserStatus(props.user.id)

    return (
        <li style={{color : isOnline ? 'green' : 'black'}}>
        {props.user.name}
        </li>
    )
}y