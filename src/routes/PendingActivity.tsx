/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { Text, Button, TextInput, Card } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface Activity {
  id: string;
  name: string;
}

const PendingActivity = () => {
  const [search, setSearch] = useState('');
  const [activities, setActivities] = useState<Activity[]>([]);
  const [counter, setCounter] = useState(1);

  const addActivity = () => {
    const newItem: Activity = {
      id: counter.toString(),
      name: `Activity ${counter}`,
    };
    setActivities([...activities, newItem]);
    setCounter(counter + 1);
  };

  return (
    <View style={styles.container}>
  
      <TextInput
        label="Search Product Name"
        value={search}
        onChangeText={setSearch}
        mode="outlined"
        style={styles.search}
      />

      {activities.length === 0 ? (
        <View style={styles.center}>
          <Ionicons name="document-text-outline" size={50} color="#d71616" />
          <Text style={{color:'#010101',fontSize:18,fontWeight:'bold'}}>No Data Available</Text>
          <Text style={{color:'#353434',fontSize:14,textAlign:'center'}}>There is no data to show you right now</Text>
        </View>
      ) : (
        <FlatList
          data={activities.filter(a =>
            a.name.toLowerCase().includes(search.toLowerCase())
          )}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <Card style={styles.card}>
              <Card.Title title={item.name} />
            </Card>
          )}
        />
      )}

      <Button
        mode="contained"
        style={styles.addButton}
        onPress={addActivity}
      >
        +
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  date: { fontSize: 16, marginBottom: 8 },
  search: { marginBottom: 16,marginTop:16,borderRadius:10 },

  center: { 
    fontSize: 20,
    fontWeight: 'bold',
    flex: 1,
     justifyContent: 'center', 
    alignItems: 'center',
    marginTop:5,
    color:'#f60000'
   },

  addButton: {
    backgroundColor: '#e40d0d',
    width: 56,
    height: 56,
    position: 'absolute',
    right: 20,
    bottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 28,
  },
  card: { marginVertical: 8 },
});

export default PendingActivity;
