import React, { useState } from "react";
import { Button, Form, InputGroup, Spinner} from "react-bootstrap";
import { Formik } from "formik";

import { PostForm as IPostForm} from "../../interface/post-form";

import { createPost } from "../../services/post-service";
import { schema, initialValues } from "../../../../../shared/utils/validations.util";

import './PostForm.css'

const PostForm = (props: any) => {

    const [isLoading, setIsLoading] = useState(false)

    const submitForm = (values: IPostForm) => {
        setIsLoading(true)
        values.post_id = props.parent
        createPost(values)
            .then((res) => {
                setIsLoading(false)
                props.onSave(res.data.data)
            })
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
                        <Form.Label>Titulo</Form.Label>
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
                    <Button onClick={props.onHide} variant="secondary">Cerrar</Button>
                    <Button type="submit" variant="link" disabled={isLoading}>
                        {
                            isLoading &&
                            <Spinner as="span"
                                animation="border"
                                size="sm"
                                role="status"
                                aria-hidden="true"
                            />
                        } Guardar
                    </Button>
                </Form>
            )}
        </Formik>
    );
}

export default PostForm