import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const AlbumDetail = ({ album }) => {
    const { title, artist, thumbnail_image, image } = album;
    return (
        <Card>
            <CardSection>
                <View style={style.thumbnailContainerStyle}>
                    <Image style={style.thumbnailStyle} source={{ uri: thumbnail_image }} />
                </View>
                <View style = {style.herderContentStyle}>
                    <Text style={style.headerTextStyle}>{title}</Text>
                    <Text>{artist}</Text>
                </View>
                
            </CardSection>
            <CardSection>
                    <Image style={style.imageStyle} source={{ uri: image }} />             
            </CardSection>

        </Card>
    );
};

const style = {
    herderContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    headerTextStyle: {
        fontSize: 18
    },
    thumbnailStyle: {
        height: 50,
        width: 50
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    imageStyle: {
        height: 300,
        flex: 1,
        width: null
    }
}

export default AlbumDetail;
