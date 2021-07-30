import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import classesmodal from './RecipeModal.module.css';
import LinkIcon from '@material-ui/icons/Link';
import Table from 'react-bootstrap/Table';

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
        <img src='https://img.icons8.com/plumpy/24/000000/view-file.png' />
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
            <h2
              title={data.title}
              id={data.title}
              className={classesmodal.title}
            >
              {data.title}
            </h2>
            <div className={classesmodal.image}>
              <img src={data.image_url} alt='Not Found!'></img>
            </div>
            <div className={classesmodal.details}>
              <div>
                <span>
                  <a
                    href={data.source_url}
                    rel='noreferrer'
                    target='_blank'
                    title='click to view details of recipe!'
                  >
                    <LinkIcon />
                  </a>
                </span>
              </div>
              <span title='cooking time of recipe!'>{data.cooking_time}m</span>
              &nbsp;•&nbsp;
              <span className={classesmodal.servings}>
                {data.servings} servings
              </span>
            </div>
            <p className={classesmodal.publisher}>{data.publisher}</p>
            <Table hover className={classesmodal.table}>
              <thead>
                <tr className={classesmodal.tabletitle}>
                  <th style={{ width: '80%' }}>Ingredients</th>
                  <th style={{ width: '20%' }}>Quantity</th>
                  <th style={{ width: '10%' }}>Unit&nbsp;</th>
                </tr>
              </thead>
            </Table>
            <div className={classesmodal.tablescroll}>
              <Table hover className={classesmodal.table}>
                {data.ingredients.map((data, idx) => {
                  return (
                    <tbody key={idx}>
                      <tr>
                        <td style={{ width: '80%' }}>{data.description}</td>
                        <td style={{ width: '20%' }}>{data.quantity}</td>
                        <td style={{ width: '10%' }}>{data.unit}</td>
                      </tr>
                    </tbody>
                  );
                })}
              </Table>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Modal from '@material-ui/core/Modal';
// import Backdrop from '@material-ui/core/Backdrop';
// import Fade from '@material-ui/core/Fade';
// import classesmodal from './RecipeModal.module.css';
// import LinkIcon from '@material-ui/icons/Link';
// import Table from 'react-bootstrap/Table';

// const useStyles = makeStyles(theme => ({
//   modal: {
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   paper: {
//     backgroundColor: theme.palette.background.paper,
//     boxShadow: theme.shadows[5],
//     padding: theme.spacing(2, 4, 3),
//   },
// }));

// export default function TransitionsModal(props) {
//   let data = props.modalData;
//   const classes = useStyles();
//   const [open, setOpen] = React.useState(false);

//   const handleOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   return (
//     <div>
//       <button type='button' onClick={handleOpen}>
//         View
//       </button>
//       <div className={classes.modalview}>
//         <Modal
//           aria-labelledby='transition-modal-title'
//           aria-describedby='transition-modal-description'
//           className={classes.modal}
//           open={open}
//           onClose={handleClose}
//           closeAfterTransition
//           BackdropComponent={Backdrop}
//           BackdropProps={{
//             timeout: 500,
//           }}
//         >
//           <Fade in={open}>
//             <div className={classes.paper}>
//               <h2 className={classesmodal.title}>{data.title}</h2>
//               <div className={classesmodal.image}>
//                 <img src={data.image_url} alt='Not Found!'></img>
//               </div>
// <div className={classesmodal.details}>
//   <div>
//     <span>
//       <a
//         href={data.source_url}
//         rel='noreferrer'
//         target='_blank'
//         title='click to view details of recipe!'
//       >
//         <LinkIcon />
//       </a>
//     </span>
//   </div>
//   <span title='cooking time of recipe!'>
//     {data.cooking_time}m
//   </span>
//   &nbsp;•&nbsp;
//   <span>{data.servings} servings</span>
// </div>
// <p>{data.publisher}</p>
{
  /* <Table bordered hover variant='dark' className={classesmodal.table}>
  <thead>
    <tr className={classesmodal.tabletitle}>
      <th>Ingredients</th>
      <th>Quantity</th>
      <th>Unit</th>
    </tr>
  </thead>
  {data.ingredients.map((data, idx) => {
    return (
      <tbody key={idx}>
        <tr>
          <td>{data.description}</td>
          <td>{data.quantity}</td>
          <td>{data.unit}</td>
        </tr>
      </tbody>
    );
  })}
</Table>; */
}
//             </div>
//           </Fade>
//         </Modal>
//       </div>
//     </div>
//   );
// }
