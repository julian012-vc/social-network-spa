import * as yup from 'yup'
import { SchemaEnum } from "../constants/enums/schema.enum";
import { CommentForm as ICommentForm } from "../../modules/pages/post/interface/comment-form";

export const schema = yup.object().shape({
    email: yup.string().email(SchemaEnum.VALID_EMAIL).required(SchemaEnum.REQUIRED),
    title: yup.string().required(SchemaEnum.REQUIRED).min(SchemaEnum.MIN_LENGTH, SchemaEnum.MIN_LENGTH_ERROR),
    content: yup.string().required(SchemaEnum.REQUIRED).min(SchemaEnum.MIN_LENGTH, SchemaEnum.MIN_LENGTH_ERROR),
});

export const initialValues: ICommentForm = {
    content: '',
    title: '',
    email: ''
}