import { useEffect, useState } from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native"
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import axios from 'axios';



const HomeScreen = ({navigation, username}) => {
    const [promo, setPromo] = useState()
    const [user, setUser] = useState()
    const [transfer, setTransfer] = useState()
    const [ppob, setPpob] = useState()

    const getPromo = () =>{
        axios.get('https://private-anon-9f9f06ba8a-itodpbni.apiary-mock.com/menu/promo')
        .then(response => {
          console.log('This is axios getting promo', response.data)
          setPromo(response.data)
      })
        .catch(error => console.error('Error', error))
    }

    const getTransfer = () =>{
        axios.get('https://private-anon-9f9f06ba8a-itodpbni.apiary-mock.com/menu/transfer')
        .then(response => {
          console.log('This is axios getting transfer', response.data)
          setTransfer(response.data)
      })
        .catch(error => console.error('Error', error))
    }

    const getAccountAxios = () => {
    
        axios.get('https://private-anon-9f9f06ba8a-itodpbni.apiary-mock.com/account')
          .then(response => {
            console.log('This is axios getting account', response.data)
            setUser(response.data)
        })
          .catch(error => console.error('Error', error))
    }

    const getPpob = () => {
    
        axios.get('https://private-anon-9f9f06ba8a-itodpbni.apiary-mock.com/menu/ppob')
          .then(response => {
            console.log('This is axios getting ppob', response.data)
            setPpob(response.data)
        })
          .catch(error => console.error('Error', error))
    }


    

    // const array = []
    // array = promo.promos.image

    useEffect(() => {
        getAccountAxios();
        getTransfer()
        getPpob()
        getPromo();
      }, []);

    return (
        
        <ScrollView>
            <Image style={styles.bg_ijo} source={require('../../assets/Background_coba.png')}></Image>
            <View style={styles.container}>

                <View style={styles.top_greeting}>
                    <View style={styles.greeting}>
                        <Text style={styles.putih}>Assalamualaikum</Text>
                        <Text style={[ styles.putih, styles.bold, styles.bigText ]}>{user && user.user.name}</Text>
                    </View>
                    <View>
                        <Image source={require('../../assets/Notification.png')}></Image>
                    </View>
                </View>

                {/* <Image style={{ alignSelf: 'center' }} source={require('../../assets/Section Balance.png')}></Image> */}

                <View style={styles.kotak_saldo}>
                    <View style={styles.saldo}>
                        <Text style={styles.ungu}>Saldo</Text>
                        <Text style={[styles.ungu, styles.bold, styles.bigText ]}>Rp.{user && user.user.balance}</Text>
                    </View>

                    <View
                     style={{ alignSelf: 'center', paddingVertical: 25 }}>
                        <Image source={require('../../assets/vector_garis.png')}></Image>
                    </View>

                    <View style={styles.saldo_buttons}>
                        <View style = {{ flexDirection: 'row', justifyContent: 'space-around', width: '100%'}}>
                            {
                                transfer && transfer.menu && transfer.menu.map((item,index) => 
                                
                                    <TouchableOpacity style={{ alignItems: 'center',  flex: 1 , justifyContent: 'space-around'}}>
                                        <Image
                                            key={index}
                                            style={{ height: 46, width: 46, }}
                                            source={{ uri: item.image }}>

                                        </Image>
                                        <Text style={[{ alignSelf: 'center' }, styles.ungu]}>{item.title}</Text>
                                    </TouchableOpacity>
                                )
                            }

                        </View>
                        

                        {/* <TouchableOpacity>
                            <Image source={require('../../assets/qris_icon_title.png')}></Image>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <Image source={require('../../assets/kirimdana_icon_title.png')}></Image>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <Image source={require('../../assets/topup_icon_title.png')}></Image>
                        </TouchableOpacity> */}
                                
                    </View>

                </View>

                <View style={styles.list_bayar}>
                    <Text style={[styles.ungu, styles.bigText, styles.bold, {padding: 10}]}>Lihat Pembayaran</Text>

                    {/* <View>
                        {
                            ppob && ppob.menu && ppob.list.map((item,index) => 
                                
                            <TouchableOpacity style={{ alignItems: 'center' , justifyContent: 'space-around'}}>
                                <Image
                                    key={index}
                                    style={{ height: 56, width: 56, }}
                                    source={{ uri: item.image }}>

                                </Image>
                            </TouchableOpacity>
                        )
                        }
                    </View> */}

                    <View style={styles.pembayaran_buttons}>
                    <TouchableOpacity>
                            <Image source={require('../../assets/Telco.png')}></Image>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <Image source={require('../../assets/Pln.png')}></Image>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <Image source={require('../../assets/Pdam.png')}></Image>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <Image source={require('../../assets/School.png')}></Image>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.promos}>
                    <View style={styles.promo_header}>
                        <Text style={[styles.ungu, styles.bold, styles.bigText]}>Promo & Diskon</Text>
                        <Text style={{ color:'#39B54A' }}>Lihat Semua</Text>
                    </View>

                    <ScrollView horizontal={true} disableIntervalMomentum={true} >
                        {
                            promo && promo.promos && promo.promos.map((item,index) => 
                                <TouchableOpacity>
                                    <Image
                                        key={index}
                                        style={styles.sidescroll_img}
                                        source={{
                                        uri: item.image,
                                    }}
                                    />
                                </TouchableOpacity>
                            )
                                
                        }
                    </ScrollView>
                </View>

            </View>
            
        </ScrollView>

        
    )
}

export default HomeScreen;

const styles = StyleSheet.create({
    bg_ijo: {
        position: 'absolute',
        width: '100%'
    },

    greeting: {
        flexDirection: 'column',
    },

    top_greeting: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 40,
        marginTop: 30
    },

    container: {
        paddingVertical: 10,
        paddingHorizontal: 20
    },

    kotak_saldo: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 20
    },

    saldo: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingHorizontal: 10,
        alignItems: 'center'
    },

    saldo_buttons: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingHorizontal: 10
    },

    ungu:{color: '#852884'},

    putih: {color: '#fff'},

    bold: {fontWeight: 'bold'},

    bigText: {fontSize:18},
    
    list_bayar: {
        alignContent: 'center',
        paddingTop: 20
    },

    pembayaran_buttons: {
        flexDirection: 'row',
        // alignSelf: 'center',
        justifyContent: 'space-evenly'
    },

    promo_header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        paddingBottom: 10
    },

    sidescroll_img: {
        marginHorizontal: 10,
        height: 170,
        width: 318
    },

    promos: {
        paddingVertical: 20
    },

    tinyLogo: {
        width: 50,
        height: 50,
      }
})