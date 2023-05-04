import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { Button, Modal } from "react-native-paper";
import { AnimatePresence, motion } from "framer-motion";
import RegisterCarComponent from "../components/SaveCarComponent";
export const SaveCarScreen = () => {
  const [showRegisterCarModal, setShowRegisterCarModal] = useState(false);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => setShowRegisterCarModal(true)}
      >
        <Text style={styles.buttonText}>Registrar nuevo carro</Text>
      </TouchableOpacity>
      <AnimatePresence>
        {showRegisterCarModal && (
          <motion.div
            initial={{ translateY: 100 }}
            animate={{ translateY: 0 }}
            exit={{ translateY: 500 }}
            transition={{ type: "spring", duration: 0.5 }}
            style={styles.modal}
          >
            <Modal
              visible={true}
              onDismiss={() => setShowRegisterCarModal(false)}
            >
              <Button onPress={() =>setShowRegisterCarModal(false)}>X</Button>
              <RegisterCarComponent />
            </Modal>
          </motion.div>
        )}
      </AnimatePresence>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
  modal: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: "50%",
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
  },
});
