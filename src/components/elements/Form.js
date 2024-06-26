import React from "react";
import PropTypes from "prop-types";
import About from "./About";

// import axios from "axios";

/**
 * @component Form
 * @props - { object } -  config
 */

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mailSent: false,
      error: null
    };
  }
  /**
   * @function handleFormSubmit
   * @param e { obj } - form event
   * @return void
   */
  handleFormSubmit = e => {
    e.preventDefault();
    // axios({
    //   method: "post",
    //   url: `${process.env.REACT_APP_API}`,
    //   headers: { "content-type": "application/json" },
    //   data: this.state
    // })
    //   .then(result => {
    //     if (result.data.sent) {
    //       this.setState({
    //         mailSent: result.data.sent
    //       });
    //       this.setState({ error: false });
    //     } else {
    //       this.setState({ error: true });
    //     }
    //   })
    //   .catch(error => this.setState({ error: error.message }));
    alert("fzegze");
  };
  /**
   * @function handleChange
   * @param e { obj } - change event
   * @param field { string } - namve of the field
   * @return void
   */
  handleChange = (e, field) => {
    let value = e.target.value;
    let updateValue = {};
    updateValue[field] = value;
    this.setState(updateValue);
  };

  render() {
    const {
      title,
      successMessage,
      errorMessage,
      fieldsConfig
    } = this.props.config;
    return (
      <div className="FormContainer">
        <div id="Contact" className="FormWrp">
          <h2>{title}</h2>
          <form action="#">
            {fieldsConfig &&
              fieldsConfig.map(field => {
                return (
                  <React.Fragment key={field.id}>
                    {field.type !== "textarea" ? (
                      <React.Fragment>
                        <label>{field.label} :</label>
                        <input
                          type={field.type}
                          className={field.klassName}
                          placeholder={field.placeholder}
                          value={field.name}
                          onChange={e => this.handleChange(e, field.fieldName)}
                        />
                      </React.Fragment>
                    ) : (
                      <React.Fragment>
                        <label>{field.label}:</label>
                        <textarea
                          className={field.klassName}
                          placeholder={field.placeholder}
                          onChange={e => this.handleChange(e, field.fieldName)}
                          value={field.name}
                        />
                      </React.Fragment>
                    )}
                  </React.Fragment>
                );
              })}
            <input
              type="submit"
              onClick={e => this.handleFormSubmit(e)}
              value="Submit"
            />

            <div>
              {this.state.mailSent && (
                <div className="sucsess">{successMessage}</div>
              )}
              {this.state.error && <div className="error">{errorMessage}</div>}
            </div>
          </form>
        </div>
        <About />
      </div>
    );
  }
}

export default Form;
//propTypes for the component
Form.propTypes = {
  config: PropTypes.object.isRequired
};
