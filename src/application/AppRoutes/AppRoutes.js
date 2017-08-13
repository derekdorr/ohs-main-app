import React from 'react';
import { Route, IndexRoute } from 'react-router';
import PageShell from '../PageShell';
import GenericPage from '../../containers/GenericPage';

const AppRoutes = (
    <PageShell>
        <Route path="/about" component={GenericPage} />
    </PageShell>
);

export default AppRoutes;