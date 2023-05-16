import { BrowserRouter, Route, Routes } from "react-router-dom"
import { HomePage } from "./homePage"
import { UserPage } from "./userPage"



export const WebPages = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/userPage/:id" element={<UserPage />} />
            </Routes>
        </BrowserRouter>
    )
}