import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';

import MyInfo from '../../components/user/MyInfo';
import MyQuestions from '../../components/user/MyQuestions';
import MyAnswers from '../../components/user/MyAnswers';
import MyReplys from '../../components/user/MyReplys';

function MyPage() {
  return (
    <Tab.Container
      id="left-tabs-example"
      defaultActiveKey="info"
      className="flex container justify-center items-center"
    >
      <Row>
        <Col sm={2}>
          <Nav justify variant="pills" className="flex-column">
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
            <Tab.Pane eventKey="info">
              <MyInfo />
            </Tab.Pane>
            <Tab.Pane eventKey="question">
              <MyQuestions />
            </Tab.Pane>
            <Tab.Pane eventKey="answer">
              <MyAnswers />
            </Tab.Pane>
            <Tab.Pane eventKey="reply">
              <MyReplys />
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
}

export default MyPage;
