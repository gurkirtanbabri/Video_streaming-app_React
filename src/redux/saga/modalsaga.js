import { put } from 'redux-saga/effects'
import client from '../appolo/client'
import { gql } from '@apollo/client';
export const fetchList = function*({payload}){
  try{
    

 const GET_ITEM =  gql`
query selectItems(
  $_id:string
  $limit:string
  ){
  getItem(getItemsInput:{
  _id: $_id,
  limit:$limit
  }){
    _id
    name
    discription
    price
  }
}

`
const result = yield client.query({
  query: GET_ITEM,
  fetchPolicy:"network-only",
  variables:payload
})
  }
  catch(error){

  }
}