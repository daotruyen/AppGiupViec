import React, { Component } from 'react';
import { View, Text, Image, Dimensions, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/dist/AntDesign';
import Icons from 'react-native-vector-icons/dist/EvilIcons';
import Google from 'react-native-vector-icons/dist/FontAwesome';
const Height = Dimensions.get('window').height;
const Width = Dimensions.get('window').width;
export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={{ height: Height }}>
                <View>
                    <View style={styles.logo}>
                        <Image source={require('../Img/logo.png')} />
                        <Text style={{ fontSize: 18, fontWeight: '500', padding: 24, color: '#80BE34' }}> ỨNG DỤNG DÀNH CHO NHÂN VIÊN</Text>
                    </View>
                    <View style={{}}>
                        <View style={{ marginHorizontal: 16, marginVertical:10}}>
                            <Text style={{ fontSize: 14, lineHeight: 19.6, }}>Số điện thoại</Text>
                            <View style={styles.input}>
                                <Icon name="search1" size={30} color="#AEB1C5" />
                                <TextInput style={{ paddingLeft: 10 }}
                                    placeholder='Nhập số điện thoại'
                                />
                            </View>
                        </View>
                        <View style={{ marginHorizontal: 16, marginBottom: 6, }}>
                            <Text style={{ fontSize: 14, lineHeight: 19.6, }}>Mật khẩu</Text>
                            <View style={styles.input}>
                                <Icon name="search1" size={30} color="#AEB1C5" />
                                <TextInput
                                    style={{ paddingLeft: 10 }}
                                    placeholder='Nhập mật khẩu'
                                />
                                <Icon style={{ position: 'absolute', right: 10, alignSelf: 'center', }} name="eyeo" size={25} color="#AEB1C5" />
                            </View>
                        </View>
                        <Text style={{ alignSelf: 'flex-end', paddingRight: 16, color: '#2D9AFF' }}>Quên mật khẩu?</Text>
                        <TouchableOpacity style={styles.button} >
                            <Text style={{ textAlign: 'center', fontSize: 18, fontWeight: '600', color: '#FFF' }}>Đăng nhập</Text>
                        </TouchableOpacity>
    
                        <View style={{borderTopWidth:1, borderColor: '#F6F6F6',marginHorizontal:16}}>
                            <Text style={{ textAlign: 'center', fontSize:14,color:'#AEB1C5',bottom:10,zIndex:1,backgroundColor: "#FFF",width:Width/2,alignSelf: 'center',}}>hoặc đăng nhập bằng</Text>
                        </View>
                        
                        <View style={{ flexDirection: 'row', justifyContent: "center" }}>
                            <Icon name="apple1" size={25} style={{padding:15}}/>
                            <Icons name="sc-facebook" size={35} style={{padding:15, color:"#2062AF"}}/>
                            <Google name="google" size={25} style={{padding:15}}/>
                        </View>
                        <View style={{paddingTop:15}}>
                            <Text style={{ textAlign: 'center' }}>Bạn chưa có tài khoản?<Text style={{color:'#2D9AFF'}}>Đăng ký</Text></Text>

                        </View>
                    </View>
                </View>
                <View style={{ position: "absolute", bottom: 48 }}>
                    <Image style={{ width: Width }} source={require('../Img/footer.png')} />
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    logo: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: Height / 10,

    },
    input: {
        flexDirection: "row",
        borderWidth: 1, padding: 12, borderRadius: 8, borderColor: '#E5E5E8', marginVertical: 5
    },
    button: {
        alignContent: 'center',
        backgroundColor: '#97C93D',
        borderRadius: 12,
        paddingVertical: 13,
        paddingHorizontal: 100,
        marginHorizontal: 16,
        marginTop: 24,
        marginBottom: 30
    }
});
