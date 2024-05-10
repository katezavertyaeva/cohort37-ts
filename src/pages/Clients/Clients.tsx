
import { ClientLink, ClientsWrapper } from "./styles";

function Clients() {
  return (
    <ClientsWrapper>
      <ClientLink to='amazon'>Amazon company</ClientLink>
      <ClientLink to='facebook'>Facebook company</ClientLink>
      <ClientLink to='google'>Google company</ClientLink>
    </ClientsWrapper>
  )
}

export default Clients;
