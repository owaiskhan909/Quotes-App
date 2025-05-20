import React, { useRef, useState } from "react";
import {
  Animated,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";

const quotes = [
  "Believe you can and you're halfway there.",
  "Do one thing every day that scares you.",
  "Dream big and dare to fail.",
  "The only limit to our realization of tomorrow is our doubts of today.",
  "Success is not final, failure is not fatal: It is the courage to continue that counts.",
  "It always seems impossible until it's done.",
  "You miss 100% of the shots you don’t take.",
  "Hardships often prepare ordinary people for an extraordinary destiny.",
  "Don't watch the clock; do what it does. Keep going.",
  "Start where you are. Use what you have. Do what you can.",
  "Everything you’ve ever wanted is on the other side of fear.",
  "Push yourself, because no one else is going to do it for you.",
  "Great things never come from comfort zones.",
  "Success doesn’t just find you. You have to go out and get it.",
  "Dream it. Wish it. Do it.",
  "The harder you work for something, the greater you’ll feel when you achieve it.",
  "Don’t stop when you’re tired. Stop when you’re done.",
  "Wake up with determination. Go to bed with satisfaction.",
  "Little things make big days.",
  "It’s going to be hard, but hard does not mean impossible.",
  "Don’t wait for opportunity. Create it.",
  "Sometimes we’re tested not to show our weaknesses, but to discover our strengths.",
  "The key to success is to focus on goals, not obstacles.",
  "Believe in yourself and all that you are.",
  "Doubt kills more dreams than failure ever will.",
  "You are stronger than you think.",
  "Act as if what you do makes a difference. It does.",
  "Your limitation—it’s only your imagination.",
  "Success is what comes after you stop making excuses.",
  "Discipline is doing what needs to be done, even if you don’t want to do it.",
  "You don’t have to be great to start, but you have to start to be great.",
  "Stay away from those people who try to disparage your ambitions.",
  "I never dreamed about success, I worked for it.",
  "Don’t limit your challenges. Challenge your limits.",
  "Opportunities don't happen. You create them.",
  "The future belongs to those who believe in the beauty of their dreams.",
  "You don’t find the happy life. You make it.",
  "Work hard in silence. Let your success be your noise.",
  "Do what you can with all you have, wherever you are.",
  "Believe in yourself, take on your challenges, dig deep within yourself to conquer fears.",
  "Perseverance is failing 19 times and succeeding the 20th.",
  "The man who has confidence in himself gains the confidence of others.",
  "What you get by achieving your goals is not as important as what you become by achieving your goals.",
  "Learn as if you will live forever, live like you will die tomorrow.",
  "Motivation is what gets you started. Habit is what keeps you going.",
  "Setting goals is the first step in turning the invisible into the visible.",
  "You are never too old to set another goal or to dream a new dream.",
  "Today is your opportunity to build the tomorrow you want.",
  "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart.",
  "A problem is a chance for you to do your best.",
  "If you want to achieve greatness stop asking for permission.",
  "You can either experience the pain of discipline or the pain of regret.",
  "Don’t be afraid to give up the good to go for the great.",
  "Success usually comes to those who are too busy to be looking for it.",
  "If you are not willing to risk the usual, you will have to settle for the ordinary.",
  "I find that the harder I work, the more luck I seem to have.",
  "The way to get started is to quit talking and begin doing.",
  "Stop chasing the money and start chasing the passion.",
  "All progress takes place outside the comfort zone.",
  "Don’t let yesterday take up too much of today.",
  "Success seems to be connected with action. Successful people keep moving.",
  "The only place where success comes before work is in the dictionary.",
  "If you really look closely, most overnight successes took a long time.",
  "The successful warrior is the average man, with laser-like focus.",
  "Success is walking from failure to failure with no loss of enthusiasm.",
  "Try not to become a man of success. Rather become a man of value.",
  "Don’t raise your voice, improve your argument.",
  "Things work out best for those who make the best of how things work out.",
  "To live a creative life, we must lose our fear of being wrong.",
  "If you are not willing to learn, no one can help you. If you are determined to learn, no one can stop you.",
  "Knowing is not enough; we must apply. Wishing is not enough; we must do.",
  "The only limit to our realization of tomorrow is our doubts of today.",
  "Go as far as you can see; when you get there, you’ll be able to see further.",
  "Your time is limited, so don’t waste it living someone else’s life.",
  "Don’t let what you cannot do interfere with what you can do.",
  "Good things come to people who wait, but better things come to those who go out and get them.",
  "If you can dream it, you can do it.",
  "Start by doing what’s necessary; then do what’s possible; and suddenly you are doing the impossible.",
  "Success is the sum of small efforts, repeated day-in and day-out.",
  "Keep your face always toward the sunshine—and shadows will fall behind you.",
  "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
  "Success means doing the best we can with what we have.",
  "We generate fears while we sit. We overcome them by action.",
  "There is no traffic jam along the extra mile.",
  "Don’t be distracted by criticism. Remember—the only taste of success some people get is to take a bite out of you.",
  "The best way to predict the future is to create it.",
  "To be successful, you must accept all challenges that come your way. You can’t just accept the ones you like.",
  "Don’t wait. The time will never be just right.",
  "It’s not whether you get knocked down, it’s whether you get up.",
  "People who are crazy enough to think they can change the world are the ones who do.",
  "Failure will never overtake me if my determination to succeed is strong enough.",
  "There are no limits to what you can accomplish, except the limits you place on your own thinking.",
  "Success isn’t just about what you accomplish in your life; it’s about what you inspire others to do.",
  "Fall seven times, stand up eight.",
  "Aim for the moon. If you miss, you may hit a star.",
  "Stay focused, go after your dreams, and keep moving toward your goals.",
  "Courage doesn’t always roar. Sometimes courage is the quiet voice at the end of the day saying, ‘I will try again tomorrow.’",
];

export default function App() {
  const [index, setIndex] = useState(0);
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const handleNextQuote = () => {
    // Reset animation
    fadeAnim.setValue(0);
    // Animate in
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 600,
      useNativeDriver: true,
    }).start();
    // Change quote
    setIndex((prev) => (prev + 1) % quotes.length);
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#121212" />
      <Text style={styles.title}>✨ Daily Quotes ✨</Text>

      <Animated.Text style={[styles.quote, { opacity: fadeAnim }]}>
        “{quotes[index]}”
      </Animated.Text>

      <Pressable style={styles.button} onPress={handleNextQuote}>
        <Text style={styles.buttonText}>Next Quote</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#ffffff",
    marginBottom: 40,
  },
  quote: {
    fontSize: 20,
    color: "#eeeeee",
    fontStyle: "italic",
    textAlign: "center",
    marginBottom: 50,
    lineHeight: 28,
  },
  button: {
    backgroundColor: "#1f8ef1",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
