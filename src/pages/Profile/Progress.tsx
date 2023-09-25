import { IonCard, IonCardContent, IonItem, IonLabel, IonLoading } from '@ionic/react';
import React from 'react';

interface ProgressProps {
    languageProgress: any;
}

const Progress: React.FC<ProgressProps> = ({ languageProgress }) => {
    const progressStatus = ["COMPLETED", "IN PROGRESS", "NOT STARTED"];
    const [loading, setLoading] = React.useState(true);

    const calCompletePercentage = (language: any) => {
        return language / 10 * 100;
    };

    const getCompleteStatus = (percentage: number) => {
        if (percentage === 100) {
            return progressStatus[0]; // "COMPLETED"
        } else if (percentage > 0) {
            return progressStatus[1]; // "IN PROGRESS"
        } else {
            return progressStatus[2]; // "NOT STARTED"
        }
    };

    return (
        <IonCard style={{ borderRadius: "10px" }}>
            <IonCardContent>
                {languageProgress?.length > 0 ? (
                    languageProgress.map((language: any) => (
                        <IonItem key={language.language} detail={true} routerLink={`/learning/${language.language}`}>
                            <IonLabel>
                                <h3><strong>{language.language}</strong></h3>
                                <p>{getCompleteStatus(calCompletePercentage(language.complete))} &nbsp; - &nbsp; {calCompletePercentage(language.complete)}%</p>

                            </IonLabel>
                        </IonItem>
                    ))
                ) : (
                    <>
                        <IonLoading isOpen={loading} message="Loading..." duration={2000} spinner="circles" />
                        <p>Loading...</p>
                    </>
                )}
            </IonCardContent>
        </IonCard>
    );
};

export default Progress;
