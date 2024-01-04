import React, {useEffect} from 'react';
import {View, Text, StyleSheet, FlatList, Image} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {fetchProducts} from '../utils/productSlice';

const Products = () => {
  const {productData, loading, error} = useSelector(store => store.product);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const renderItem = ({item}) => {
    return (
      <View style={{flexDirection: 'row', alignItems: "center", paddingVertical: 6,  borderBottomWidth: 1, borderBottomColor: '#ccc'}}>
        <View style={{flex: 1}}>
          <Image
            style={{width: 100, height: 100}}
            source={{uri: item.images[0]}}
          />
        </View>
        <View style={{flex: 1.5}}>
          <Text>Brand: {item.brand}</Text>
          <Text>category: {item.category}</Text>
          <Text>discountPercentage: {item.discountPercentage} %</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Products</Text>
      {loading ? (
        <Text>Loading...!</Text>
      ) : (
        <FlatList
          data={productData}
          renderItem={renderItem}
          keyExtractor={(_, index) => index.toString()}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  text: {
    color: 'white',
    backgroundColor: 'black',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    padding: 12,
    marginBottom: 20,
  },
});

export default Products;
