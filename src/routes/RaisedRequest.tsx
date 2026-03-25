import { View, Text } from 'react-native'
import React ,{useState} from 'react'
import CalendarComponent from '../components/CalendarField'

const RaisedRequest = () => {
  const [date,setDate] = useState<Date | null>(null);
  return (
    <View>
      <Text>RaisedRequest</Text>
      <CalendarComponent value={date} onChange={setDate} />
    </View>
  )
}

export default RaisedRequest;