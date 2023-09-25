import { IonContent, IonHeader, IonSelectOption, IonButton, IonTitle, IonPage, IonText, IonToolbar, IonIcon, IonCardTitle, IonGrid, IonCard, IonCardContent, IonCardHeader, IonRow, IonCol, IonItem, IonInput, IonButtons, IonMenuButton, IonSelect, IonCardSubtitle } from '@ionic/react';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { collection, getDocs, doc, query, where, Timestamp } from 'firebase/firestore';
import { cloudDB, auth } from '../../firebase.config'; // Adjust the import path as needed
import '../css/report.css';
import SideMenu from '../../components/SideMenu';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';

interface QuizData {
  language: string;
  score: number;
  difficulty: string;
  completedDate: {
    seconds: number;
    nanoseconds: number;
  };
}

const QuizzesReport: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [quizzesData, setQuizzesData] = useState<QuizData[]>([]);


  const handleDateSelect = (event: CustomEvent) => {
    const selectedDate = event.detail.value;
    setSelectedDate(selectedDate);
  };

  useEffect(() => {
    const fetchData = async () => {
      const firestore = cloudDB;
      const user = auth.currentUser;
      if (user) {
        try {
          const userId = user.uid;
          const challengesRef = collection(firestore, 'Quizzes');
          const challengesQuery = query(challengesRef, where('userId', '==', userId));
          const challengesSnapshot = await getDocs(challengesQuery);
          const data: QuizData[] = [];

          for (const docSnap of challengesSnapshot.docs) {
            const quizData = docSnap.data() as QuizData;
            data.push(quizData);
          }

          setQuizzesData(data);
        } catch (error) {
          console.error('Error fetching data from Firestore:', error);
        }
      } else {
        console.log('User is not authenticated');
      }
    };

    fetchData();
  }, [quizzesData]);

  const chartData: Record<string, number> = {};

  quizzesData.forEach((quiz) => {
    const language = quiz.language;
    if (!chartData[language]) {
      chartData[language] = 1;
    } else {
      chartData[language]++;
    }
  });
  // Convert chartData to an array of objects for recharts
  const chartDataArray = Object.keys(chartData).map((language) => ({
    name: language,
    value: chartData[language],
  }));


  const difficultychartData: Record<string, number> = {};

  quizzesData.forEach((quiz) => {
    const difficulty = quiz.difficulty;
    if (!difficultychartData[difficulty]) {
      difficultychartData[difficulty] = 1;
    } else {
      difficultychartData[difficulty]++;
    }
  });
  // Convert chartData to an array of objects for recharts
  const  difficultychartDataArray = Object.keys(difficultychartData).map((difficulty) => ({
    name: difficulty,
    value: difficultychartData[difficulty],
  }));

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#FF5733'];
  return (
    <>
      <SideMenu />
      <IonPage id='main-content'>
        <IonHeader>
          <IonToolbar color="warning">
            <IonButtons slot="start">
              <IonMenuButton></IonMenuButton>
            </IonButtons>
            <IonTitle><b>Report about Quizzes</b></IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent color='main'>
          <IonCard>
            <IonCardContent>
              <IonCardTitle style={{ marginBottom: '20px' }}>Select date:</IonCardTitle>
              <IonSelect label="Select a date" label-placement="floating" fill="outline" onIonChange={handleDateSelect}>
                {Array.from(new Set(quizzesData.map((quiz) => (
                  new Date(
                    quiz.completedDate.seconds * 1000 +
                    quiz.completedDate.nanoseconds / 1000000
                  ).toLocaleDateString()
                )))).map((uniqueDate, index) => (
                  <IonSelectOption key={index} value={uniqueDate}>
                    {uniqueDate}
                  </IonSelectOption>
                ))}
              </IonSelect>
            </IonCardContent>
          </IonCard>
          {selectedDate && (
            <IonCard className="ion-margin">
              <IonCardContent>
                <IonCardTitle style={{ marginBottom: '20px' }}>Table on Daily Challenges:</IonCardTitle>
                {Array.from(new Set(quizzesData.map((quiz) => (
                  new Date(
                    quiz.completedDate.seconds * 1000 +
                    quiz.completedDate.nanoseconds / 1000000
                  ).toLocaleDateString()
                )))).map((uniqueDate, index) => (
                  <IonText key={index}>
                    Completed Date : {uniqueDate}
                  </IonText>
                ))}
                <table className='styled-table'>
                  <thead>
                    <tr>
                      <th>No.</th>
                      <th>Language</th>
                      <th>Difficulty</th>
                      <th>Score</th>
                    </tr>
                  </thead>
                  <tbody>
                    {quizzesData.map((quiz, index) => (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{quiz.language}</td>
                        <td>{quiz.difficulty}</td>
                        <td>{quiz.score}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <IonCardTitle style={{ marginTop: '20px', marginBottom: '20px' }}>Pie Chart (Language):</IonCardTitle>
                <PieChart width={300} height={230}>
                  <Pie
                    dataKey="value"
                    isAnimationActive={false}
                    data={chartDataArray}
                    cx={165}
                    cy={120}
                    outerRadius={80}
                    fill="#8884d8"
                    label
                  >
                    {chartDataArray.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
                <IonTitle>Total Daily Challenges Taken: {quizzesData.length}</IonTitle>
                <IonCardTitle style={{ marginTop: '20px', marginBottom: '20px' }}>Pie Chart (Difficulty):</IonCardTitle>
                <PieChart width={300} height={230}>
                  <Pie
                    dataKey="value"
                    isAnimationActive={false}
                    data={difficultychartDataArray}
                    cx={165}
                    cy={120}
                    outerRadius={80}
                    fill="#8884d8"
                    label
                  >
                    {difficultychartDataArray.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
                <IonTitle>Total Daily Challenges Taken: {quizzesData.length}</IonTitle>
              </IonCardContent>
            </IonCard>
          )}
        </IonContent>
      </IonPage>
    </>
  );
};

export default QuizzesReport;
