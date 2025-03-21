import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    score: 0,
    currentQuestionIndex: 0,
    questions: [
        { id: 1, text: "Socrate era un filosofo greco?", correctAnswer: true, explanation: "Socrate è considerato uno dei padri della filosofia occidentale." },
        { id: 2, text: "Platone era l'allievo di Aristotele?", correctAnswer: false, explanation: "In realtà, Aristotele era l'allievo di Platone." },
        { id: 3, text: "Aristotele era uno studente di Platone?", correctAnswer: true, explanation: "Aristotele studiò presso l'Accademia di Platone ad Atene." },
        { id: 4, text: "Eraclito è famoso per la sua teoria del cambiamento?", correctAnswer: true, explanation: "Eraclito è noto per la sua affermazione che 'tutto scorre'." },
        { id: 5, text: "Pitagora è noto per il suo teorema sulla geometria?", correctAnswer: true, explanation: "Il teorema di Pitagora è uno dei principi fondamentali della geometria." },
        { id: 6, text: "Zenone di Elea è famoso per i suoi paradossi?", correctAnswer: true, explanation: "Zenone è noto per i suoi paradossi che esplorano il concetto di infinito." },
        { id: 7, text: "Epicuro sosteneva che il piacere è il bene supremo?", correctAnswer: true, explanation: "Epicuro credeva che il piacere fosse il fine ultimo della vita." },
        { id: 8, text: "Diogene di Sinope era un seguace di Platone?", correctAnswer: false, explanation: "Diogene era un cinico e spesso criticava Platone." },
        { id: 9, text: "Anassagora introdusse il concetto di Nous (mente)?", correctAnswer: true, explanation: "Anassagora introdusse il concetto di Nous come principio ordinatore dell'universo." },
        { id: 10, text: "Parmenide sosteneva che il cambiamento è un'illusione?", correctAnswer: true, explanation: "Parmenide credeva che la realtà fosse immutabile e che il cambiamento fosse un'illusione." },
        { id: 11, text: "Protagora è noto per la frase 'L'uomo è la misura di tutte le cose'?", correctAnswer: true, explanation: "Protagora è famoso per il suo relativismo etico e conoscitivo." },
        { id: 12, text: "Democrito è considerato il padre dell'atomismo?", correctAnswer: true, explanation: "Democrito sviluppò la teoria atomistica della materia." },
        { id: 13, text: "Socrate scrisse molti libri durante la sua vita?", correctAnswer: false, explanation: "Socrate non scrisse nulla; le sue idee sono conosciute attraverso i dialoghi di Platone." },
        { id: 14, text: "Platone fondò l'Accademia di Atene?", correctAnswer: true, explanation: "Platone fondò l'Accademia, una delle prime istituzioni di istruzione superiore del mondo occidentale." },
        { id: 15, text: "Aristotele scrisse 'La Repubblica'?", correctAnswer: false, explanation: "Platone scrisse 'La Repubblica', non Aristotele." },
        { id: 16, text: "Seneca era un filosofo stoico?", correctAnswer: true, explanation: "Seneca era un importante filosofo stoico romano." },
        { id: 17, text: "Plotino è associato al neoplatonismo?", correctAnswer: true, explanation: "Plotino è considerato il fondatore del neoplatonismo." },
        { id: 18, text: "Sofocle era un filosofo?", correctAnswer: false, explanation: "Sofocle era un drammaturgo greco, non un filosofo." },
        { id: 19, text: "Anassimandro è noto per la sua teoria dell'apeiron?", correctAnswer: true, explanation: "Anassimandro introdusse il concetto di apeiron come principio originario dell'universo." },
        { id: 20, text: "Empedocle sosteneva che tutto è composto da quattro elementi: terra, aria, fuoco e acqua?", correctAnswer: true, explanation: "Empedocle credeva che questi quattro elementi fossero alla base di tutta la materia." }
    ],

}

const quizSlice = createSlice({
    name: 'quiz',
    initialState,
    reducers: {
        answerQuestions: (state, action) => {
            const { userAnswer, correctAnswer } = action.payload;
            if (userAnswer === correctAnswer) {
                state.score += 1;
            } if (state.currentQuestionIndex < state.questions.length - 1) {
                state.currentQuestionIndex += 1;
            } else {
                state.quizCompleted = true;
            }
        },
        restartQuiz: (state) => {
            state.score = 0;
            state.currentQuestionIndex = 0;
            state.quizCompleted = false;
        }

    }
});

export const { answerQuestions, restartQuiz } = quizSlice.actions;
export default quizSlice.reducer;