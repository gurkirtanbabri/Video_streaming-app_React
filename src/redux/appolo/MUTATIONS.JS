import { gql } from '@apollo/client';

export const ADD_ITEM = gql`
mutation createItem(
    $discription:string
    $name:$string
  ){
  addItem(createItemInput:{
    discription: $discription
    name: $name
  }){
    _id
    discription
    name
  }
}
`;  


export const GET_ITEM = gql`
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