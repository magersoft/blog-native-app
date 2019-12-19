import React from 'react';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { DATA } from '../data';
import { AppHeaderIcon } from '../components/AppHeaderIcon';
import { PostList } from '../components/PostList';

export const BookedScreen = ({ navigation }) => {
  const openPostHandler = post => {
    navigation.navigate('Post', { postId: post.id, date: post.date, booked: post.booked })
  };

  const data = DATA.filter(post => post.booked);

  return (
    <PostList data={data} onOpen={openPostHandler} />
  )
};

BookedScreen.navigationOptions = ({ navigation }) => ({
  headerTitle: 'Favorite',
  headerRight: (
    <HeaderButtons HeaderButtonComponent={AppHeaderIcon} title=''>
      <Item title='Take photo' iconName='ios-camera' onPress={() => navigation.push('Create')} />
    </HeaderButtons>
  ),
  headerLeft: (
    <HeaderButtons HeaderButtonComponent={AppHeaderIcon} title=''>
      <Item title='Toggle drawer' iconName='ios-menu' onPress={() => navigation.toggleDrawer()} />
    </HeaderButtons>
  )
});
