import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    elevation: 3,
    backgroundColor: "#fff",
    borderRadius: 10,
    margin: 20,
    marginTop: 0
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 20,
    marginLeft: 10,
    fontSize: 26
  },
  image: {
    width: 300,
    height: 300,
    alignSelf: "center"
  },
  instructions: {
    alignSelf: "center",
    color: "#333",
    fontWeight: "bold"
  },
  continueButton: {
    width: "80%",
    borderRadius: 50,
    backgroundColor: "#000",
    padding: 15,
    alignItems: "center",
    elevation: 2,
    shadowColor: "rgba(0,0,0,0.5)",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.7,
    shadowRadius: 5,
    alignSelf: "center",
    marginTop: 18
  },
  signInText: {
    color: "white",
    fontSize: 16,
    fontWeight: "500"
  },
  backgroundContainer: {
    position: "absolute",
    width: "100%",
    height: "30%",
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgb(219,168,65)",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  }
});

export default styles;
