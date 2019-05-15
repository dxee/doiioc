import React from 'react'
import Layout from '../../components/Layout'
import styled from 'styled-components'
import { MDXRenderer } from 'gatsby-mdx'
import 'prismjs/themes/prism.css'

const PostWrapper = styled.div`
  width: 700px;
  margin: 0 auto;
  font-size: 15px;
  padding-top: 100px;
  padding-bottom: 30px;

  @import url('https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/3.0.1/github-markdown.min.css');

  & pre {
    background-color: #fbfbfb !important;
  }
`

const H1Wrapper = styled.h1``

function Blog(props) {
  const blog = props.data.blog
  return (
    <Layout>
      <PostWrapper>
        <H1Wrapper>{blog.frontmatter.title}</H1Wrapper>
        <MDXRenderer>{blog.code.body}</MDXRenderer>
      </PostWrapper>
    </Layout>
  )
}

export default Blog
