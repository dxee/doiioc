import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import * as Mixins from '../../Mixins'
import * as t from '../../Typography'
import Colors from '../../Colors'
import Layout, { Content } from '../../components/Layout'

const BlogListWrapper = styled(Content)`
  padding-top: 130px;
`

const ArticleItem = styled.div`
  ${Mixins.block({ axis: 'row' })}
  width: 700px;
  height: 190px;
  margin: 0 auto;
  border-radius: 7px;
  box-shadow: 5px 5px 25px 0 rgba(46, 61, 73, 0.2);
  padding: 10px 10px;
  transition: all 0.2s;
  cursor: pointer;
  margin-bottom: 50px;
  color: black;

  &:hover {
    box-shadow: 2px 4px 8px 0 rgba(46, 61, 73, 0.2);
  }
`

const ArticleDetails = styled.div`
  ${Mixins.block({ axis: 'column', align: 'flex-start' })}
  width: 65%;
  margin-right: 20px;
  color: ${Colors.darkGrey_2};
`

const Title = styled(t.H4)`
  font-size: 23px;
  color: rgba(0, 0, 0, 0.84);
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  width: 90%;
`

const Date = styled.span`
  font-size: 13px;
`

const Excerpt = styled(t.P)`
  display: block;
  height: 50px;
  width: 100%;
  overflow: hidden;
  white-space: normal;
  text-overflow: ellipsis;
`

class IndexPage extends React.Component {
  render() {
    const blogList = this.props.blogs
    return (
      <Layout>
        <BlogListWrapper>
          {blogList.map(blog => (
            <Link to={blog.fields.slug}>
              <ArticleItem>
                <ArticleDetails>
                  <Title noMargin>{blog.frontmatter.title}</Title>
                  <Date>{blog.frontmatter.date}</Date>
                  <Excerpt>{blog.excerpt}</Excerpt>
                </ArticleDetails>
              </ArticleItem>
            </Link>
          ))}
        </BlogListWrapper>
      </Layout>
    )
  }
}
export default IndexPage
