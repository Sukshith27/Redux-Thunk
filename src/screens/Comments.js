import React, {useEffect} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {fetchComments} from '../utils/commentsSlice';

const Comments = () => {
  const {comments, loading, error} = useSelector(store => store.comments);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchComments());
  }, []);

  const renderItem = ({item}) => {
    return (
      <View>
        <Text>{item.body}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text>Comments</Text>
      {loading ? (
        <Text>Loading...!</Text>
      ) : (
        <FlatList data={comments} renderItem={renderItem} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 12,
  },
});

export default Comments;
