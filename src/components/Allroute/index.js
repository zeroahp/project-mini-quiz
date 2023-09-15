import { useRoutes } from "react-router-dom";
import { routesQuiz } from "../../routes";


function AllRoute(){
    const elements = useRoutes(routesQuiz);
    return elements;
}

export default AllRoute;