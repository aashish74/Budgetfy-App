import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import IMAGES from '../assets/images';
import randomImage from '../assets/randomImage';
import EmptyList from '../components/emptyList';

var items = [
  {
    id: 1,
    place: 'Goa',
    country: 'India'
  },
  {
    id: 2,
    place: 'Shimla',
    country: 'India'
  },
  {
    id: 3,
    place: 'New york',
    country: 'United States'
  },
  {
    id: 4,
    place: 'London',
    country: 'United Kingdom'
  }
]

export default function HomeScreen() {
  return (
    <View style = {{backgroundColor: '#fff'}}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 10 }}>
        <Text style={{ fontSize: 30, fontWeight: 'bold' }}>Budgetify</Text>
        <TouchableOpacity style={{ padding: 10, paddingHorizontal: 15, backgroundColor: 'white', borderWidth: 0.2, borderColor: 'grey', borderRadius: 20 }}>
          <Text style={{color:'grey', fontWeight:'600'}}>Log out</Text>
        </TouchableOpacity>
      </View>
      <View style={{
        backgroundColor: '#add8e6', alignItems: 'center', borderRadius: 20, margin: 20, shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10,
        elevation: 3,
      }}>
        <Image source={IMAGES.BANNER}
          style={{ width: '60%', height: 230 }}
        />
      </View>
      <View style={{ paddingHorizontal: 11 }}>
        <View style = {{marginBottom:10}}>
          <Text style={{ fontSize: 22, fontWeight: 'bold' }}>Recent Trips</Text>
        </View>
        <View style = {{height:500}}>
          <FlatList
            data={items}
            numColumns={2}
            ListEmptyComponent={<EmptyList />}
            keyExtractor={item => item.id.toString()}
            showsVerticalScrollIndicator={false}
            columnWrapperStyle = {{
              justifyContent:'space-between'
            }}
            style = {{marginHorizontal:5,}}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity style={{
                  backgroundColor: 'white', marginBottom: 10, padding: 25, borderRadius: 20, shadowColor: 'black',
                  shadowOpacity: 0.26,
                  shadowOffset: { width: 0, height: 2 },
                  shadowRadius: 10,
                  elevation: 3
                }} >
                  <View>
                    <Image style={{ height: 150, width: 150, marginBottom: 2 }}
                      source={randomImage()}
                    />
                    <Text style={{ fontWeight: 'bold', fontSize: 17 }} >{item.place}</Text>
                    <Text style={{ fontSize: 15, fontWeight: '300' }}>{item.country}</Text>
                  </View>
                </TouchableOpacity>
              )
            }}
          />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({})




























// import React from 'react';
// import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

// const HomeScreen = () => {
//   return (
//     <View>
//       <View style = {styles.header1}>
//           <View>
//           <Text style = {styles.wb}>Welcome Back!</Text>
//           <Text style = {styles.name}>Aashish Bhardwaj</Text>
//         </View>
//         <View style = {styles.header_right}>
//           <Text style = {styles.A} >A</Text>
//         </View>
//       </View>

//       <View style = {styles.header2} >                                                  
//         <View>
//           <Text style = {{fontSize:23, fontWeight:'500', paddingBottom:3}} >Total Balance</Text>
//           <Text style = {{fontSize:20, fontWeight:'400', textAlign:'center'}} >$1200</Text>
//         </View>
//         <View>
//           <Text style = {{fontSize:23, fontWeight:'500', paddingBottom:3}} >Total Expenditure</Text>
//           <Text style = {{fontSize:20, fontWeight:'400', textAlign:'center'}} >$890</Text>
//         </View>
//       </View>

//       <View style = {styles.header3} >
//         <Text style = {{fontSize:17}} >Recent Transactions</Text>
//         <TouchableOpacity>
//           <Text style = {{color:'#8a2be2', fontSize:17, paddingRight:4}} >See All</Text>
//         </TouchableOpacity>
//       </View>

//     </View>  
//   );
// };

// const styles = StyleSheet.create({
//   header1:{ 
//     flexDirection:'row', 
//     justifyContent:'space-between',
//     padding:10,
//     marginTop:5,
//     },
//   header_right:{
//     backgroundColor:'#8a2be2',
//     width:50,
//     height:50,
//     borderRadius:'50%',
//     marginTop:10,
//     marginRight:10 
//   },
//   name:{
//     fontSize:20, 
//     fontWeight:'400',
//   },
//   wb:{
//     fontSize:33,
//     fontWeight:'500',
//     paddingTop:5,
//     paddingBottom:3
//   },
//   A:{
//     fontSize:32,
//     textAlign:'center',
//     color:'white'
//   },
//   header2:{
//     flexDirection:'row',
//     padding:10,
//     justifyContent:'space-between',
//     marginTop:12,
//     // backgroundColor:'rgba(52, 52, 52, 0.1)'
//   },
//   header3:{
//     flexDirection:'row',
//     padding:10,
//     justifyContent:'space-between',
//     marginTop:15,
//     backgroundColor:'rgba(52, 52, 52, 0.1)'
//   },
// });

// export default HomeScreen;