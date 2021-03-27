import React, { Fragment, useState, useEffect } from 'react'
import useStyles from './theme'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid';
import { RouteComponentProps, useLocation } from '@reach/router'
import IPost, { defaultPost } from '../../Posts/interface'
import { archive } from '../../Posts/index'

export default function MainPage(props: RouteComponentProps<{location: {state: { post: IPost }}}>): JSX.Element {
  const classes = useStyles()
  const { pathname } = useLocation()
  const postIndex: number = parseInt(pathname.substring(pathname.lastIndexOf('/') + 1))

  const [post, setPost] = useState<IPost>(defaultPost)

  useEffect(() => {
    if (props.location?.state)
      setPost(props.location?.state.post)
    else 
      setPost(archive[archive.length - postIndex])
  }, [])

  return (
    <Fragment key={post.id}>
      <Grid container className={classes.postRoot}>
        <Grid item xs={11} sm={9} md={6} lg={4} xl={4}>
          <div className={classes.space}>
            <Paper elevation={3} className={classes.paper}>
            <Typography variant="caption" align="right">{post.date}</Typography>
            <Typography variant="h3" align="left" gutterBottom>{post.title}</Typography>
            <Typography variant="h6" gutterBottom>{post.subtitle}</Typography>
            <Typography variant="body1" style={{ whiteSpace: 'pre-line' }}>
              {post.body}
            </Typography>
          </Paper>
          </div>
        </Grid>
      </Grid>
    </Fragment>
  )
}
