import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  menuContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start', 
    backgroundColor: 'rgba(0, 0, 0, 0.4)', 
  },
  closeArea: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  menu: {
    width: 250,
    backgroundColor: '#f6f6f6',
    paddingTop: 40,
    paddingHorizontal: 15,
    shadowColor: '#000',
    shadowOffset: {width: 2, height: 0}, 
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
    position: 'absolute',
    left: 0, 
    top: 0,
    bottom: 0,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
  },
  menuText: {
    marginLeft: 15,
    fontSize: 16,
  },
});
