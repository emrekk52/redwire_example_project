import React from "react";
import { View, Text, ScrollView, StyleSheet, ActivityIndicator } from "react-native";
import { Image } from "react-native-elements";
import ContentShow from "../../../../utils/contentShow";

const ArticleScreen = ({route}) => {

  const {postData}=route.params;

  return (
    <ScrollView>
      <View>
        <Image 
        style={{width:'100%',height:300}} 
        source={{uri:postData.images}} 
        PlaceholderContent={<ActivityIndicator />}
        />
        <ContentShow postData={postData} />
      </View>
    </ScrollView>
  );
};


const styles=StyleSheet.create({


});

export default ArticleScreen;
