import { Redirect, Route, Switch } from 'react-router-dom';
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
import { homeOutline, square, person } from 'ionicons/icons';

// Import pages here
import Home from './pages/Home';
import Tab3 from './pages/Tab3';
import Profile from './pages/Profile';
import EditProfile from './pages/EditProfile';
import TabBar from './components/tabbar'
import Quiz from './pages/Quiz';
import Challenges from './pages/Challenges';
import Learning from './pages/learning resources/Learning';
import Login from './pages/Login';
import Register from './pages/register';
import Question from './pages/Question';
import Language from './pages/learning resources/Language';
import Topic from './pages/learning resources/Topic';

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

setupIonicReact();

const App: React.FC = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/editProfile" component={EditProfile} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/tab3" component={Tab3} />
            <Route path="/quiz" component={Quiz} />
            <Route path="/challenges" component={Challenges} />
            <Route path="/learning/:language" component={Learning} />
            <Route path="/learning/:language/:topicId" component={Topic} />
            <Route path="/language" component={Language} />
            <Route path="/question/:language/:difficulty" component={Question}/>
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Redirect exact from="/" to="/home" />
          </IonRouterOutlet>
          <IonTabBar slot="bottom" className='tabbar-bottom'>
            <IonTabButton tab="tab1" href="/profile">
              <IonIcon aria-hidden="true" icon={person} />
              <IonLabel>Profile</IonLabel>
            </IonTabButton>
            <IonTabButton tab="Home" href="/home">
              <IonIcon aria-hidden="true" icon={homeOutline} />
              <IonLabel>Home</IonLabel>
            </IonTabButton>
            <IonTabButton tab="tab3" href="/tab3">
              <IonIcon aria-hidden="true" icon={square} />
              <IonLabel>Tab 3</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
