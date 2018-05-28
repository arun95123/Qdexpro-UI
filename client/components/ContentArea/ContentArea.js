import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Qdex from '../Qdex';
import HelloWorld from '../HelloWorld';
import './ContentArea.style.scss';

const ContentArea = () =>
  <main className='content-area'>
    <Switch>
      <Route exact path={'/'} component={Qdex}  />
      <Route path={'/about'} component={HelloWorld} />
    </Switch>
  </main>;

export default ContentArea;
