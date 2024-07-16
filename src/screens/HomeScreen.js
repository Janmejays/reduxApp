import React, { useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  useWindowDimensions,
  ActivityIndicator,
  Alert,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import * as CakeActions from '../redux/slices/cakeSlice';
import * as IcecreamActions from '../redux/slices/icecreamSlice';

const HomeScreen = () => {
  const { width } = useWindowDimensions();

  const dispatch = useDispatch();
  const cakeData = useSelector((state) => state.cake);
  const icecreamData = useSelector((state) => state.icecream);

 
  const onCakeOrder = () => {
    dispatch(CakeActions.ordered());
    // dispatch(orderCake()); // Normal Redux
  };
  const onCakeRestock = () => {
    dispatch(CakeActions.restocked(5));
    // dispatch(restockCake(1)); // Normal Redux
  };

  const onIcecreamOrder = () => {
    dispatch(IcecreamActions.ordered());
    // dispatch(orderIcecream()); // Normal Redux
  };
  const onIcecreamRestock = () => {
    dispatch(IcecreamActions.restocked(7));
    // dispatch(restockIcecream(1)); // Normal Redux
  };
    // dispatch(fetchUsers()); // Normal Redux
 

  return (
    <View style={styles.vwContainer}>
      <View style={[styles.vwContent, { width: width - 32 }]}>
        {/* Qty View */}
        <View style={styles.vwItem}>
          <Text>{`${cakeData?.numOfCakes}`}</Text>
          <TouchableOpacity style={styles.btnItem} onPress={onCakeOrder}>
            <Text>ORDER CAKE</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnItem} onPress={onCakeRestock}>
            <Text>RESTOCK CAKE</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.vwItem}>
          <Text>{`${icecreamData?.numOfIceCreams}`}</Text>
          <TouchableOpacity style={styles.btnItem} onPress={onIcecreamOrder}>
            <Text>ORDER ICECREAM</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnItem} onPress={onIcecreamRestock}>
            <Text>RESTOCK CAKE</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
export default HomeScreen;

const styles = StyleSheet.create({
  vwContainer: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  vwContent: {
    flexDirection: 'row',
    width: '100%',
    marginHorizontal: 16,
    backgroundColor: 'orange',
    justifyContent: 'space-between',
    padding: 16,
  },
  vwUserContent: {
    marginTop: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 16,
    padding: 16,
    backgroundColor: 'red',
  },
  vwItem: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnItem: {
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    marginTop: 8,
    width: 150,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
});