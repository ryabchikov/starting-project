import { View, StyleSheet } from 'react-native';

import Colors from '../../constants/colors';

function Cart({ children }) {
  return <View style={styles.card}>{children}</View>;
}

export default Cart;

const styles = StyleSheet.create({
  card: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: Colors.primary800,
    borderRadius: 8,
    elevation: 4, //android shadow
    shadowColor: 'black', //iOS shadow
    shadowOffset: { width: 0, height: 2 }, //iOS shadow
    shadowRadius: 6, //iOS shadow
    shadowOpacity: 0.25, //iOS shadow
  },
});
