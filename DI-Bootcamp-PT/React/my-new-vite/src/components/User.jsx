import "./user.css"

const User = (props) => {
    return (
        <div>
            style ={{
                display: "inline-block",
                margin:"20px",
                border:"1px solid black",

                // className = "",
            }}
            <img src= {`https://robohash.org/${props.id}`}alt="" />
            <h2>{props.name}</h2>
            <h4>{props.username}</h4>
            <p>{props.email}</p>
        </div>
    );
};

export default User;