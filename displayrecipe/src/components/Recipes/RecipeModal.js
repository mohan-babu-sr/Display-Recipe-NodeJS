import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import classesmodal from './RecipeModal.module.css';
import LinkIcon from '@material-ui/icons/Link';

const useStyles = makeStyles(theme => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function TransitionsModal(props) {
  let data = props.modalData;
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <button type='button' onClick={handleOpen}>
        View
      </button>
      <Modal
        aria-labelledby='transition-modal-title'
        aria-describedby='transition-modal-description'
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 className={classesmodal.title}>{data.title}</h2>
            <div className={classesmodal.image}>
              <img src={data.image_url} alt='Not Found!'></img>
            </div>
            <div className={classesmodal.details}>
              <div>
                <span>
                  <a
                    href={data.source_url}
                    target='_blank'
                    title='click to view details of recipe!'
                  >
                    <LinkIcon />
                  </a>
                </span>
              </div>
              <span title='cooking time of recipe!'>{data.cooking_time}m</span>
              &nbsp;•&nbsp;
              <span>{data.servings} servings</span>
            </div>
            <p>{data.publisher}</p>
            <p>Ingredients :</p>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
