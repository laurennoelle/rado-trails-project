// import * as React from 'react';
// import { styled } from '@mui/material/styles';
// import Card from '@mui/material/Card';
// import CardHeader from '@mui/material/CardHeader';
// import CardMedia from '@mui/material/CardMedia';
// import CardContent from '@mui/material/CardContent';
// import CardActions from '@mui/material/CardActions';
// import Collapse from '@mui/material/Collapse';
// import Avatar from '@mui/material/Avatar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import { red } from '@mui/material/colors';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import ShareIcon from '@mui/icons-material/Share';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import MoreVertIcon from '@mui/icons-material/MoreVert';

// const ExpandMore = styled((props) => {
//   const { expand, ...other } = props;
//   return <IconButton {...other} />;
// })(({ theme, expand }) => ({
//   transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
//   marginLeft: 'auto',
//   transition: theme.transitions.create('transform', {
//     duration: theme.transitions.duration.shortest,
//   }),
// }));

// export default function TrailCard( {trail} ) {
//   const [expanded, setExpanded] = React.useState(false);

//   const handleExpandClick = () => {
//     setExpanded(!expanded);
//   };

//   return (
//     <Card sx={{ maxWidth: 345 }}>
//       <CardHeader
//         avatar={
//           <Avatar sx={{ bgcolor: red[500] }} aria-label="trail">
//             R
//           </Avatar>
//         }
//         action={
//           <IconButton aria-label="settings">
//             <MoreVertIcon />
//           </IconButton>
//         }
//         title={trail.name}
//         subheader={trail.city}
//       />
//       <CardMedia
//         component="img"
//         height="194"
//         image={trail.img_url}
//         alt={trail.name}
//       />
//       <CardContent>
//         <Typography variant="body2" color="text.secondary">
//           {trail.city}, CO <br></br>
//           Length: {trail.length} mi <br></br>
//           Estimated Time: {trail.est_time} hrs

//         </Typography>
//       </CardContent>
//       <CardActions disableSpacing>
//         <IconButton aria-label="add to favorites">
//           <FavoriteIcon />
//         </IconButton>
//         <IconButton aria-label="share">
//           <ShareIcon />
//         </IconButton>
//         <ExpandMore
//           expand={expanded}
//           onClick={handleExpandClick}
//           aria-expanded={expanded}
//           aria-label="show more"
//         >
//           <ExpandMoreIcon />
//         </ExpandMore>
//       </CardActions>
//       <Collapse in={expanded} timeout="auto" unmountOnExit>
//         <CardContent>
//           <Typography paragraph>Reviews:</Typography>
//           <Typography paragraph>
//             {/* Reviews go here */}
//           </Typography>
//           <Typography paragraph>
//            {/* Reviews go here */}
//           </Typography>
//           <Typography paragraph>
//           {/* Reviews go here */}
//           </Typography>
//           <Typography>
//             {/* Reviews go here */}
//           </Typography>
//         </CardContent>
//       </Collapse>
//     </Card>
//   );
// }

import React from 'react'

function TrailCard( {trail} ) {

  return (
    <li className="card">
        <img src={trail.img_url} alt={trail.name} />
        <h3>{trail.name}</h3>
        <h4>{trail.city}, CO</h4>
        <p><em>Length: {trail.length} mi.</em></p>
        <p><em>Estimated Time: {trail.est_time} hrs.</em></p>
        <button>⭐️</button>
        {/* <p> Reviews: {trail.reviews}</p> */}
    </li>
  );
}

export default TrailCard