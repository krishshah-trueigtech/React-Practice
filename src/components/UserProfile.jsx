export const UserProfile = (props)=> {
    return (
        <div style = {{border: "1px solid #ccc", padding: "20px", margin: "10px"}}>
            <h2>Name: {props.name}</h2>
            <p>Role: {props.role}</p>
            <p>Age: {props.age}</p>

            <p style={{color: props.isOnline ? "green" : "red"}}>
                status: {props.isUserOnline ? "Online" : "Offline"}
            </p>
        </div>
    );
};