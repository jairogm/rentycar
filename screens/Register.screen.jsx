import React from 'react'
import { View } from 'react-native'
import RegisterComponent from '../components/RegisterComponent'
import { styles } from '../styles/styles'

const RegisterScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
          <RegisterComponent navigation={navigation}/>
    </View>
  )
}

export default RegisterScreen