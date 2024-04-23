import { FlatList, Pressable, StyleSheet, Text, View, ScrollView, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { Feather } from "@expo/vector-icons";
import { AntDesign, FontAwesome, Entypo , FontAwesome5} from "@expo/vector-icons";
//import { Checkbox } from "react-native-paper";
const Main = ({ navigation, route }) => {
  //const [data, setData] = useState([]);
  const [listdatapopular, setListdatapopular] = useState([]);
  const [listdatarecomments, setListdatarecomments] = useState([]);
  const [listdataTopTeacher, setListdataTopTeacher] = useState([]);
  const [listdataCourseInspires, setListdataCourseInspires] = useState([]);
  useEffect(() => {
    fetch("https://650425cec8869921ae249549.mockapi.io/popularCourses")
      .then((response) => response.json())
      .then((data) => {
        setListdatapopular(data);
        console.log(data); 
      })
      .catch((error) => console.error("Error fetching popular courses:", error));
  }, []);
  
  
  useEffect(() => {
    fetch("https://650425cec8869921ae249549.mockapi.io/recommend")
      .then((response) => response.json())
      .then((data) => {
        setListdatarecomments(data);
        console.log(data); 
      })
      .catch((error) => console.error("Error fetching popular courses:", error));
  }, []);
  
  
  useEffect(() => {
    fetch("https://6505c36aef808d3c66f06e72.mockapi.io/topteacher")
      .then((response) => response.json())
      .then((data) => {
        setListdataTopTeacher(data);
        console.log(data); 
      })
      .catch((error) => console.error("Error fetching popular courses:", error));
  }, []);
  useEffect(() => {
    fetch("https://660ade10ccda4cbc75dbf6cf.mockapi.io/CourseInspires")
      .then((response) => response.json())
      .then((data) => {
        setListdataCourseInspires(data);
        console.log(data); 
      })
      .catch((error) => console.error("Error fetching popular courses:", error));
  }, []);
  //   const { username } = route.params;
  //   useEffect(() => {
  //     fetch("https://660ade10ccda4cbc75dbf6cf.mockapi.io/account")
  //       .then((response) => response.json())
  //       .then((data) => {
  //         setData(data);
  //       })
  //       .catch((error) => {
  //         console.error("Đã xảy ra lỗi khi lấy dữ liệu:", error);
  //       });
  //   }, [route.params.update]);
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          alignContent: "center",
          backgroundColor: "#535ce8",
        }}
      >
        <Pressable
          onPress={() => {
            navigation.navigate("LogIn");
          }}
        >
          <AntDesign name="arrowleft" size={35} color="white" style={{marginTop: 10}}/>
        </Pressable>

        <View style={{marginLeft: 10}}>
          <Text style={{ fontSize: 20, fontWeight: "bold" , color:"white"}}>Hi</Text>
          <Text style={{ fontSize: 15, color:"white" }}>What do you want to learn today?</Text>
        </View>
        <Feather name="shopping-cart" size={30} color="white" style={{marginLeft: 20, marginTop: 10}}/>
        <FontAwesome name="bell-o" size={30} color="white" style={{marginLeft: 20, marginTop: 10}} />
      </View>
      <View style={{ alignItems: "center" }}>
        <View
          style={{ width: "90%" }}
          showsVerticalScrollIndicator={false}
        >
{/* //image */}
          <View style={{ marginBottom: 5 }}>
            <Image
              source={require("../image/image.png")}
              style={{ width: "100%", height: 200 }}
              resizeMode="contain"
            />
          </View>
          <View style={{}}>
            {/* content category */}
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginBottom: 10,
              }}
            >
              <Text style={{ fontSize: 18, color: "black", fontWeight: 700 }}>
                Categories
              </Text>
              <Pressable>
                <Text style={{ fontSize: 18, color: "gray", fontWeight: 500 }}>
                  View more
                </Text>
              </Pressable>
            </View>
            {/* button category */}
            <View
              style={{
                flexDirection: "row",
                width: "100%",
                justifyContent: "space-between",
              }}
            >
              <View style={{ width: "48%" }}>
                <Pressable
                  style={{
                    borderWidth: 0.2,
                    borderColor: "gray",
                    borderRadius: 10,
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      padding: 5,
                    }}
                  >
                    <Image
                      source={require("../image/ButtonMuiTen.png")}
                      style={{ width: 50, height: 50 }}
                    />
                    <Text
                      style={{
                        fontSize:16,
                        fontWeight: 500,
                        marginLeft: 10,
                      }}
                    >
                      Business
                    </Text>
                  </View>
                </Pressable>
                <Pressable
                  style={{
                    borderWidth: 0.2,
                    borderColor: "gray",
                    marginTop: 10,
                    borderRadius: 10,
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      padding: 5,
                    }}
                  >
                    <Image
                      source={require("../image/ButtonDauDoi.png")}
                      style={{ width: 50, height: 50 }}
                    />
                    <Text
                      style={{
                        fontSize:16,
                        fontWeight: 500,
                        marginLeft: 10,
                      }}
                    >
                      Code
                    </Text>
                  </View>
                </Pressable>
                <Pressable
                  style={{
                    borderWidth: 0.2,
                    borderColor: "gray",
                    marginTop: 10,
                    borderRadius: 10,
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      padding: 5,
                    }}
                  >
                    <Image
                      source={require("../image/ButtonCamera.png")}
                      style={{ width: 50, height: 50 }}
                    />
                    <Text
                      style={{
                        fontSize:16,
                        fontWeight: 500,
                        marginLeft: 10,
                      }}
                    >
                      Movie
                    </Text>
                  </View>
                </Pressable>
              </View>

              <View style={{ width: "48%" }}>
                <Pressable
                  style={{
                    borderWidth: 0.2,
                    borderColor: "gray",
                    borderRadius: 10,
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      padding: 5,
                    }}
                  >
                    <Image
                      source={require("../image/ButtonNgoiViet.png")}
                      style={{ width: 50, height: 50 }}
                    />
                    <Text
                      style={{
                        fontSize:16,
                        fontWeight: 500,
                        marginLeft: 10,
                      }}
                    >
                      Design
                    </Text>
                  </View>
                </Pressable>

                <Pressable
                  style={{
                    borderWidth: 0.2,
                    borderColor: "gray",
                    marginTop: 10,
                    borderRadius: 10,
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      padding: 5,
                    }}
                  >
                    <Image
                      source={require("../image/ButtonThuMuc.png")}
                      style={{ width: 50, height: 50 }}
                    />
                    <Text
                      style={{
                        fontSize:16,
                        fontWeight: 500,
                        marginLeft: 10,
                      }}
                    >
                      Writing
                    </Text>
                  </View>
                </Pressable>
                <Pressable
                  style={{
                    borderWidth: 0.2,
                    borderColor: "gray",
                    marginTop: 10,
                    borderRadius: 10,
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      padding: 5,
                    }}
                  >
                    <Image
                      source={require("../image/ButtonGlobal.png")}
                      style={{ width: 50, height: 50 }}
                    />
                    <Text
                      style={{
                        fontSize:16,
                        fontWeight: 500,
                        marginLeft: 10,
                      }}
                    >
                      Language
                    </Text>
                  </View>
                </Pressable>
              </View>
            </View>
          </View>

          {/* View popular */}
          <View style={{ marginTop: 30 }}>
            {/* content popular */}
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginBottom: 10,
              }}
            >
              <Text style={{ fontSize: 18, color: "black", fontWeight: 700 }}>
                Popular Courses
              </Text>
              <Pressable>
                <Text style={{ fontSize: 18, color: "gray", fontWeight: 500 }}>
                  View more
                </Text>
              </Pressable>
            </View>
            {/* items popular */}
            <View style={{ height: 270 }}>
              <FlatList
                data={listdatapopular}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => (
                  <View style={{ height: 250 }}>
                    <Pressable
                      style={{
                        padding: 5,
                        borderWidth: 0.2,
                        borderRadius: 10,
                        borderColor: "gray",
                        marginLeft: 8,
                      }}
                    >
                      <Image
                        source={item.image}
                        style={{ width: 200, height: 150 }}
                      />
                      <View
                        style={{
                          flexDirection: "row",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <Text style={{ fontSize: 16, fontWeight: 700 }}>
                          {item.title}
                        </Text>
                        <FontAwesome
                          name="bookmark-o"
                          size={24}
                          color="black"
                        />
                      </View>
                      <Text style={{ fontWeight: 600, color: "gray" }}>
                        {item.author}
                      </Text>
                      <Text
                        style={{
                          fontWeight: 600,
                          color: "rgb(83,92,233)",
                          fontSize: 16,
                        }}
                      >
                        ${item.price}
                      </Text>
                      <View
                        style={{ flexDirection: "row", alignItems: "center" }}
                      >
                        <FontAwesome name="star" size={24} color="#fd3" />
                        <Text style={{ fontWeight: 600 }}>
                          {item.rating} ({item.ratingCount}) - {item.lessons}{" "}
                          lessons
                        </Text>
                      </View>
                    </Pressable>
                  </View>
                )}
                keyExtractor={(item) => item.id}
                horizontal={true}
              />
            </View>
          </View>

          {/* View recomment for you */}
          <View style={{ marginTop: 15 }}>
            {/* content recomment */}
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginBottom: 10,
              }}
            >
              <Text style={{ fontSize: 18, color: "black", fontWeight: 700 }}>
                Recommended for you
              </Text>
              <Pressable>
                <Text style={{ fontSize: 18, color: "gray", fontWeight: 500 }}>
                  View more
                </Text>
              </Pressable>
            </View>
            {/* items Recommended */}
            <View style={{ height: 300 }}>
              <FlatList
                data={listdatarecomments}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => (
                  <View style={{ height: 250 }}>
                    <Pressable
                      style={{
                        padding: 5,
                        borderWidth: 0.2,
                        borderRadius: 10,
                        borderColor: "gray",
                        marginLeft: 8,
                      }}
                    >
                      <Image
                        source={item.image}
                        style={{ width: 200, height: 150 }}
                      />
                      <View
                        style={{
                          flexDirection: "row",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <Text style={{ fontSize: 16, fontWeight: 700 }}>
                          {item.title}
                        </Text>
                        <FontAwesome
                          name="bookmark-o"
                          size={24}
                          color="black"
                        />
                      </View>
                      <Text style={{ fontWeight: 600, color: "gray" }}>
                        {item.author}
                      </Text>
                      <Text
                        style={{
                          fontWeight: 600,
                          color: "rgb(83,92,233)",
                          fontSize: 16,
                        }}
                      >
                        ${item.price}
                      </Text>
                      <View
                        style={{ flexDirection: "row", alignItems: "center" }}
                      >
                        <FontAwesome name="star" size={24} color="#fd3" />
                        <Text style={{ fontWeight: 600 }}>
                          {item.rating} ({item.ratingCount}) - {item.lessons}{" "}
                          lessons
                        </Text>
                      </View>
                    </Pressable>
                  </View>
                )}
                keyExtractor={(item) => item.id}
                horizontal={true}
              />
            </View>
          </View>

          {/* View Course that inspires */}
          <View style={{ marginTop: 15 }}>
            {/* content Course that inspires */}
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginBottom: 20,
              }}
            >
              <Text style={{ fontSize: 18, color: "black", fontWeight: 700 }}>
                Course that inspires
              </Text>
              <Pressable>
                <Text style={{ fontSize: 18, color: "gray", fontWeight: 500 }}>
                  View more
                </Text>
              </Pressable>
            </View>

            {/* items Course that inspires */}
            <View>
              {listdataCourseInspires.map((item) => {
                return (
                  <View style={{ marginBottom: 20 }} key={item.id}>
                    <Pressable
                      style={{
                        padding: 5,
                        borderWidth: 0.2,
                        borderRadius: 10,
                        borderColor: "gray",
                        marginLeft: 8,
                        flexDirection: "row",
                        alignItems: "center",

                        height: 150,
                      }}
                    >
                      <Image
                        source={item.image}
                        style={{ width: "40%", height: 100 }}
                      />

                      <View
                        style={{
                          flexDirection: "column",
                          marginLeft: 10,
                          width: "58%",
                        }}
                      >
                        <View
                          style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "center",
                          }}
                        >
                          <Text style={{ fontSize: 16, fontWeight: 700 }}>
                            {item.title}
                          </Text>
                          <FontAwesome
                            name="bookmark-o"
                            size={24}
                            color="black"
                          />
                        </View>
                        <Text style={{ fontWeight: 600, color: "gray" }}>
                          {item.author}
                        </Text>
                        <Text
                          style={{
                            fontWeight: 600,
                            color: "rgb(83,92,233)",
                            fontSize: 16,
                          }}
                        >
                          ${item.price}
                        </Text>
                        <View
                          style={{ flexDirection: "row", alignItems: "center" }}
                        >
                          <FontAwesome name="star" size={24} color="#fd3" />
                          <Text style={{ fontWeight: 600 }}>
                            {item.rating} ({item.ratingCount}) - {item.lessons}{" "}
                            lessons
                          </Text>
                        </View>
                      </View>
                    </Pressable>
                  </View>
                );
              })}
            </View>
          </View>


           {/* View top teacher */}
           <View style={{ marginTop: 30 }}>
            {/* content top teacher */}
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginBottom: 10,
              }}
            >
              <Text style={{ fontSize: 18, color: "black", fontWeight: 700 }}>
              Top teacher
              </Text>
              <Pressable>
                <Text style={{ fontSize: 18, color: "gray", fontWeight: 500 }}>
                  View more
                </Text>
              </Pressable>
            </View>
            {/* items popular */}
            <View style={{ height: 270 }}>
              <FlatList
                data={listdataTopTeacher}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => (
                  <View style={{ height: 250 }}>
                    <Pressable
                      style={{
                        padding: 5,
                        borderWidth: 0.2,
                        borderRadius: 10,
                        borderColor: "gray",
                        marginLeft: 8,
                      }}
                    >
                      <Image
                        source={item.image}
                        style={{ width: 200, height: 150 }}
                      />
                      <View
                        style={{
                          flexDirection: "row",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <Text style={{ fontSize: 16, fontWeight: 700 }}>
                          {item.teacher}
                        </Text>
                        <FontAwesome
                          name="bookmark-o"
                          size={24}
                          color="black"
                        />
                      </View>
                      <Text style={{ fontWeight: 600, color: "gray" }}>
                        {item.school}
                      </Text>
                      
                      <View
                        style={{ flexDirection: "row", alignItems: "center" }}
                      >
                        <FontAwesome name="star" size={24} color="#fd3" />
                        <Text style={{ fontWeight: 600 }}>
                          {item.rating} ({item.ratingCount}) - {item.lessons}{" "}
                          lessons
                        </Text>
                      </View>
                    </Pressable>
                  </View>
                )}
                keyExtractor={(item) => item.id}
                horizontal={true}
              />
            </View>
          </View>


          <View style={{ height: 150 }} />
        </View>
      </View>
    </View>
  );
};
export default Main;
