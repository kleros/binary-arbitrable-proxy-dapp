import React from "react";
import { Modal, Form, Col, Button, Spinner } from "react-bootstrap";
import ReactMarkdown from "react-markdown";

class Confirmation extends React.Component {
  onModalShow = e => this.setState({ modalShow: true });
  // async componentDidUpdate(prevProps) {
  //   console.log('component update')
  //   if (this.props !== prevProps.disputeID) {
  //     await this.setState({ disputeID: this.props.disputeID })
  //   }
  // }
  render() {
    const {
      selectedSubcourt,
      initialNumberOfJurors,
      arbitrationCost,
      title,
      category,
      description,
      requester,
      requesterAddress,
      respondent,
      respondentAddress,
      question,
      firstRulingOption,
      firstRulingDescription,
      secondRulingOption,
      secondRulingDescription,
      primaryDocument,
      awaitingConfirmation,
      show
    } = this.props;

    return (
      <Modal size="xl" show={show} animation={false} closeButton={false}>
        <Modal.Header>
          <Modal.Title>Dispute Summmary</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Row>
              <Col>
                <Form.Group>
                  <Form.Label>Court</Form.Label>
                  <Form.Control readOnly type="text" value={selectedSubcourt} />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group>
                  <Form.Label>Number of Jurors</Form.Label>
                  <Form.Control
                    readOnly
                    type="text"
                    value={initialNumberOfJurors}
                  />
                </Form.Group>
              </Col>{" "}
              <Col>
                <Form.Group controlId="arbitrationCost">
                  <Form.Label>Arbitration Cost</Form.Label>
                  <Form.Control readOnly type="text" value={arbitrationCost} />
                </Form.Group>
              </Col>
            </Form.Row>
            <hr />
            <Form.Row>
              <Col>
                <Form.Group controlId="title">
                  <Form.Label>Title</Form.Label>
                  <Form.Control readOnly type="text" value={title} />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="title">
                  <Form.Label>Category</Form.Label>
                  <Form.Control readOnly type="text" value={category} />
                </Form.Group>
              </Col>
            </Form.Row>
            <Form.Row>
              <Col>
                <Form.Group controlId="description">
                  <Form.Label>Description</Form.Label>
                  <p>
                    <ReactMarkdown source={description} />
                  </p>
                </Form.Group>
              </Col>
            </Form.Row>
            <hr />
            <Form.Row>
              <Col md={2} l={2} xl={2}>
                <Form.Group controlId="requester">
                  <Form.Label>Requester Alias</Form.Label>
                  <Form.Control readOnly type="text" value={requester} />
                </Form.Group>
              </Col>
              <Col md={4} l={4} xl={4}>
                <Form.Group controlId="requesterAddress">
                  <Form.Label>Requester Address</Form.Label>
                  <Form.Control
                    readOnly
                    type="text"
                    value={
                      requesterAddress.substring(0, 6) +
                      "..." +
                      requesterAddress.substring(38, 42)
                    }
                  />
                </Form.Group>
              </Col>
              <Col md={2} l={2} xl={2}>
                <Form.Group controlId="respondent">
                  <Form.Label>Respondent Alias</Form.Label>
                  <Form.Control readOnly type="text" value={respondent} />
                </Form.Group>
              </Col>
              <Col md={4} l={4} xl={4}>
                <Form.Group controlId="respondentAddress">
                  <Form.Label>Respondent Address</Form.Label>
                  <Form.Control
                    readOnly
                    type="text"
                    value={
                      respondentAddress.substring(0, 6) +
                      "..." +
                      respondentAddress.substring(38, 42)
                    }
                  />
                </Form.Group>
              </Col>
            </Form.Row>
            <hr />
            <Form.Row>
              <Col>
                <Form.Group controlId="question">
                  <Form.Label>Question</Form.Label>
                  <Form.Control readOnly type="text" value={question} />
                </Form.Group>
              </Col>
            </Form.Row>
            <Form.Row>
              <Col>
                <Form.Group>
                  <Form.Label>First Ruling Option</Form.Label>
                  <Form.Control
                    readOnly
                    type="text"
                    value={firstRulingOption}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group>
                  <Form.Label>First Ruling Description</Form.Label>
                  <Form.Control
                    readOnly
                    type="text"
                    value={firstRulingDescription}
                  />
                </Form.Group>
              </Col>{" "}
            </Form.Row>
            <Form.Row>
              <Col>
                <Form.Group>
                  <Form.Label>Second Ruling Option</Form.Label>
                  <Form.Control
                    readOnly
                    type="text"
                    value={secondRulingOption}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group>
                  <Form.Label>Second Ruling Description</Form.Label>

                  <Form.Control
                    readOnly
                    type="text"
                    value={secondRulingDescription}
                  />
                </Form.Group>
              </Col>{" "}
            </Form.Row>
            <Form.Row>
              <Col>
                <Form.Group>
                  <a
                    target="blank"
                    href={
                      primaryDocument &&
                      "https://ipfs.kleros.io" + primaryDocument
                    }
                  >
                    <img src="attachment.svg" alt="primary document" />{" "}
                    {this.props.filePath}
                  </a>
                </Form.Group>
              </Col>{" "}
            </Form.Row>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button className="return" onClick={this.props.onModalHide}>
            Close
          </Button>
          <Button
            className="ok"
            onClick={this.props.onCreateDisputeButtonClick}
            disabled={awaitingConfirmation}
          >
            {awaitingConfirmation && (
              <Spinner
                as="span"
                animation="grow"
                size="sm"
                role="status"
                aria-hidden="true"
              />
            )}{" "}
            {(awaitingConfirmation && "Awaiting Confirmation") ||
              "Create the Dispute"}
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default Confirmation;
