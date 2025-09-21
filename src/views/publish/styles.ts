import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 26,
    paddingTop: 28,
  },

  heading: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#000',
  },

  subHeading: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#555',
    marginBottom: 40,
  },

  listContainer: {
    paddingBottom: 25,
  },

  accountRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F6F6F6',
    borderRadius: 24,
    paddingVertical: 14,
    paddingHorizontal: 20,
  },

  accountInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  icon: {
    width: 28,
    height: 28,
    marginRight: 14,
  },

  accountName: {
    fontSize: 17,
    fontWeight: '600',
    color: '#000',
  },

  chevron: {
    fontSize: 20,
    color: '#333',
  },

  separator: {
    height: 30,
  },
});

export default styles;
