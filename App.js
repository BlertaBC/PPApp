

/*Display information of desired product withaxios. This is the url : https://www.ahlsell.se/products/varme--sanitet/pumpar/cirkulation/cirkulationspumpar-for-tappvarmvatten/5805964/*/

/*import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, Linking } from 'react-native';
import axios from 'axios';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: [],
      isLoading: true,
    };
  }

  componentDidMount() {
    axios.get('https://www.ahlsell.se/products/varme--sanitet/pumpar/cirkulation/cirkulationspumpar-for-tappvarmvatten/5805964/')

      .then((response) => {
        this.setState({
          product: response.data,
          isLoading: false,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {

    const { product, isLoading } = this.state;

    if (isLoading) {
      return (
        <View style={styles.container}>

          <Text style={styles.text}>Loading...</Text>

        </View>

      );
    }

    return (
      <View style={styles.container}>
        <ScrollView>
          <Text style={styles.text}>{product.name}</Text>
          <Text style={styles.text}>{product.price}</Text>
          <Text style={styles.text}>{product.description}</Text>
          <Image style={styles.image} source={{ uri: product.image }} />
          <TouchableOpacity onPress={() => Linking.openURL(product.url)}>
            <Text style={styles.text}>Go to product</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  image: {
    width: 300,
    height: 300,
    alignSelf: 'center',
  },
}); */


/*get the list of information from this product with respective url: https://www.ahlsell.se/products/varme--sanitet/pumpar/cirkulation/cirkulationspumpar-for-tappvarmvatten/5805964/
use hooks!!!*/  



/* We have this product information website and we want to retrive information from that website in our app. The url are stored in a Database and we will retrive infromation with axios.
URL: https://www.ahlsell.se/products/varme--sanitet/pumpar/cirkulation/cirkulationspumpar-for-tappvarmvatten/5805964/*/


import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, Linking } from 'react-native';
import axios from 'axios';

export default function App() {
  const [product, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios.get('https://www.ahlsell.se/products/varme--sanitet/pumpar/cirkulation/cirkulationspumpar-for-tappvarmvatten/5805964/')

      .then((response) => {
        setProduct(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (isLoading) {
    return (
      <View style={styles.container}>

        <Text style={styles.text}>Loading...</Text>

      </View>

    );
  }

  return (
    <View style={styles.container}>

      <Text style={styles.text}>{product.name}</Text>
      <Text style={styles.text}>{product.price}</Text>
      <Text style={styles.text}>{product.description}</Text>
      <Image style={styles.image} source={{ uri: product.image }} />
      <TouchableOpacity onPress={() => Linking.openURL(product.url)}>

        <Text style={styles.text}>Go to product</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  image: {
    width: 300,
    height: 300,
    alignSelf: 'center',
  },
});

  


  
















/*import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!w
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
}); */


