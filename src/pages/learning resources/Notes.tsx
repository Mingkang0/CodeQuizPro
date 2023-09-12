import { IonCardContent, IonItem, IonLabel, IonNavLink } from '@ionic/react';
import React from 'react';
import { useHistory } from 'react-router-dom';

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
        history.push(`/learning/${language}/${topicId}`);
        console.log(language, topicId)
    }

    return (
        <IonCardContent>
            {Object.keys(topics).map((topicId) => {
                const topic = topics[topicId];
                return (
                    <IonNavLink key={topicId}>
                        <IonItem onClick={() => handleTopic(topicId)} lines='none' detail={true}>
                            <IonLabel>
                                <h2><strong>{topic.title}</strong></h2>
                                <small>{topic.duration}</small>
                            </IonLabel>
                        </IonItem>
                    </IonNavLink>
                );
            })}
        </IonCardContent>
    );
};

export default Notes;
