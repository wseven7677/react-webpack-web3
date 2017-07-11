import React from 'react';

class TitleBlock extends React.Component {

    render() {
        return <div className="pgHeader">
			<h1 className="pgHeaderText">
				{this.props.theTitle}<br />
				<small className="pgHeaderTextSm">{this.props.theDesc}</small>
			</h1>
		</div>;
    }
}

export default TitleBlock;