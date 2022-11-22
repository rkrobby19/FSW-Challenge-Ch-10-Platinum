const TheSimonGame = () => {
    return (
        <>
            <div className="row" style={{ display: "block" }}>
                <div
                    type="button"
                    id="green"
                    className="my-btn green"
                    style={{
                        height: "200px",
                        width: "200px",
                        backgroundColor: "green",
                    }}
                    // onClick={playerChoices}
                ></div>
                <div
                    type="button"
                    id="red"
                    className="my-btn red"
                    style={{
                        height: "200px",
                        width: "200px",
                        backgroundColor: "red",
                    }}
                    // onClick={playerChoices}
                ></div>
            </div>
            <div className="row" style={{ display: "block" }}>
                <div
                    type="button"
                    id="yellow"
                    className="my-btn yellow"
                    style={{
                        height: "200px",
                        width: "200px",
                        backgroundColor: "yellow",
                    }}

                    // onClick={playerChoices}
                ></div>
                <div
                    type="button"
                    id="blue"
                    className="my-btn blue"
                    style={{
                        height: "200px",
                        width: "200px",
                        backgroundColor: "blue",
                    }}

                    // onClick={playerChoices}
                ></div>
            </div>
        </>
    );
};

export default TheSimonGame;
