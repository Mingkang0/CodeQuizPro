import { IonContent, IonHeader, IonButton, IonTitle, IonPage, IonText, IonToolbar, IonIcon, IonCardTitle, IonGrid, IonCard, IonCardContent, IonCardHeader, IonRow, IonCol, IonItem, IonInput, IonButtons, IonMenuButton, IonCardSubtitle } from '@ionic/react';
import React, { useEffect, useState } from 'react';
import programminglanguage from '../../assests/languageInfo';
import { HiDocumentReport } from 'react-icons/hi'
import {BiSolidReport} from 'react-icons/bi'
import { useHistory } from 'react-router';

import SideMenu from '../../components/SideMenu';

const Report: React.FC = () => {
  const [shouldRefresh, setShouldRefresh] = useState(false);

  const history = useHistory();

  const handleContentClick = (e: any) => {
    if (e === "challengereport") {
      history.push('/report/challenges');
    }
    else if (e === "quizreport") {
      history.push('/report/quizzes');
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
      <IonPage id='main-content'>
        <IonHeader>
          <IonToolbar color="warning">
            <IonButtons slot="start">
              <IonMenuButton></IonMenuButton>
            </IonButtons>
            <IonTitle><b>Report</b></IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent color="main">
          <IonGrid>
            <div className='language'>
              <div className='header-text ion-margin-top'>
                <IonTitle><b>Select one of the button provided:</b></IonTitle>

              </div>

              <IonCard className="card-button ion-padding" onClick={() => handleContentClick("challengereport")} style={{ backgroundColor: '#ededab' }}>
                <IonCardContent className='card-content'>
                  <IonRow>
                    <IonCol size="9"> {/* Adjust the size to control the width of the content */}
                      <span>
                        <IonCardTitle><h1><strong>Challenges Report</strong></h1></IonCardTitle>
                        <IonText color="dark"><h2>View your challenges report</h2></IonText>
                      </span>
                    </IonCol>
                    <IonCol size="3" className="ion-text-end"> {/* This column will hold the icon */}
                      <HiDocumentReport  style={{ color: '#63635f' }} size={80} />
                    </IonCol>
                  </IonRow>

                </IonCardContent>
              </IonCard>
              <IonCard className="card-button ion-padding" onClick={() => handleContentClick("quizreport")}style={{ backgroundColor: '#f5d1a2' }}>
              <IonCardContent className='card-content'>
                  <IonRow>
                    <IonCol size="9"> {/* Adjust the size to control the width of the content */}
                      <span>
                        <IonCardTitle><h1><strong>Quizzes Report</strong></h1></IonCardTitle>
                        <IonText color="dark"><h2>View your quizzes report</h2></IonText>
                      </span>
                    </IonCol>
                    <IonCol size="3" className="ion-text-end"> {/* This column will hold the icon */}
                      <BiSolidReport style={{ color: '#615e5a', marginLeft:'10px' }} size={80} />
                    </IonCol>
                  </IonRow>

                </IonCardContent>
              </IonCard>

            </div>
          </IonGrid>
        </IonContent>
      </IonPage>
    </>
  )
}

export default Report;