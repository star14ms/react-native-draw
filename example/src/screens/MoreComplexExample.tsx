import React, { useRef } from 'react';
import { View, StyleSheet, Button } from 'react-native';
import { Canvas, CanvasRef } from '@benjeau/react-native-draw';

export default () => {
  const canvasRef = useRef<CanvasRef>(null);

  const handleUndo = () => {
    canvasRef.current?.undo();
  };

  const handleClear = () => {
    canvasRef.current?.clear();
  };

  return (
    <>
      <Canvas 
        ref={canvasRef}
        color="red"
        thickness={20}
        opacity={0.6}
        style={styles.canvasSide}
      />
      <View style={styles.ControlSide}>
        <Button title="Undo" onPress={handleUndo} />
        <Button title="Clear" onPress={handleClear} />
      </View>
    </>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 5,
  },
  canvasSide: {
    flex: 4,
    backgroundColor: 'yellow'
  },
  ControlSide: {
    flex: 1,
    flexDirection: "row",
  },
})