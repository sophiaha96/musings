import { makeStyles } from '@material-ui/core/styles'
import { COLORS } from '../../MuiTheme'

const useStyles = makeStyles((theme) => ({
  
  root: {
    display: 'flex',
    width: '100vw',
  },

  postRoot: {
    justifyContent: 'center',
    marginBottom: theme.spacing(10),
  },

  paper: {
    display: 'grid',
    padding: theme.spacing(5),
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(3),
    backgroundColor: COLORS.PAPER,
  },

  font: {
    color: COLORS.FLORAL_WHITE,
    fontFamily: 'Playfair Display',
    fontSize: 19,
    fontWeight: 550,
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