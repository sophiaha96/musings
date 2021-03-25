import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({

    bar: {
      top: 'auto',
      bottom: 0
    },

    link: {
      textDecoration: 'none',
    },

    button: {
      alignSelf: 'center',
      justifySelf: 'center',
      marginTop: theme.spacing(.5),
      marginLeft: theme.spacing(3)
    },

    buttonSocial: {
      marginTop: theme.spacing(1),
    }

  }))

  export default useStyles