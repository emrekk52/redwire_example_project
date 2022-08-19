import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import { Card } from "react-native-elements";
import { useDispatch, useSelector } from "react-redux";
import { getArticles, getMoreArticles } from "../../../store/actions";
import { Colors } from "../../../utils/tools";

const articles = [
  {
    id:1,
    title:'deneme',
    excerpt:'alt başlık',
  },
  {
    id:2,
    title:'deneme',
    excerpt:'alt başlık',
  },
  {
    id:3,
    title:'deneme',
    excerpt:'alt başlık',
  },
  {
    id:4,
    title:'deneme',
    excerpt:'alt başlık',
  },
  {
    id:5,
    title:'deneme',
    excerpt:'alt başlık',
  },
];

const HomeScreen = ({ navigation }) => {
  const [loadingMore, setLoadingMore] = useState(false);

  /*   const articles = useSelector((state) => state.articles); */
 /*  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getArticles());
  }, [dispatch]);
 */
 

  const renderCard = () =>
    articles.map((item) => (
      <TouchableOpacity
        key={item.id}
        onPress={() =>
          navigation.navigate("Article_screen", {
            id: item.id,
            postData: item,
          })
        }
      >
        <Card>
          <Card.Title style={styles.cardTitle}>
            <Text>{item.title}</Text>
          </Card.Title>
          <Card.Divider />
          <Text style={styles.cardText}>{item.excerpt}</Text>
        </Card>
      </TouchableOpacity>
    ));

  const isCloseToBottom = ({
    layoutMeasurement,
    contentOffset,
    contentSize,
  }) => {
    const paddingToBottom = 50;
    return (
      layoutMeasurement.height + contentOffset.y >=
      contentSize.height - paddingToBottom
    );
  };

  return (
    <ScrollView
      style={{ flex: 1 }}
      onScroll={({ nativeEvent }) => {
        if (isCloseToBottom(nativeEvent)) {
          if (!loadingMore) {
            setLoadingMore(true);
            dispatch(getMoreArticles(articles)).then(() =>
              setLoadingMore(false),
            );
          }
        }
      }}
      scrollEventThrottle={500}
    >
      {articles.posts ? renderCard() : null}
      {loadingMore ? (
        <View style={{ padding: 20 }}>
          <ActivityIndicator color={Colors.red} />
        </View>
      ) : null}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  cardTitle: {
    fontSize: 20,
    textAlign: "center",
  },
  cardText: {
    marginBottom: 10,
    marginTop: 10,
  },
});

export default HomeScreen;
