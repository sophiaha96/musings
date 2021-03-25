import { makeStyles } from '@material-ui/core/styles'
import { COLORS } from '../../MuiTheme'

const useStyles = makeStyles((theme) => ({
  
  root: {
    display: 'flex',
    height: '100%',
    width: '100vw',
  },

  postRoot: {
    justifyContent: 'center',
    marginBottom: theme.spacing(10),
  },

  paper: {
    display: 'grid',
    gridTemplateRows: '.5fr 2fr 1.5fr 4fr 1fr',
    height: '100%',
    maxHeight: '700px',
    padding: theme.spacing(5),
    marginTop: theme.spacing(5),
    backgroundColor: COLORS.PAPER,
  },

  more: {
    alignSelf: 'end',
    bottom: 0,
  },

  link: {
    textDecoration: 'none',
  },

  sub: {
    paddingBottom: theme.spacing(2)
  },

}))

export default useStyles