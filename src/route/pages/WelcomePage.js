import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { Typography, Button,Box } from "@mui/material";
import { Link } from 'react-router-dom';
import { restartQuiz } from '../../components/quiz/quizSlice';

const WelcomePage = ({ user }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(restartQuiz())
  }, [dispatch]);

  return (
    <Box className='p-8'>
      <div className='welcome-container my-7'>
        <Typography m={5} variant="h2">BENVENUTO AL QUIZ FILOSOFICO!</Typography>
        <div className="paragraph">
          <Typography fontSize={25} m={2} variant="h6" >Benvenuti al mio quiz filosofico!
            Preparatevi a intraprendere un viaggio attraverso le grandi domande dell'esistenza,
            della conoscenza e della morale.<br /> Questo quiz è progettato per stimolare la vostra mente e sfidare le vostre convinzioni,
            esplorando le idee dei più grandi pensatori della storia.<br />  Che siate appassionati di filosofia o semplicemente curiosi di scoprire nuovi modi di vedere il mondo,<br />
            troverete qui un'opportunità unica per riflettere, imparare e divertirvi.<br />  Buona fortuna e buon viaggio filosofico!
          </Typography>
        </div>
        <Typography fontWeight={600} color='error' m={2} variant="h6" align="center">
          "La vita non esaminata non è degna di essere vissuta." - Socrate
        </Typography>
        <Box>
         {user ? (<Button variant="contained" color="warning"component={Link} to="/questions"> Iniiza il quiz</Button>) : 
         (<Button disabled variant="contained" color="warning"> Iniiza il quiz</Button>)}

        </Box>


      </div >

    </Box>
  )
}

export default WelcomePage
