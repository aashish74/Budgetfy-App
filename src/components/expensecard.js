import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

export default function ExpenseCard({item}) {
  return (
    <TouchableOpacity style={styles.container}>
      <View>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.category}>{item.category}</Text>
      </View>
      <View>
        <Text style={styles.amount}>${item.amount}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 5,
  },
  category: {
    fontSize: 14,
    color: 'gray',
  },
  amount: {
    fontSize: 16,
    fontWeight: '600',
  }
})