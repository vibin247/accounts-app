import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Menu() {

    const navigate = useNavigate();

    return (
        <div className="flex-box flex-gap-l align-items-center">
            <Button variant="contained" onClick={_ => navigate("/list-invoice")}>
                Show Invoice List
            </Button>
            <Button variant="contained" onClick={_ => navigate("/create-invoice")}>
                Create Invoice
            </Button>
        </div>
    )

}