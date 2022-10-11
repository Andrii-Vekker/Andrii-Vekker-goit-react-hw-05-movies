import { useLocation } from "react-router-dom";
import { BackBtn, HomeIcon } from "./GoHomeBtn.styled"

export default function GoHomeBtn() {

    const location = useLocation()
    return (
        <BackBtn to={location.state?.from ?? "/"}><HomeIcon/>go Home</BackBtn>
    );
};
