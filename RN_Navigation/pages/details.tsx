import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {StackParams} from '../App';

type IProps = NativeStackScreenProps<StackParams, 'Details'>;
function Details({}: IProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Details Page</Text>
      <Text style={styles.content}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere totam
        sunt itaque aspernatur. Ipsa ipsum ex sed hic officia laboriosam et,
        officiis distinctio! Ducimus quidem eum quasi veritatis deleniti atque
        rem sequi, dolores nulla inventore ipsa reprehenderit sint ea autem quod
        eaque itaque rerum omnis iure odio incidunt est adipisci. Magni impedit
        fuga neque, esse, voluptas alias pariatur dolorem id perferendis ipsam
        deleniti corporis animi ipsum, veritatis illum sequi iusto facilis nihil
        odio numquam aliquid. Dolorum veniam dicta quidem non deserunt quis sit,
        laudantium beatae fugiat illum asperiores cupiditate tenetur mollitia?
        Minus, officia? Aliquam, in ab voluptate eveniet minima, cum sint
        tenetur ea laudantium deserunt voluptatibus veritatis necessitatibus
        magni accusamus sed?
      </Text>
      <Text style={styles.content}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere totam
        sunt itaque aspernatur. Ipsa ipsum ex sed hic officia laboriosam et,
        officiis distinctio! Ducimus quidem eum quasi veritatis deleniti atque
        rem sequi, dolores nulla inventore ipsa reprehenderit sint ea autem quod
        eaque itaque rerum omnis iure odio incidunt est adipisci. Magni impedit
        fuga neque, esse, voluptas alias pariatur dolorem id perferendis ipsam
        deleniti corporis animi ipsum, veritatis illum sequi iusto facilis nihil
        odio numquam aliquid. Dolorum veniam dicta quidem non deserunt quis sit,
        laudantium beatae fugiat illum asperiores cupiditate tenetur mollitia?
        Minus, officia? Aliquam, in ab voluptate eveniet minima, cum sint
        tenetur ea laudantium deserunt voluptatibus veritatis necessitatibus
        magni accusamus sed?
      </Text>
    </View>
  );
}

export default Details;
const styles = StyleSheet.create({
  container: {padding: 16, gap: 8, backgroundColor: '#fff', flex: 1},
  title: {color: '#444', fontSize: 20, fontFamily: 'serif', fontWeight: '700'},
  content: {fontSize: 16, color: '#555', fontFamily: 'serif'},
});
