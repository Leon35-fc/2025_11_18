import Nav from 'react-bootstrap/Nav';

function BottomFooter() {
  return (
    <>
      <Nav className="justify-content-center bg-dark" activeKey="/home">
        <Nav.Item>
          <Nav.Link href="/home">&copy& Copyright</Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  );
}

export default BottomFooter;