import { BrowserRouter, Route, Routes } from "react-router-dom";
import Counter from "../Counter";
import GenerateRandomColor from "../GenerateRandomColor";
import MultiStepProgress from "../MultiStepProgress";
import GenerateRandomQuote from "../GenerateRandomQuote";
import ScrollToBottomButton from "../ScrollToBottomButton";
import ScrollToTopButton from "../ScrollToTopButton";
import Tabs from "../Tabs";
import DateNavigation from "../DateNavigation";
import SimpleToDo from "../SimpleToDo";
import Popup from "../Popup";
import TicTacToe from "../tic-tac-toe";
export default function CmsRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Counter></Counter>}></Route>
        <Route
          path="/generaterandomcolor"
          element={<GenerateRandomColor></GenerateRandomColor>}></Route>
        <Route
          path="/scrolltobottom"
          element={<ScrollToBottomButton></ScrollToBottomButton>}></Route>
        <Route
          path="/scrolltotop"
          element={<ScrollToTopButton></ScrollToTopButton>}></Route>
        <Route
          path="/datenav"
          element={<DateNavigation></DateNavigation>}></Route>
        <Route path="/pop" element={<Popup></Popup>}></Route>
        <Route path="/tic" element={<TicTacToe></TicTacToe>}></Route>
        <Route path="/tabs" element={<Tabs></Tabs>}></Route>
        <Route path="/simpletodo" element={<SimpleToDo></SimpleToDo>}></Route>
        <Route
          path="/generaterq"
          element={<GenerateRandomQuote></GenerateRandomQuote>}></Route>
        <Route
          path="/multistep"
          element={<MultiStepProgress></MultiStepProgress>}></Route>
      </Routes>
    </BrowserRouter>
  );
}
