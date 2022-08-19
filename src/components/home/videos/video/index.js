import React from "react";
import { View, Text, ScrollView } from "react-native";
import YouTube from "react-native-youtube";
import ContentShow from "../../../../utils/contentShow";

const VideoScreen = ({ route }) => {
  const { postData } = route.params;
  return (
    <ScrollView>
      <View>
        <YouTube
          apiKey="AIzaSyB1I9ufV60yaUFcCHLsOYbtwWGT95VoEnE"
          videoId={postData.videoId}
          style={{ alignSelf: "stretch", height: 300 }}
          play={false}
          onReady={(e) => console.log("ready")}
          onChangeState={(e) => console.log(e)}
          onError={(e) => console.log(e)}
        />
        <ContentShow postData={postData} />
      </View>
    </ScrollView>
  );
};

export default VideoScreen;
