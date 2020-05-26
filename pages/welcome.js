import  React from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  Button,
  Dimensions,
  Animated,
  BackHandler,
  Easing,
  Image,
  TouchableOpacity,
} from 'react-native';

import {
 heightPercentageToDP as hp,
 widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import RBSheet from "react-native-raw-bottom-sheet";

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;


 class Welcome extends React.Component <Props> {

   static navigationOptions = {
       //To hide the NavigationBar from current Screen
       header: null,
     };


   render() {
    const {navigate} = this.props.navigation;

    return (
     <View style={styles.container}>
     <View style={styles.contain}>
     <View style={styles.leftContainer}>

     </View>
     <View style={styles.rightContainer}><Image source={require('../assets/flowerC.png')} style={styles.flowerSize}/></View>


     <TouchableOpacity
         style={styles.circleTop}
         onPress={() => this.props.navigation.navigate('Login')}>
     <View  >
     <Image source={require('../assets/login.png')} style={styles.iconSize}  />
     <Text style={styles.buttonText}>Login</Text>
     </View>
 </TouchableOpacity>
 <TouchableOpacity
     style={styles.circleMid}
     onPress={() => this.props.navigation.navigate('SignUp')}>
     <View >
     <Image source={require('../assets/add.png')} style={styles.iconSize}  />
     <Text style={styles.buttonText}>Sign Up</Text>
     </View>
     </TouchableOpacity>
     <TouchableOpacity
         style={styles.circleDown}
         onPress={() => this.props.navigation.navigate('Explore')}>
     <View >
     <Image source={require('../assets/book.png')} style={styles.iconSizeD}  />
     <Text style={styles.buttonText}>About Tanadi</Text>
     </View>
</TouchableOpacity>
     </View>
                   <View style={styles.companyName}>
                       <View style={styles.letterContainer}>
                              <Text style={styles.companyLetter}>T</Text>
                              <Text style={styles.companyLetter}>A</Text>
                              <Text style={styles.companyLetter}>N</Text>
                              <Text style={styles.companyLetter}>A</Text>
                              <Text style={styles.companyLetter}>D</Text>
                              <Text style={styles.companyLetter}>I</Text>

                       </View>
                       <View style={styles.logoContainer}>
                            <Image source={require('../assets/logo.png')} style={styles.logoSize}  />
                       </View>
                   </View>
   </View>

  );
 }
 }
 export default Welcome;



const styles = StyleSheet.create({

 container:{
flexDirection:'column',
  width :width,
 position:'absolute',
 flex:1,
 alignItems:'center',
},
contain:{
flexDirection:'row',
 width :width,
 height:height,
position:'absolute',
flex:1,
 zIndex:1,
 alignItems:'center',
  backgroundColor:'#ffffff',
},
leftContainer:{
 width:wp('100%'),
 height:hp('80%'),
 backgroundColor:'#009900',
 flexDirection:'column',
marginTop:hp('10%'),
 zIndex:4,
 position:'absolute',
 left:-220,
 borderTopRightRadius:2000,
 borderBottomRightRadius:2000,

},

rightContainer:{
 width:wp('50%'),
 height:hp('100%'),
backgroundColor:'#fff',
 position:'absolute',
 right:0,
 flexDirection:'column',
 zIndex:1,

},

circleTop:{
 width:150,
 height:150,
  backgroundColor:'#fff',
 borderRadius:100,
  position:'absolute',
  top:hp('12%'),
  left:wp('8%'),
  alignItems:'center',
  justifyContent:'center',
  resizeMode: 'contain',
   shadowColor: '#000',
   shadowOffset: { width: 0, height:hp('0.5%') },
   shadowOpacity: 2,
   shadowRadius: 2,
   elevation: hp('0.5%'),
   flexDirection:'row',
   opacity:0.9,
   zIndex:8,
},
circleMid:{
 width:150,
 height:150,
 backgroundColor:'#fff',
 borderRadius:100,
 left:wp('25%'),
  position:'absolute',
  top:hp('35%'),
  alignItems:'center',
  justifyContent:'center',
  resizeMode: 'contain',
   shadowColor: '#000',
   shadowOffset: { width: 0, height:hp('0.5%') },
   shadowOpacity: 2,
   shadowRadius: 2,
   elevation: hp('0.5%'),
   flexDirection:'row',
   opacity:0.8,
     zIndex:8,

},

circleDown:{
 width:150,
 height:150,
 backgroundColor:'#fff',
 borderRadius:100,
  position:'absolute',
  top:hp('60%'),
   left:wp('8%'),
  alignItems:'center',
  justifyContent:'center',
  resizeMode: 'contain',
   shadowColor: '#000',
   shadowOffset: { width: 0, height:hp('0.5%') },
   shadowOpacity: 2,
   shadowRadius: 2,
   elevation: hp('0.5%'),
   flexDirection:'column',
opacity:0.9,
  zIndex:8,
},
iconSize:{
width:50,
height:50,
margin:10,
},
iconSizeD:{
width:50,
height:50,
marginLeft:25,
},
buttonText:{
 fontSize:17,
 fontWeight:'bold',
 color:'#214D70'
},
companyName:{
 position:'absolute',
 width:wp('30%'),
 height:hp('100%'),
 right:10,
 flexDirection:'column',
 alignItems:'center',
 justifyContent:'space-between',
 zIndex:8,
},
letterContainer:{
 width:wp('30%'),
 height:hp('60%'),
flexDirection:'column',
 position:'absolute',
alignItems:'center',
top:10,
justifyContent:'space-around',
marginTop:70,

},
companyLetter:{
 fontSize:63,
 fontWeight:'bold',
 fontFamily:'serif',
 color:'#e4a26f',

},
logoContainer:{
 width:110,
 height:110,
  position:'absolute',
 top:hp('76%'),
 alignItems:'center',
 backgroundColor:'#000',
 borderRadius:100,
 justifyContent:'center',
 shadowColor: '#000',
 shadowOffset: { width: 0, height:hp('0.5%') },
 shadowOpacity: 2,
 shadowRadius: 2,
 elevation: hp('0.5%'),
 flexDirection:'column',
 opacity:0.9,
},
logoSize:{
 width:150,
 height:150,
 alignSelf:'center',
resizeMode: 'contain',
},
flowerSize:{
 width:450,
 height:380,
 marginRight:1000,
 backgroundColor:'#fff'
}


})
