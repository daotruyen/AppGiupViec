import React, { Component } from 'react';
import { View, Text, ImageBackground, StyleSheet, Dimensions, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import Icons from 'react-native-vector-icons/dist/AntDesign';
import Icon from 'react-native-vector-icons/dist/FontAwesome5';
import Carousel, { Pagination } from 'react-native-snap-carousel';
const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;
const List = [
    { id: 1, name: 'Giúp việc ca lẻ', img: require('../Img/Item0.png') },
    { id: 2, name: 'Giúp việc định kỳ', img: require('../Img/Item1.png') },
    { id: 3, name: 'Tổng vệ sinh', img: require('../Img/Item2.png') },
    { id: 4, name: 'Sửa chữa điện nước', img: require('../Img/Item3.png') },
    { id: 5, name: 'Vệ sinh sofa, nệm', img: require('../Img/Item4.png') },
    { id: 6, name: 'Diệt trừ côn trùng', img: require('../Img/Item5.png') },
    { id: 7, name: 'Vệ sinh điện máy', img: require('../Img/Item6.png') }
]
const ListStaff = [
    {id:1, name :'Thu Huyền', img :require('../Img/Staff.png'), star:'3.8'},
    {id:2, name :'Thu Huyền', img :require('../Img/Staff.png'), star:'3.8'},
    {id:3, name :'Thu Huyền', img :require('../Img/Staff.png'), star:'3.8'},
    {id:4, name :'Thu Huyền', img :require('../Img/Staff.png'), star:'3.8'},
    {id:5, name :'Thu Huyền', img :require('../Img/Staff.png'), star:'3.8'},
]
const Listpromotion = [
    {id:1, name:'Việc nhà khỏi lo, một chạm thảnh thơi',title:'Ưu tiên sử dụng năng lực giúp việc linh động toàn cầu...', img :require('../Img/promotion.png')},
    {id:2, name:'Việc nhà khỏi lo, một chạm thảnh thơi',title:'Ưu tiên sử dụng năng lực giúp việc linh động toàn cầu...', img :require('../Img/promotion.png')},
]
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                { title: 'a', url: require('../Img/Rectangle.png') },
                { title: 'b', url: require('../Img/Rectangle.png') },
                { title: 'c', url: require('../Img/Rectangle.png') },
                { title: 'd', url: require('../Img/Rectangle.png') },
                { title: 'e', url: require('../Img/Rectangle.png') },
            ],
            activeSlide: 0,
        };
    }

    _renderItem = ({ item, index }) => {
        return (

            <Image key={index} source={item.url} style={{ width: '100%', height: '100%' }} />

        );
    }
    render() {
        return (
            <ScrollView>
                <ImageBackground source={require('../Img/MaskGroup.png')} style={{ width: Width, height: 148, paddingLeft: 26, paddingTop: 60 }}>
                    <View style={{ flexDirection: 'row'}}>
                        <Image source={require('../Img/Client.png')} />
                        <View style={{ paddingTop: 10 }}>
                            <Text style={{ fontSize: 12, fontWeight: '400', color: '#FFF' }}>Chaò buổi sáng!</Text>
                            <Text style={{ fontSize: 18, fontWeight: '600', color: '#FFF' }}>Vũ Hạ Lê Nguyên</Text>
                        </View>
                    </View>
                    <Image style={{ position: 'absolute', right: 22, top: 60 }} source={require('../Img/New.png')} />

                </ImageBackground>
                <View style={{ marginTop: 25 }}>
                    <Text style={{ fontSize: 18, fontWeight: '600', marginLeft: 25 }}>Danh sách dịch vụ</Text>
                    <View style={styles.listItem}>
                        {List.map((data) => {
                            return (
                                <View style={{ marginLeft: 25, marginTop: 16, width: 72, }}>
                                    <View style={{ padding: 20, backgroundColor: '#F3FDE8', borderRadius: 10, marginBottom: 8, }}><Image source={data.img} /></View>

                                    <Text style={{ textAlign: 'center' }}>{data.name}</Text>
                                </View>
                            )
                        })}

                    </View>
                </View>
                <View style={{marginTop:25}}>
                    <View style={{ height: 200 }}>
                        <Carousel
                            data={this.state.data}
                            renderItem={this._renderItem}
                            itemWidth={Width * 0.8}
                            sliderWidth={Width }
                            onSnapToItem={index => this.setState({ activeSlide: index })} //for pagination
                            loop
                            containerCustomStyle={{marginBottom:-30}}
                            autoplay
                        />
                        <Pagination
                            dotsLength={this.state.data.length}
                            activeDotIndex={this.state.activeSlide}
                            containerStyle={{ marginTop: -20, }}
                            dotStyle={{
                                width: 20,
                                height: 8,
                                borderRadius: 4,
                                backgroundColor: '#80BE34',

                            }}
                            inactiveDotStyle={{
                                width: 10, borderRadius: 4,
                                height: 10, backgroundColor: '#E5E5E8',
                            }}
                        />
                    </View>
                </View>
                <View style={{marginTop:18}}>
                    <View style={{justifyContent:'space-between',flexDirection:'row',marginHorizontal:16}}>
                        <Text style={{fontSize:18,fontWeight:'600'}}>Nhân viên yêu thích</Text>
                        <Text style={{fontWeight:'400',fontSize:14, color:'#2D9AFF'}}>Xem tất cả</Text>
                    </View>
                    <ScrollView horizontal={true}>
                        {ListStaff.map((item)=>{
                            return (
                                <View key={item.id}style={{textAlign:'center',marginHorizontal:13, marginVertical:10}}>
                                    <Image source={item.img} style={{marginHorizontal:10}}/>
                                    <Text>{item.name}</Text>
                                    <View style={{flexDirection:'row',alignSelf:'center'}}>
                                        <Icons name ='star' style={{color:'yellow'}}/>
                                        <Text>{item.star}</Text>
                                    </View>
                                </View>
                            )
                        })}
                    </ScrollView>
                </View>
                <View style={{marginTop:18}}>
                    <View style={{justifyContent:'space-between',flexDirection:'row',marginHorizontal:16}}>
                        <Text style={{fontSize:18,fontWeight:'600'}}>Tin tức và Khuyến mãi</Text>
                        <Text style={{fontWeight:'400',fontSize:14, color:'#2D9AFF'}}>Xem tất cả</Text>
                    </View>
                    <ScrollView horizontal={true}>
                        {Listpromotion.map((item)=>{
                            return (
                                <View key={item.id}style={{textAlign:'center',marginHorizontal:13, marginVertical:10, width: 240}}>
                                    <Image source={item.img} style={{}}/>
                                    <Text style={{fontSize:14,fontWeight:'600',color:'#0C1132'}}>{item.name}</Text>
                                    <Text style={{fontSize:12,fontWeight:'400',color:'#475461'}}>{item.title}</Text>
                                </View>
                            )
                        })}
                    </ScrollView>
                </View>  
            </ScrollView>
        );
    }
}

export default Home;
const styles = StyleSheet.create({
    listItem: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    }
});
