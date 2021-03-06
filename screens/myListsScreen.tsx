import React from 'react';
import Icon from 'react-native-vector-icons/Entypo';
import { StyleSheet, Text, View, Image,
        TextInput,TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import {LinearGradient} from 'expo-linear-gradient';
import { RFValue } from "react-native-responsive-fontsize";

class myListsScreen extends React.Component {
  render(){
    return (

    <View style={styles.container}>

      <View style={{flex: 0, flexDirection: 'row', width: "80%", justifyContent: 'space-between', marginTop: RFValue(100)}}>
        <Text style={styles.myListsText}>My Lists</Text>
        <TouchableOpacity>
          <Text style={styles.newListBtn}>+ New List</Text>
        </TouchableOpacity>
      </View>

      <View style={[styles.searchBar, {flex:0, flexDirection:'row'}]}>
        <TextInput
            style={styles.searchTextInput}
            placeholder='Search...'
        />
        <Icon name="magnifying-glass" size={18} color="#828282" />
      </View>

      <ScrollView style ={{width:"80%"}}>
        <TouchableOpacity onPress={() => this.props.navigation.navigate("Hoodat Buds")}>
          <LinearGradient
          colors={['#FFE2AB','#FFBC7C','#FFC28A' ]}
          style={styles.ListButton}
          start={{ x: -0.2, y: 0.5 }}
          end={{ x: 1, y: 0.5 }}
          >
            <Text style={styles.ListButtonTitle}>Hoodat Buds</Text>
            <Text style={styles.ListButtonSubtitle}>5 contacts</Text>
            <ScrollView style={styles.ListButtonImageScroll} horizontal={true}>
              <Image
                style ={styles.ListButtonContactImage}
                source={require('../assets/Wesley.png')}
                resizeMode="contain"
              />
              <Image
                style ={styles.ListButtonContactImage}
                source={require('../assets/Eric.png')}
                resizeMode="contain"
              />
              <Image
                style ={styles.ListButtonContactImage}
                source={require('../assets/Belosan.png')}
                resizeMode="contain"
              />
              <Image
                style ={styles.ListButtonContactImage}
                source={require('../assets/Billy.png')}
                resizeMode="contain"
              />
              <Image
                style ={styles.ListButtonContactImage}
                source={require('../assets/Trevor.png')}
                resizeMode="contain"
              />
            </ScrollView>
        </LinearGradient>
        </TouchableOpacity>
      </ScrollView>      
    </View>
    
    );
  } 
}

const styles = StyleSheet.create({

  container: 
  {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    
  },

  myListsText:
  {
    
    marginRight: RFValue(0),
    fontSize: RFValue(35),
    fontWeight:'800',
  },

  newListBtn:
  {
    marginTop: RFValue(15),
    fontSize: 15,
    fontWeight:'800',
    marginRight:0,
    color: '#6EA8FF',
  },

  searchBar:
  {
    marginTop:40,
    paddingVertical:15,
    paddingLeft:RFValue(22),
    //width: RFValue(290),
    width: "80%",
    backgroundColor: "#F0F0F0",
    borderRadius:20,
    marginBottom:30,
  },

  searchTextInput:
  {
    fontWeight:'500',
    fontSize: 20,
    width:"85%",
    color: "#828282",
  },

  ListButton:
  {
    width: "100%",
    height:140,
    borderRadius:25,
  },

  ListButtonTitle:
  {
    marginTop:20,
    marginLeft:25,
    color: "#494949",
    fontWeight:"800",
    fontSize:20,
  },
  
  ListButtonSubtitle:
  {
    marginTop:10,
    marginLeft:27,
    color: "#494949",
    fontWeight:"500",
    fontSize:14,
  },

  ListButtonImageScroll:
  {
    marginTop: 15,
    marginLeft: 26,
    width: 300,
  },

  ListButtonContactImage:
  {
    width: 42,
    height: 42,
    borderRadius:10,
    borderWidth: 1,
    marginRight: 12,
    borderColor:'lightgrey',
  }


});

export default myListsScreen;