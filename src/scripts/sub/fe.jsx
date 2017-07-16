import React from 'react';

import TitleBlock from './titleBlock.jsx';
import Items from './items.jsx';

class Fe extends React.Component {

    render() {
        return <div>
        <TitleBlock theTitle='前端区' theDesc='前端技术练习和小玩具。' />
        <Items theItems={[0,1,2,1,1,0,2,0]} />
        </div>;
    }
}

export default Fe;