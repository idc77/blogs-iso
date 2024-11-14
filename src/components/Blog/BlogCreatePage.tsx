import {iso} from '@iso';
import {useImperativeReference} from '@isograph/react';
import {Paper} from '@mui/material';
import {SubmitHandler, useForm} from 'react-hook-form';

type BlogCreateFormValues = {
    title: string;
    slug: string;
    description: string;
    tagline: string;
}

export const BlogCreatePage = iso(`
    field Blog.BlogCreatePage @component {
        id
    } 
`)(function BlogCreatePageComponent({ data: blog }) {
    const {
        fragmentReference: mutationRef,
        loadFragmentReference: loadMutation,
    } = useImperativeReference(iso(`entrypoint Mutation.CreateBlog`));

    const {control, handleSubmit, watch, formState: {errors}} = useForm<BlogCreateFormValues>();

    const onSubmit: SubmitHandler<BlogCreateFormValues> = formdata => {
        loadMutation({
            input: {
                title: formdata.title,
                slug: formdata.slug,
                description: formdata.description,
                tagline: formdata.tagline,
            }
        })
    }
    return (
        <>
            <Paper elevation={0}>
                <form onSubmit={handleSubmit(onSubmit)}>

                </form>
            </Paper>
        </>
    )
})

export const createBlog = iso(`
  field Mutation.CreateBlog($input: CreateBlogInput!) @component {
    createBlog(input: $input) {
      id
    }
  }
`)(({ data }) => {
    return (
        <></>
    )
})
