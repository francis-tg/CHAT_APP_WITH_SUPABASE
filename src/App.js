import { 
  Container,
  Row,
  Col
} from "react-bootstrap";
import Contact from "./components/Contact";
import ContactContainer from "./components/ContactContainer";
import ContactHeader from "./components/ContactHeader";
import MessageHeader from "./components/MessageHeader";

function App() {
  return (
    <Container>
      <div className="chat-box mt-5">
        <Row>
          <Col lg={4} sm={6} className="contacts">
            <ContactHeader username={sessionStorage.getItem("user").email}/>
            <ContactContainer element={<Contact/>}/>
          </Col>
          <Col lg={8} sm={6} className="messages">
            <MessageHeader/>
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default App;
