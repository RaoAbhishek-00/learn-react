import { useRouteError } from "react-router-dom";

const Error = () => {
    const error = useRouteError();
    console.log(error)
    console.log(error.error.message

    )
    return (
        <div>
            <h1>{error.error.message}</h1>
            <h3>{error.statusText} - {error.status}</h3>
        </div>
        
        
    )
}
export default Error;