import React, { useState } from 'react';
import { View, Text, Image, Modal, TouchableOpacity, TouchableWithoutFeedback, Animated } from 'react-native';
import { Header } from '../../imports/import'; 
import { styles } from './TelaHorariosStyles';
import { PinchGestureHandler, State, GestureHandlerRootView } from 'react-native-gesture-handler';

const TelaHorarios = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [scale, setScale] = useState(new Animated.Value(1));

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  const onPinchGestureEvent = Animated.event(
    [{ nativeEvent: { scale: scale } }],
    { useNativeDriver: true }
  );

  const onPinchHandlerStateChange = ({ nativeEvent }) => {
    if (nativeEvent.state === State.END) {
      if (nativeEvent.scale < 1) {
        Animated.spring(scale, {
          toValue: 1,
          useNativeDriver: true,
        }).start();
      }
    }
  };

  return (
      <View style={styles.container}>
        <Header title="KSA" />
        <View style={styles.content}>
          <View style={styles.textComSetaContainer}>
            <Image source={require('../../assets/Seta.png')} style={styles.setaInline} />
            <Text style={styles.textComSeta}>Horários</Text>
          </View>
          <TouchableOpacity onPress={toggleModal}>
            <Image 
              source={require('../../assets/Gradehorario.png')} 
              style={styles.gradeHorarioImage} 
            />
          </TouchableOpacity>
        </View>

        <Modal animationType="fade" transparent={true} visible={modalVisible} onRequestClose={toggleModal}>
        <GestureHandlerRootView style={{ flex: 1 }}> 
          <View style={styles.modalContainer}>
          <PinchGestureHandler
            onGestureEvent={onPinchGestureEvent}
            onHandlerStateChange={onPinchHandlerStateChange}
          >
            <Animated.View style={{ transform: [{ scale }] }}>
              <Image
                source={require('../../assets/Gradehorario.png')}
                style={styles.gradeHorarioImage}
              />
            </Animated.View>
          </PinchGestureHandler>
          </View>
          </GestureHandlerRootView>
        </Modal>
      </View>

  );
};

export default TelaHorarios;
