import React from 'react';

import TitleBlock from '../sub/titleBlock.jsx';

class IphoneScreen extends React.Component {

    render() {
        return <div>
	        <TitleBlock theTitle='CSS临摹 - iphone锁屏界面' theDesc='嗯，就是一个临摹...' />
			<div id="iphone">
				<div className="text text-time">23:33</div>
				<div className="text text-date">7月30日 星期日</div>
				<div className="text text-china-date">丁卯年七月三十日</div>
				<div className="message">
					<div className="title">
						<span className="we-chat-logo">
							<div></div>
							<div></div>
						</span>
						<span className="we-chat-text">微信</span>
						<span className="we-chat-now">现在</span>
					</div>
					<div className="content">
						<span className="con-1">王者荣耀职业选手群：邀请您加入群聊</span>
						<span className="con-2">轻扫以显示更多</span>
					</div>
				</div>
				<div className="huadong">向右滑动解锁</div>
				<div className="dot-outter">
					<span className="dot"></span>
					<span className="dot dot-active"></span>
					<span className="dot dot-camera">
						<div></div>
						<div></div>
						<div></div>
					</span>
				</div>
			</div>
        </div>;
    }
}

export default IphoneScreen;