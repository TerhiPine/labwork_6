import { IonButton, IonCard, IonCardContent, IonContent, IonFooter, IonHeader, IonIcon, IonInput, IonPage, IonTitle, IonToolbar, useIonRouter } from '@ionic/react';
import React, { useState } from 'react';
import { logInOutline, personCircleOutline } from 'ionicons/icons';
import pizza from '../assets/pizza.jpg'
import Intro from '../components/Intro';

const Login: React.FC = () => {
    const router = useIonRouter();
    const [introSeen, setIntroSeen] = useState(false);

    const doLogin = (event: any) => {
        event.preventDefault();
        console.log('doLogin');
       //  router.push('/home', 'root');
    };

    const finishInstro = async() => {
        console.log('FIN');
        setIntroSeen(true);
    }

    return (
        <>
        {!introSeen ? (
            <Intro onFinish={finishInstro} />
        ) : (
        <IonPage>
            <IonHeader>
                <IonToolbar color={'success'}>
                    <IonTitle>PixelPioneers</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent scrollY={false}>
                <div className="ion-text-center ion-padding">
                <img src={pizza} alt='logo' width={'100%'} />
                </div>
               <IonCard>
                <IonCardContent>
                    <form onSubmit={doLogin}>
                        <IonInput labelPlacement="floating" label="Email" type='email' placeholder="your email address"></IonInput>
                        <IonInput className="ion-margin-top" labelPlacement="floating" label="Password" type='password' placeholder="your password"></IonInput>
                        <IonButton type="submit" expand="block" className="ion-margin-top">
                            Login
                            <IonIcon icon={logInOutline} slot="end"></IonIcon>
                            </IonButton>
                        <IonButton routerLink="/register" color={'secondary'} type="button" expand="block" className="ion-margin-top">
                            Create a account
                            <IonIcon icon={personCircleOutline} slot="end"></IonIcon>
                            </IonButton>
                    </form>
                </IonCardContent>
               </IonCard>
            </IonContent>
            <IonFooter>
                <IonToolbar>Tooooool</IonToolbar>
            </IonFooter>
        </IonPage>
        ) }
        </>
    );
};

export default Login;