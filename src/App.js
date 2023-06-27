
function Bubble() {
  return (
    <div className="w-64 h-64 bg-blue-500 rounded-full"></div>
  );
}

function Blur() {
  return (
    <div className="bg-blue-50"></div>
  );
}

function Background() {
  return (
    <div className="w-screen h-screen bg-blue-900">
      <Bubble/>
      {/* <Blur/> */}
    </div>
  );
}

function App() {
  return (
    <Background/>
  );
}

export default App;