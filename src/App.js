import React from 'react';
import Main from './pages/main';
import {SectionsState} from './context/sections/sectionsState'

const App = () => {
    return (
        <SectionsState>
            <Main />
        </SectionsState>
    )
};

export default App;
