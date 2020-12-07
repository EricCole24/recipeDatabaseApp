import React from "react";
//import logo from "./logo.svg";
//import "../css/App.css";
import { RecipeForm } from "../Components/RecipeForm";
import { RecipeList } from "../Components/RecipeList";
import { RecipeDetail } from "../Components/RecipeDetail";
export class App extends React.Component<IAppProps, IAppState> {
  constructor(props: IAppProps) {
    super(props);
    this.state = {
      showForm: false,
    };
  }
  onButtonClick = () => {
    this.setState({ showForm: true });
  };
  render() {
    let { showForm } = this.state;
    return (
      <div className="container">
        <header>
          <h1>Recipe Database</h1>
        </header>
        <section>
          <div>
            <button className="btn btn-primary" onClick={this.onButtonClick}>
              Create new recipe
            </button>
          </div>
        </section>
        <section>
          <div className="row">
            <div className="col-sm-4">
              <RecipeList />
            </div>
            <div className="col-sm-8">
              {showForm ? <RecipeForm /> : <RecipeDetail />}
            </div>
          </div>
        </section>
      </div>
    );
  }
}
interface IAppProps {}
interface IAppState {
  showForm: boolean;
}
