import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, ActivityIndicator, Image, ScrollView, RefreshControl } from 'react-native';
import React, { useEffect, useState } from 'react';

export default function App() {
  const [isLoading, setLoading] = useState(true);
  const [quote, setQuote] = useState(null);
  const [refreshing, setRefreshing] = useState(false);

  const getQuote = async () => {
    try {
      const response = await fetch('https://api.hamatim.com/quote');
      const json = await response.json();
      setQuote(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  const onRefresh = () => {
    setRefreshing(true);
    getQuote();
  };

  useEffect(() => {
    getQuote();
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollViewContainer}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
        onScroll={({ nativeEvent }) => {
          if (isCloseToBottom(nativeEvent)) {
            onRefresh();
          }
        }}
        scrollEventThrottle={400}
      >
        <View style={styles.quoteContainer}>
          <Text style={styles.title}>Today's Quote</Text>
          {isLoading ? (
            <ActivityIndicator />
          ) : (
            <>
              <Image style={styles.quoteImage} source={require('./Images/quote_start.png')} />
              <View style={styles.quoteTextContainer}>
                <Text style={styles.quoteText}>{quote.text}</Text>
              </View>
              <View style={styles.quoteImageEndContainer}>
                <Image style={styles.quoteImageEnd} source={require('./Images/quote_end.png')} />
              </View>
              <View style={styles.authorContainer}>
              <Text style={styles.bookText}>{quote.book}</Text>
                <Text style={styles.authorText}>-----{quote.author}</Text>
              </View>
            </>
          )}
        </View>
      </ScrollView>
    </View>
  );
}

const isCloseToBottom = ({ layoutMeasurement, contentOffset, contentSize }) => {
  const paddingToBottom = 20;
  return layoutMeasurement.height + contentOffset.y >= contentSize.height - paddingToBottom;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#009999',
  },
  scrollViewContainer: {
    flexGrow: 1,
    padding: 24,
  },
  quoteContainer: {
    alignItems: 'left',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 16,
    marginTop: 45,
  },
  quoteTextContainer: {
    marginTop: 16,
  },
  quoteText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: 'white',
    textAlign: 'justify',
  },
  quoteImage: {
    width: 30,
    height: 30,
  },
  quoteImageEndContainer: {
    alignItems: 'flex-end',
    marginTop: 16,
  },
  quoteImageEnd: {
    width: 30,
    height: 30,
  },
  authorContainer: {
    marginTop: 16,
    alignItems: 'flex-start',
  },
  authorText: {
    fontSize: 16,
    marginBottom: 4,
    color: 'white',
    textAlign: 'left',
  },
  bookText: {
    fontSize: 14,
    color: 'white',
    textAlign: 'left',
  },
});