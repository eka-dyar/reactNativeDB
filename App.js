/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput, Alert, Button,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state ={
      uName:'',
      uEmail:'',
      uPass:'',
    }
  }

  //bikin fungsi utk registrasi

  prosesRegistrasi = () => {
    const {uName} = this.state;
    const {uEmail} = this.state;
    const {uPass} = this.state;
  //alamat web servis nya
    fetch('http://17.17.17.104/my-react/user_registration.php', {
      method:'POST',
      headers:{
        'Accept':'application/json',
        'Content-Type':'application/json',
      },
      body: JSON.stringify({
        name:uName,
        email:uEmail,
        password:uPass,
      }),
      //then() berfungsi utk menentukan prioritas setelah fetch selesai, fungsi apa lagi yg dijalankan, krn javascript sifatnya asinkronus
    }).then(response => response.json())
    .then(response =>{
      Alert.alert(response)
    })
    .catch(error => {
      console.error(error);
    });     
  };

  render(){
    //bikin tampilan didalam render.return
    return(
        <View>
<Text style={{fontSize:20, color:'#000000', textAlign:'center', marginBottom: 16,}}>
FORM REGISTRASI
</Text>

<TextInput placeholder='Tuliskan Nama' onChangeText={uName=>this.setState({uName})} clearButtonMode='always'/>
<TextInput placeholder='Tuliskan Email' onChangeText={uEmail=>this.setState({uEmail})}/>
<TextInput placeholder='Tuliskan Password' onChangeText={uPass=>this.setState({uPass})}/>

<Button title='register' onPress={this.prosesRegistrasi}/>

</View>

    );

  }
}



