import React, { useState } from 'react';
import Regular from './Components/Regular/Regular.js';
import './App.css';
import DynamicContent from './Components/DynamicContent/DynamicContent.js';
import HttpRequestComponent from './Components/HttpRequestComponent/HttpRequestComponent.jsx';
import AsAttribute from './Components/Props/AsAttribute/AsAttribute.js';
import AsChildren from './Components/Props/AsChildren/AsChildren.js';
import State from './Components/State/State.js';
import InlineStyle from './Components/Style/InlineStyle/InlineStyle';
import RefElement from './Components/RefElement/RefElement.js';
import ExampleForHigherOrderComponents from './Components/HigherOrderComponents/ExampleForHigherOrderComponents.js';
import ComponentWithFragment from './Components/ComponentWithFragment/ComponentWithFragment.js';
import PropTypesComponent from './Components/Props/PropTypes/PropTypes.js';
import Context from './Components/Context/Context';
import ContextComponentExample from './Components/Context/ContextComponentExample';

function App() {
  const [authenticationState, setAuthentication] = useState({
    // we can have multiple states
    visible: true,
    persons: [{ name: 'Mahbobeh', age: 28 }],
  });

  function forTwoWayDataBindingContext1(event) {
    setAuthentication({
      visible: true,
      persons: [{ name: event.target.value, age: 27 }],
    });
  }
  return (
    <div className="App">
      <header className="App-header">Hi i am hamidreza nasrollahy</header>
      <Regular />
      <DynamicContent />
      <AsAttribute name="hamidreza" age="27" />
      <AsAttribute name="Emma" age="29" />
      <AsChildren> Something as child </AsChildren>
      <State />
      <InlineStyle />
      <RefElement />
      <ExampleForHigherOrderComponents />
      <PropTypesComponent
        mustNumber={10}
        mustFunction={() => {}}
        mustString="string"
      ></PropTypesComponent>
      <ComponentWithFragment></ComponentWithFragment>
      <Context.Provider
        value={{
          authentication: authenticationState,
          login: forTwoWayDataBindingContext1,
        }}
      >
        <ContextComponentExample />
      </Context.Provider>

      <HttpRequestComponent />
    </div>
  );
  // return React.createElement('div',{className:"App"}, React.createElement('header',{className:"App-header"},"Hi i am hamidreza nasrollahy"),React.createElement('header',{className:"App-header"},"Hi i am hamidreza nasrollahy")) // equivalent
}

export default App;
