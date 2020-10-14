import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Landing, OrphanagesMap } from '../ui/pages';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Landing} />
    <Route path='/orfanatos' exact component={OrphanagesMap} />
  </Switch>
);

export { Routes };