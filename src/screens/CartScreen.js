import React, { useEffect } from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import { addItem, fetchItems } from '../utils/cartSlice';

const CartScreen = () => {
  const {items, loading, error} = useSelector(store => store.cart);
  const dispatch = useDispatch()

  console.log('items', items?.todos)

  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);

  const handleAddItem = () => {
    dispatch(addItem("pizza"))
  }

  const renderItem = ({ item }) => (
    <View style={{ padding: 10, borderBottomWidth: 1, borderBottomColor: '#black' }}>
      <Text>{item.todo}</Text> 
    </View>
  );

  return (
    <View style={{padding: 12}}>
      <View>
        <Text>Cart screen</Text>
        <Text>{items?.todos.length}</Text>
        <TouchableOpacity
          onPress={handleAddItem}
          style={{backgroundColor: 'blue', alignSelf: 'center', padding: 20}}>
          <Text style={{color: 'white'}}>Button</Text>
        </TouchableOpacity>
      <FlatList
        data={items.todos}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        />
        </View>
    </View>
  );
};

export default CartScreen;
