import React from 'react';

import IndexPageBottom from './indexPageBottom.jsx';

/*引入图片资源（相对路径）*/
import imgSrc_4 from '../../images/carousel-pic-4.jpg';
import imgSrc_1 from '../../images/carousel-pic-1.jpg';
import imgSrc_2 from '../../images/carousel-pic-2.jpg';
import imgSrc_3 from '../../images/carousel-pic-3.jpg';

class IndexPage extends React.Component {

    render() {
        return <div>
			<div id="carousel-example-generic" className="carousel slide" data-ride="carousel">
				
				<ol className="carousel-indicators">
					<li data-target="#carousel-example-generic" data-slide-to="0" className="active"></li>
					<li data-target="#carousel-example-generic" data-slide-to="1"></li>
					<li data-target="#carousel-example-generic" data-slide-to="2"></li>
					<li data-target="#carousel-example-generic" data-slide-to="3"></li>
				</ol>
				
				<div className="carousel-inner" role="listbox">
					<div className="item active">
						<a href="https://github.com/wseven7677" target="_blank">
							<img src={imgSrc_4} alt="我的github" />
						</a>
						<div className="carousel-caption">
						</div>
					</div>
					<div className="item">
						<img src={imgSrc_1} alt="第三版网站上线" />
						<div className="carousel-caption">
						</div>
					</div>
					<div className="item">
						<img src={imgSrc_2} alt="手帐2016" />
						<div className="carousel-caption">
						</div>
					</div>
					<div className="item">
						<a href="http://www.u17.com/comic/128973.html" target="_blank">
							<img src={imgSrc_3} alt="漫画" />
						</a>
						<div className="carousel-caption">
						</div>
					</div>
				</div>
				
				<a className="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
					<span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
					<span className="sr-only">上一幅</span>
				</a>
				<a className="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
					<span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
					<span className="sr-only">下一幅</span>
				</a>
			</div>

			<IndexPageBottom />
        </div>;
    }
}

export default IndexPage;