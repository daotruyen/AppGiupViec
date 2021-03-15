import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/dist/AntDesign';
import StepIndicator from 'react-native-step-indicator'
const labels = ["Thông tin", "Xác nhận", "Thanh toán"];
const customStyles = {
    stepIndicatorSize: 48,
    currentStepIndicatorSize: 48,
    separatorStrokeWidth: 2,
    currentStepStrokeWidth: 15,
    stepStrokeCurrentColor: '#80BE34',
    stepStrokeWidth: 15,
    stepStrokeFinishedColor: '#80BE34',
    stepStrokeUnFinishedColor: '#aaaaaa',
    separatorFinishedColor: '#f80BE34',
    separatorUnFinishedColor: '#aaaaaa',
    stepIndicatorFinishedColor: '#80BE34',
    stepIndicatorUnFinishedColor: '#ffffff',
    stepIndicatorCurrentColor: '#ffffff',
    stepIndicatorLabelFontSize: 15,
    currentStepIndicatorLabelFontSize: 13,
    stepIndicatorLabelCurrentColor: '#80BE34',
    stepIndicatorLabelFinishedColor: '#ffffff',
    stepIndicatorLabelUnFinishedColor: '#aaaaaa',
    labelColor: '#999999',
    labelSize: 13,
    currentStepLabelColor: '#80BE34'
}
class Service extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPosition: 0
        };
    }
    onPageChange(position) {
        this.setState({ currentPosition: position });
    }
    
    
    render() {
        return (
            <View>
                <View style={{flexDirection:'row',justifyContent:'space-between',marginHorizontal:24,marginVertical:14}}>
                    <Icon name='left' size={25}/>
                    <Text>Giúp việc ca lẻ</Text>
                    <Icon name='infocirlceo' />
                </View>
                <View style={{marginVertical:17}}>
                    <StepIndicator
                        customStyles={customStyles}
                        currentPosition={this.state.currentPosition}
                        labels={labels}
                        stepCount={3}
                        
                    />
                </View>
                <View style={{padding:16, backgroundColor:'#E5E5E5'}}>
                    <View style={{paddingBottom:16}}>
                        <Text>Địa điểm làm việc </Text>
                        <View style={styles.input}>
                            <Icon name='search1' size={25}/>
                            <TextInput style={styles.type} placeholder='Nhập địa chỉ của bạn'/>
                        </View>
                    </View>
                    <View style={{paddingBottom:16}}>
                        <Text>Số nhà/ Căn hộ </Text>
                        <View style={styles.input}>
                            <Icon name='home' size={25}/>
                            <TextInput style={styles.type} placeholder='Nhập số nhà/căn hộ của bạn'/>
                        </View>
                    </View>
                    <View>
                        
                    </View>
                </View>
            </View>
        );
    }
}

export default Service;
const styles = StyleSheet.create({
    input:{flexDirection:'row',
    borderWidth:1,
    padding:12,
    borderColor:'#E5E5E8',
    borderRadius: 8,
    marginVertical: 4,
    backgroundColor: '#FFF',
    
},type:{
    paddingLeft:17
}
});