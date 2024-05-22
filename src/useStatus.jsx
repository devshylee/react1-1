import { useEffect, useState } from "react"

export default function useStatus(props) {
    const isOnline = useUserStatus(props.user.id)
    if(isOnline === null){
        return '대기중...'
    }
    return isOnline ? '온라인' : '오프라인'
 }
    
    
