import React from "react";
import Label from 'react-bootstrap/lib/Label';
import Modal from 'react-bootstrap/lib/Modal';
import Button from 'react-bootstrap/lib/Button';

const NavBar = React.createClass({
    getInitialState() {
        return { showModal: false };
    },

    close() {
        this.setState({ showModal: false });
    },

    open() {
        this.setState({ showModal: true });
    },
    
  render: function() {
    const floatRight = {float: 'right'};
    const smallFont = {fontSize: 'x-small'};
    return (
        <div className="row">
        <div className="col-lg-8">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
              </button>
              <Button onClick={this.open} bsStyle="link" bsSize="xsmall" className="navbar-brand">Cassandra Reaper <span style={smallFont}>1.1.0-SNAPSHOT</span></Button>
              </div>
              </div>
              <div className="col-lg-4">
                <span className="navbar-brand" style={floatRight}><Button href="https://github.com/thelastpickle/cassandra-reaper/issues/new?body=**Spotted on 1.1.0-SNAPSHOT (ea1a0a0)**" bsStyle="warning" bsSize="xsmall">Report a bug</Button>
              </span>
            </div>
            <Modal show={this.state.showModal} onHide={this.close}>
                <Modal.Header closeButton>
                  <Modal.Title>Version 1.1.0-SNAPSHOT</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <h4>Git commit :</h4>
                  <p><a href="https://github.com/thelastpickle/cassandra-reaper/commit/ea1a0a0" target="_blank">https://github.com/thelastpickle/cassandra-reaper/commit/ea1a0a0</a></p>
                  <h4>Build date :</h4>
                  <p>2018-02-12 13:25:08</p>
                </Modal.Body>
                <Modal.Footer>
                  <Button onClick={this.close}>Close</Button>
                </Modal.Footer>
              </Modal>
          </div>
          
        
    );
  }
});

export default NavBar;