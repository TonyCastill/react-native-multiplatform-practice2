import {StatusBar} from 'expo-status-bar'
import {StyleSheet,Text,View} from 'react-native'
// import { TEXT } from 'sequelize';

export default function App(){
    return(
        <View style={styles.container}>
            <View style={[styles.box,{backgroundColor:'orange'}]}>
                <Text>Hello</Text>
            </View>
            <View style={[styles.box,{backgroundColor:'blue'}]}></View>
            <View style={[styles.box,{backgroundColor:'green'}]}></View>
            <View style={[styles.box,{backgroundColor:'yellow'}]}></View>
            <View style={[styles.box,{backgroundColor:'red'}]}></View>
            {/* <Text>Hello, world!</Text>
            <StatusBar style="auto"/> */}
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexWrap:'wrap',
        flexDirection:'column',
        direction:'ltr', //rtl Componentes en la derecha | ltr Componentes a izquierda

        backgroundColor:'#fff',//pink
        alignItems:'flex-start',
        // stretch will stretch items to fill the 100% of parent's width
        // (childs shall not have a width defined)

        justifyContent:'center',
    },
    box: {
        // width:100,
        // height:100
        width: '100%'
    }
});