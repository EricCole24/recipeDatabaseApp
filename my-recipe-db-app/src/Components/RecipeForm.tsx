import React from "react";

//remember to add form validation
/**
 * form that handles recipe creation
 */
export class RecipeForm extends React.Component<IFormProps, IFormState> {
  constructor(props: IFormProps) {
    super(props);
    this.state = {
      name: "",
      ingredients: "",
      instructions: "",
    };
  }

  /**
   *
   * @param target - to get input value in a form by passing React.ChangeEvent<HTMLInputElement>
   */
  handleChangeName = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ name: target.value });
  };

  /**
   *
   * @param param0 target - to get textarea value in a form by passing React.ChangeEvent<HTMLTextAreaElement>)
   */
  handleChangeIngredients = ({
    target,
  }: React.ChangeEvent<HTMLTextAreaElement>) => {
    this.setState({ ingredients: target.value });
  };

  /**
   *
   * @param param0 target - to get textarea value in a form by passing React.ChangeEvent<HTMLTextAreaElement>)
   */
  handleChangeInstructions = ({
    target,
  }: React.ChangeEvent<HTMLTextAreaElement>) => {
    this.setState({ instructions: target.value });
  };

  // function that submits form
  onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // to prevent form from automitic submission
    const { name, ingredients, instructions } = this.state;
    this.props.onSubmit(name, ingredients, instructions);
    this.setState({
      name: "",
      ingredients: "",
      instructions: "",
    });
  };
  render() {
    const buttonStyle = {
      marginTop: "0.2em",
    };
    const { name, ingredients, instructions } = this.state;
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label htmlFor="recipename">Recipe name:{name}</label>
            <input
              type="text"
              placeholder="Enter Recipe name here"
              className="form-control"
              value={name}
              onChange={this.handleChangeName}
              //style={{ width: "40%" }}
            />
          </div>
          <div>
            <label htmlFor="ingredients">Ingredients:</label>
            <textarea
              cols={0}
              rows={5}
              className="form-control"
              //style={{ width: "40%" }}
              placeholder="Enter Ingredients here. One per line"
              value={ingredients}
              onChange={this.handleChangeIngredients}
            ></textarea>
            <div>
              <label htmlFor="instructions">Instructions:</label>
              <textarea
                className="form-control"
                //style={{ width: "40%" }}
                placeholder="Enter Instructions here. One per line"
                //cols={0}
                rows={10}
                value={instructions}
                onChange={this.handleChangeInstructions}
              />
              <div>
                <button
                  className="btn btn-primary"
                  style={buttonStyle}
                  //onClick={() => console.log("yes ", name)}
                  //type="submit"
                >
                  Create
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

// forms state values
interface IFormState {
  name: string;
  ingredients: string;
  instructions: string;
  id?: Date;
}
interface IFormProps {
  onSubmit: Function;
}
