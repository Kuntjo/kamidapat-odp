import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";

const RegisterTelepon = () => {
    return(
        <View>
            <View style={styles.container}>
                <Text>Nomor Telepon</Text>
                <View style={styles.inputBox}>
                    <TextInput placeholder="Masukkan Nomor Telepon"></TextInput>
                </View>
            </View>
        </View>
    )
}

// const [phone, setPhone] = useState()

// const validation = (phone) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (phone === '???'){

//                 resolve(true)
//             } else {

//                 reject('Fuck off')
//             }
//         }, 2000)
//     })
// }

// const handleClick = async() => {
//     try {
//         setLoading(true)
//         setResult(await validation(phone))
//     } catch (error) {
//         setResult(null)
//     } finally {
//         setLoading(false)
//     }
// }

export default RegisterTelepon;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        padding: 30
    },

    inputBox: {
        borderColor: '#bdbdbd',
        backgroundColor: '#e0e0e0',
        borderRadius: 5,
        padding: 3,
        paddingHorizontal: 8
    }
})