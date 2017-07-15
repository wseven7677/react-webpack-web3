import React from 'react';

import TitleBlock from './titleBlock.jsx';
import GalleryApp from './gallery.jsx';

class CG extends React.Component {

    render() {
        return <div>
	        <TitleBlock theTitle='我的CG绘画成长历程' theDesc='Computer Graphics。业余爱好啥的。' />
	        <div className="stage-outter">
	    		<GalleryApp />
			</div>
			<div className="warnNotes">这里有个画板墙╮(╯▽╰)╭但是只在宽屏上显示</div>
        </div>;
    }
}

export default CG;