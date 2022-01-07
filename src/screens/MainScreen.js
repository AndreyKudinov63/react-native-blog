import { StyleSheet, Text, ScrollView, Button, FlatList } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { Post } from '../components/Post'
import { DATA } from '../data'
import { AppHeaderIcon } from '../components/AppHeaderIcon'

export const MainScreen = ({ navigation }) => {
  const handleOpenPost = post => {
    navigation.navigate('Post', {
      postId: post.id,
      date: post.date,
      bookmarked: post.bookmarked
    })
  }

  return (
    <ScrollView style={styles.wrapper}>
      <FlatList
        data={DATA}
        keyExtractor={post => post.id}
        renderItem={({ item }) => <Post post={item} onOpen={handleOpenPost} />}
      />
    </ScrollView>
  )
}

MainScreen.navigationOptions = {
  headerRight: () => (
    <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
      <Item
        title='Take photo'
        iconName='ios-camera'
        onPress={() => console.log('camera')}
      />
    </HeaderButtons>
  ),
  headerLeft: () => (
    <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
      <Item
        title='Take photo'
        iconName='ios-menu'
        onPress={() => console.log('menu')}
      />
    </HeaderButtons>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    padding: 10
  }
})
