import React, {Component, CSSProperties} from 'react';
import DetailView from './DetailView';
import MasterView from './MasterView';
import Header from './Header';
import { Link, Route, Switch } from 'react-router-dom';
import ErrorBoundary from './errorBoundary';
import Buttons from './buttons';

interface State {
    drink: any[],
}

interface Props {}
class Layout extends Component<Props,State> { 
    state: State = {
        drink: [],
    }

    displayDrink = (value: []) => {
        this.setState({drink: value});
    }
 

    render() {
        const drinkMap = this.state.drink;
        console.log(drinkMap)
        return (
            <div style={rootStyle}>
                <Header />
                <Switch>
                    <Route exact path="/">
                        <ErrorBoundary>
                            <MasterView drink={this.state.drink} onSearchDrink={this.displayDrink}/>
                        </ErrorBoundary>
                    </Route>  
                    <Route path="/search">
                        <ErrorBoundary>
                            <div style={backButtonStyle}>
                                <Link to="/">
                                    <Buttons text="Back" handleClick={this.somethingHappens}/>
                                </Link>
                            </div>
                        <div style={drinkGridStyle}>
                        {drinkMap.map((data)=> (
                                <DetailView 
                                    image={data.strDrinkThumb + "/preview"} 
                                    drinkTitle={data.strDrink} 
                                    drinkRecipe={data.strInstructions} 
                                    ingredients1={data.strIngredient1}
                                    ingredients2={data.strIngredient2}
                                    ingredients3={data.strIngredient3}
                                    ingredients4={data.strIngredient4}
                                    ingredients5={data.strIngredient5}
                                />
                            ))}
                        </ErrorBoundary>
                    </Route>
                </Switch>
            </div>
        )
    }      
}
const rootStyle: CSSProperties = {
    display: "flex",
    flexDirection: "column",
    background: '#915460',
    width: "100%",
    height: "100%"
}
const drinkGridStyle: CSSProperties = {
    display: "flex",
    flexDirection: "row",
    flexWrap: 'wrap',
    background: '#915460',
    justifyContent: "center",
    alignItems: "center"
}
const backButtonStyle: CSSProperties = {
    display: 'flex',
    justifyContent: "center",
    alignItems: "center",
    margin: "2rem",
}

export default Layout;