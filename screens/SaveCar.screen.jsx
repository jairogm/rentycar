import React, { useContext, useState } from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { Button, Modal } from "react-native-paper";
import { AnimatePresence, motion } from "framer-motion";
import RegisterCarComponent from "../components/SaveCarComponent";
import { AppContext } from "../context/AppProvider";
import { styles } from "../styles/styles";
export const SaveCarScreen = () => {
  const {showRegisterCarModal, setShowRegisterCarModal}= useContext(AppContext);

  return (
    <View style={styles.container}>
      <AnimatePresence>
        {showRegisterCarModal && (
          <motion.div
            initial={{ translateY: 100 }}
            animate={{ translateY: 0 }}
            exit={{ translateY: 100 }}
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
