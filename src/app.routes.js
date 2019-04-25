import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';

import VagasRoutes from './client/vagas/vagas.routes';
import HomeRoutes from './client/home/home.routes';
import LoginRoutes from './client/login/login.routes';

const AppRoutes = () => (
    <Suspense fallback={ '<h1>Carregando, aguarde...</h1>' }>
        <BrowserRouter>
            <LoginRoutes />
            <HomeRoutes />
            <VagasRoutes /> 
        </BrowserRouter>
    </Suspense>
)

export default AppRoutes;
