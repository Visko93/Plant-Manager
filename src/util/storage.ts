import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Notifications from 'expo-notifications'
import { format } from "date-fns";

export interface PlantProps {
  id: number;
  name: string;
  about: string;
  water_tips: string;
  photo: string;
  environments: [string];
  frequency: {
    times: number;
    repeat_every: string;
  },
  hour: string;
  dateTimeNotification: Date;
}
export interface StoragePlantProps {
  [id: string]: {
    data: PlantProps,
    notificationId: string
  }
}

export async function savePlant(plant: PlantProps): Promise<void> {
  try {
    const nextTime = new Date(plant.dateTimeNotification)
    const now = new Date()

    const { times, repeat_every } = plant.frequency
    if(repeat_every === 'week') {
      const interval = Math.trunc(7/ times)
      nextTime.setDate(now.getDate() + interval)
    } 
    // else {
    //   nextTime.setDate(nextTime.getDate() + 1)
    // }

    const secondsLeft = Math.abs(
      Math.ceil(now.getTime() - nextTime.getTime()) / 1000
    )

    const notificationId = await Notifications.scheduleNotificationAsync({
      content: {
        title: 'ALOUUU Estou com sede, me ajuda.',
        body: `Está na hora de regar sua ${plant.name}`,
        sound: true,
        priority: Notifications.AndroidNotificationPriority.HIGH,
        data: {
          plant
        }
      },
      trigger: {
          seconds: secondsLeft < 60 ? 60: secondsLeft,
          repeats: true
      }
    })

    const data = await AsyncStorage.getItem("@plantmanager:plants")
    const prevPlants = data ? (JSON.parse(data) as StoragePlantProps): {}

    const newPlant = {
      [plant.id]: {
        data: plant,
        notificationId
      }
    }

    await AsyncStorage.setItem("@plantmanager:plants", 
    JSON.stringify({...newPlant, ...prevPlants}))
    
  } catch (err) {
    throw new Error(err)
  }
}

export async function loadPlants(): Promise<PlantProps[]> {
  try {
    const data = await AsyncStorage.getItem("@plantmanager:plants")
    const plants = data ? (JSON.parse(data) as StoragePlantProps): {}

    const plantSorted = Object
        .keys(plants)
        .map(plant => {
          return {
            ...plants[plant].data,
            hour: format(new Date(plants[plant].data.dateTimeNotification), 'HH:mm')
          }
        })
        .sort((a,b)=>
          Math.floor(
            new Date(a.dateTimeNotification).getTime() / 1000 - 
          Math.floor(new Date(b.dateTimeNotification).getTime() / 1000)
          )
        )
    return plantSorted
    

  } catch (err) {
    throw new Error(err)
  }
}

export async function removePlant(id: string): Promise<void> {
    const data = await AsyncStorage.getItem("@plantmanager:plants");
    const plants = data ? (JSON.parse(data) as StoragePlantProps) : {};

    await Notifications.cancelScheduledNotificationAsync(plants[id].notificationId)

    delete plants[id];

    await AsyncStorage.setItem(
      "@plantmanager:plants",
      JSON.stringify(plants)
    );
}