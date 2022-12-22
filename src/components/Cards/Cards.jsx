import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';

import './style.scss';

const Cards = (props) => {
    const { title, subtitle, content, test } = props;

    return (
        <Card className={test ? "card__test" : ""}>
            {test ?
                <>
                    <Card.Header>{subtitle}</Card.Header>
                    <Card.Body>
                        <Form>
                            <Form.Group controlId='Form.ControlTitle'>
                                <Form.Label>Title</Form.Label>
                                <Form.Control type='text' className='form-input form-input___text' />
                            </Form.Group>

                            <Form.Group controlId='Form.ControlVerse'>
                                <Form.Label>Verse</Form.Label>
                                <Form.Control as='textarea' rows={3} className='form-input form-input___textarea' />
                            </Form.Group>
                            <Button className="form-button" variant="primary" as='input' type="submit" value="Check"/>
                            <Button className="form-button" variant="light" as='input' type="reset" value="Clear"/>
                        </Form>
                    </Card.Body>
                </> :
                <>
                    <Card.Header>{title}</Card.Header>
                    <Card.Body>
                        <Card.Subtitle>{subtitle}</Card.Subtitle>
                        <Card.Text>{content}</Card.Text>
                    </Card.Body>
                </>
            }

        </Card>
    )
}

export default Cards;