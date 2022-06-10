import React from 'react';
import {View, Image, StyleSheet, SafeAreaView, StatusBar, Text,Pressable, Linking} from 'react-native';
const colorGithub = '#010409';
const colorFontGithub = '#C9D1D9';
const colorDarkFontGithub = '#4F565E';

const imageProfileGithub = 'https://avatars.githubusercontent.com/u/91018515?v=4';

const urlToMyGithub = 'https://github.com/danieloliveirass';

/*const handlePressGoToGithub= Linking.canOpenURL(urlToMyGithub);*/

const App = () => {

    const handlePressGoToGithub = async () => {
        console.log('Verificando link');
        const res = await Linking.canOpenURL(urlToMyGithub);
        if (res){
            console.log('Link aprovado');
            console.log('Abrindo Link...');
            await Linking.openURL(urlToMyGithub);
         }
    };
    
    return (<SafeAreaView style={style.container}>
        <StatusBar backgroundColor={colorGithub} barStyle="light-content" /> 
        <View style={style.content}>
            <Image accessibilityLabel="Avatar de Daniel com fundo branco" style={style.avatar} source={{uri:imageProfileGithub}}/>
            <Text accessibilityLabel="Nome: Daniel Oliveira" style={[style.defaultText, style.name]}>Daniel Oliveira</Text>
            <Text accessibilityLabel="Nick name: daniel oliveirass" style={[style.defaultText, style.nickname]}>danieloliveirass</Text>
            <Text
            accessibilityLabel="Descrição: Desenvolvedor front-end @dansilva_" style={[style.defaultText, style.description]}>Desenvolvedor front-end 👨🏽‍💻 @dansilva_</Text>
            <Pressable onPress={handlePressGoToGithub}>
                <View style={style.button}>
                    <Text style={[style.defaultText,style.textButton,]}>
                        Open in Github
                    </Text>
                </View>
            </Pressable>
        </View>
    </SafeAreaView>);
}; /* safe proteje um componente para nao fugir para outra area*/

export default App;

const style = StyleSheet.create({  //funcao que cria objetos que dirão como funciona os estilos
    container: { //estilo da view. Column
        backgroundColor: colorGithub,
        flex: 1,//expande poara a tela inteira
        justifyContent: 'center',
    },
    content:{
        alignItems:'center',
        padding:20,
    },
    avatar: {
        height: 200,
        width:200,
        borderRadius: 100,
        borderColor: 'white',
        borderWidth: 2,
    },
    defaultText: {
        color: colorFontGithub,
    },
    name:{
        marginTop: 10,
        fontWeight: 'bold',
        fontSize:24,
    },
    nickname: {
        fontSize:18,
        color: colorDarkFontGithub,
    },
    description:{
        fontWeight: 'bold',
        fontSize:14,
    },
    button:{
        marginTop: 20,
        backgroundColor: colorDarkFontGithub,
        borderRadius: 10,
        padding: 20,
    },
    textButton:{
        fontWeight: 'bold',
        fontSize:16,
    },
});