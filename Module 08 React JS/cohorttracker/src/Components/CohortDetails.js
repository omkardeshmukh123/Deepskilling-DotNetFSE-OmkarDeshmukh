import styles from "./CohortDetails.module.css";

function CohortDetails(props) {

    const color =
        props.status === "Ongoing"
            ? "green"
            : "blue";

    return (

        <div className={styles.box}>

            <h3 style={{ color: color }}>
                {props.name}
            </h3>

            <dl>

                <dt>Started On</dt>
                <dd>{props.startedOn}</dd>

                <dt>Current Status</dt>
                <dd>{props.status}</dd>

                <dt>Coach</dt>
                <dd>{props.coach}</dd>

                <dt>Trainer</dt>
                <dd>{props.trainer}</dd>

            </dl>

        </div>

    );

}

export default CohortDetails;