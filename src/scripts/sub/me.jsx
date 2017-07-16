import React from 'react';

import authorPicSrc from '../../images/authorPic.jpg';

class Me extends React.Component {

    render() {
        return <div className="me">
			<img src={authorPicSrc} />
			<div className="meDesc">
				<span>本站作者</span>
				<span>一个做事三周热度的人。加里敦联盟资深会员。欢迎去看我的github和我的漫画。没有彩蛋。</span>
			</div>
			<div className="gradientBlock"></div>
		</div>;
    }
}

export default Me;