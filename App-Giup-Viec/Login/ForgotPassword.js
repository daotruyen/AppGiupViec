import React, { Component } from 'react';
import { View, Text, ImageBackground, StyleSheet, Dimensions ,TextInput, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/dist/AntDesign';
const Width = Dimensions.get('window').width;
class ForgotPassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View>
                <ImageBackground source={require('../Img/BG1.png')} style={{ width: Width, height: 292, }}>
                    <Icon name='left' size={24} style={{ color: '#FFF', paddingVertical: 36, paddingHorizontal: 24, }} />
                    <Text style={{ fontSize: 30, fontWeight: '600', color: "#FFF", paddingHorizontal: 16 }}>Quên mật khẩu</Text>
                    <Text style={{ fontSize: 18, color: "#FFF", padding: 16, fontWeight: "400", lineHeight: 19.6 }}>Nhập số điện thoại bạn đã đăng ký tài khoản. Chúng tôi sẽ gửi một mã OTP đến số điện thoại của bạn.</Text>
                </ImageBackground>
                <View style={{paddingHorizontal: 16,paddingVertical: 40,}}>
                    <Text>Số điện thoại</Text>
                    <TextInput
                        style={{ paddingHorizontal: 14,paddingVertical: 12,borderWidth: 1,borderRadius: 8,borderColor: '#E5E5E8',marginTop: 12,}}
                        placeholder='Nhập số điện thoại của bạn'
                    />
                    <TouchableOpacity style={{borderRadius:12,backgroundColor: '#D6D9DB',paddingVertical: 13,marginTop: 340,}}>
                        <Text style={{textAlign:'center',fontWeight:18,fontWeight:'600',color:'#FFF'}}>Tiếp tục</Text>
                    </TouchableOpacity>
                </View>
            </View>


        );
    }
}

export default ForgotPassword;
const styles = StyleSheet.create({

});