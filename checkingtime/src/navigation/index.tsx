import { View, Text } from "react-native";
import React, { useEffect } from 'react'
import "react-native-gesture-handler";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useDispatch, useSelector } from 'react-redux'
import HomeScreen from "../Screens/HomeScreen";
import SignIn from "../Screens/SignIn";
import ForgotPasswordScreen from "../Screens/ForgotPasswordScreen/ForgotPasswordScreen";
import TabsNavigation from "./Tabs";
import Form from "../Screens/Form/Form";
import FormCreated from "../Screens/FormCreated";
import Jobs from "../Screens/Jobs";
import InfoScreen from "../Screens/InfoCompany/Info";
import Account from "../Screens/Account/Account";
import { getmyrank, loadAllTask, loadCheckPoint, loadCompany, loadTaskContributor, loadTaskManager, loadTimesheet, loadTimesheetFilter, loadUser, ranking } from '../../redux/action'
import ResetPasswordScreen from "../Screens/ResetPasswordScreen/ResetPasswordScreen";
import TabDonTusNavigation from "./TabDonTu";
import CuaToi from "../Screens/DonTu/CuaToi/CuaToi";
import ListStaff from "../Screens/ListStaff/ListStaff";
import EFilter from "../Screens/ListFilter/EFilter";
import Loader from "./Loader"
import AddStaff from '../Screens/AddStaff/AddStaff';
import UpdateStaff from '../Screens/UpdateInfoStaff/UpdateStaff';
import UpdatePassword from "../Screens/UpdatePassword";
import FDontu from "../Screens/Bolocdontu/FDontu";
import BangCong_Navigation from "./BangCong";
import Todo_Navigation from "./Todo_List";
import Add_Todo from '../Screens/TodoList/Add_Todo';
import Update_Todo from "../Screens/TodoList/Update_Todo";
import Todo_Staff from "../Screens/TodoList/Todo_Staff";
import Staff_Navigation from "./Staff";
import Filter_Staff from "../Screens/TodoList/Filter_Staff";
import Filter_All from "../Screens/TodoList/Filter_All";

import UpdateStaff_Admin from "../Screens/UpdateInFoStaff_NV/UpdateInfoStaff_NV";

import Camera from "../Screens/UpdateInfoStaff/Camera"
import PhonePasswordScreen from "../Screens/PhonePassword/PhonePasswordScreen";
import Admin_Manage from "../Screens/TodoList/Admin";
import UpdateAdmin_Todo from "../Screens/TodoList/UpdateAdmin_Todo";
import Add_Admin from "../Screens/TodoList/Add_Admin";
import Admin_Board from "../Screens/CheckBoard/Admin_Board";


const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Nh???n OTP b???ng email"
        component={ForgotPasswordScreen}
        options={{ headerShown: true }}
      />
      <Stack.Screen
        name="Nh???n OTP b???ng ??i???n tho???i"
        component={PhonePasswordScreen}
        options={{ headerShown: true }}
      />
      <Stack.Screen
        name="HomeScreen"
        component={TabsNavigation}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="C??i l???i m???t kh???u"
        component={ResetPasswordScreen}
        options={{ headerShown: true }}
      />
      <Stack.Screen
        name="Thay ?????i m???t kh???u"
        component={UpdatePassword}
        options={{ headerShown: true }}
      />
    </Stack.Navigator>
  );
};

const JobsNavigation = () => {
  return (
    <Stack.Navigator>
      {/* <Stack.Screen name="Form" component={Form} options= {{headerShown : false }}/> */}
      <Stack.Screen
        name="FormCreated"
        component={FormCreated}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
const InfoScreenNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Info Screen" component={InfoScreen} />
    </Stack.Navigator>
  );
};
const ListStaffNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ListStaff" component={ListStaff} />
    </Stack.Navigator>
  );
};
const ListFilterNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ListFilter" component={EFilter} />
    </Stack.Navigator>
  );
};
const AddStaffNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="AddStaff" component={AddStaff} />
    </Stack.Navigator>
  );
};
const UpdateStaffNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="UpdateStaff" component={UpdateStaff} />
    </Stack.Navigator>
  );
};
const FDontuNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="FDontu" component={FDontu} />
    </Stack.Navigator>
  );
};
const BangCongNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="BangCong" component={BangCong_Navigation} />
    </Stack.Navigator>
  );
}
const UpdateStaff_AdminNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="UpdateStaff_Admin" component={UpdateStaff_Admin} />
    </Stack.Navigator>
  );
};
const Todo_ListNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Todo_Navigation" component={Todo_Navigation} />
    </Stack.Navigator>
  );
}
const Add_TodoNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Add_Todo" component={Add_Todo} />
    </Stack.Navigator>
  );
}
// const Update_TodoNavigation = () => {
//   return (
//     <Stack.Navigator screenOptions={{ headerShown: false }}>
//       <Stack.Screen name="Update_Todo" component={Update_Todo} />
//     </Stack.Navigator>
//   );
// }

const Staff_ManagerNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Staff" component={Staff_Navigation} />
    </Stack.Navigator>
  );
}
const Filter_StaffNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Filter_Staff" component={Filter_Staff} />
    </Stack.Navigator>
  );
}
const Filter_AllNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Filter_All" component={Filter_All} />
    </Stack.Navigator>
  );
}


const SNavigation = () => {
  const dispatch = useDispatch()

  useEffect(() => {
      dispatch<any>(loadUser())
      dispatch<any>(loadTimesheet());
      dispatch<any>(loadCheckPoint())
      dispatch<any>(getmyrank());
      dispatch<any>(ranking());
      dispatch<any>(loadCompany());
      dispatch<any>(loadTimesheetFilter());
      dispatch<any>(loadTaskContributor());
  }, [dispatch])
  const { isAuthenticated, loading, user } = useSelector<any, any>(state => state.auth)
  useEffect(() => {
    if (typeof user !== "undefined" && user !== null) {
      if (user.privilege === "Qu???n tr??? vi??n") {
        dispatch<any>(loadAllTask())
      }
      if (user.privilege === "Qu???n l??" || user.privilege === "Qu???n tr??? vi??n" ) {
        dispatch<any>(loadTaskManager());
      }
    }

  })
  const { loadingCompany}  = useSelector<any, any>(state => state.company)
  console.log(loadingCompany)
  return (
    loading || loadingCompany ? <Loader /> : 
    
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={isAuthenticated ? "HomeScreen" : "Sign In"} 
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
        name="HomeScreen"
        component={TabsNavigation}
        options={{ headerShown: false }}
      />
        <Stack.Screen name="Sign In" component={Navigation} /> 
        <Stack.Screen name="Account" component={TabsNavigation} />
        <Stack.Screen
          name="Form"
          component={JobsNavigation}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="Form Created"
          component={JobsNavigation}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="????n t???"
          component={TabDonTusNavigation}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="B???ng ch???m c??ng"
          component={BangCongNavigation}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="C??ng vi???c"
          component={Todo_ListNavigation}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="C??ng vi???c c???a t??i"
          component={Staff_ManagerNavigation}
          options={{ headerShown: true }}
        />

        <Stack.Screen
          name="Th??ng tin C??ng Ty"
          component={InfoScreenNavigation}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="DANH S??CH NH??N VI??N"
          component={ListStaff}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="B??? l???c"
          component={EFilter}
          options={{ headerShown: true }}
        />
        
      <Stack.Screen
        name="C??i l???i m???t kh???u"
        component={ResetPasswordScreen}
        options={{ headerShown: true }}
      />
      <Stack.Screen
        name="Nh???n OTP b???ng email"
        component={ForgotPasswordScreen}
        options={{ headerShown: true }}
      />
      <Stack.Screen
        name="Nh???n OTP b???ng ??i???n tho???i"
        component={PhonePasswordScreen}
        options={{ headerShown: true }}
      />
      <Stack.Screen
        name="Th??m nh??n vi??n"
        component={AddStaffNavigation}
        options={{ headerShown: true }}
      />
      <Stack.Screen
        name="C???p nh???t th??ng tin c?? nh??n"
        component={UpdateStaffNavigation}
        options={{ headerShown: true }}
      />
      <Stack.Screen
        name="Thay ?????i m???t kh???u"
        component={UpdatePassword}
        options={{ headerShown: true }}
      />
      <Stack.Screen
         name="B??? l???c ????n t???"
         component={FDontu}
         options={{ headerShown: true}}
        />
      <Stack.Screen
         name="?????i ???nh ?????i di???n"
         component={Camera}
         options={{ headerShown: true}}
        />
        <Stack.Screen
         name="C???p nh???t th??ng tin nh??n vi??n"
         component={UpdateStaff_Admin}
         options={{ headerShown: true}}
        />
      <Stack.Screen
          name="C???p nh???t th??ng tin nh??n vi??n _Admin"
          component={UpdateStaff_AdminNavigation}
          options={{ headerShown: true }}
        />
      <Stack.Screen
          name="Th??m c??ng vi???c qu???n l??"
          component={Add_TodoNavigation}
          options={{ headerShown: true }}
        />
         <Stack.Screen
          name="Th??m c??ng vi???c qu???n qu???n tr??? vi??n"
          component={Add_Admin}
          options={{ headerShown: true }}
        />


      <Stack.Screen
          name="C???p nh???t c??ng vi???c qu???n l??"
          component={Update_Todo}
          options={{ headerShown: true }}
        />
         <Stack.Screen
          name="C???p nh???t c??ng vi???c qu???n qu???n tr??? vi??n"
          component={UpdateAdmin_Todo}
          options={{ headerShown: true }}
        />
         <Stack.Screen
          name="B???ng c??ng c???a nh??n vi??n"
          component={Admin_Board}
          options={{ headerShown: true }}
        />
    
        <Stack.Screen
          name="C??ng vi???c c???a nh??n vi??n"
          component={Admin_Manage}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="B??? l???c c??ng vi???c ho??n th??nh"
          component={Filter_StaffNavigation}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="B??? l???c t???t c??? c??ng vi???c"
          component={Filter_AllNavigation}
          options={{ headerShown: true }}
        />

        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default SNavigation;
