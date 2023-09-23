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

import avatar1 from '../../assests/Avatar/Avatar_1.png';
import avatar2 from '../../assests/Avatar/Avatar_2.png';
import avatar3 from '../../assests/Avatar/Avatar_3.png';
import avatar4 from '../../assests/Avatar/Avatar_4.png';
import avatar5 from '../../assests/Avatar/Avatar_5.png';
import avatar6 from '../../assests/Avatar/Avatar_6.png';

const avatarList = [
    {
        id: 1,
        avatar: avatar1
    },
    {
        id: 2,
        avatar: avatar2
    },
    {
        id: 3,
        avatar: avatar3
    },
    {
        id: 4,
        avatar: avatar4
    },
    {
        id: 5,
        avatar: avatar5
    },
    {
        id: 6,
        avatar: avatar6
    },
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
    const avatarsPerRow = 3;

    return (
        <IonModal 
            isOpen={isOpen}
        >
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
                {Array.from({ length: Math.ceil(avatarList.length / avatarsPerRow) }).map((_, rowIndex) => (
                    <IonRow key={rowIndex}>
                        {avatarList.slice(rowIndex * avatarsPerRow, (rowIndex + 1) * avatarsPerRow).map((avatarItem) => (
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
                ))}
            </IonGrid>
        </IonModal>
    );
};

export default AvatarSelectionModal;
