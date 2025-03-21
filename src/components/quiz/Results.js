import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Typography, Button, Stack } from '@mui/material';
import { restartQuiz } from './quizSlice';
import ReplayIcon from '@mui/icons-material/Replay';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';


const Results = () => {

  const dispatch = useDispatch();
  const score = useSelector(state => state.quiz.score);
  const navigate = useNavigate();

  const handleRestart = () => {
    dispatch(restartQuiz());
    navigate('/questions');
  };
  const handleHomePage = () => {
    navigate('/');
  }

  return (
    <div className='results-container'>
      <Stack
      spacing={4}
      direction="column"
      >

        <Typography className='p-3 text-center' variant="h4">Punteggio: <div> {score}</div> </Typography>
        <Button variant="contained" color="success" startIcon={<ReplayIcon/>} onClick={handleRestart}>
          Riprova
        </Button>
        <Button variant="contained" color="warning" startIcon={<KeyboardBackspaceIcon/>}onClick={handleHomePage}>
          Home
        </Button>
      </Stack>
    </div>
  );
};

export default Results;