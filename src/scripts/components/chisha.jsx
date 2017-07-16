import React from 'react';

import TitleBlock from '../sub/titleBlock.jsx';

var flag = false,
	reg = new RegExp('^\\s*$'),
	flagFlash = false,
    timeId,
    sth;

// 回车键提交任务：
document.addEventListener("keypress",function(event){
    if(event.keyCode == 13){
        document.getElementById("btnAdd").click();
        document.getElementsByTagName('input')[0].value = "";
    }
});

class Chisha extends React.Component {

	refreshUL() {
	    var i,
	        theUL = [];
	    for(i = 0; i < sth.length;++i){
	        theUL.push(<li key={i}>{sth[i]}</li>);
	    }

	    this.setState({
	    	ulContent: theUL
	    });
	}

	clickAdd() {
		var inputFood =document.getElementsByTagName('input')[0];

		if(! reg.test(inputFood.value)){
	        if(sth[0] === '你还没添加吃的'){
	            sth.shift();
	        }
	        sth.push(inputFood.value);
	        this.refreshUL();
	        localStorage.setItem('food',sth);
	    }
	    inputFood.value = '';
	}

	clickAllSth() {
		if(flag){
	        flag = false;
	        this.setState({
	        	ul: {
	        		'display': 'none'
	        	}
	        });
	    }else{
	        flag = true;
	        this.refreshUL();
	        this.setState({
	        	ul: {
	        		'display': 'block'
	        	}
	        });
	    }
	}

	clickAllRemove() {
		var rst = confirm('你确定要清空备选列表吗？');
	    if(rst){
	        sth = new Array();
	        sth.push('你还没添加吃的');
	        this.refreshUL.bind(this)();
	        localStorage.setItem('food',sth);
	    }
	}

	clickChoose() {
		var btnChoose = document.getElementById('btnChoose'),
			theChosen = document.getElementById('theChosen');
		if(!flagFlash){
	        flagFlash = true;
	        btnChoose.innerText = '点我停止！';
	        timeId = window.setInterval(function(){
	            theChosen.innerText = sth[Math.floor(Math.random()*sth.length)];
	        },50);
	    }else{
	        flagFlash = false;
	        window.clearInterval(timeId);
	        btnChoose.innerText = '点我开始决定吃啥！';
	    }
	}

	constructor(props) {

		super(props);
		this.state = {
			ul: {
				'display': 'none'
			},
			ulContent: []
		};
		// 从localstorage初始化：
		if(!localStorage.getItem('food')){
		    sth = new Array();
		    sth.push('你还没添加吃的');
		}else{
		    sth = localStorage.getItem('food').split(',');
		}
	}

    render() {

        return <div>
	        <TitleBlock theTitle='早饭/午饭/晚饭吃什么？' theDesc='原生js练习，重构为react格式。' />
	        <div className="theChisha">
		        <input type="text" placeholder="在此添加可以吃的东西" />
			    <button id="btnAdd" onClick={this.clickAdd.bind(this)}>添加</button>
			    <hr />
			    <span id="allSth" onClick={this.clickAllSth.bind(this)}>查看所有备选项</span>
			    <span id="allRemove" onClick={this.clickAllRemove.bind(this)}>清空所有备选项</span>
			    <ul style={this.state.ul}>{this.state.ulContent}</ul>
			    <hr />
			    <button id="btnChoose" onClick={this.clickChoose.bind(this)}>点我开始决定吃啥！</button><br />
			    <span id="theChosen"></span><hr />
	        </div>
        </div>;
    }
}

export default Chisha;