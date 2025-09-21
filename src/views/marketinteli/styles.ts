import {StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 24,
    paddingTop: 24,
  },

  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#000',
  },

  searchContainer: {
    backgroundColor: '#F0F0F0',
    borderRadius: 16,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginBottom: 24,
  },

  searchInput: {
    fontSize: 15,
    color: '#333',
  },

  sectionTitle: {
    fontWeight: '600',
    fontSize: 17,
    marginBottom: 12,
    color: '#000',
  },

  colorRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 28,
  },

  colorBox: {
    width: (width - 96) / 5, 
    height: 60,
    borderRadius: 6,
  },

  trendingImage: {
    width: width - 48,
    height: 140,
    borderRadius: 8,
    marginBottom: 30,
  },
});

export default styles;
