import React, { useEffect, useState } from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { getBooks } from '../redux/ActionCreators';
import SingleBook from '../components/SingleBook';
const mapStateToProps = (state) => {
    return {
        books: state.books
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getBooks: () => dispatch(getBooks())
    }
}
const BookListScreen = (props) => {

    useEffect(() => {
        props.getBooks();

    }, [])
    // console.log(props.books)
    return (
        <View>
            <FlatList data={props.books}
                renderItem={
                    ({ item }) => (<SingleBook item={item} selectBook={() => props.navigation.navigate("Book details", { book: item })} />)
                }
                keyExtractor={item => item.id.toString()} />


        </View>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(BookListScreen);