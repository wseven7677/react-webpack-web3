import React from 'react';

import itemBgSrc from '../../images/itemBg.jpg';

class Item extends React.Component {
	render() {
		return <div className="theItem">
			<img src={this.props.theBg} />
			<span>{this.props.theName}</span>
			<span>{this.props.theDesc}</span>
			<div className="gradientBlock"></div>
		</div>;
	}
}

class Items extends React.Component {

    render() {

    	var tidyItems = [];
		this.props.theItems.forEach(function(value, index){
			switch(value){
				case 0:
					tidyItems.push(<Item key={index} theName={'待办小应用'} theBg={itemBgSrc} theDesc={'基于react的待办事项webapp'} />);
					break;
				case 1:
					tidyItems.push(<Item key={index} theName={'番茄钟'} theBg={itemBgSrc} theDesc={'setTimeout学习。'} />);
					break;
				default:
					tidyItems.push(<Item key={index} theName={'代号好像出错了哟'} theBg={itemBgSrc} theDesc={'还不去查查？'} />);
			}
		});

        return <div className="itemsOutter">
	        {tidyItems}
        </div>;
    }
}

export default Items;