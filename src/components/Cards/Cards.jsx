import { React, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";

import { checkTitleAndVerse } from "../../utils/checkSM";

import "./style.scss";

/**
 * Renders card component with the customisable props
 * @params {title, subtitles, content, test} props
 * @returns Card component
 */
const Cards = (props) => {
  const { title, subtitle, content, test, score, setScore } = props;

  const [userTitle, setUserTitle] = useState("");
  const [userVerse, setUserVerse] = useState("");
  const [validateTitle, setValidateTitle] = useState(false);
  const [validateVerse, setValidateVerse] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const markVerse = () => {
    const data = {
      title,
      verse: content,
      userTitle,
      userVerse,
    }
    const res = checkTitleAndVerse(data);
    const totalScore = res.score;
    // console.log({ score, totalScore, res, userTitle, userVerse }) // to delete
    setScore(score + totalScore);
  }

  function handleTitleValidation(input) {
    setValidateTitle(!input);
  }

  function handleVerseValidation(input) {
    setValidateVerse(!input)
  }

  const handleOnSubmit = () => {
    // Validate Title and Verse inputs
    handleTitleValidation(userTitle);
    handleVerseValidation(userVerse);

    if (userTitle && userVerse) {
      markVerse();
      setSubmitted(true);
    }
  }

  return (
    <Card className={test ? "card__test" : ""}>
      {test ? (
        <>
          <Card.Header>{subtitle}</Card.Header>
          <Card.Body>
            <Form.Group controlId="Form.ControlTitle">
              <Form.Label>Title</Form.Label>
              <Form.Control
                className={`form-input ${validateTitle ? "form-input-invalid" : ""}`}
                type="text"
                required
                readOnly={submitted}
                value={userTitle}
                onChange={(e) => {
                  handleTitleValidation(e.target.value);
                  setUserTitle(e.target.value);
                }}
              />
              <p className={`form-control-validator${validateTitle ? "" : "__hidden"}`}>
                Title cannot be blank
              </p>
            </Form.Group>

            <Form.Group controlId="Form.ControlVerse">
              <Form.Label>Verse</Form.Label>
              <Form.Control
                className={`form-input ${validateVerse ? "form-input-invalid" : ""}`}
                as="textarea"
                required
                readOnly={submitted}
                rows={3}
                value={userVerse}
                onChange={(e) => {
                  handleVerseValidation(e.target.value);
                  setUserVerse(e.target.value);
                }}
              />
              <p className={`form-control-validator${validateVerse ? "" : "__hidden"}`}>
                Verse cannot be blank
              </p>
            </Form.Group>
            <Button
              className="form-button"
              variant="primary"
              as="input"
              type="submit"
              value="Check"
              disabled={submitted}
              onClick={() => handleOnSubmit()}
            />
          </Card.Body>
        </>
      ) : (
        <>
          <Card.Header>{title}</Card.Header>
          <Card.Body>
            <Card.Subtitle>{subtitle}</Card.Subtitle>
            <Card.Text>{content}</Card.Text>
          </Card.Body>
        </>
      )}
    </Card>
  );
};

export default Cards;
