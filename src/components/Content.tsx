import React, {Component, CSSProperties} from 'react';
import SearchBar from './SearchBar';
import StartPageImage from "./startPageImage";
import Buttons from "./buttons";


interface Props {

}
interface State {
    photos: []
}
class Content extends Component<Props,State> {

    state: State = {
        photos: []
    }

    COCKTAILS_URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

    async componentDidMount() {
        try {
            fetch(this.COCKTAILS_URL + "margarita")
                .then(response => response.json())
                .then(photoData => this.setState({photos: photoData}))
        } catch (error) {
            console.log(error);
        }
    }

    somethingHappens() {
        console.log('SEARCH FOR DRINK')
    }

    somethingElseHappens(){
        console.log("RANDOM DRINK")
    }
    render() {
        console.log(this.state.photos)
        return (
            <div style={rootStyle}>
                <StartPageImage />
                <SearchBar />
                <div style={buttonFlex}>
                    <Buttons text="Search" handleClick={this.somethingHappens}/>
                    <Buttons text="Random" handleClick={this.somethingElseHappens}/>
                </div>
            </div>
        )  
    }
}


const rootStyle: CSSProperties = {
    display: "flex",
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
   
}
const buttonFlex: CSSProperties = {
    display: "flex",

   
}
export default Content;