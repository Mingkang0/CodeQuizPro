import { IonContent, IonHeader, IonSelectOption, IonButton, IonTitle, IonPage, IonText, IonToolbar, IonIcon, IonCardTitle, IonGrid, IonCard, IonCardContent, IonCardHeader, IonRow, IonCol, IonItem, IonInput, IonButtons, IonMenuButton, IonSelect, IonCardSubtitle } from '@ionic/react';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { collection, getDocs, doc, query, where, Timestamp } from 'firebase/firestore';
import { cloudDB, auth } from '../../firebase.config'; // Adjust the import path as needed
import '../css/report.css';
import SideMenu from '../../components/SideMenu';

interface ChallengeData {
  language: string;
  score: number;
  completedDate: {
    seconds: number;
    nanoseconds: number;
  };
}

const ChallengeReport: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [challengesData, setChallengesData] = useState<ChallengeData[]>([]);


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
          const challengesRef = collection(firestore, 'Challenges');
          const challengesQuery = query(challengesRef, where('userId', '==', userId));
          const challengesSnapshot = await getDocs(challengesQuery);
          console.log('Fetched challengesSnapshot:', challengesSnapshot);
          const data: ChallengeData[] = [];

          for (const docSnap of challengesSnapshot.docs) {
            const challengeData = docSnap.data() as ChallengeData;
            console.log('challengesData:', challengesData);
            data.push(challengeData);
          }

          setChallengesData(data);
        } catch (error) {
          console.error('Error fetching data from Firestore:', error);
        }
      } else {
        console.log('User is not authenticated');
      }
    };

    fetchData();
  }, [challengesData]);

  return (
    <>
      <SideMenu />
      <IonPage id='main-content'>
        <IonHeader>
          <IonToolbar color="warning">
            <IonButtons slot="start">
              <IonMenuButton></IonMenuButton>
            </IonButtons>
            <IonTitle><b>Report about Challenges</b></IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent color='main'>
          <IonCard>
            <IonCardContent>
              <IonCardTitle style={{ marginBottom: '20px' }}>Select date:</IonCardTitle>
              <IonSelect label="Select a date" label-placement="floating" fill="outline" onIonChange={handleDateSelect}>
                {Array.from(new Set(challengesData.map((challenges) => (
                  new Date(
                    challenges.completedDate.seconds * 1000 +
                    challenges.completedDate.nanoseconds / 1000000
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
                <table className='styled-table'>
                  <thead>
                    <tr>
                      <th>No.</th>
                      <th>Language</th>
                      <th>Score</th>
                      <th>Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {challengesData.map((challenges, index) => (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{challenges.language}</td>
                        <td>{challenges.score}</td>
                        <td>
                          {new Date(
                            challenges.completedDate.seconds * 1000 +
                            challenges.completedDate.nanoseconds / 1000000
                          ).toLocaleDateString()}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </IonCardContent>
              <IonCardContent>
                <IonCardTitle style={{ marginBottom: '20px' }}>Doughnut Chart:</IonCardTitle>
                
              </IonCardContent>
            </IonCard>
          )}
        </IonContent>
      </IonPage>
    </>
  );
};

export default ChallengeReport;
