import { useState } from "react";
import Search from "./components/Search";
import FoodList from "./components/FoodList";
import Nav from "./components/Nav";
import "./app.css";
import Container from "./components/Container";
import InnerContainer from "./components/InnerContainer";
import FoodDetail from "./components/FoodDetail";
function App() {
  const [foodData, setFoodData] = useState([]);
  const [foodID, setfoodID] = useState("656329");

  return (
    <div className="App">
      <Nav />
      <Search foodDate={foodData} setFoodData={setFoodData} />
      <Container>
        <InnerContainer>
          <FoodList foodData={foodData} setfoodID={setfoodID} />
        </InnerContainer>
        <InnerContainer>
          <FoodDetail foodID={foodID} />
        </InnerContainer>
      </Container>
    </div>
  );
}

export default App;
