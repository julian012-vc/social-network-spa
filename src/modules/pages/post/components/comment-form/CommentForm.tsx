import React from "react";
import { Button, Form, InputGroup} from "react-bootstrap";
import { Formik } from "formik";

import './CommentForm.css'
import { schema, initialValues } from "../../../../../shared/utils/validations.util";
import { CommentForm as ICommentForm} from "../../interface/comment-form";


const CommentForm = (props: any) => {

    const submitForm = (values: ICommentForm) => {
        console.log(values)
    }

    return (
        <Formik
            validationSchema={schema}
            onSubmit={submitForm}
            initialValues={initialValues}
        >
            {({
                  handleSubmit,
                  handleChange,
                  values,
                  touched,
                  errors,
              }) => (
                <Form noValidate onSubmit={handleSubmit}>
                    <Form.Group controlId="email">
                        <Form.Label>Correo Electronico</Form.Label>
                        <Form.Control
                            type="email"
                            name="email"
                            value={values.email}
                            onChange={handleChange}
                            isValid={touched.email && !errors.email}
                            isInvalid={!!errors.email}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.email}
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group controlId="title">
                        <Form.Label>Username</Form.Label>
                        <InputGroup hasValidation>
                            <Form.Control
                                type="text"
                                aria-describedby="inputGroupPrepend"
                                name="title"
                                value={values.title}
                                onChange={handleChange}
                                isValid={touched.email && !errors.email}
                                isInvalid={!!errors.title}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.title}
                            </Form.Control.Feedback>
                        </InputGroup>
                    </Form.Group>

                    <Form.Group controlId="content">
                        <Form.Label>Mensaje</Form.Label>
                        <InputGroup hasValidation>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                aria-describedby="inputGroupPrepend"
                                name="content"
                                value={values.content}
                                onChange={handleChange}
                                isValid={touched.email && !errors.email}
                                isInvalid={!!errors.content}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.content}
                            </Form.Control.Feedback>
                        </InputGroup>
                    </Form.Group>
                    <Button type="submit" variant="link">Guardar</Button>
                    <Button
                        onClick={props.onHide}
                        variant="secondary"
                    >
                        Cerrar
                    </Button>
                </Form>
            )}
        </Formik>
    );
}

export default CommentForm