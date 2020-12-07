import React from "react";

export class RecipeForm extends React.Component<IFormProps, IFormState> {
  constructor(props: IFormProps) {
    super(props);
    this.state = {};
  }

  render() {
    const buttonStyle = {
      marginTop: "0.2em",
    };
    return (
      <div>
        <form>
          <div className="form-group">
            <label htmlFor="">Recipe name:</label>
            <input
              type="text"
              placeholder="Enter Recipe name here"
              className="form-control"
              //style={{ width: "40%" }}
            />
          </div>
          <div>
            <label htmlFor="">Ingredients:</label>
            <textarea
              name=""
              id=""
              cols={0}
              rows={5}
              className="form-control"
              //style={{ width: "40%" }}
              placeholder="Enter Ingredients here. One per line"
            ></textarea>
            <div>
              <label htmlFor="">Instructions:</label>
              <textarea
                name=""
                id=""
                className="form-control"
                //style={{ width: "40%" }}
                placeholder="Enter Instructions here. One per line"
                //cols={0}
                rows={10}
              />
              <div>
                <button className="btn btn-primary" style={buttonStyle}>
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

interface IFormState {}
interface IFormProps {}
