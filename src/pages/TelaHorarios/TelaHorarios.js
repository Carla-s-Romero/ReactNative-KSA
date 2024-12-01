import React, { useState } from 'react';
import { View, Text, Image, Modal, TouchableOpacity, Animated, Button, TouchableWithoutFeedback } from 'react-native';
import { Header } from '../../imports/import';
import { styles } from './TelaHorariosStyles';
import {
  PinchGestureHandler,
  PanGestureHandler,
  State,
  GestureHandlerRootView,
} from 'react-native-gesture-handler';

const TelaHorarios = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const scale = new Animated.Value(1);
  const translateX = new Animated.Value(0);
  const translateY = new Animated.Value(0);

  const baseScale = new Animated.Value(1);
  const pinchScale = new Animated.Value(1);
  const combinedScale = Animated.multiply(baseScale, pinchScale);

  const lastTranslateX = React.useRef(0);
  const lastTranslateY = React.useRef(0);
  const lastScale = React.useRef(1);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  const onPinchGestureEvent = Animated.event(
    [{ nativeEvent: { scale: pinchScale } }],
    { useNativeDriver: true }
  );

  const onPinchHandlerStateChange = ({ nativeEvent }) => {
    if (nativeEvent.state === State.END) {
      lastScale.current *= nativeEvent.scale;
      if (lastScale.current < 1) lastScale.current = 1;
      if (lastScale.current > 3) lastScale.current = 3;

      baseScale.setValue(lastScale.current);
      pinchScale.setValue(1);
    }
  };

  const onPanGestureEvent = Animated.event(
    [
      {
        nativeEvent: {
          translationX: translateX,
          translationY: translateY,
        },
      },
    ],
    { useNativeDriver: true }
  );

  const onPanHandlerStateChange = ({ nativeEvent }) => {
    if (nativeEvent.state === State.END) {
      const sensitivityFactor = 0.6; 
      const maxOffsetY = 100; 
  
      lastTranslateX.current += (nativeEvent.translationX * sensitivityFactor) / lastScale.current;
      lastTranslateY.current += (nativeEvent.translationY * sensitivityFactor) / lastScale.current;
  
  
      if (lastTranslateY.current > maxOffsetY) lastTranslateY.current = maxOffsetY;
      if (lastTranslateY.current < -maxOffsetY) lastTranslateY.current = -maxOffsetY;
  
      translateX.setValue(lastTranslateX.current);
      translateY.setValue(lastTranslateY.current);
    }
  };

  const zoomIn = () => {
    lastScale.current = Math.min(lastScale.current + 0.5, 3);
    baseScale.setValue(lastScale.current);
  };

  const zoomOut = () => {
    lastScale.current = Math.max(lastScale.current - 0.5, 1);
    baseScale.setValue(lastScale.current);
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
          {/* Detectar clique fora */}
          <TouchableWithoutFeedback onPress={toggleModal}>
            <View style={styles.modalContainer}>
              <PanGestureHandler
                onGestureEvent={onPanGestureEvent}
                onHandlerStateChange={onPanHandlerStateChange}
              >
                <Animated.View>
                  <PinchGestureHandler
                    onGestureEvent={onPinchGestureEvent}
                    onHandlerStateChange={onPinchHandlerStateChange}
                  >
                    <Animated.View
                      style={{
                        transform: [
                          { scale: combinedScale },
                          { translateX: translateX },
                          { translateY: translateY },
                        ],
                      }}
                    >
                      <Image
                        source={require('../../assets/Gradehorario.png')}
                        style={styles.gradeHorarioImage}
                      />
                    </Animated.View>
                  </PinchGestureHandler>
                </Animated.View>
              </PanGestureHandler>

              {/* Botões de Controle de Zoom */}
              <View style={styles.zoomControls}>
                  <TouchableOpacity onPress={zoomIn} style={styles.zoomButton}>
                    <Text style={styles.zoomButtonText}>+</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={zoomOut} style={styles.zoomButton}>
                    <Text style={styles.zoomButtonText}>-</Text>
                  </TouchableOpacity>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </GestureHandlerRootView>
      </Modal>
    </View>
  );
};

export default TelaHorarios;
