import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', 
    marginTop: 16,
    marginBottom: 12,
  },
  menuIcon: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#0b0b0bff',
    marginRight: 0,
  },
  menuButton: {
    width: 40, 
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: '900',
    letterSpacing: 1,
    color: '#000000', 
    textAlign: 'center',
    flex: 1, 
  },
  section: {
    marginBottom: 24,
  },
  image: {
    width: '100%',
    height: 180,
    borderRadius: 8,
  },
  caption: {
    marginTop: 8,
    fontSize: 14,
    textAlign: 'center',
    fontStyle: 'italic',
    color: '#333',
  },
});

export default styles;
