import { useState } from "react"
import { Button } from "react-bootstrap"
import ScoreTable from "../../components/dummy_game/score_table"
import MyFooter from "../../components/footer"
import MyNavbar from "../../components/navbar"
import style from "../../styles/Dummy.module.css"

const DummyGame = () => {
    const [score, setScore] = useState(0)
    const generateScore = () => {
        const randomScore = Math.floor(Math.random() * 300)
        setScore(randomScore)
    }
    console.log(score)
    return(
        <div>
            <MyNavbar/>
            <div className={style.dummy}>
                <Button className={style.dummy_bt} onClick={() => {generateScore()}}>CLICK ME!</Button>
                <ScoreTable score={score}/>
            </div>
            <MyFooter/>
        </div>
    )
}

export default DummyGame