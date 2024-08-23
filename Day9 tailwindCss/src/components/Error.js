import { useRouteError } from "react-router-dom";

const Error = () => {
    const error = useRouteError();
    
    return (
        <div>
            <h1>{error.error}</h1>
            <h3>{error.statusText} - {error.status}</h3>
        </div>
        
        
    )
}
export default Error;