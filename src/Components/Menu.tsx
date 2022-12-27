import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Menu() {

    const navigate = useNavigate();

    return (
        <div>
            <Button variant="contained" onClick={_ => navigate("/create-invoice")}>
                Create Invoice
            </Button>
        </div>
    )

}