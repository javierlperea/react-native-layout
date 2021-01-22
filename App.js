import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

export default function App() {
  return (
    <>
        <ScrollView>
            {/* cuando no necesite crear un selector puedo dar estilos de esta forma */}
            <View style={{ flexDirection: 'row' }}>
                <Image
                  style={ styles.banner }
                  source={ require('./assets/img/bg.jpg') }
                />
            </View>

            <View style={ styles.container }>
                <Text style={ styles.title }>Que hacer en Paris</Text>
                <ScrollView
                  horizontal
                >
                    <Image
                        style={ styles.ciudad }
                        source={ require('./assets/img/actividad1.jpg') }
                    />

                    <Image
                        style={ styles.ciudad }
                        source={ require('./assets/img/actividad2.jpg') }
                    />

                    <Image
                        style={ styles.ciudad }
                        source={ require('./assets/img/actividad3.jpg') }
                    />

                    <Image
                        style={ styles.ciudad }
                        source={ require('./assets/img/actividad4.jpg') }
                    />

                    <Image
                        style={ styles.ciudad }
                        source={ require('./assets/img/actividad5.jpg') }
                    />
                </ScrollView>

                <Text style={ styles.title }>Los mejores alojamientos</Text>
                <View>
                    <View>
                        <Image 
                            style={ styles.mejores }
                            source={ require('./assets/img/mejores1.jpg') }
                        />
                    </View>

                    <View>
                        <Image 
                            style={ styles.mejores }
                            source={ require('./assets/img/mejores2.jpg') }
                        />
                    </View>

                    <View>
                        <Image 
                            style={ styles.mejores }
                            source={ require('./assets/img/mejores3.jpg') }
                        />
                    </View>
                </View>
            </View>

            <Text style={ styles.title }>Hospedajes en LA</Text>
            <View style={ styles.listado }>
                <View style={ styles.listadoItem }>
                    <Image 
                        style={ styles.mejores }
                        source={ require('./assets/img/hospedaje1.jpg') }
                    />
                </View>
                <View style={ styles.listadoItem }>
                    <Image 
                        style={ styles.mejores }
                        source={ require('./assets/img/hospedaje2.jpg') }
                    />
                </View>
                <View style={ styles.listadoItem }>
                    <Image 
                        style={ styles.mejores }
                        source={ require('./assets/img/hospedaje3.jpg') }
                    />
                </View>
                <View style={ styles.listadoItem }>
                    <Image 
                        style={ styles.mejores }
                        source={ require('./assets/img/hospedaje4.jpg') }
                    />
                </View>
            </View>
        </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  banner: {
    flex: 1,
    height: 200,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    marginVertical: 15,
    textAlign: 'center'
  },
  container: {
    marginHorizontal: 10,
  },
  ciudad: {
    width: 200,
    height: 250,
    marginRight: 10
  },
  mejores: {
    height: 200,
    width: '100%',
    marginBottom: 10
  },
  listado: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 10
  },
  listadoItem: {
    flexBasis: '49%',     // flexBasis equivale a 'width', se usa cuando tengo flexDirection: 'row'
  }
});