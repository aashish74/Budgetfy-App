import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import randomImage from '../assets/randomImage';
import EmptyList from '../components/emptyList';
import BackButton from '../components/backButton';
import { RootStackParamList } from '../types/navigation';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

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

type Props = NativeStackNavigationProp<RootStackParamList>;

export default function TripExpensesScreen() {
    const navigation = useNavigation<Props>();
  return (
    <View style = {{backgroundColor:'#fff', paddingHorizontal:15}}>
        <BackButton />
        <View style = {{alignItems:'center'}}>
            <Image 
            style={{ height:400, width:400}} 
            source={randomImage()}/>
        </View>
        <View style={{}}>
            <View style = {{marginBottom:10, flexDirection:'row', marginRight:2, justifyContent:'space-between'}}>
            <Text style={{ fontSize: 22, fontWeight: 'bold' }}>Expenses</Text>
            <TouchableOpacity onPress={() => navigation.navigate('AddExpenses')} style = {{padding:10, paddingHorizontal:10, backgroundColor: '#f0f8ff', borderRadius: 20}}>
                <Text>Add Expense</Text>
            </TouchableOpacity>
            </View>
            <View style = {{height:500}}>
            <FlatList
                data={items}
                numColumns={2}
                ListEmptyComponent={<EmptyList/>}
                keyExtractor={item => item.id.toString()}
                showsVerticalScrollIndicator={false}
                columnWrapperStyle = {{
                justifyContent:'space-between'
                }}
                style = {{marginHorizontal:5,}}
                renderItem={({ item }) => {
                return (
                    <TouchableOpacity
                    style={{backgroundColor: 'white', marginBottom: 10, padding: 25, borderRadius: 20, shadowColor: 'black',
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