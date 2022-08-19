import React from "react";

import { View, Text, ScrollView, StyleSheet } from "react-native";

const ContentShow = ({postData}) => {


  return (
    <View>
      <View style={{ padding: 10 }}>
        <Text style={styles.articleTitle}>
         {postData.title}
        </Text>
        <Text style={styles.articleContent}>{postData.content.replace(/<p>/g, "").replace(/<\/p>/g,"\n\n")}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  articleTitle: {
    fontSize: 30,
    marginBottom: 30,
    fontWeight: "300",
    color: "#444444",
  },
  articleContent: {
    fontSize: 18,
    color: "#444444",
  },
});

export default ContentShow;
