import {iso} from '@iso';
import {useImperativeReference} from '@isograph/react';
import {Alert, Container, Paper, TextField} from '@mui/material';
import {Controller, SubmitHandler, useForm} from 'react-hook-form';
import slugify from 'slugify';

type BlogCreateFormValues = {
    title: string;
    description: string;
    tagline: string;
}

export const BlogCreate = iso(`
    field Blog.BlogCreate @component {
        id
    } 
`)(function BlogCreateComponent({data: blog}) {
    const {
        fragmentReference: mutationRef,
        loadFragmentReference: loadMutation,
    } = useImperativeReference(iso(`entrypoint Mutation.CreateBlog`));

    const {control, handleSubmit, watch, formState: {errors}} = useForm<BlogCreateFormValues>({
        defaultValues: {
            title: '',
            description: '',
            tagline: '',
        }
    });

    const onSubmit: SubmitHandler<BlogCreateFormValues> = formdata => {
        loadMutation({
            input: {
                title: formdata.title,
                slug: slugify(formdata.title),
                description: formdata.description,
                tagline: formdata.tagline,
                authorIDs: null,
                categoryIDs: null,
                commentIDs: null,
                createTime: null,
                featured: null,
                ownerID: null,
                pageIDs: null,
                postIDs: null,
                subscriberIDs: null,
                tagIDs: null,
                updateTime: null
            }
        })
    }

    const title = watch('title')

    return (
        <>
            <Container maxWidth="md">
                <Paper elevation={0}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Controller
                            control={control}
                            name="title"
                            rules={{required: true, minLength: 3, maxLength: 1900}}
                            render={({field}) => (
                                <TextField label="Title" {...field}/>
                            )}
                        >
                        </Controller>
                        <Alert>{errors.title?.message}</Alert>
                        <Controller
                            control={control}
                            name="description"
                            rules={{required: true, minLength: 3, maxLength: 1900}}
                            render={({field}) => (
                                <TextField multiline label="Description" {...field}/>
                            )}
                        >
                        </Controller>
                        <Controller
                            control={control}
                            name="tagline"
                            rules={{required: true, minLength: 3, maxLength: 1900}}
                            render={({field}) => (
                                <TextField label="Tagline" {...field}/>
                            )}
                        >
                        </Controller>
                    </form>
                </Paper>
            </Container>
        </>
    )
})

export const createBlog = iso(`
  field Mutation.CreateBlog($input: CreateBlogInput!) @component {
    createBlog(input: $input) {
      id
    }
  }
`)(({data}) => {
    return (
        <></>
    )
})
