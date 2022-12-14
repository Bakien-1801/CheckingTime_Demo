import { StyleSheet } from "react-native";
import { FONTS } from "../../../constants/theme";

const createStyles = () =>
  StyleSheet.create({
    view: {
      flex: 1,
      
      backgroundColor: "white",
    },
    textWelcome: {
      marginTop: "3%",
      alignSelf: "center",
      fontSize: 35,
      color: "#FF9F29",
      fontFamily: FONTS.vanSansBlack,
    },
    avatar: {
      alignItems: "center",
      marginTop: "3%",
      marginBottom: "3%",
    },
    textuserName: {
      justifyContent: "space-around",
      flexDirection: "row",
      //backgroundColor: "#f2f2f2",
      
      borderBottomWidth: 1,
      borderColor: "#f2f2f2",
      alignItems: "center",
      alignSelf: "center",
      borderRadius: 5,
      width: "90%",
      height: "5%",
    },
   
    khoi_2: {
      flexDirection: "row",
      justifyContent: "space-around", 
      // marginRight: "6%",
      // marginLeft: "1%",
      marginTop: "3%",
      //marginLeft: "3%",
    },
    styleTT: {
      backgroundColor: "#f2f2f2",
      marginTop: "3%",
      marginRight: "3%",
      marginLeft: "3%",
      padding: 10,
      borderRadius: 10,
      alignItems: "center",
      width: "94%",
    },
    text24: {
      marginLeft: 10,
      width: "100%",
      fontSize: 14,
    },
    text23: {
      fontSize: 16,
      fontFamily: FONTS.vanSansMedium,
    },
    text23_1: {
      fontSize: 18,
      textAlign: "center",
      marginLeft: "5%",
      width: "70%",
      height: "100%",
      //backgroundColor: "#f2f2f2",
      fontFamily: FONTS.vanSansBold,
    },
    text23_2: {
      fontSize: 14,
      textAlign: "center",
      
      fontFamily: FONTS.vanSansMedium,
    },
    row: {
      flexDirection: "column",
      justifyContent: "space-around",
      marginTop: "3%",
     
    },
    row1: {
      flexDirection: "row",
      justifyContent: "space-around", 
      width: "94%",
      // marginRight: "6%",
      // marginLeft: "3%",
    },
    
    row2: {
      flexDirection: "row",
      justifyContent: "space-between",
      textAlign: "center",
      
      width: "100%",
      height: 40,
      marginRight: "3%",
      marginLeft: "10%",
      marginTop: "1%",
      borderColor: "#CFD2CF",
      borderWidth: 1,
      borderRadius: 5,
    },
    textDate: {
      marginLeft: "10%",
    },
  
    styleIcon: {
      marginTop: "3%",
      marginRight: "5%",
      alignItems: "center",
    },
    text22: {
      fontSize: 20,
      padding: 5,
      width: 320,
      height: 50,
      color: "#FFFFFF",
      textAlign: "center",
      fontFamily: FONTS.vanSansBold,
      
    },
    btn2: {
      width: "80%",
      height: "7%",
      alignSelf: "center",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 10,
      marginTop: "8%",
      marginRight: "5%",
      
    },
    
    dropdown: {
      width: 150,
      height: 40,
      backgroundColor: "white",
      borderRadius: 5,
      borderColor: "#CFD2CF",
      borderWidth: 1,
      padding: 8,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.2,
      shadowRadius: 1.41,
      elevation: 2,
    },
    dropdown_1: {
      marginRight: "0.8%",
      width: 150,
      height: 40,
      backgroundColor: "white",
      borderRadius: 5,
      borderColor: "#CFD2CF",
      borderWidth: 1,
      padding: 8,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.2,
      shadowRadius: 1.41,
      elevation: 2,
    },
    
    icon: {
      marginRight: 5,
    },
    item: {
      padding: 17,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    textItem: {
      flex: 1,
      fontSize: 14,
    },
    placeholderStyle: {
      fontSize: 14,
    },
    selectedTextStyle: {
      fontSize: 16,
      borderRadius: 10,
      
    },
    iconStyle: {
      width: 20,
      height: 20,
    },
    inputSearchStyle: {
      height: 40,
      fontSize: 14,
    },
  });

export default createStyles;
