import React from 'react';

import TitleBlock from './titleBlock.jsx';
import Items from './items.jsx';

class Fe extends React.Component {

    render() {
        return <div>
        <TitleBlock theTitle='前端区' theDesc='前端技术练习和小玩具。看过小作品之后，点浏览器上的返回来回到这一页(─.─|||' />
        <Items theItems={[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14]} />
        </div>;
    }
}

export default Fe;