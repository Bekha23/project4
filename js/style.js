var first = document.getElementById( 'first' ),
    second = document.getElementById( 'second' );

function toggle() {

    if ( first.style.display === "block" ) {

        first.style.display = "none";
        second.style.display = "block";

    } else { // switch back

        first.style.display = "block";
        second.style.display = "none";

    }

}

first.onclick = toggle;
second.onclick = toggle;
