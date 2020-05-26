import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  Button,
  Dimensions,
  Image,
   BackHandler,
  TouchableOpacity,
} from 'react-native';

import {
 heightPercentageToDP as hp,
 widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {  Paragraph, Menu, Divider, Provider } from 'react-native-paper';
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Hr from 'react-native-hr-component'
const width = Dimensions.get('window').width;


class Home extends React.Component <Props> {
 static navigationOptions = {
    //To hide the NavigationBar from current Screen
    header: null
  };
 constructor(props) {
     super(props)
     this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
     this.state = {
          email: '',
          password: '',
           name: '',
           phone: '',
           visible: false,
       }


}


componentWillMount() {
BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
}

componentWillUnmount() {
BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
}

handleBackButtonClick() {
this.props.navigation.navigate('Welcome');
return true;
}




  render() {
    const {navigate} = this.props.navigation;
    return (
     <View style={styles.container}>
     <Image source={require('../assets/flowerC.png')} style={styles.flowerSize}/>
     <View style={{position:'absolute', width:wp('100%'), height:hp('10%'), alignItems:'center',top:hp('3%')}}>

     </View>
     <View style={{ width:wp('100%'),height:hp('10%'), alignItems:'center',  position:'absolute',top:hp('1%') ,width:wp('100%'),justifyContent:'space-between',flexDirection:'row'}}>
    <View style={{borderRadius:100, backgroundColor:'#000',marginLeft:20,}}>
     <Image source={require('../assets/logo.png')} style={styles. imageSize} />
    </View>
    <View style={{borderRadius:100,marginRight:20, }}>
    <TouchableOpacity
        style={styles.circleTop}
        onPress={() => this.props.navigation.navigate('Profile')}>
   <Image source={require('../assets/logout.png')} style={styles.imageSizeLogout} />
   <Text style={{fontSize:8, textAlign:'center', fontWeight:'bold'}}>Logout</Text>
    </TouchableOpacity>
   </View>
   </View>


 <View style={styles.content}>

<View style={styles.aboutComapny}>
      <View style={{borderRadius:100,marginTop:50, marginLeft:30,marginRight:20 }}>
      <Image source={require('../assets/person.png')} style={styles.imageSizeLogout} />
      </View>
      <View style={{marginTop:55, alignItems:'center'}}>
      <Text style={{fontSize:20, textAlign:'center', fontWeight:'bold', }}>Ebube Harrison</Text>
      </View>
</View>
<View style={styles.waterContainer}>
     <View style={styles.title}><Text style={{fontWeight:'bold', fontSize:12, marginLeft:30, color:'#fff'}}>Total Order</Text></View>
     <View style={styles.reportCover}>
     <View style={styles.waterReport}>
          <Text style={{fontSize:18,fontWeight:'bold'}}>204</Text>
          <Text style={{fontSize:23,fontWeight:'bold'}}>Water</Text>
     </View>
     <View style={styles.juiceReport}>
          <Text style={{fontSize:18, fontWeight:'bold'}}>89</Text>
          <Text style={{fontSize:23,fontWeight:'bold'}}>Juice</Text>
     </View>
     </View>
</View>
<View style={styles.juiceContainer}>

    <TouchableOpacity
           onPress={() => this.props.navigation.navigate('Water')}>
          <View style={styles.water}>
              <Image source={require('../assets/water.png')} style={styles.waterSize} />
              <Text style={{fontSize:22,fontWeight:'bold'}}>Water</Text>
          </View>
         </TouchableOpacity>
         <TouchableOpacity
               onPress={() => this.props.navigation.navigate('Juice')}>
          <View style={styles.juice}>
                <Image source={require('../assets/juice.png')} style={styles.juiceSize} />
                <Text style={{fontSize:22,fontWeight:'bold'}}>Juice</Text>
          </View>
          </TouchableOpacity>
</View>
     </View>

   </View>



    );
  }
}
export default Home;

const styles = StyleSheet.create({

 container:{
flexDirection:'column',
  width :width,
  flex:1,
 alignItems:'center',
 justifyContent:'center',
 backgroundColor:'#ffffff'
 },
 caption:{
  color:'	rgb(255,165,0)',
  margin:10,
  fontSize:25,
 },
 imageSize:{
 width: 60,
 height:60,
 alignSelf: 'center',
 resizeMode: 'contain',

  },
  imageSizeLogout:{
  width: 40,
  height:40,
  alignSelf: 'center',
  resizeMode: 'contain',
   },
 content:{
position:'absolute',
 justifyContent:'center',
top:hp('17%'),
width:wp('100%'),
 height:hp('81%'),
alignItems:'center',
flexDirection:'column'
 },

flowerSize:{
 width:450,
 height:480,
 marginTop:-200,
 marginLeft:400,
 backgroundColor:'#fff',
},
aboutComapny:{
 width:wp('100%'),
 height:hp('23%'),
 borderStyle:'solid',
 position:'absolute',
 borderWidth:0,
 flexDirection:'row',
 borderTopRightRadius:20,
 borderTopLeftRadius:20,
 top:19,
 opacity:0.7

},
waterContainer:{
 width:wp('100%'),
 height:hp('23%'),
 borderStyle:'solid',
 position:'absolute',
 borderWidth:0,
 flexDirection:'column',
 justifyContent:'space-around',
 borderTopRightRadius:20,
 borderTopLeftRadius:20,
 backgroundColor:'#006600',
 top:149,
 opacity:0.7
},
juiceContainer:{
 width:wp('100%'),
 height:hp('43%'),
 position:'absolute',
 borderWidth:0,
 flexDirection:'row',
 justifyContent:'space-around',
 borderTopRightRadius:20,
 borderTopLeftRadius:20,
  backgroundColor:'#fff',
 bottom:0,


},
water:{
 width:wp('40%'),
 height:hp('26%'),
borderRadius:20,
borderWidth:1,
borderStyle:'solid',
borderColor:'grey',
marginTop:20,
alignItems:'center',
resizeMode: 'contain',
 shadowColor: '#000',
 shadowOffset: { width: 0, height:hp('0.5%') },
 shadowOpacity: 2,
 shadowRadius: 2,
 elevation: hp('0.5%'),
 opacity:0.9,
 zIndex:8,
 backgroundColor:'#fff'
},
juice:{
 width:wp('40%'),
 height:hp('26%'),
 borderRadius:20,
 borderWidth:1,
 borderStyle:'solid',
 borderColor:'grey',
 marginTop:20,
 alignItems:'center',
 resizeMode: 'contain',
  shadowColor: '#000',
  shadowOffset: { width: 0, height:hp('0.5%') },
  shadowOpacity: 2,
  shadowRadius: 2,
  elevation: hp('0.5%'),
  opacity:0.9,
  zIndex:8,
  backgroundColor:'#fff'
},

title:{
width:wp('80%'),
marginLeft:5,
},
reportCover:{
flexDirection:'row',
justifyContent:'space-around'
},
waterReport:{
 width:wp('45%'),
 height:hp('12%'),
 backgroundColor:'#f2f2f2',
 marginBottom:50,
 borderRadius:10,
 flexDirection:'column',
 justifyContent:'center',
 alignItems:'center',
 opacity:0.8
},
juiceReport:{
 width:wp('45%'),
 height:hp('12%'),
 backgroundColor:'#f2f2f2',
 marginBottom:50,
 borderRadius:10,
flexDirection:'column',
justifyContent:'center',
alignItems:'center',
opacity:0.8
},
waterSize:{
 width:80,
 height:80,
 margin:15
},
juiceSize:{
 width:80,
 height:80,
 margin:15
}
})
