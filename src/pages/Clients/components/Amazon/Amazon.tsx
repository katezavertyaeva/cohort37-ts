import { AmazonWrapper, ContentWrapper } from "./styles";
import GoBackButton from "components/GoBackButton/GoBackButton";

function Amazon() {
  return (
    <AmazonWrapper>
      <GoBackButton />
      <ContentWrapper>Amazon company</ContentWrapper>
    </AmazonWrapper>
  )
}

export default Amazon;
