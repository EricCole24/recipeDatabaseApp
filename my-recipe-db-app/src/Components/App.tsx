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
      recipe: [],
      seletedRecipe: null,
    };
  }
  onButtonClick = () => {
    this.setState({ showForm: true });
  };

  handleCreateRecipe = (
    name: string,
    ingredients: string,
    instructions: string,
    id: Date
  ) => {
    const newRecipe = this.state.recipe.concat({
      name,
      ingredients,
      instructions,
      id: new Date().getTime(),
    });
    this.setState({
      recipe: newRecipe,
    });
  };
  handleSelected = (recipe: object) =>
    this.setState({
      seletedRecipe: recipe,
      showForm: false,
    });

  render() {
    let { showForm, seletedRecipe } = this.state;
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
              <RecipeList
                recipes={this.state.recipe}
                onSelected={this.handleSelected}
              />
            </div>
            <div className="col-sm-8">
              {showForm ? (
                <RecipeForm onSubmit={this.handleCreateRecipe} />
              ) : (
                <RecipeDetail recipe={seletedRecipe} />
              )}
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
  recipe: {}[];
  seletedRecipe: any;
}

// notes for self from this project
