function ListOfPlayers(props) {

    return (

        <ul>

            {props.players.map((player, index) => (

                <li key={index}>
                    Mr. {player.name} {player.score}
                </li>

            ))}

        </ul>

    );

}

export default ListOfPlayers;