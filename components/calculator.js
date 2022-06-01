import { SafeAreaView, Text, View } from 'react-native'
import React, { PureComponent } from 'react'

export default class calculator extends PureComponent {

    constructor(props){  
        super(props);  
        this.state = {  
             data: '00'  
          }  
        
      }  

  render() {
    return (
      <SafeAreaView
           style={{
               flex:1,
               backgroundColor:'#fff',


           }}
      >
          <View
             style={{width:'95%',alignSelf:'center',height:150,
            }}
          >
              <Text
                 style={{fontSize:18,fontStyle:'normal',textAlign:'right',marginRight:10}}
              >
                  {this.state.data}
                
              </Text>

          </View>
            <View  
              style={{flex:1,
            backgroundColor:'#000',
            width:'100%',
            alignSelf:'center'        
                }}
            >
                for (let i = 0; i < 5; i++) {
                <View
                   style={{height:100,
                width:100,
            backgroundColor:'white'}}
                >

                </View>
  }

            </View>

      </SafeAreaView>
    )
  }
}