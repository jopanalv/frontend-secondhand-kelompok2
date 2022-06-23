import React, { Component } from 'react';

class Alert extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      isActive: true,
    }
  }

  hideAlert() {
    this.setState({
      isActive: false,
    });
  }

  render() {
    if (this.state.isActive) {
      return (
          <div
            className="allert-success fade show"
            role="alert"
          >
            <span className='allert-text'>Produk berhasil diterbitkan</span>
            <btn
              type="button"
              className="closebtn"
              data-dismiss="alert"
              aria-label="Close"
              onClick={() => this.hideAlert()}
            >
              <span aria-hidden="true">&times;</span>
            </btn>
            {this.props.text}
          </div>
      );
    }
    return <div/>
  }
}

export default Alert;