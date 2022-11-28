import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { Button } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import ScoreTable from "../../components/dummy_game/score_table"
import MyFooter from "../../components/footer"
import MyNavbar from "../../components/navbar"
import { retrieveScoreById } from "../../redux/reducer/scores"
import style from "../../styles/Dummy.module.css"
import { validateUser } from "../../util/validateUser"

const DummyGame = () => {
    const dispatch = useDispatch()
    const router = useRouter()
   
    const [score, setScore] = useState(0)
    const [user, setUser] = useState({})
    const generateScore = () => {
        const randomScore = Math.floor(Math.random() * 300)
        setScore(randomScore)
    }
    const scoreData = useSelector((state) => {
        return state.scoreReducer
    })

    useEffect(() => {
        const data = validateUser()
        setUser(data)
        if(data.status == "INVALID"){
            router.push("/")
        }
        if( scoreData.dummy == null){
            console.log("tes")
            dispatch(retrieveScoreById(data.uid))
        }
    },[])

    return(
        <div>
            <MyNavbar/>
            <div className={style.dummy}>
                <Button className={style.dummy_bt} onClick={() => {generateScore()}}>CLICK ME!</Button>
                <ScoreTable score={score} userId={user.uid}/>
            </div>
            <MyFooter/>
        </div>
    )
}

export default DummyGame