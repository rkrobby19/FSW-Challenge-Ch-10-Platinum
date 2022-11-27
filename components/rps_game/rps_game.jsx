import { Button, Col } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import style from "../../styles/Rps.module.css"

const RpsGame = (props) => {
    const roundsData = useSelector((state) => {
        return state.roundsReducer
    })
    let footer = <div></div>
    if(props.isCLick && props.round != 3){
        footer = <div>
            <h1 className={style.next_bt}>NEXT ROUND</h1>
            <img src="/next.png" alt="" className={style.next_bt} onClick={props.handleNext}/>
        </div>
    }else if(props.isCLick && props.round == 3){
        footer = <img src="/refresh.png" className={style.refresh_bt} onClick={ () => {window.location.reload(false)} } />
    }
    return(
        <div className={style.game_main}>
            <div class={style.header}>
                <img src="/logo 1.png" alt="" class={style.logo} />
                <h1 class={style.header_text}>ROCK PAPER SCISSORS</h1>
            </div>
            <div class={style.content}>
                <div class={style.player}>
                    <h1 class={style.content_text}>PLAYER 1</h1>
                    <img 
                    src="/batu.png"
                    alt="" 
                    class={style.batu} 
                    id="batu" 
                    onMouseEnter={props.isCLick ? () => {} : props.handlingMouseEnter} 
                    onMouseLeave={props.isCLick ? () => {} : props.handlingMouseLeave}
                    onClick={props.isCLick ? () => {} : props.handlingOnClick}
                    style={{backgroundColor: [props.playerBackgroundColor.batu]}}
                    />
                    <img 
                    src="/kertas.png"
                    alt="" 
                    class={style.kertas} 
                    id="kertas" 
                    onMouseEnter={props.isCLick ? () => {} : props.handlingMouseEnter} 
                    onMouseLeave={props.isCLick ? () => {} : props.handlingMouseLeave}
                    onClick={props.isCLick ? () => {} : props.handlingOnClick}
                    style={{backgroundColor: [props.playerBackgroundColor.kertas]}}
                    />
                    <img 
                    src="/gunting.png"
                    alt="" 
                    class={style.gunting}
                    id="gunting" 
                    onMouseEnter={props.isCLick ? () => {} : props.handlingMouseEnter} 
                    onMouseLeave={props.isCLick ? () => {} : props.handlingMouseLeave}
                    onClick={props.isCLick ? () => {} : props.handlingOnClick}
                    style={{backgroundColor: [props.playerBackgroundColor.gunting]}}
                    />
                </div>
                <div id="result-vs" class={style.result_vs}>
                    <h1>ROUND {props.round}</h1>
                    <h1 class={style.vs_text} id="vs-text">VS</h1>
                    <h1>{roundsData[props.round].result}</h1>
                </div>
                <div class={style.com}>
                    <h1 class={style.content_text}>COM</h1>
                    <img 
                    src="/batu.png"
                    alt="" 
                    class={style.batu}
                    id="batu"
                    style={{backgroundColor: [props.comBackgroundColor.batu]}}
                    />
                    <img 
                    src="/kertas.png"
                    alt="" 
                    class={style.kertas} 
                    id="kertas"
                    style={{backgroundColor: [props.comBackgroundColor.kertas]}}
                    />
                    <img 
                    src="/gunting.png"
                    alt="" 
                    class={style.gunting}
                    id="gunting"
                    style={{backgroundColor: [props.comBackgroundColor.gunting]}}
                    />
                </div>
            </div>
            {footer}
        </div>
    )
}

export default RpsGame