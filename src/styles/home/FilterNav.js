/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';

const stylesFilter = StyleSheet.create({
  // filter
  filterContainer: {
    flexDirection: 'row',
    marginTop: 10,
   },
  filterImage:{
    height:48,
    width:48,
    marginLeft:17
    },
  filterText:{
      marginTop: 10,
     textAlign: 'center'
  },
  filterDevider:{
    height:8,
     backgroundColor: '#ededed'
  },
  filterImageAndText:{
    marginRight:30
  },
  filterContainText:{
    width:85
  },
  filterActiveButtonContainer: {
    backgroundColor: '#242424',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 4,
    marginRight: 10,
  },
  filterInactiveButtonContainer: {
    backgroundColor: '#fff',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 4,
    borderColor: '#5a5a5a',
    borderWidth: 1,
    marginRight: 10,
  },
  filterActiveText: {
    color: '#fff',
  },
  filterInactiveText: {
    color: '#5a5a5a',
  },
});

export default stylesFilter;
