import React from 'react';

import TitleBlock from './titleBlock.jsx';
import GalleryApp from './gallery.jsx';
import Items from './items.jsx';

class CG extends React.Component {

    render() {
        return <div>
	        <TitleBlock theTitle='我的CG绘画成长历程' theDesc='Computer Graphics。这版头是当年的投稿作品...' />
	        <div className="stage-outter">
	    		<GalleryApp />
			</div>
			<div className="warnNotes">这里有个画板墙╮(╯▽╰)╭但是只在宽屏上显示</div>
			<Items theItems={[101,102,103,104,105]} />
        </div>;
    }
}

export default CG;