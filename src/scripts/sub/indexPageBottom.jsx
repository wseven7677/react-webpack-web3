import React from 'react';

import Me from './me.jsx';
import Items from './items.jsx';

class IndexPageBottom extends React.Component {

    render() {
        return <div className="indexBottom">
        	<span>· 首 · 页 · 推 · 荐 ·</span>
        	<Items theItems={[0,2,4,3,102,201,8]} />
        	<Me />
        </div>;
    }
}

export default IndexPageBottom;