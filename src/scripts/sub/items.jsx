import React from 'react';

import itemBgSrc from '../../images/itemBg.jpg';
import itemBgSrcTmt from '../../images/itemBg-tmt.jpg';
import itemBgSrcTodo from '../../images/itemBg-todo.jpg';
import itemBgSrcChisha from '../../images/itemBg-chisha.jpg';
import itemBgSrcPhoneLock from '../../images/itemBg-phoneLock.jpg';
import itemBgSrcAngular from '../../images/itemBg-angular.jpg';
import itemBgSrcMohu from '../../images/itemBg-mohu.jpg';
import itemBgSrcFangkuai from '../../images/itemBg-fangkuai.jpg';
import itemBgSrcDuilie from '../../images/itemBg-duilie.jpg';

import itemBgSrcQx from '../../images/itemBg-qx.jpg';
import itemBgSrcXiaoqiwang from '../../images/itemBg-xiaoqiwang.jpg';

class Item extends React.Component {
	render() {
		return <div className="theItem">
			<a href={this.props.theUrl}>
				<img src={this.props.theBg} />
				<span>{this.props.theName}</span>
				<span>{this.props.theDesc}</span>
				<div className="gradientBlock"></div>
			</a>
		</div>;
	}
}

class Items extends React.Component {

    render() {

    	var tidyItems = [];
		this.props.theItems.forEach(function(value, index){
			switch(value){
				case 0:
					tidyItems.push(<Item key={index} theName={'【react】待办小应用'} theBg={itemBgSrcTodo} theDesc={'基于react的待办事项webapp'} theUrl={'#/app/todo'} />);
					break;
				case 1:
					tidyItems.push(<Item key={index} theName={'【原生】番茄钟'} theBg={itemBgSrcTmt} theDesc={'setTimeout学习。'} theUrl={'https://wseven7677.github.io/LittleExes/tmtClock.html'} />);
					break;
				case 2:
					tidyItems.push(<Item key={index} theName={'【react】吃饭吃什么？'} theBg={itemBgSrcChisha} theDesc={'选择困难症患者的好帮手！'} theUrl={'#/app/chisha'} />);
					break;
				case 3:
					tidyItems.push(<Item key={index} theName={'【jQuery】手机图案解锁'} theBg={itemBgSrcPhoneLock} theDesc={'模仿手机图案解锁的界面。请换成手机调试界面体验(ˉ﹃ˉ)'} theUrl={'http://fun.caoyu.ga/360/'} />);
					break;
				case 4:
					tidyItems.push(<Item key={index} theName={'【Angularjs】学习作品'} theBg={itemBgSrcAngular} theDesc={'了解MVC概念的学习之作~请换成手机调试界面体验(ˉ﹃ˉ)'} theUrl={'http://fun.caoyu.ga/angularAPP/#!/search'} />);
					break;
				case 5:
					tidyItems.push(<Item key={index} theName={'【酷炫】悬浮模糊效果'} theBg={itemBgSrcMohu} theDesc={'很简单但是很酷炫！'} theUrl={'http://www.wseven7677.tk/frontPractise/nuomi_1.html'} />);
					break;
				case 6:
					tidyItems.push(<Item key={index} theName={'听指令的小方块'} theBg={itemBgSrcFangkuai} theDesc={'没啥意思...'} theUrl={'http://www.wseven7677.tk/frontPractise/yaoyao_5-2.html'} />);
					break;
				case 7:
					tidyItems.push(<Item key={index} theName={'js模拟队列'} theBg={itemBgSrcDuilie} theDesc={'早期作品，觉得还不错~'} theUrl={'http://www.wseven7677.tk/frontPractise/JStask6.html'} />);
					break;
				case 101:
					tidyItems.push(<Item key={index} theName={'【漫画】强行拼凑的世界'} theBg={itemBgSrcQx} theDesc={'故事漫画连载中！'} theUrl={'http://www.u17.com/comic/128973.html'} />);
					break;
				case 102:
					tidyItems.push(<Item key={index} theName={'【漫画】小棋王奇遇记'} theBg={itemBgSrcXiaoqiwang} theDesc={'短篇故事漫画~'} theUrl={'http://www.wseven7677.tk/wpBlog/index.php/archives/32'} />);
					break;
				default:
					tidyItems.push(<Item key={index} theName={'施工中...'} theBg={itemBgSrc} theDesc={'新的小作品正在赶来的路上(￣︶￣)↗'} theUrl={'#'} />);
			}
		});

        return <div className="itemsOutter">
	        {tidyItems}
        </div>;
    }
}

export default Items;