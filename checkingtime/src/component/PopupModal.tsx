import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

import AwesomeAlert from 'react-native-awesome-alerts';


interface PopupModalProps {
  visible: boolean;
  title: string;
  message: string;
  confirmText: string;
  cancelText: string;
  onConfirm: () => void;
  onCancel: () => void;
  

}

export default class PopupModal extends React.Component<PopupModalProps> {

  constructor(props : any) {
    super(props);
    this.state = {
      visible:props.visible,
      title : props.title,
      message : props.message,
      confirmText : props.confirmText,
      cancelText : props.cancelText,
      onConfirm : props.onConfirm,
      onCancel : props.onCancel,
     
    };
  }

  show = () => {
    this.setState({ visible: true });
  }
  hide = () => {
    this.setState({ visible: false });
  }
  // onConfirm = () => {
  //  this.setState ({this.onConfirm});
  //   this.hide();
  // }
  // onCancelA = (props :any) => {
  //   this.setState({ onCancel : props });
  //   this.hide();
  // }
  

  render() {
    return (
      <AwesomeAlert
        show={this.props.visible}
        showProgress={false}
        titleStyle={{ fontSize: 20, fontWeight: 'bold' }}
        
        title={this.props.title}
        message={this.props.message}
        closeOnTouchOutside={false}
        closeOnHardwareBackPress={false}
        showCancelButton={true}
        showConfirmButton={true}
        cancelText={this.props.cancelText}
        confirmText={this.props.confirmText}
        confirmButtonColor="#DD6B55"
        onCancelPressed={() => {
          this.props.onCancel();
          this.hide();
        } }
        onConfirmPressed={() => {
          this.props.onConfirm();
          this.hide();
        } }
        
      />
    );
  }
}

//   constructor(props) {
//     super(props);
//     this.state = { showAlert: false };
//   };

//   showAlert = () => {
//     this.setState({
//       showAlert: true
//     });
//   };

//   hideAlert = () => {
//     this.setState({
//       showAlert: false
//     });
//   };

//   render() {
//     const {showAlert} = this.state;

//     return (
//       <View style={styles.container}>

//         <Text>I'm AwesomeAlert</Text>
//         <TouchableOpacity onPress={() => {
//           this.showAlert();
//         }}>
//           <View style={styles.button}>
//             <Text style={styles.text}>Try me!</Text>
//           </View>
//         </TouchableOpacity>

//         <AwesomeAlert
//           show={showAlert}
//           showProgress={false}
//           title="AwesomeAlert"
//           message="I have a message for you!"
//           closeOnTouchOutside={true}
//           closeOnHardwareBackPress={false}
//           showCancelButton={true}
//           showConfirmButton={true}
//           cancelText="No, cancel"
//           confirmText="Yes, delete it"
//           confirmButtonColor="#DD6B55"
//           onCancelPressed={() => {
//             this.hideAlert();
//           }}
//           onConfirmPressed={() => {
//             this.hideAlert();
//           }}
//         />
//       </View>
//     );
//   };
// };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  button: {
    margin: 10,
    paddingHorizontal: 10,
    paddingVertical: 7,
    borderRadius: 5,
    backgroundColor: "#AEDEF4",
  },
  text: {
    color: '#fff',
    fontSize: 15
  }
});
