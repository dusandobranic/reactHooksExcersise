import EffectTutorial from "./components/EffectTutorial";
import LayoutEffectTutorial from "./components/LayoutEffectTutorial";
import ReducerTutorial from "./components/ReducerTutorial";
import RefTutorial from "./components/RefTutorial";
import StateTutorial from "./components/StateTutorial";
import './App.css'
import ImperativeHandle from "./components/ImperativeHandleTutorial";
import ContextTutorial from "./components/contextTutorial/ContextTutorial";
import MemoTutorial from "./components/memoTutorial/MemoTutorial";
import MemoWithChild from "./components/memoTutorial/MemoWithChild";
import CallbackTutorial from "./components/callbackTutorial/CallbackTutorial";
import ParentCallback from "./components/callbackTutorial/ParentCallback";

function App() {
  return (
    <div className="App" style={{margin: '50px'}}>
      <ReducerTutorial />
    </div>
  );
}

export default App;
