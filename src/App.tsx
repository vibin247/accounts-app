import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Invoice from "./Components/Invoice"
import Menu from "./Components/Menu"
import Sales from "./Components/Sales"
import "./styles/index.scss"

export default function App() {

    const routes = createBrowserRouter([
        {
            path : "/",
            element : <Menu />
        },
        {
            path : "/create-invoice",
            element : <Sales/>
        },
        {
            path : "/invoice",
            element : <Invoice/>
        }
    ])

    return (
        <div className="spacer-m" style={{ minHeight : "100vh" }}>
            <div style={{ border : "1px solid lightgrey", borderRadius : 15, height : "100%" }}
             className="spacer-m flex-column flex-gap-xl">
                <div style={{ fontSize : 22, textAlign : 'center' }}> Billing application </div>
                <RouterProvider router={routes}/>
            </div>
        </div>
    )

}