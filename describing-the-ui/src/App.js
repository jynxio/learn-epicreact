function Floor1() {

    return (
        <div
            className = "floor-1"
            onClick = { _ => alert( "floor-1-bubble" ) }
            onClickCapture = { _ => alert( "floor-1-capture" ) }
        >
            <Floor2 />
        </div>
    );

}

function Floor2() {

    return (
        <div
            className = "floor-2"
            onClick = { _ => alert( "floor-2-bubble" ) }
            onClickCapture = { _ => alert( "floor-2-capture" ) }
        >
            <Floor3 />
        </div>
    );

}

function Floor3() {

    return (
        <div
            className = "floor-3"
            onClick = { _ => alert( "floor-3-bubble" ) }
            onClickCapture = { _ => alert( "floor-3-capture" ) }
        ></div>
    );

}

export default function App() {

    return <Floor1 />;

}
