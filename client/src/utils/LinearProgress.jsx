import React, { useEffect, useState } from 'react'
import { LinearProgress, Stack } from '@mui/material'

const LinearLoader = () => {
    const [progress, setProgress] = useState(0);
    const [display, setDisplay] = useState(true);

    useEffect(()=> {
      const timer = setInterval(() => {
        setProgress((oldProgress) => {
          if (oldProgress === 100) {
            setDisplay(false);
            return 100;
          }
          const diff = Math.random() * 10;
          return Math.min(oldProgress + diff, 100);
        });
      }, 500);

      return () => {
        clearInterval(timer);
      };
    },[])
  return (
    <Stack sx={{ width: '100%', color: '#0af' , position: 'absolute', top: 0, display: display?'flex':'none', zIndex: 999}}>
      <LinearProgress color='inherit' variant='determinate'  value={progress}/>
    </Stack>
  )
}

export default LinearLoader