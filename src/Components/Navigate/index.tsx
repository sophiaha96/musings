import React, { Fragment, useRef } from 'react';
import Fab from '@material-ui/core/Fab';
import useStyles from './theme'
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Hidden } from '@material-ui/core';

export default function Navigate() {
  const classes = useStyles()
  const position = useRef<number>(0)
  const delta = useRef<number>(0)

  const executeScroll = () => {
    if(delta.current <= 3)
      delta.current = delta.current + 2
    position.current = position.current + delta.current + 650
    return position.current
  }

  const handleUp = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    position.current = 0
    delta.current = 0
  };
  const handleDown = () => {
    window.scrollTo({ top: executeScroll(), behavior: 'smooth' })
  };


  return (
    <Fragment>
      <Hidden smDown>
        <Fab color="primary" aria-label="info" variant="round"
          onClick={handleUp}
          className={classes.up}>
          <KeyboardArrowUpIcon color="secondary" />
        </Fab>

        <Fab color="primary" aria-label="info" variant="round"
          onClick={handleDown}
          className={classes.down}>
          <ExpandMoreIcon color="secondary" />
        </Fab>
      </Hidden>
    </Fragment>
  )
}