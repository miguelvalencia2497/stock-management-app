import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, browserHistory } from 'react-router-dom';
import { StockManagementComponent } from './StockManagementComponent';

class App extends React.Component{
	render(){
		return(
			<BrowserRouter history={browserHistory}>
				<div>
					<Route exact path={'/'} component={StockManagementComponent} />
				</div>
			</BrowserRouter>
		);
	}
}

ReactDOM.render(
	<App />,
	document.getElementById('app')
);