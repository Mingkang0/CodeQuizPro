import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonText, IonMenuButton, IonButton, IonButtons, IonNavLink } from '@ionic/react';
import '../css/Home.css';
import { IonCard, IonCardContent, IonCardTitle } from '@ionic/react';
import { IonIcon } from '@ionic/react';
import { homeOutline } from 'ionicons/icons';
import quiz from '../../assests/task-square.png';
import resources from '../../assests/book.png';
import challenges from '../../assests/edit.png'
import { useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';
import SideMenu from '../../components/SideMenu';


const Home: React.FC = () => {
  const history = useHistory();
  const [shouldRefresh, setShouldRefresh] = useState(false);

  const handleContentClick = (e: any) => {
    if (e === "quiz") {
      history.push('/anonymous/quiz');
    }
    else if (e === "learning") {
      history.push('/anonymous/language');
    }
    else if (e === "challenges") {
      history.push('/anonymous/challenges');
    }
    window.location.reload();
  };
  useEffect(() => {
    if (shouldRefresh) {
      setShouldRefresh(false);
    }
  }, [shouldRefresh]);

  return (
    <>
      <SideMenu />
      <IonPage id="main-content">
        <IonHeader>
          <IonToolbar color='warning' className='ion-text-center'>
            <IonButtons slot="start">
              <IonMenuButton></IonMenuButton>
            </IonButtons>
            <IonTitle className=''><strong>CodeQuiz Pro</strong></IonTitle>
            <IonNavLink slot="end">
              <IonButton fill='clear' color='dark' routerLink='/anonymous/home'>
                <IonIcon icon={homeOutline} size='large'></IonIcon>
              </IonButton>
            </IonNavLink>
          </IonToolbar>
        </IonHeader>

        <IonContent color='main' fullscreen>
          <link href="https://fonts.googleapis.com/css?family=Inria+Sans" rel="stylesheet" />

          {/* Home content */}
          <div className='ion-margin'>
            {/* Quizz */}
            <IonCard className="card-button ion-padding" onClick={() => handleContentClick("quiz")} style={{ backgroundColor: '#ffbfbf' }}>
              <IonCardContent className='card-content'>
                <span>
                  <IonCardTitle><h1><strong>Quizzes</strong></h1></IonCardTitle>
                  <IonText color="dark"><h2>Test your knowledge</h2></IonText>
                </span>
                <img src={quiz} alt="quiz" />
              </IonCardContent>
            </IonCard>
            {/* Daily Challenges */}
            <IonCard className="card-button ion-padding" onClick={() => handleContentClick("challenges")} style={{ backgroundColor: '#C9F4AA' }}>
              <IonCardContent className='card-content'>
                <span>
                  <IonCardTitle><h1><strong>BrainStorming Challenges</strong></h1></IonCardTitle>
                  <IonText color="dark"><h2>Enhance your coding skills</h2></IonText>
                </span>
                <img src={challenges} alt="challenges" />
              </IonCardContent>
            </IonCard>
            {/* Learning Resources */}
            <IonCard className="card-button ion-padding" onClick={() => handleContentClick("learning")} style={{ backgroundColor: '#F6E6C2' }}>
              <IonCardContent className='card-content'>
                <span>
                  <IonCardTitle><h1><strong>Learning Resources</strong></h1></IonCardTitle>
                  <IonText color="dark"><h2>Develop your coding skills</h2></IonText>
                </span>
                <img src={resources} alt="resources" style={{ paddingLeft: "5px" }} />
              </IonCardContent>
            </IonCard>
          </div>
        </IonContent>
      </IonPage>
    </>
  );
};

export default Home;
