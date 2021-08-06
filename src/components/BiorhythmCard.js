import React from 'react'
import {
  IonCard,
  IonCardHeader,
  IonCardContent,
  IonCardTitle
} from '@ionic/react'
import dayjs from 'dayjs'
import { calculateBios } from '../calculations'
import BiorhythmChart from './BiorhythmChart'
import './BiorhythmCard.css'

function formatDate(isoString){
  return dayjs(isoString).format('D MMM YYYY')
}  

export default function BiorhythmCard({birthdate, targetDate}) {
  const {physical, emotional, intellectual} = calculateBios(birthdate, targetDate)
  return (
    <IonCard className='biorhythm-card ion-text-center'>
        <IonCardHeader>
          <IonCardTitle>
            {formatDate(targetDate)}
          </IonCardTitle>
        </IonCardHeader>
        <IonCardContent>
            <BiorhythmChart birthdate={birthdate} targetDate={targetDate} />
            <p className='physical'>Physical: {physical.toFixed(4)}</p>
            <p className='emotional'>Emotional: {emotional.toFixed(4)}</p>
            <p className='intellectual'>Intellectual: {intellectual.toFixed(4)}</p>
        </IonCardContent>
       </IonCard>
  )
}
