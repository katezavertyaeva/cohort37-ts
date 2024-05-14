
import {CardContainer, Name} from './styles'
import Message from '../Message/Message';


function Card(){

    return <CardContainer isShowResult={true}>
        <Name>Irene Schneider: </Name> 
        <Message/>
        </CardContainer>
}
export default Card;