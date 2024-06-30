import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#CCEBE1',
    marginBottom: 90,
  },
  overAllContainer: {
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'space-between',
  },
  backgroundContainerSx: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#CCEBE1',
    height: 260,
    width: 400,
    paddingTop: 22,
  },

  backgroundSx: {
    flex: 1,
    backgroundColor: '#fff',
    width: 400,
    alignItems: 'center',
    borderRadius: 50,
    height: 800,
  },
  imageSx: {
    width: '100%',
    height: '100%',
  },
  headerTextSx: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#02111A',
    textAlign: 'center',
  },
  textBoxSx: {
    width: 200,
    paddingTop: 12,
  },
  backgroundStyle: {
    backgroundColor: '#CCEBE1',
  },

  titleText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#02111A',
    width: '50%',
    textAlign: 'center',
    marginTop: 12,
    marginBottom: 26,
  },
  drawerTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#02111A',
    textAlign: 'center',
    marginTop: 12,
  },
  descriptionText: {
    color: '#4E585E',
    textAlign: 'center',
    fontSize: 14,
    paddingHorizontal: 72,
    marginTop: 12,
  },
  drawerStyle: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    width: '100%',
  },
  buttonStyle: {
    backgroundColor: '#30AF89',
    borderRadius: 8,
    alignSelf: 'flex-end',
    width: '100%',
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: '600',
    textAlign: 'center',
    fontSize: 14,
    padding: 16,
  },
  btnBox: {
    padding: 16,
    position: 'absolute',
    width: '100%',
    bottom: 0,
    justifyContent: 'flex-end',
    backgroundColor: '#fff',
  },
});
