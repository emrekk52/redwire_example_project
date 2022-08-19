import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Button,
  ActivityIndicator,
  ScrollView,
  StyleSheet,
} from "react-native";
import { Tile } from "react-native-elements";
import { useSelector, useDispatch } from "react-redux";
import { getMoreVideos, getVideos } from "../../../store/actions";
import { Colors } from "../../../utils/tools";

const VideosScreen = ({ navigation }) => {
  const [loadingMore, setLoadingMore] = useState(false);
  const articles = useSelector((state) => state.articles);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getVideos());
  }, [dispatch]);

  const renderVideos = () =>
    articles.videos.map((item) => (
      <Tile
        key={item.id}
        imageSrc={{ uri: item.image }}
        title={item.title}
        icon={{
          name: "play-circle",
          type: "font-awesome",
          color: "#fff",
          size: 50,
        }}
        containerStyle={styles.containerStyle}
        contentContainerStyle={styles.contentContainerStyle}
        titleStyle={{ fontSize: 15 }}
        onPress={() =>
          navigation.navigate("VideoScreen", {
            id: item.id,
            postData: item,
          })
        }
      />
    ));

  const isCloseToBottom = ({
    layoutMeasurement,
    contentOffset,
    contentSize,
  }) => {
    const paddingToBottom = 30;
    return (
      layoutMeasurement.height + contentOffset.y >=
      contentSize.height - paddingToBottom
    );
  };

  return (
    <ScrollView
      onScroll={({ nativeEvent }) => {
        if (isCloseToBottom(nativeEvent)) {
          if (!loadingMore) {
            setLoadingMore(true);
            dispatch(getMoreVideos(articles)).then(() =>
             setLoadingMore(false));
          }
        }
      }}
      scrollEventThrottle={400}
    >
      <View style={{ padding: 10 }}>
        {articles && articles.videos ? renderVideos() : null}
        {loadingMore ? (
          <View style={{ padding: 20 }}>
            <ActivityIndicator color={Colors.red} />
          </View>
        ) : null}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  contentContainerStyle: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#e1e8ee",
    shadowColor: "rgba(0,0,0,.2)",
  },
  containerStyle: {
    width: "100%",
    height: 250,
    marginBottom: 15,
  },
});

export default VideosScreen;
