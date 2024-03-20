import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";

const index = () => {
  return (
    <View>
      <Link href={"/(modals)/login"}>login</Link>
      <Link href={"/(modals)/booking"}>booking</Link>
      <Link href={"/listing/1337"}>Listing details</Link>
    </View>
  );
};

export default index;
