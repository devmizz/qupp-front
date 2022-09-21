import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";

function MyPage() {
  const myInfo = "내 정보";
  const question = "질문글";
  const answer = "답변글";
  const reply = "댓글";

  return (
    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <Row>
        <Col sm={3}>
          <Nav variant="pills" className="flex-column">
            <Nav.Item>
              <Nav.Link eventKey="info">내 정보</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="question">질문글</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="answer">답변 남긴 글</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="reply">댓글 남긴 글</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={9}>
          <Tab.Content>
            <Tab.Pane eventKey="info">{myInfo}</Tab.Pane>
            <Tab.Pane eventKey="question">{question}</Tab.Pane>
            <Tab.Pane eventKey="answer">{answer}</Tab.Pane>
            <Tab.Pane eventKey="reply">{reply}</Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
}

export default MyPage;
