import AsyncStorage from '@react-native-async-storage/async-storage';
import {Platform} from 'react-native';
import {Notifier, NotifierComponents} from 'react-native-notifier';

export const storeStorageData = async (storageKey: string, data: any) => {
  try {
    return await AsyncStorage.setItem(storageKey, JSON.stringify(data));
  } catch (e) {
    throw e;
  }
};
export const getStorageData = async (storageKey: string) => {
  try {
    const value = await AsyncStorage.getItem(storageKey);
    return value ? JSON.parse(value) : null;
  } catch (e) {
    throw e;
  }
};
export const NotifierCall = (
  title: string,
  description: string,
  type: 'error' | 'success' | 'info' | 'warn',
) => {
  Notifier.showNotification({
    title: title,
    description: description,
    Component:
      Platform.OS === 'android'
        ? NotifierComponents.Notification
        : NotifierComponents.Alert,
    componentProps:
      Platform.OS === 'android'
        ? {
            titleStyle: {
              color:
                type === 'error'
                  ? 'red'
                  : type === 'info'
                  ? 'blue'
                  : type === 'success'
                  ? 'green'
                  : '#B58024',
            },
          }
        : {
            alertType: type,
          },
  });
};