import { IonCardContent, IonItem, IonLabel, IonNavLink } from '@ionic/react';
import React from 'react';

interface NotesProps {
    topics: { title: string; duration: string }[];
}

const Notes: React.FC<NotesProps> = ({ topics }) => {

    return (
        <IonCardContent>
            {topics.map((topic, index) => (
                <IonNavLink key={index}>
                    <IonItem lines='none' detail={true}>
                        <IonLabel>
                            <h2><strong>{topic.title}</strong></h2>
                            <small>{topic.duration}</small>
                        </IonLabel>
                    </IonItem>
                </IonNavLink>
            ))}
        </IonCardContent>
    );
};

export default Notes;