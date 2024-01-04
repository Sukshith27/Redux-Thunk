import React, {useEffect} from 'react';
import {Text, View, StyleSheet, FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {fetchUsers} from '../utils/usersSlice';

const Users = () => {
  const dispatch = useDispatch();
  const {usersData, loading, error} = useSelector(store => store.users);
  console.log('usersData--', usersData);
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  const renderItem = ({item}) => {
    return (
      <View>
        <Text>{item.firstName}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Users</Text>
      <FlatList
        data={usersData}
        renderItem={renderItem}
        keyExtractor={(_, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 12,
  },
  text: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    padding: 12,
    backgroundColor: 'black',
  },
});

export default Users;
