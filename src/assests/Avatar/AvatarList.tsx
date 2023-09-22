import React from 'react';
import {
    IonModal,
    IonHeader,
    IonToolbar,
    IonGrid,
    IonRow,
    IonCol,
    IonButton,
    IonIcon,
    IonTitle,
    IonButtons,
} from '@ionic/react';
import { closeOutline } from 'ionicons/icons';

import avatar1 from './Avatar_1.png';
import avatar2 from './Avatar_2.png';

const avatarList = [
    {
        id: 1,
        avatar: avatar1
    },
    {
        id: 2,
        avatar: avatar2
    }
]

interface AvatarSelectionModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSelectAvatar: (avatar: string) => void;
}

const AvatarSelectionModal: React.FC<AvatarSelectionModalProps> = ({
    isOpen,
    onClose,
    onSelectAvatar,
}) => {
    return (
        <IonModal isOpen={isOpen}>
            <IonHeader>
                <IonToolbar color='warning'>
                    <IonButtons slot='start'>
                        <IonButton
                            onClick={onClose}
                            color="danger"
                            expand="full"
                            fill="clear"
                            className="ion-float-end"
                        >
                            <IonIcon icon={closeOutline} slot="icon-only" />
                        </IonButton>
                    </IonButtons>
                    <IonTitle>Select an Avatar</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonGrid>
                <IonRow>
                    {avatarList.map((avatarItem) => (
                        <IonCol key={avatarItem.id}>
                            <img
                                src={avatarItem.avatar}
                                style={{ width: '100px', height: '100px' }}
                                alt={`Avatar ${avatarItem.id}`}
                                onClick={() => {
                                    onSelectAvatar(avatarItem.avatar);
                                    onClose();
                                }}
                            />
                        </IonCol>
                    ))}
                </IonRow>
            </IonGrid>

        </IonModal>
    );
};

export default AvatarSelectionModal;