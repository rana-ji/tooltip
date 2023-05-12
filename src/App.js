import "./App.css";
import Tooltip from "./components/Tooltip";

function App() {
  return (
    <>
      <div className="container">
        <Tooltip position="left">Left Tooltip</Tooltip>
        <Tooltip position="top">Top Tooltip</Tooltip>
        <Tooltip position="bottom">Bottom Tooltip</Tooltip>
        <Tooltip position="right">Right Tooltip</Tooltip>
      </div>
    </>
  );
}

export default App;
