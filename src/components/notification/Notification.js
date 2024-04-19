import { useSelector, useDispatch } from "react-redux"
import { toggleNotState } from "../../reducers/userReducer"
import './notification.css'
import { useEffect } from "react"
export const Notification = () => {
    
    const dispatch = useDispatch()
    const notState = useSelector(state=>state.user.notificationState)
    
    console.log(notState)
    

    return (
        <span className={notState.isVisible == true ? 'notification show' : 'notification'}>{notState.text}</span>
    )
}