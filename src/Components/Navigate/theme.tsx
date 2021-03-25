import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    up: {
      position: 'fixed',
      top: theme.spacing(18),
      right: theme.spacing(15),
      width: theme.spacing(5),
      height: theme.spacing(5),
      zIndex: theme.zIndex.drawer + 2,
      [theme.breakpoints.down('xs')]: {
        right: theme.spacing(5),
        top: theme.spacing(92),
      }
    },

    down: {
      position: 'fixed',
      top: theme.spacing(25),
      right: theme.spacing(15),
      width: theme.spacing(5),
      height: theme.spacing(5),
      zIndex: theme.zIndex.drawer + 2,
      [theme.breakpoints.down('xs')]: {
        right: theme.spacing(5),
        top: theme.spacing(100),
      }
    },

  }))

  export default useStyles