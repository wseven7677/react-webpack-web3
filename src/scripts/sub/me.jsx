import React from 'react';

import authorPicSrc from '../../images/authorPic.jpg';

class Me extends React.Component {

    render() {
        return <div className="me">
			<img src={authorPicSrc} />
			<div className="meDesc">
				<span>本站作者</span>
				<span>不爱写代码的设计狮不是好通信研究生。欢迎去看我的github<div className="div-del">和我的漫画</div>。</span>
			</div>
			<div className="gradientBlock"></div>
		</div>;
    }
}

export default Me;