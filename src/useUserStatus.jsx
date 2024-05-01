import { useEffect, useState } from "react"

export default function useStatus(props) {
    const [isOnline, setIsOnline] = useState(null)

    useEffect(() => {
        function handleStatusChange(status){
            setIsOnline(status.isOnline)
        }
        ServerAPI.subscribeUserStatus(props.user.id, handleStatusChange)
        return() => { 
            ServerAPI.unsubscribeUserStatus(props.user.id, handleStatusChange)
        }
    })
    return insOnline
}