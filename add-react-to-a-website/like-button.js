"use strict";

const root_node = document.getElementById( "like-button-root" );
const root = ReactDOM.createRoot( root_node );

root.render( React.createElement( LikeButton ) );

const another_root_node = document.getElementById( "another-root" );
const another_root = ReactDOM.createRoot( another_root_node );

another_root.render( React.createElement( LikeButton ) );

function LikeButton() {

    const [ liked, setLiked ] = React.useState( false );

    if ( liked ) return "You liked this!";

    return (
        <button onClick = { () => setLiked( true ) }>
            Like
        </button>
    );

}
