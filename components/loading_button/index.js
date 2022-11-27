import { Button } from "react-bootstrap"
import { useSelector } from "react-redux"
import Spinner from 'react-bootstrap/Spinner';

const MyButton = ({title, onClick}) => {

    const loadingData = useSelector((state)=> {
        return state.loadingReducer
    }) 

    if(loadingData.loadingStatus){
       return(        
        <p style={{color:"white", background:"transparent"}} disabled>
            <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
            </Spinner>
        </p>
       )
    }else{
        return (
            <p style={{color:"red", align:"center", background:"transparent"}} onClick={onClick}></p>
        )
    }

}

export default MyButton