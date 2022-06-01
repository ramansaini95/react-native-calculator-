import {StyleSheet} from 'react-native';
import {React} from 'react';

export default signUp = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: "#ffff"
    },
    text:{
        fontSize:18,
        fontColor:'brown',
        marginTop:10,
        width:'90%',alignSelf:'center'
       // fontWeight: "bold",
        
        //textAlign: "left",
    },
    textInputstyle:{width:"90%",height:45,borderWidth:1,borderRadius:10,marginTop:10,alignSelf:'center'},
    termsline:{ fontSize:18,
      color:'brown',
      marginTop:20,
      width:'90%',alignSelf:'center',textAlign:'center'},
      signUpButton:{
        height:45,
        width:'90%',
        alignSelf:'center',
        backgroundColor:'black',
        marginTop:20,
        justifyContent:'center',
        borderRadius:10
    },
    buttonText:{fontSize:18,
      fontWeight:'bold',
         color:'#ffff',
         textAlign:'center'

  },
  imageView:{height:45,width:130,
    borderRadius:40,
   backgroundColor:'blue',justifyContent:'center'
},
imageStyle:{height:30,width:70,
  alignSelf:'center',
 resizeMode:'contain',
 tintColor:'white'
}

})
//export default signUp;