import firestore from '@react-native-firebase/firestore';
import React, {useEffect, useState} from 'react';
import {FlatList, SafeAreaView, Text, View} from 'react-native';

const App = () => {
  const [posts, setPosts] = useState<any[]>([]);

  useEffect(() => {
    firestore()
      .collection('posts')
      .onSnapshot(snap => {
        if (!snap.empty) {
          const items: any = [];

          snap.forEach(item =>
            items.push({
              id: item.id,
              ...item.data(),
            }),
          );

          setPosts(items);
        } else {
          console.log('Data not found');
        }
      });
  }, []);

  return (
    <SafeAreaView style={{flex: 1}}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={posts}
          renderItem={({item}) => (
            <View style={{paddingVertical: 12, paddingHorizontal: 16}}>
              <Text>{item.title}</Text>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default App;
