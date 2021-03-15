import React, { Component } from 'react';
import { View, Text, ImageBackground, StyleSheet, Dimensions, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/dist/AntDesign';
const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;
class OTPSignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pin1: '', pin2: '', pin3: '', pin4: '', pin5: '', pin6: '',
            colors: false, colorinput :false,height:false
        };
    }
    componentDidMount = () => {
        this.refs.namePin1.focus()
    }
    render() {
        const { pin1, pin2, pin3, pin4, pin5, pin6, colors, colorinput,height } = this.state
        const OTP = [pin1, pin2, pin3, pin4, pin5, pin6]
        
        return (
            <View>
                <ImageBackground source={require('../Img/BG1.png')} style={{ width: Width, height: 292, }}>
                    <Icon name='left' size={24} style={{ color: '#FFF', paddingVertical: 36, paddingHorizontal: 24, }} />
                    <Text style={{ fontSize: 30, fontWeight: '600', color: "#FFF", paddingHorizontal: 16 }}>Nhập mã OTP</Text>
                    <Text style={{ fontSize: 18, color: "#FFF", padding: 16, fontWeight: "400", lineHeight: 19.6 }}>Nhập mã OTP bạn nhận được từ số điện thoại: <Text>0988488388</Text> </Text>
                </ImageBackground>
                <View style={{ paddingHorizontal: 16, paddingVertical: 40, }}>
                    <Text>Mã OTP</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <TextInput style={{
                            height: 54,
                            width: 52,
                            backgroundColor: colorinput ? '#FBECEB' : '#EDF6E2',
                            borderRadius: 8,
                            margin: 6,
                            textAlign: 'center',
                            fontSize: 28,
                            fontWeight: '700'
                        }}
                            maxLength={1}
                            ref={'namePin1'}
                            onChangeText={(pin1) => {
                                this.setState({ pin1: pin1 })
                                if (pin1 != '') {
                                    this.refs.namePin2.focus()
                                }
                                else { this.setState({ colors: false }) }
                            }}
                            value={pin1}
                        />
                        <TextInput style={{
                            height: 54,
                            width: 52,
                            backgroundColor: colorinput ? '#FBECEB' : '#EDF6E2',
                            borderRadius: 8,
                            margin: 6,
                            textAlign: 'center',
                            fontSize: 28,
                            fontWeight: '700'
                        }}
                            maxLength={1}
                            ref={'namePin2'}
                            onChangeText={(pin2) => {
                                this.setState({ pin2: pin2 })
                                if (pin2 != '') {
                                    this.refs.namePin3.focus()
                                }
                                else { this.setState({ colors: false }) }
                            }}
                            value={pin2}
                        />
                        <TextInput style={{
                            height: 54,
                            width: 52,
                            backgroundColor: colorinput ? '#FBECEB' : '#EDF6E2',
                            borderRadius: 8,
                            margin: 6,
                            textAlign: 'center',
                            fontSize: 28,
                            fontWeight: '700'
                        }}
                            maxLength={1}
                            ref={'namePin3'}
                            onChangeText={(pin3) => {
                                this.setState({ pin3: pin3 })
                                if (pin3 != '') {
                                    this.refs.namePin4.focus()
                                }
                                else { this.setState({ colors: false }) }
                            }}
                            value={pin3}
                        />
                        <TextInput style={{
                            height: 54,
                            width: 52,
                            backgroundColor: colorinput ? '#FBECEB' : '#EDF6E2',
                            borderRadius: 8,
                            margin: 6,
                            textAlign: 'center',
                            fontSize: 28,
                            fontWeight: '700'
                        }}
                            maxLength={1}
                            ref={'namePin4'}
                            onChangeText={(pin4) => {
                                this.setState({ pin4: pin4 })
                                if (pin4 != '') {
                                    this.refs.namePin5.focus()
                                }
                                else { this.setState({ colors: false }) }
                            }}
                            value={pin4}
                        />
                        <TextInput style={{
                            height: 54,
                            width: 52,
                            backgroundColor: colorinput ? '#FBECEB' : '#EDF6E2',
                            borderRadius: 8,
                            margin: 6,
                            textAlign: 'center',
                            fontSize: 28,
                            fontWeight: '700'
                        }}
                            maxLength={1}
                            ref={'namePin5'}
                            onChangeText={(pin5) => {
                                this.setState({ pin5: pin5 })
                                if (pin5 != '') {
                                    this.refs.namePin6.focus()
                                }
                                else { this.setState({ colors: false }) }
                            }}
                            value={pin5}
                        />
                        <TextInput style={{
                            height: 54,
                            width: 52,
                            backgroundColor: colorinput ? '#FBECEB' : '#EDF6E2',
                            borderRadius: 8,
                            margin: 6,
                            textAlign: 'center',
                            fontSize: 28,
                            fontWeight: '700'
                        }}
                            maxLength={1}
                            ref={'namePin6'}
                            onChangeText={(pin6) => {
                                this.setState({ pin6: pin6 })
                                if (pin6 != '') {
                                    this.setState({ colors: 'true' })
                                }
                                else { this.setState({ colors: false }) }
                            }}
                            value={pin6}
                        />
                    </View>
                    <Text style={{height:height?18:0, color:'#FF2727'}}>Mã OTP không hợp lệ. Vui lòng thử lại.</Text>
                    <Text style={{ alignSelf: 'flex-end', paddingTop: 5, color: '#2D9AFF' }}>Gửi lại mã OTP (60)</Text>
                    <TouchableOpacity style={{ borderRadius: 12, backgroundColor: colors ? '#97C93D' : '#D6D9DB', paddingVertical: 13, marginTop: Height / 4, }}
                        onPress={() => {
                            console.log(OTP.join(''))
                            if (OTP.join('') != '123456') {
                                this.setState({ colorinput: true })
                                this.setState({colors:false})
                                this.setState({height:true})
                                
                            }
                            else {this.setState({ colorinput: false })
                            this.setState({height:false})}
                        }}
                    >
                        <Text style={{ textAlign: 'center', fontWeight: 18, fontWeight: '600', color: '#FFF' }}>Xác nhận</Text>
                    </TouchableOpacity>
                    <Text style={{ textAlign: 'center', color: '#569D00', fontSize: 18, fontWeight: '700', paddingTop: 40 }}>Thay đổi số điện thoại</Text>
                </View>
            </View>
        );
    }
}
export default OTPSignIn;
const styles = StyleSheet.create({
    input: {
        height: 54,
        width: 52,
        borderRadius: 8,
        margin: 6,
        textAlign: 'center',
        fontSize: 28,
        fontWeight: '700'
    }
});