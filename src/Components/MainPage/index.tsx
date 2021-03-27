import React, { Fragment, useEffect, useState } from 'react'
import useStyles from './theme'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Navigate from '../Navigate/index'
import Markdown from 'react-markdown'
import { Link, RouteComponentProps } from '@reach/router'
import IPost, { defaultPost } from '../../Posts/interface'
import { archive } from '../../Posts/index'
//import axios from 'axios'

export default function MainPage(props: RouteComponentProps): JSX.Element {
  const classes = useStyles()
  const length = 550
  const [posts, setPosts]: [IPost[], (posts: IPost[]) => void] = useState<IPost[]>([defaultPost])

  //const [loading, setLoading]: [boolean, (loading: boolean) => void] = useState<boolean>(false)
  //const [error, setError]: [string, (error: string) => void] = useState("")

  useEffect(() => {
    setPosts(archive)
  }, [])

  // Load Posts from API
  /*   
  useEffect(() => {
    axios
      .get<IPost[]>('https://jsonplaceholder.typicode.com/posts', {
      headers: {
        "Content-Type": "application/json"
        }
      })
      .then((response) => {
        setPosts(response.data)
        setLoading(false)
      })
      .catch((ex) => {
        const error = 
          ex.response.status === 404 ? "Resource not found" : "An unexpected error has occurred"
        setError(error)
      })
  }, [loading]) 
  */
  
  const more = (body: string): boolean => {
    if (body.length > length)
      return true
    return false
  }

  return (
    <Fragment>
      <Navigate />

      <Grid container className={classes.postRoot}>
        <Grid item xs={11} sm={9} md={6} lg={4} xl={3}>
          {posts.map((post) => (
            <Fragment key={post.id}>
              
              <Paper elevation={3} className={classes.paper}>
                <Typography variant="caption" align="right">{post.date}</Typography>
                <Typography variant="h3" align="left" gutterBottom>{post.title}</Typography>
                <Typography variant="h6" gutterBottom className={classes.sub}>{post.subtitle}</Typography>
                <div className={classes.font}>
                  {more(post.body) ?
                    <Markdown source={post.body.substr(0, length) + "..."} /> :
                    <Markdown source={post.body} />
                  }
                </div>
                <Grid container justify="flex-end" className={classes.more}>
                  {more(post.body) ?
                    <Link to={`${post.title.replace(/ /g, '-')}/${post.chapter}/${post.id}`} state={{ post: post ?? defaultPost }} className={classes.link}>
                      <Typography variant="body2">continue</Typography>
                    </Link>
                    : ''}
                </Grid>
              
              </Paper>
            </Fragment>
          ))}
        </Grid>
      </Grid>

    </Fragment>
  )
}
