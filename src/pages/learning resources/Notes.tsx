import { IonCardContent, IonItem, IonLabel, IonList, IonNavLink } from '@ionic/react';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { auth } from '../../firebase.config';

interface NotesProps {
    topics: {
        [topicId: string]: {
            title: string;
            duration: string;
            content: string;
        };
    };
    language: string;
}

const Notes: React.FC<NotesProps> = ({ topics, language }) => {
    const history = useHistory();
    const handleTopic = (topicId: string) => {
        if(auth.currentUser){
            history.push(`/learning/${language}/${topicId}`);
        }else{
            history.push(`/anonymous/learning/${language}/${topicId}`);
        }
        window.location.reload();
    }

    return (
        <IonList>
            {Object.keys(topics).map((topicId) => {
                const topic = topics[topicId];
                return (
                    <IonNavLink key={topicId} >
                        <IonItem onClick={() => { handleTopic(topicId) }} routerLink={`/learning/${language}/${topicId}`} lines='none' detail={true}>
                            <IonLabel>
                                <h2><strong>{topic.title}</strong></h2>
                                <small>{topic.duration}</small>
                            </IonLabel>
                        </IonItem>
                    </IonNavLink>
                );
            })}
        </IonList>
    );
};

export default Notes;
