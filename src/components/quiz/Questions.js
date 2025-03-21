import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { Button, Typography, Card, CardContent, Stack, Container } from '@mui/material';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { answerQuestions } from './quizSlice';



const Questions = () => {
  const dispatch = useDispatch();
  const { questions, currentQuestionIndex, quizCompleted, } = useSelector((state) => state.quiz);
  // const score = useSelector(state => state.quiz.score);

  const currentQuestion = questions[currentQuestionIndex];
  const navigate = useNavigate();
  const [bgClass, setBgClass] = useState('');
  const [showNextQuestion, setShowNextQuestion] = useState(false);

  const handleAnswer = (userAnswer) => {
    const rightChoice = userAnswer === currentQuestion.correctAnswer;
    setBgClass(rightChoice ? 'bg-green' : 'bg-red');

    setTimeout(() => {
      dispatch(answerQuestions({ userAnswer, correctAnswer: currentQuestion.correctAnswer }));
      setBgClass('');
      setShowNextQuestion(true);
    }, 1000);

  };

  useEffect(() => {
    if (showNextQuestion) {
      setTimeout(() => setBgClass('#ffffff'), 1000);
    }
  }, [showNextQuestion]);

   useEffect(() => {
     if (quizCompleted) {
       navigate('/results');
     }
   }, [quizCompleted, navigate]);

  return (
    <>

      <Button sx={{ m: 2 }} startIcon={<KeyboardBackspaceIcon />} variant="contained" color='warning' component={Link} to="/">  Torna alla Home</Button>
      {/* <div className='text-5xl p-3 '>{score}</div> */}
      <Container component="div" sx={{ width: "80%", padding: 8, }}>
        <Card sx={{ backgroundColor: "rgba(255, 255, 255, 0.678)" }} className={`questions-card ${bgClass}`} variant='outlined'>
          <CardContent sx={{ display: "flex", flexDirection: "column", alignItems: "center", }}>
            <Typography sx={{ my: 3 }} variant="h5">{currentQuestionIndex + 1}. {currentQuestion.text ?? null}</Typography>
            <Stack spacing={3}
              direction="row">
              <Button variant="contained" color='success' onClick={() => handleAnswer(true)}>
                Vero
              </Button>
              <Button variant="contained" color='error' onClick={() => handleAnswer(false)}>
                Falso
              </Button>

            </Stack>
          </CardContent>
        </Card>
      </Container>
    </>
  );
};

export default Questions;