import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Qdex from '../Qdex';
import HelloWorld from '../HelloWorld';
import './ContentArea.style.scss';
import MiddlePane from '../MiddlePane'

const ContentArea = () =>
  <main className='content-area'>
    <Switch>
      <Route exact path={'/'} component={HelloWorld}  />
      <Route path={'/about'} component={Qdex} />
    </Switch>
      <MiddlePane />
  </main>;

export default ContentArea;
