//Import statements
import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

//Make class
class AlbumList extends Component {
    state = { albums: [] };
    
    //Fetching albums info
    componentWillMount() {
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then(response => this.setState({ albums: response.data })); //Populates albums array with info from response.data (data was an array of album titles in this case. found using CMD+D) 
    }

    renderAlbums() {
       return this.state.albums.map(album => <AlbumDetail key={album.title} record={album} />);
    }

    render() {
        //console.log(this.state);

        return (
            <ScrollView>
                {this.renderAlbums()}
            </ScrollView>
        );
    }
}

export default AlbumList;