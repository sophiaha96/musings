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
  },

  paper: {
    display: 'grid',
    gridTemplateRows: '.5fr 2fr 2fr auto',
    height: '100%',
    padding: theme.spacing(5),
    marginTop: theme.spacing(5),
    backgroundColor: COLORS.PAPER,
  },

  font: {
    color: COLORS.FLORAL_WHITE,
    fontFamily: 'Playfair Display',
    fontSize: 19,
    fontWeight: 550,
  },

  space: {
    marginBottom: theme.spacing(5),
    paddingBottom: theme.spacing(10),
  }

}))

export default useStyles