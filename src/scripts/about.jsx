import React from 'react';

import TitleBlock from './sub/titleBlock.jsx';

class Fe extends React.Component {

    render() {
        return <div className="theAbout">
        <TitleBlock theTitle='网站说明' theDesc='没错，随便看看下面↓' />
        <div>
这个网站已经是第四版个人网站了。<br />
第一版是丑丑的html+css，<br />
第二版自己去搜了个人家写的模板，修修改改用了一段时间，<br />
第三版开始用上了bootstrap和自己写的留言板，跟现在的风格基本一样的，<br />
第四版就是现在这个react+webpack为主的样子，php留言板不舍得删掉（但也懒得改）于是就单独留下了。<br />

另外可能需要说明的是，网站中的所有图片素材都是我自己画的，轮播图第二张是网络素材+ps，一些小方块的样式借鉴了b站<br />

        </div>
        </div>;
    }
}

export default Fe;