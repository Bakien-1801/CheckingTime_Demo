import { createReducer } from "@reduxjs/toolkit";
export const timesheetReducer = createReducer({}, {
  rankRequest: (state) => {
    state.loading = true;
  },
  rankSuccess: (state, action) => {
    state.loading = false;
    state.array = action.payload;
  },
  rankFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
  checkingRequest: (state) => {
    state.loading = true;
  },
  checkingSuccess: (state, action) => {
    state.loading = false;
    state.message = action.payload;
  },
  checkingFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
  timesheetRequest: (state) => {
    state.loading = true;
  },
  timesheetSuccess: (state, action) => {
    state.loading = false;
    state.timesheet = action.payload;
  },
  timesheetFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
  logoutTimesheet: (state) => {
    state.loading = false
    state.timesheet = null
    state.number = null 
  },
  getmyrankRequest: (state) => {
    state.loading = true;
  },
  getmyrankSuccess: (state, action) => {
    state.loading = false;
    state.number = action.payload;
  },
  getmyrankFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
  clearError: (state) => {
    state.error = null;
  },
  
  clearMessage: (state) => {
    state.message = null;
  },
});
export const companyReducer = createReducer ({}, {
  companyRequest: (state) => {
    state.loading = true;
  },
  companySuccess: (state, action) => {
    state.loading = false;
    state.company = action.payload;
  },
  companyFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
  logoutCompany: (state) => {
    state.loading = false
    state.company = null;
  },
  clearError: (state) => {
    state.error = null;
  },

  clearMessage: (state) => {
    state.message = null;
  },
});
export const allReducer = createReducer ({},{
  loadAllUserRequest: (state) => {
    state.loading = true;
  },
  loadAllUserSuccess: (state, action) => {
    state.loading = false;
    state.allUser = action.payload;
  },
  loadAllUserFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
  clearError: (state) => {
    state.error = null;
  },

  clearMessage: (state) => {
    state.message = null;
  },
})
export const authReducer = createReducer(
  {},
  {
    loginRequest: (state) => {
      state.loading = true;
    },
    loginSuccess: (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload.user;
      state.message = action.payload.message;
    },
    loginFailure: (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.error = action.payload;
    },
    loadUserRequest: (state) => {
      state.loading = true;
    },
    loadUserSuccess: (state, action) => {
state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload.user;
    },
    loadUserFailure: (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.error = action.payload;
    },
    loadUserRequest: (state) => {
      state.loading = true;
    },
    loadUserSuccess: (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload.user;
    },
    loadUserFailure: (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.error = action.payload;
    },

    
    logoutRequest: (state) => {
      state.loading = true;
    },
    logoutSuccess: (state) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.user = null;
    },
    logoutFailure: (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.error = action.payload;
    },

    verificationRequest: (state) => {
      state.loading = true;
    },
    verificationSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },
    verificationFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    clearError: (state) => {
      state.error = null;
    },

    clearMessage: (state) => {
      state.message = null;
    },
  }
);
  export const passwordReducer = createReducer (
    {} ,
    {forgetPasswordRequest: (state) => {
      state.loading = true;
    },
    forgetPasswordSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },
    forgetPasswordFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    phonePasswordRequest: (state) => {
      state.loading = true;
    },
    phonePasswordSuccess: (state, action) => {
      state.loading = false;
      state.messagePhone = action.payload;
    },
    phonePasswordFailure: (state, action) => {
      state.loading = false;
      state.errorPhone = action.payload;
    },

    resetPasswordRequest: (state) => {
      state.loading = true;
    },
    resetPasswordSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },
    resetPasswordFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    clearError: (state) => {
      state.error = null;
      state.errorPhone = null ;
    },

    clearMessage: (state) => {
      state.message = null;
      state.messagePhone = null ;
    },
    }
  )

  export const messageReducer = createReducer(
    {},
    {
      updateProfileRequest: (state) => {
        state.loading = true;
      },
      updateProfileSuccess: (state, action) => {
        state.loading = false;
        state.message = action.payload;
        state.isUpdated = true;
      },
      updateProfileReset: (state) => {
state.isUpdated = false ;
      },
      updateProfileFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
      },
      registerRequest: (state) => {
        state.loading = true;
      },
      registerSuccess: (state, action) => {
        state.loading = false;
        state.message = action.payload.message;
      },
      registerFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.message = action.payload.message;
      },
      updateAvatarRequest: (state) => {
        state.loading = true;
      },
      updateAvatarSuccess: (state, action) => {
        state.loading = false;
        state.message = action.payload;
      },
      updateAvatarFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
      },
      clearError: (state) => {
        state.error = null;
      },
  
      clearMessage: (state) => {
        state.message = null;
      },
    }
  );
    export const taskReducer = createReducer(
      {},
      {
        loadAllTaskRequest: (state) => {
          state.loading = true;
        },
        loadAllTaskSuccess: (state, action) => {
          state.loading = false;
          state.allTask = action.payload;
        },
        loadAllTaskFailure: (state, action) => {
          state.loading = false;
          state.error = action.payload;
        },
        loadTaskRequest: (state) => {
          state.loading = true;
        },
        loadTaskSuccess: (state, action) => {
          state.loading = false;

          state.task = action.payload;
        },
        loadTaskFailure: (state, action) => {
          state.loading = false;
          state.error = action.payload;
        },
        clearError: (state) => {
          state.error = null;
        },

        clearMessage: (state) => {
          state.message = null;
        },
      },
    );