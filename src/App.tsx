import { Redirect, Route} from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { homeOutline, person, statsChart } from 'ionicons/icons';

// Import pages here
import Home from './pages/Home';
import ChallengeReport from './pages/report/Challenge';
import Profile from './pages/Profile/Profile';
import EditProfile from './pages/Profile/EditProfile';
import TabBar from './components/tabbar'
import Quiz from './pages/quiz/Quiz';
import Challenges from './pages/challenges/Challenges';
import Learning from './pages/learning resources/Learning';
import Login from './pages/login';
import Ques from './pages/challenges/Que';
import Register from './pages/register';
import Question from './pages/quiz/Question';
import Language from './pages/learning resources/Language';
import Topic from './pages/learning resources/Topic';
import Report from './pages/report/report';
import QuizzesReport from './pages/report/quiz';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import './theme/tabbar.css';

/* Firebase */
import { auth } from './firebase.config'
import { useEffect, useState } from 'react';


setupIonicReact();

const App: React.FC = () => {
  const [userAuthenticated, setUserAuthenticated] = useState(false);
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUserAuthenticated(true);
      } else {
        setUserAuthenticated(false);
      }
    });
  
    return () => unsubscribe();
  }, []);
  return (
    <IonApp>
      <IonReactRouter>
          <IonRouterOutlet>
 

          </IonRouterOutlet>
          {userAuthenticated ? (
          <IonTabs>
            <IonRouterOutlet>
            <Route exact path="/profile" component={Profile} />
            <Route path="/editProfile" component={EditProfile} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/report" component={Report} />
            <Route path="/report/challenges" component={ChallengeReport} />
            <Route path="/report/quizzes" component={QuizzesReport} />
            <Route path="/quiz" component={Quiz} />
            <Route path="/challenges" component={Challenges} />
            <Route path="/learning/:language" component={Learning} />
            <Route path="/learning/:language/:topicId" component={Topic} />
            <Route path="/language" component={Language} />
            <Route path="/question/:language/:difficulty" component={Question} />
            <Route path="/challenges/:language" component={Ques} />
            
            <Redirect exact from="/" to="/home" />
            </IonRouterOutlet>

            <IonTabBar slot="bottom" className="tabbar-bottom">
              <IonTabButton tab="tab1" href="/profile">
                <IonIcon aria-hidden="true" icon={person} />
                <IonLabel>Profile</IonLabel>
              </IonTabButton>
              <IonTabButton tab="Home" href="/home">
                <IonIcon aria-hidden="true" icon={homeOutline} />
                <IonLabel>Home</IonLabel>
              </IonTabButton>
              <IonTabButton tab="report" href="/report">
                <IonIcon aria-hidden="true" icon={statsChart} />
                <IonLabel>Report</IonLabel>
              </IonTabButton>
            </IonTabBar>
          </IonTabs>
        ) : (
          <IonRouterOutlet>
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Redirect exact from="/" to="/login" />
         </IonRouterOutlet>
        )}
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
