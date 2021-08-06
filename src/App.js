import {
  IonApp,
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonItem,
  IonLabel,
  IonDatetime,
} from '@ionic/react';
import BiorhythmCard from './components/BiorhythmCard';
import React, { useState } from 'react';
import { useLocalStorage } from './hooks'

function App() {

  const [birthdate, setBirthdate] = useLocalStorage('birthdate', '')
  const [targetDate, setTargetDate] = useState(new Date().toISOString())
  
  return (
    <IonApp>
      <IonHeader>
        <IonToolbar>
          <IonTitle>BioRhythm</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        {birthdate && targetDate &&
          <BiorhythmCard birthdate={birthdate} targetDate={targetDate}/>
        }
        <IonItem>
          <IonLabel position='floating'>Date of Birth: </IonLabel>
          <IonDatetime displayFormat='DD-MMM-YYYY'
          value={birthdate}
          onIonChange={(event) => setBirthdate(event.detail.value)}
          />
        </IonItem>
        <IonItem>
          <IonLabel position='floating'>Target Date: </IonLabel>
          <IonDatetime displayFormat='DD-MMM-YYYY'
          value={targetDate}
          onIonChange={(event) => setTargetDate(event.detail.value)}
          />
        </IonItem>
      </IonContent>
    </IonApp>
  );
}

export default App;
