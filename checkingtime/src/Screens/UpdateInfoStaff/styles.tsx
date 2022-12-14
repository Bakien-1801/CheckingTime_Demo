import { StyleSheet } from "react-native";
import { FONTS } from "../../../constants/theme";

const createStyles = () =>
  StyleSheet.create({
    view: {
      flex: 1,
      backgroundColor: "white",
    },
    avatar: {
      alignItems: "center",
      marginTop: "3%",
      marginBottom: "3%",
    },
    textuserName: {
      justifyContent: "center",
      borderBottomWidth: 1,
      borderColor: "#f2f2f2",
      alignItems: "center",
      alignSelf: "center",
      borderRadius: 5,
      width: "90%",
      height: "5%",
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
      width: "90%",
      fontFamily: FONTS.vanSansBold,
    },
    khoi_2: {
      flexDirection: "row",
      justifyContent: "space-around", 
      marginRight: "6%",
      marginLeft: "1%",
      marginTop: "3%",
    },
   
    row: {
      flexDirection: "column",
      justifyContent: "space-around",
      marginTop: "3%",
    },
    row1: {
      flexDirection: "row",
      justifyContent: "space-around", 
    },
    
    row2: {
      flexDirection: "row",
      justifyContent: "space-around",
      textAlign: "center",
      width: 150,
      height: 40,
      marginRight: "1%",
      marginTop: "1%",
      borderColor: "#CFD2CF",
      borderWidth: 1,
      borderRadius: 5,
    },
  
    styleIcon: {
      marginTop: "5%",
      marginRight: "0.5%",
      marginBottom: "5%",
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
      width: "90%",
      height: "7%",
      alignSelf: "center",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 10,
      marginTop: "8%",
      
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
    container: {
      flex: 1,
      backgroundColor: "#000000AA",
      justifyContent: "center",
      alignItems: "center",
    },
    box_button: {
      width: '100%',
      flex: 1,
      flexDirection: "row",
      alignItems:'center',
      borderRadius: 8,
    },
    confirm_button: {
      marginHorizontal:10,
      height: 30,
      width: 60,
      justifyContent:'center',
      borderRadius: 8,
      backgroundColor: "#716DF2",
      flex :1,
    },
    cancel_button: {
      marginHorizontal:10,
      height: 30,
      width: 60,
      justifyContent:'center',
      borderRadius: 8,
      backgroundColor: "#cccccc",
      flex :1,
    },
    box: {
      height: 150,
      width: 280,
      alignItems: "center",
      backgroundColor: "#fff",
      borderRadius: 10,
    },
    input_box: {
      justifyContent :"center",
      marginTop :15,  
      fontFamily : FONTS.vanSansLight,
     fontSize :14,
  
      width: '85%',
      
  
    },
    title: {
      marginTop: 10, 
      alignItems: "center",
      fontSize :16,
      fontFamily : FONTS.vanSansSemiBoldItalic,
    },
    text_button: {
      alignSelf: "center",
      fontSize :13,
      fontFamily : FONTS.vanSansMediumItalic,
    },
  });


export default createStyles;
