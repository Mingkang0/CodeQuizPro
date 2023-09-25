// for Challenges Question
import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonHeader,
  IonButtons,
  IonToolbar,
  IonBackButton,
  IonTitle,
  IonText,
  IonGrid,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonPage,
  IonMenuButton,
} from '@ionic/react';
import { ref, get, set } from 'firebase/database';
import { db } from '../../firebase.config';
import SideMenu from '../../components/SideMenu';
import ChallengesResults from './result';
import { auth, cloudDB } from '../../firebase.config';
import { collection, setDoc, doc, addDoc } from "firebase/firestore";
import { Timestamp } from 'firebase/firestore';

interface QuesData {
  question: string;
  options: string[];
  answer: string;
  explanation: string;
  code: string[];
  selectedOption: string | null; // Store the selected option for each question
  isCorrect: boolean | null; // Store whether the selected option is correct for each question
}

const MAX_QUESTIONS = 5; // Maximum number of questions per session

const Ques: React.FC = () => {
  const { language } = useParams<{ language: string }>();
  const [questions, setQuestions] = useState<QuesData[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [challengesFinished, setChallengesFinished] = useState(false); // Add this state variable
  const [challengesResults, setChallengesResults] = useState<{ correctAnswers: number; totalQuestions: number } | null>(null);
  const [shouldRefresh, setShouldRefresh] = useState(false);

  const getQuestions = async () => {
    try {
      const dbRef = ref(db, `challenges/${language}/questions`);
      const snapshot = await get(dbRef);

      if (snapshot.exists()) {
        const data = snapshot.val();
        // Shuffle the questions randomly
        const shuffledQuestions = shuffleArray(data);
        // Limit the number of questions to the maximum
        const limitedQuestions = shuffledQuestions.slice(0, MAX_QUESTIONS);
        // Initialize selectedOption and isCorrect for each question
        const questionsWithState = limitedQuestions.map((question) => ({
          ...question,
          selectedOption: null,
          isCorrect: null,
        }));
        setQuestions(questionsWithState);
      } else {
        console.log('No data available');
      }
    } catch (error) {
      console.error('Error retrieving data:', error);
    }
  };

  useEffect(() => {
    getQuestions();
  }, [language]);

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setSelectedOption(null);
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
    }
  };
  const currentQuestion = questions[currentQuestionIndex];

  const handleOptionSelect = (option: string) => {
    const updatedQuestions = [...questions];
    updatedQuestions[currentQuestionIndex].selectedOption = option;
    // Check if the selected option is correct
    const isOptionCorrect = option === currentQuestion.answer;
    updatedQuestions[currentQuestionIndex].isCorrect = isOptionCorrect;
    setQuestions(updatedQuestions);
  };

  const handleFinishChallenges = () => {
    // Calculate the number of correct answers
    const correctAnswers = questions.filter((question) => question.isCorrect === true).length;
    const totalQuestions = questions.length;
    // Set a flag to indicate that the challenges is finished

    const score = (correctAnswers/totalQuestions)*100;
    addChallengeData(language,score);
    setChallengesFinished(true);

    // Store the results in state
    setChallengesResults({ correctAnswers, totalQuestions });
  };
  const addChallengeData = async (language:string ,score: number) => {
    const firestore = cloudDB; // Replace with your Firestore instance
    const user = auth.currentUser;
  
    if (user) {
      const userId = user.uid;
      const chaCompletionCollection = collection(firestore, 'Challenges');
      try {
        await addDoc(chaCompletionCollection, {
          userId: userId,        
          language: language,
          score: score,
          completedDate: Timestamp.now(),
        });
        console.log('Challenges data added to Firestore successfully!');
      } catch (error) {
        console.error('Error adding challenges data to Firestore:', error);
      }
    }else {
      // User is not authenticated, handle this case (e.g., show a message or redirect to login)
      console.log('User is not authenticated');
    }
  
   
  } 
  const History = useHistory();
  const handleExitChallenges = () => {
    History.push('/');
    window.location.reload();
  }
  useEffect(() => {
    if (shouldRefresh) {
      setShouldRefresh(false);
    }
  }, [shouldRefresh]);
  return (
    <>
      <SideMenu />
      <IonPage id='main-content'>
        <IonHeader>
          <IonToolbar color="warning">
            <IonButtons slot="start">
              <IonMenuButton></IonMenuButton>
            </IonButtons>
            <IonButton slot="end" color="danger" style={{ marginRight: '10px' }} onClick={handleExitChallenges}>Exit</IonButton>
            <IonTitle><b>Challenges</b></IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent color='main'>
          {currentQuestion && !challengesFinished && (
            <IonCard className='ion-margin'>
              <IonCardContent>
                <IonCardTitle>
                  {currentQuestionIndex + 1}. {currentQuestion.question}
                </IonCardTitle>
                {currentQuestion.code && Array.isArray(currentQuestion.code) && (
                  <IonCard className="ion-padding">
                    <IonCardSubtitle>
                      {currentQuestion.code.map((code, codeIndex) => (
                        <pre key={codeIndex}>{code}</pre>
                      ))}
                    </IonCardSubtitle>
                  </IonCard>
                )}
                <IonGrid>
                  {currentQuestion.options &&
                    Array.isArray(currentQuestion.options) && (
                      <IonGrid>
                        {currentQuestion.options.map((option, optionIndex) => (
                          <IonButton
                            expand="block"
                            color={currentQuestion.selectedOption === option ? (currentQuestion.isCorrect ? 'success' : 'danger') : 'light'}
                            key={optionIndex}
                            onClick={() => handleOptionSelect(option)}
                            className='ion-text-wrap ion-margin-top'>
                            {option}
                          </IonButton>
                        ))}
                      </IonGrid>
                    )}
                </IonGrid>
                {currentQuestion.selectedOption !== null && currentQuestion.isCorrect && (
                  <IonCard className='ion-padding'>
                    <IonText>
                      <strong>Your answer is correct!</strong>
                    </IonText>
                    <IonCardTitle>
                      <strong>Explanation:</strong>
                    </IonCardTitle>
                    <IonText>{currentQuestion.explanation}</IonText>
                  </IonCard>
                )}
                {currentQuestion.selectedOption !== null && !currentQuestion.isCorrect && (
                  <IonCard className='ion-padding'>
                    <IonText>
                      <strong>Your answer is incorrect!</strong>
                      <br />
                    </IonText>
                    <IonText><strong>The correct option is {currentQuestion.answer}</strong></IonText>
                    <IonCardTitle>
                      <strong>Explanation:</strong>
                    </IonCardTitle>
                    <IonText>{currentQuestion.explanation}</IonText>
                  </IonCard>
                )}
              </IonCardContent>
            </IonCard>
          )}
          {!challengesFinished && (
            <IonGrid className='ion-margin'>
              <IonButton onClick={handlePreviousQuestion} disabled={currentQuestionIndex === 0}>
                Previous
              </IonButton>
              <IonButton
                onClick={handleNextQuestion}
                disabled={currentQuestionIndex === questions.length - 1}
                className="ion-float-right"
              >
                Next
              </IonButton>
            </IonGrid>
          )}
          {currentQuestionIndex === questions.length - 1 && !challengesFinished && (
            <IonButton expand='block' className='ion-margin' color="primary" onClick={handleFinishChallenges}>
              Finish
            </IonButton>
          )}
          {challengesResults && (
            <ChallengesResults
              correctAnswers={challengesResults?.correctAnswers || 0} // Use a default value of 0 if correctAnswers is undefined
              totalQuestions={challengesResults?.totalQuestions || 0}   // Use a default value of 0 if totalQuestions is undefined
            />
          )}
        </IonContent>
      </IonPage>
    </>
  );
};

// Function to shuffle an array randomly
function shuffleArray(array: any[]) {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
}

export default Ques;

