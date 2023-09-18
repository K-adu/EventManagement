// import * as React from 'react';
// import { useState } from 'react';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import Dialog from '@mui/material/Dialog';
// import DialogActions from '@mui/material/DialogActions';
// import DialogContent from '@mui/material/DialogContent';
// import DialogTitle from '@mui/material/DialogTitle';

// export default function DiaryCard(props) {
//   const [openEditDialog, setOpenEditDialog] = useState(false);
//   const [selectedDiary, setSelectedDiary] = useState(null);
//   const [openReadDialog, setOpenReadDialog] = useState(false);

//   const diaryEditHandler = (diary) => {
//     setSelectedDiary(diary);
//     setOpenEditDialog(true);
//   };

//   const handleReadClick = (diary) => {
//     setSelectedDiary(diary);
//     setOpenReadDialog(true);
//   };

//   const handleReadDialogClose = () => {
//     setOpenReadDialog(false);
//   };

//   return (
//     <>
//       <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
//         {props.diary.flatMap((diaryArray, index) =>
//           diaryArray.map((diary) => (
//             <Card key={diary._id} sx={{ minWidth: 275 }}>
//               <CardContent>
//                 <Typography
//                   sx={{ fontSize: 14 }}
//                   color="text.secondary"
//                   gutterBottom
//                 >
//                   {diary.description}
//                 </Typography>
//               </CardContent>
//               <CardActions>
//                 <Button size="small" onClick={() => handleReadClick(diary)}>
//                   Read
//                 </Button>
//               </CardActions>
//             </Card>
//           ))
//         )}
//       </div>
//       {selectedDiary && (
//         <Dialog open={openReadDialog} onClose={handleReadDialogClose}>
//           <DialogTitle>Read Diary</DialogTitle>
//           <DialogContent>
//             <Typography>{selectedDiary.description}</Typography>
//           </DialogContent>
//           <DialogActions>
//             <Button onClick={handleReadDialogClose} color="primary">
//               Close
//             </Button>
//           </DialogActions>
//         </Dialog>
//       )}
//     </>
//   );
// }
import * as React from 'react';
import { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

export default function DiaryCard(props) {
  const [openEditDialog, setOpenEditDialog] = useState(false);
  const [selectedDiary, setSelectedDiary] = useState(null);
  const [openReadDialog, setOpenReadDialog] = useState(false);

  const diaryEditHandler = (diary) => {
    setSelectedDiary(diary);
    setOpenEditDialog(true);
  };

  const handleReadClick = (diary) => {
    setSelectedDiary(diary);
    setOpenReadDialog(true);
  };

  const handleReadDialogClose = () => {
    setOpenReadDialog(false);
  };

  const formatDate = (dateString) => {
    const options = {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    };
    const date = new Date(dateString);
    return date.toLocaleString(undefined, options);
  };

  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
        {props.diary.flatMap((diaryArray, index) =>
          diaryArray.map((diary) => (
            <Card key={diary._id} sx={{ minWidth: 275 }}>
              <CardContent>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  Created At: {formatDate(diary.createdAt)}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" onClick={() => handleReadClick(diary)}>
                  Read
                </Button>
              </CardActions>
            </Card>
          ))
        )}
      </div>
      {selectedDiary && (
        <Dialog open={openReadDialog} onClose={handleReadDialogClose}>
          <DialogTitle>Read Diary</DialogTitle>
          <DialogContent>
            <div
              dangerouslySetInnerHTML={{ __html: selectedDiary.description }}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleReadDialogClose} color="primary">
              Close
            </Button>
          </DialogActions>
        </Dialog>
      )}
    </>
  );
}
