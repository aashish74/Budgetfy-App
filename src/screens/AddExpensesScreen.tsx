import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import BackButton from '../components/backButton'
import IMAGES from '../assets/images'
import { useNavigation } from '@react-navigation/native';
import { categories } from '../components/categories';

export default function AddExpensesScreen() {
  const[title, setTitle] = useState('');
  const[amount, setAmount] = useState('');
  const[category, setCategory] = useState('');

  const navigation = useNavigation();

  const handleDone = () => {
    if(title && amount && category){
      navigation.goBack();
    }else{

    }
  }

  return (
    <View style = {{backgroundColor:'#fff', flex:1, }}>
        <View style = {{position:'absolute', zIndex: 1, top: 8, left: 6}}>
            <BackButton />
        </View>
        <View style={{paddingTop: 8, }}>
            <Text style = {{textAlign:'center', fontWeight:'600', fontSize:24}}>Add Expense</Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'center', marginVertical: 10, }}>
          <Image source={IMAGES.EXPENSEBANNER}
            style={{ height: 400, width: 350 }}
          />
        </View>
        <View style={{ marginHorizontal: 25, marginBottom:15}}>
          <Text style={{ fontSize: 25, fontWeight: '600', marginBottom: 10 }}>Item Name</Text>
          <TextInput
            style={{ padding: 12, borderWidth: 0.2, borderRadius: 20, marginBottom: 10 }}
            value={title}
            onChangeText={ setTitle }
          />
          <Text style={{ fontSize: 25, fontWeight: '600', marginBottom: 10 }}>Item Amount</Text>
          <TextInput
            style={{ padding: 12, borderWidth: 0.2, borderRadius: 20 }}
            value={amount}
            onChangeText={ setAmount }
          />
        </View>
        <View style = {{marginHorizontal: 25}}>
          <Text style = {{color:'grey', fontWeight:'600', fontSize:20, marginBottom:15,}}>Categories</Text>
          <View style = {
            {
              flexDirection:'row', 
              gap: 12,
              justifyContent:'flex-start',  
              flexWrap:'wrap',
              marginBottom: 20,
            }
          }>
            {
              categories.map(cat => {
                return(
                  <TouchableOpacity 
                    key={cat.value} 
                    style = {
                      {
                        backgroundColor: category === cat.value ? '#e6f3ff' : '#f5f5f5',
                        paddingHorizontal: 16,
                        paddingVertical: 12,
                        borderRadius: 20,
                        borderWidth: 1,
                        borderColor: category === cat.value ? '#007AFF' : '#e0e0e0',
                        marginBottom: 8,
                      }
                    }
                    onPress={() => setCategory(cat.value)}
                  >
                    <Text style = {
                      {
                        fontSize: 15,
                        color: category === cat.value ? '#007AFF' : '#666',
                        fontWeight: category === cat.value ? '600' : '400'
                      }
                    }>{cat.title}</Text>
                  </TouchableOpacity>
                )
              })
            }
          </View>
        </View>
        <View>
        <TouchableOpacity
          style={{ marginBottom: 30, backgroundColor: '#32cd32', padding: 12, marginHorizontal: 17, borderRadius: 16 }}
          onPress={handleDone}
        >
          <Text style={{ textAlign: 'center', color: 'white', fontSize: 22, fontWeight: "bold" }}>Done</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({})