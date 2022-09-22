import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/home";
import Navigation from "./routes/navigation/navigation";
import SignIn from "./routes/signin/sign-in";

const Shop = () => {
  return <h1>I am shop</h1>
}
// index === index={true}
// for index, when the / is matched, render both navigation and home
const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />
        <Route path='sign-in' element={<SignIn />} />
      </Route>
    </Routes>
  );
};

export default App;
