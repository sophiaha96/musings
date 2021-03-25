import React, { Fragment } from 'react'
import { AppBar, Grid, Typography } from '@material-ui/core'
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Toolbar from '@material-ui/core/Toolbar'
import ExternalLink from '@material-ui/core/Link'
import useStyles from './theme'
import { Link } from '@reach/router';

function Header() {
  const classes = useStyles()

  return (
    <Fragment>
      <AppBar position="fixed" className={classes.bar} color="primary">
        <Toolbar >

          <Grid container justify="flex-start">
            <Link to="/" className={classes.link}>
              <Typography variant="h3">sh</Typography>
            </Link>
          </Grid>

          <Grid container justify="flex-end" spacing={3}>
            <Grid item>
              <ExternalLink href="https://instagram.com/sophiekachu/" target="_blank" rel="noreferrer">
                <InstagramIcon color="secondary" fontSize="large" className={classes.buttonSocial} />
              </ExternalLink>
            </Grid>

            <Grid item>
              <ExternalLink href="https://www.facebook.com/sophiaha1996/" target="_blank" rel="noreferrer">
                <FacebookIcon color="secondary" fontSize="large" className={classes.buttonSocial} />
              </ExternalLink>
            </Grid>

            <Grid item>
              <ExternalLink href="https://www.linkedin.com/in/sophia-ha-827210120/" target="_blank" rel="noreferrer">
                <LinkedInIcon color="secondary" fontSize="large" className={classes.buttonSocial} />
              </ExternalLink>
            </Grid>

          </Grid>

        </Toolbar>
      </AppBar>
    </Fragment>
  )
}

export default Header