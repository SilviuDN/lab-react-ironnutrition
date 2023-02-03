import './App.css';
import { Card, Row, Col, Divider, Input, Button } from "antd";
import FoodsList from './FoodsList';

function App() {
  return (
    <>
      <FoodsList/>
    </>



    // <div>
    //   <Row>
    //     <Col>
    //       <Divider>Fancy Input</Divider>
    //       <Input value={""} onChange={() => {}} />
    //     </Col>

    //     <Col>
    //       <Card title={"Fancy Card"}>
    //         <Button onClick={() => {}}>Fancy Button</Button>
    //       </Card>
    //     </Col>
    //   </Row>
    // </div>
  );
}

export default App;
