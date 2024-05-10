import { useNavigate } from "react-router-dom";
import { GoBackButtonComponent } from "./styles";

function GoBackButton() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1)
  }

  return (
    <GoBackButtonComponent onClick={goBack}>Go Back</GoBackButtonComponent>
  )
}

export default GoBackButton;
