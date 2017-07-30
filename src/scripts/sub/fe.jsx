import React from 'react';

import TitleBlock from './titleBlock.jsx';
import Items from './items.jsx';

class Fe extends React.Component {

    render() {
        return <div>
        <TitleBlock theTitle='前端区' theDesc='前端技术练习作品和小玩具。' />
        <div className="fe-title">JS区：</div>
        <Items theItems={[0,1,2,3,4,6,7,9,10,11,12]} />
        <div className="fe-title">CSS区：</div>
        <Items theItems={[5,8,9,10]} />
        </div>;
    }
}

export default Fe;