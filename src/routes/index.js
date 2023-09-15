import { Navigate } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Quiz from "../pages/Quiz";
import Topic from "../pages/topic";
import Answer from "../pages/Answer";
import Result from "../pages/Result";
import PrivateRoute from "../components/privateRoute";

export const routesQuiz = [
    {
        path: "/",
        element: <Layout />,
        children:[
            {
                index: true,
                element: <Home />
            },
            {
                path: "login",
                element: <Login />
            },
            {
                path: "register",
                element: <Register />
            },
            {
                path: "*",
                element: <Navigate to="/" />
            },
            {
                element: <PrivateRoute />,
                children: [
                    {
                        path: "quiz/:id",
                        element: <Quiz />
                    },
                    {
                        path: "topic",
                        element: <Topic />
                    },
                    {
                        path: "answer",
                        element: <Answer />
                    },
                    {
                        path: "result/:id",
                        element: <Result />
                    }

                ]
            }

        ]

    }
]