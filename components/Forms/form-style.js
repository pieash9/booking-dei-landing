import { makeStyles } from 'tss-react/mui';
import { alpha, darken } from '@mui/material/styles';

const contactStyles = makeStyles({ uniqId: 'form' })((theme, _params, classes) => ({
  title: {},
  pageWrap: {
    textAlign: 'center',
    background: theme.palette.primary.main,
    minHeight: '100%',
    position: 'relative',
    width: '100%',
    alignItems: 'center',
    padding: theme.spacing(10, 5),
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(5, 0)
    },
    [`& .${classes.title}`]: {
      color: theme.palette.mode === 'dark' ? theme.palette.common.white : theme.palette.common.black,
    },
    '& a': {
      color: theme.palette.mode === 'dark' ? theme.palette.primary.dark : theme.palette.primary.main,
      textTransform: 'none',
      fontSize: 16,
      textDecoration: 'none',
      fontWeight: theme.typography.fontWeightRegular,
      [theme.breakpoints.down('sm')]: {
        fontSize: 14
      },
    }
  },
  innerWrap: {
    textAlign: 'left',
  },
  fullFromWrap: {
    color: theme.palette.mode === 'dark' ? theme.palette.common.white : theme.palette.common.black,
    paddingTop: theme.spacing(8),
    [theme.breakpoints.down('sm')]: {
      paddingTop: theme.spacing(4)
    }
  },
  formBox: {
    borderRadius: 40,
    overflow: 'hidden',
    background: theme.palette.mode === 'dark' ? 'transparent' : "#FFFFFF",
    boxShadow: '0 1.5px 12px 2px rgba(0, 0, 0, 0.28)',
    [theme.breakpoints.down('sm')]: {
      boxShadow: 'none'
    }
  },
  desc: {
    color: theme.palette.mode === 'dark' ? theme.palette.common.white : theme.palette.common.black,
    textAlign: 'center',
    padding: theme.spacing(0, 10),
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(0, 2),
    }
  },
  light: {},
  input: {
    width: '100%',
    '& label': {
      left: theme.spacing(0.5),
    },
    '& > div': {
      border: `1px solid ${alpha(theme.palette.text.primary, 0.25)}`,
      background: 'none',
      overflow: 'hidden',
      '& input': {
        paddingLeft: theme.spacing(2),
        '&:focus': {
          background: alpha(theme.palette.background.paper, 0.7)
        },
        '&:hover': {
          background: alpha(theme.palette.background.paper, 0.7)
        }
      }
    },
    [`&.${classes.light}`]: {
      '& label': {
        color: theme.palette.mode === 'dark' ? theme.palette.common.white : theme.palette.common.black,
      },
      '& > div': {
        border: `1px solid ${alpha(theme.palette.mode === 'dark' ? theme.palette.common.white : theme.palette.common.black, 0.5)}`,
        '& input': {
          color: theme.palette.mode === 'dark' ? theme.palette.common.white : theme.palette.common.black,
          '&:focus': {
            background: alpha(theme.palette.primary.light, 0.1)
          },
          '&:hover': {
            background: alpha(theme.palette.primary.light, 0.1)
          }
        },
      }
    }
  },
  form: {
    textAlign: 'left',
    position: 'relative',
    marginTop: theme.spacing(8),
    padding: theme.spacing(0, 15, 10),
    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(0, 4, 10)
    },
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(2, 1),
      marginTop: theme.spacing(2),
    },
  },
  formHelper: {
    display: 'flex',
    marginTop: theme.spacing(),
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      alignItems: 'center',
    }
  },
  flex: {},
  btnArea: {
    justifyContent: 'space-between',
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing(5),
      display: 'flex',
    },
    [theme.breakpoints.down('md')]: {
      '& .MuiButton-root': {
        width: '100%'
      }
    },
    [theme.breakpoints.down('sm')]: {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(5)
    },
    '& label': {
      position: 'relative'
    },
    '& button': {
      marginTop: theme.spacing(2),
      minHeight: 48,
      minWidth: 180
    },
    '& span': {
      '& a': {
        textDecoration: 'none !important',
        color: theme.palette.mode === 'dark' ? theme.palette.common.white : theme.palette.common.black,
      }
    },
    [`&.${classes.flex}`]: {
      display: 'flex',
      justifyContent: 'space-between',
      [theme.breakpoints.down('md')]: {
        display: 'block'
      }
    },
  },
  primary: {
    background: theme.palette.primary.main,
    position: 'absolute',
    opacity: 0.08,
    transform: 'rotate(45deg)',
  },
  secondary: {
    background: theme.palette.secondary.main,
    position: 'absolute',
    opacity: 0.1,
    transform: 'rotate(45deg)',
  },
  decoTop: {
    [`& .${classes.primary}`]: {
      borderRadius: 80,
      width: 405,
      height: 405,
      top: -200,
      right: -50,
    },
    [`& .${classes.secondary}`]: {
      borderRadius: 40,
      width: 205,
      height: 205,
      top: 24,
      right: -100,
    }
  },
  decoBottom: {
    [`& .${classes.primary}`]: {
      borderRadius: 40,
      width: 205,
      height: 205,
      bottom: 180,
      left: -110,
    },
    [`& .${classes.secondary}`]: {
      borderRadius: 80,
      width: 405,
      height: 405,
      bottom: -100,
      left: -100,
    }
  },
  rightIcon: {
    marginLeft: theme.spacing()
  },
  backtohome: {
    width: 80,
    height: 80,
    position: 'absolute',
    marginTop: 20,
    marginLeft: 20,
    zIndex: 20,
    [theme.breakpoints.down('md')]: {
      left: 'calc(50% - 40px)',
      top: 40,
      margin: 0,
    },
    [theme.breakpoints.up('md')]: {
      marginTop: 20,
      marginLeft: 20,
    },
    [theme.breakpoints.down('md')]: {
      display: 'none'
    },
    '& i': {
      fontSize: 32,
      color: alpha(theme.palette.mode === 'dark' ? theme.palette.common.white : theme.palette.common.black, 0.54)
    },
    '& > span i:first-of-type': {
      opacity: 1,
      transition: 'opacity 0.3s ease'
    },
    '& > span i:last-child': {
      position: 'absolute',
      right: 0,
      opacity: 0,
      transition: 'all 0.3s ease'
    },
    '&:hover': {
      '& > span i:first-of-type': {
        opacity: 0,
      },
      '& > span i:last-child': {
        right: 30,
        opacity: 1,
      },
    }
  },
  check: {
    '& svg': {
      fill: theme.palette.mode === 'dark' ? theme.palette.common.white : theme.palette.common.black,
    }
  },
  decoration: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    overflow: 'hidden',
    clip: 'rect(0, auto, auto, 0)',
    '& svg': {
      fill: theme.palette.secondary.main,
      opacity: 0.2,
      position: 'fixed',
      top: 0,
    }
  },
  leftDeco: {
    left: theme.direction === 'rtl' ? 'auto' : -400,
    right: theme.direction === 'rtl' ? '-50%' : 'auto',
    width: 1200,
    height: 1500,
    transformOrigin: 'top left',
    [theme.breakpoints.up('md')]: {
      transform: 'scale(0.8)',
    }
  },
  rightDeco: {
    left: theme.direction === 'rtl' ? -150 : 'auto',
    right: theme.direction === 'rtl' ? 'auto' : 0,
    height: 1500,
    transformOrigin: 'top right',
    [theme.breakpoints.up('md')]: {
      transform: 'scale(0.8)',
    }
  },
  authFrame: {
    display: 'block',
    position: 'relative'
  },
  greeting: {
    display: 'flex',
    paddingTop: theme.spacing(16),
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: '100%',
    textAlign: 'center',
    color: theme.palette.mode === 'dark' ? theme.palette.common.white : theme.palette.common.black,
    '& h6': {
      fontWeight: theme.typography.fontWeightRegular
    }
  },
  logoHeader: {},
  logo: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: theme.spacing(3),
    [`&.${classes.logoHeader}`]: {
      flexDirection: 'column',
      alignItems: 'center',
      position: 'relative',
      zIndex: 10
    },
    '& img': {
      width: 64,
      background: theme.palette.mode === 'dark' ? 'transparent' : '#000000',
      padding: 2,
      borderRadius: 5,
    },
    '& p, span': {
      display: 'block',
      paddingBottom: 4,
      color: theme.palette.mode === 'dark' ? theme.palette.common.white : theme.palette.common.black,
    }
  },
  head: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    '& a': {
      marginTop: theme.spacing(2),
    },
    [theme.breakpoints.down('md')]: {
      marginTop: theme.spacing(2),
      justifyContent: 'center',
      '& a': {
        display: 'none'
      }
    }
  },
  signArrow: {},
  formWrap: {
    background: theme.palette.background.paper,
    position: 'relative',
    padding: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(5)
    },
    [theme.breakpoints.up('lg')]: {
      padding: theme.spacing(8)
    }
  },
  socmedSideLogin: {
    display: 'flex',
    justifyContent: 'space-around',
    [theme.breakpoints.down('lg')]: {
      justifyContent: 'center',
    },
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',
      display: 'block'
    },
    '& > *': {
      color: theme.palette.common.white,
      width: 160,
      padding: theme.spacing(),
      [theme.breakpoints.down('lg')]: {
        margin: theme.spacing(0, 0.5) + '!important'
      },
      [theme.breakpoints.down('sm')]: {
        marginBottom: theme.spacing(2) + '!important',
        width: '100%',
      }
    },
    '& i': {
      color: theme.palette.common.white,
      marginRight: theme.spacing()
    }
  },
  blueBtn: {
    background: '#28aae1',
    '&:hover': {
      background: darken('#28aae1', 0.2),
    }
  },
  naviBtn: {
    background: '#3b579d',
    '&:hover': {
      background: darken('#3b579d', 0.2),
    }
  },
  redBtn: {
    background: '#dd493c',
    '&:hover': {
      background: darken('#dd493c', 0.2),
    }
  },
  separator: {
    margin: `${theme.spacing(5)} auto`,
    maxWidth: 300,
    minWidth: 200,
    textAlign: 'center',
    position: 'relative',
    '& p': {
      [theme.breakpoints.down('sm')]: {
        fontSize: 12
      },
    },
    '&:before, &:after': {
      content: '""',
      borderTop: `1px solid ${theme.palette.text.disabled}`,
      top: '50%',
      position: 'absolute',
      width: '20%'
    },
    '&:before': {
      left: 0,
    },
    '&:after': {
      right: 0,
    }
  }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default contactStyles;
