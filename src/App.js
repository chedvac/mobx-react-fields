import React, { Component } from 'react';
import './App.css';
import rootStore from './rootStore';
import { FileMiddleware } from './FileMiddleware';
import ExampleForm from './exampleForm';
import {observer, Provider} from 'mobx-react';
import { addMiddleware } from "mobx-state-tree";
import {createViewModel} from 'mobx-utils'


window.rootStore=rootStore;

const viewModel = createViewModel(rootStore);
window.viewModel = viewModel;
//addMiddleware(rootStore.userDetails.CV, FileMiddleware);
addMiddleware(rootStore, FileMiddleware);

@observer

class App extends Component {
  render() {
    return (
      <Provider rootStore={rootStore}>
        <div className="App">
          <header className="App-header">
          </header>
          <ExampleForm />
        </div>
      </Provider>
    );
  }
}

export default App;
