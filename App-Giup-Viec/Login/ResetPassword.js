import React, { Component } from 'react';
import { View, Text, ImageBackground, StyleSheet, Dimensions, TextInput, TouchableOpacity } from 'react-native';
import Icons from 'react-native-vector-icons/dist/Entypo';
import Icon from 'react-native-vector-icons/dist/AntDesign';
import { Modals } from "./Modal";
const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

class ResetPassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
            eye: true
        };
    }
 
    render() {
        const eye = this.state
        
        
        return (
            <View>
                <ImageBackground source={require('../Img/BG1.png')} style={{ width: Width, height: 292, }}>
                    <Icon name='left' size={24} style={{ color: '#FFF', paddingVertical: 36, paddingHorizontal: 24, }} />
                    <Text style={{ fontSize: 30, fontWeight: '600', color: "#FFF", paddingHorizontal: 16 }}>Đặt lại mật khẩu</Text>
                    <Text style={{ fontSize: 18, color: "#FFF", padding: 16, fontWeight: "400", lineHeight: 19.6 }}>Mật khẩu dài từ 8 - 20 ký tự, bao gồm chữ hoa, chữ thường và số. </Text>
                </ImageBackground>

                <View style={{ paddingHorizontal: 16, paddingVertical: 40, }}>
                    <View style={{}}>
                        <Text>Mật khẩu</Text>
                        <View style={styles.input}>
                           
                            <TextInput
                                style={{ paddingLeft: 10 }}
                                placeholder='Nhập mật khẩu'
                            />
                            <Icon style={{ position: 'absolute', right: 10, alignSelf: 'center', }} name="eyeo" size={25} color="#AEB1C5" />
                        </View>
                        <Text>Nhập lại mật khẩu</Text>
                        <View style={styles.input}>
                           
                            <TextInput
                                style={{ paddingLeft: 10 }}
                                placeholder='Nhập lại mật khẩu'
                            />
                            <Icon style={{ position: 'absolute', right: 10, alignSelf: 'center', }} name="eyeo" size={25} color="#AEB1C5" />
                        </View>

                    </View>
                    <TouchableOpacity style={{ borderRadius: 12, backgroundColor: '#D6D9DB', paddingVertical: 13, marginTop: Height / 4, }}
                    >
                        <Text style={{ textAlign: 'center', fontWeight: 18, fontWeight: '600', color: '#FFF' }}>Hoàn tất</Text>
                    </TouchableOpacity>
                    
                </View>
            </View>
        );
    }
}

export default ResetPassword;
const styles = StyleSheet.create({

    input: {
        flexDirection: "row",
        borderWidth: 1, padding: 12, borderRadius: 8, borderColor: '#E5E5E8', marginVertical: 5,
        marginVertical:10
    },

});
