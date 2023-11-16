import { useState } from "react";
import{
  View,
  Text,
  StyleSheet,
  Image,
  TouchableHighlight,
  TouchableOpacity,
  Button
} from 'react-native';

function HomePage(){

  const [title, setTitle] = useState('Harry Potter');
  const [author, setAuthor] = useState('J. K. Rowling');
  const [numPages, setNumPages] = useState('766');
  const [genre, setGenre] = useState('Fantasy');
  const [totalPages, setTotalPages] = useState(2023);
  const [averagePages, setAveragePages] = useState(198);

  return(
    <View style={styles.container}>

    <View style={styles.headerContainer}>
      <Text style={styles.mainHeading}>BOOKWORM</Text>
    </View>

    <View style={styles.lastBookContainer}>
      <Text style={styles.lastBookHeading}>Last Book Read</Text>
      <Text style={styles.lastBookText}>{title}</Text>
      <Text style={styles.lastBookText}>{author}</Text>
      <Text style={styles.lastBookText}>Pages: {numPages}</Text>
      <Text style={styles.lastBookText}>{genre}</Text>
    </View>

    <View style={styles.totlAvgBlock}>
      <View style={styles.totalBlock}>
          <Text style={styles.totlAvgHeading}>Total Pages</Text>
          <Text style={styles.totlAvgText}>{totalPages}</Text>
      </View>

      <View style={styles.averageBlock}>
        <Text style={styles.totlAvgHeading}>Average Pages</Text>
        <Text style={styles.totlAvgText}>{averagePages}</Text>
      </View>
    </View>

    <View style={styles.bookInfo}>
      <Text style={styles.newBookHeading}>Add a new book.</Text>
      <Text style={styles.newBookTxt}>Click on this button to enter a new book.</Text>
      <TouchableOpacity style={styles.bookBtn}>
        <Text style={styles.btnTxt}>Enter a book</Text>
      </TouchableOpacity>
    </View>

    <View style={styles.bookInfo}>
      <Text style={styles.newBookHeading}>History Screen</Text>
      <Text style={styles.newBookTxt}>Click on this button for the history screen.</Text>
      <TouchableOpacity style={styles.bookBtn}>
        <Text style={styles.btnTxt}>History</Text>
      </TouchableOpacity>
    </View>

    <View style={styles.menuContainer}>

      <View style={styles.navBtn}>
      <TouchableOpacity>
        <Image source={require('./img/home.png')} style={styles.iconImage}  />
      </TouchableOpacity>
      </View>

      <View style={styles.navBtn}>
        <TouchableOpacity>
          <Image source={require('./img/book.png')} style={styles.iconImage} />
        </TouchableOpacity>
      </View>

      <View style={styles.navBtn}>
        <TouchableOpacity>
          <Image source={require('./img/history.png')} style={styles.iconImage} />
        </TouchableOpacity>
      </View>

      <View style={styles.navBtn}>
        <TouchableOpacity>
          <Image source={require('./img/genre.png')} style={styles.iconImage} />
        </TouchableOpacity>
      </View>
    </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#C0C0C0',
    height: 1000,
  },
  headerContainer: {
    backgroundColor: '#004E98',
    height: 90,
  },
  mainHeading: {
    fontSize: 32,
    textAlign: 'center',
    color: '#EBEBEB',
    marginTop: 20,
  },
  logo: {
    width: 100,
    height: 100,
    alignSelf: 'flex-end',
  },
  lastBookContainer: {
    backgroundColor: '#3A6EA5',
    borderRadius: 15,
    marginTop: 10,
    marginLeft: 5,
    marginRight: 5,
  },
  lastBookHeading: {
    padding: 5,
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 25,
    color: 'white',
    textDecorationLine: 'underline',
  },
  lastBookText: {
    fontSize: 20,
    color: 'white',
    marginLeft: 10,
    paddingBottom: 5,
  },
  totlAvgBlock: {
    flexDirection: 'row',
    alignContent: 'center',
    marginTop: 15,
    justifyContent: 'space-evenly'
  },
  totalBlock: {
    backgroundColor: '#004E98',
    padding: 15,
    borderRadius: 15,
    marginLeft: 5,
  },
  averageBlock: {
    backgroundColor: '#004E98',
    padding: 15,
    borderRadius: 15,
    marginLeft: 43,
  },
  totlAvgHeading: {
    fontSize: 25,
    color: 'white',
    fontWeight: '400',
    textAlign: 'center',
  },
  totlAvgText: {
    fontSize: 15,
    color: 'white',
    textAlign: 'center',
    marginTop: 10,
  },
  menuContainer: {
    backgroundColor: 'black',
    marginTop: 25,
    padding: 5,
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  iconImage: {
    width: 25,
    height: 25,
    marginTop: 10,
  },
  bookInfo: {
    backgroundColor: '#3A6EA5',
    borderRadius: 10,
    padding: 5,
    marginTop: 10,
    marginLeft: 5,
    marginRight: 5,
  },
  newBookHeading: {
    fontSize: 20,
    textAlign: 'center',
    color: 'white',
  },
  newBookTxt: {
    fontSize: 15,
    color: 'white',
    textAlign: 'center',
  },
  bookBtn: {
    alignItems: 'center',
    marginTop: 10,
    backgroundColor: '#FF6700',
    width: 100,
    marginLeft: 150,
    borderRadius: 15,
  },
  btnTxt: {
    color: 'black',
    fontSize: 15,
  }
});
export default App;