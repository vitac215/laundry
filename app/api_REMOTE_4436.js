import UTL from './utilities';

const server = 'http://ec2-34-201-14-244.compute-1.amazonaws.com:3000/';

const API_URL = {
    'signUp': server + 'api/add_user/',
    'login': server + 'api/login_user/',
    'getMachineData': server + 'api/show_all_user_schedules_type_after_now/',
    'quickReserve': server + 'api/quick_reservation/',
    'updateUser': server +  'api/update_user_info/',
    'report': server + 'api/send_email_to_landlord/',
    'sendFeedback': server + 'api/send_feedback/',
    'resendEmail': server + 'api/reverify_email_address/',
    'checkOldPassword': server + 'api/check_old_password',
    'forgetPassword': server + 'api/forget_password/',
    'getAllResSchedule': server + '',
    'getResSchedule': server + 'api/show_user_schedules_type_after_now/',
}

const API = {
  signUp: async function(username, email, password, address, city) {
    // console.log('signup API');
    try{
      let response = await fetch(`${API_URL.signUp}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          email,
          password,
          address,
          city,
        })
      })
      let json = await response.json();
      // console.log(json);
      return json;
    } catch(err) {
      console.log(err);
    }
  },
  resendEmail: async function(username) {
    // console.log('resendEmail API');
    try{
      let response = await fetch(`${API_URL.resendEmail}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
        })
      })
      let json = await response.json();
      // console.log(json);
        return json;
    } catch(err) {
      console.log(err);
    }
  },

  login: async function(username, password) {
    try{
      let response = await fetch(`${API_URL.login}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          password
        })
      })
      let json = await response.json();
      // console.log(json);
      return json;
    } catch(err) {
      console.log(err);
    }
  },

  forgetPassword: async function(username, email) {
    try{
      let response = await fetch(`${API_URL.forgetPassword}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          email
        })
      })
      let json = await response.json();
      // console.log(json);
      return json;
    } catch(err) {
      console.log(err);
    }
  },

  getMachineData: async function(username, machine_type) {
    // original

    // console.log(API_URL.getMachineData);
    // console.log(username);
    console.log("api getMachineData json machine_type: ", machine_type);
    try{
      let response = await fetch(`${API_URL.getMachineData}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          machine_type
        })
      })
      let json = await response.json();
      console.log("api getMachineData json res", json.schedules);
      return json.schedules;
    } catch(err) {
      console.log(err);
    }

    // NOTE: change
    // console.log("API: getMachineData");
    // let json = [
    //              {'user_name': "v", 'end_time': "0005"},  // current time + 1
    //              {'user_name': "v", 'end_time': "0010"},
    //              {'user_name': "v", 'end_time': "0003"},
    //              {'user_name': "v", 'end_time': "0000"}
    //            ]
    // return await json;
    // end change

  },


  quickReserve: async function(username, machine_id) {
    try{
      let response = await fetch(`${API_URL.quickReserve}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          machine_id
        })
      })
      let json = await response.json();
      // console.log(json);
      return json;
    } catch(err) {
      console.log(err);
    }

    // let json = {'message': "SUCCESS"}
    // return json;
  },
  updateUser: async function(username, new_password, address, city) {
    try{
      let response = await fetch(`${API_URL.updateUser}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          new_password,
          address,
          city,
        })
      })
      let json = await response.json();
      // console.log(json);
        return json;
    } catch(err) {
      console.log(err);
    }
  },
  report: async function(username, report) {
    // console.log('report API', report)
    try{
      let response = await fetch(`${API_URL.report}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          report,
        })
      })
      let json = await response.json();
      // console.log(json);
        return json;
    } catch(err) {
      console.log(err);
    }
  },

  sendFeedback: async function(username, text) {
    try{
      let response = await fetch(`${API_URL.sendFeedback}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          text,
        })
      })
      let json = await response.json();
      console.log(json);
        return json;
    } catch(err) {
      console.log(err);
    }
  },

  checkOldPassword: async function(username, old_password) {
    // console.log('checkOldPassword API', old_password);
    try{
      let response = await fetch(`${API_URL.checkOldPassword}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          old_password,
        })
      })
      let json = await response.json();
      console.log(json);
        return json;
    } catch(err) {
      console.log(err);
    }
  },

  getAllResSchedule: async function(username, machine_type) {
    // username not required?
    console.log('getAllResSchedule');
    // try {
    //   let response = await fetch(`${API_URL.getAllResSchedule}`, {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({
    //       username,
    //       machine_type,
    //     })
    //   })
    //   let json = await response.json();
    //   console.log(json);
    //   return json;
    // } catch(err) {
    //   console.log(err);
    // }

      // change
      console.log("API: getAllResSchedule");
      // res_time: the start time all the machines are not available, date object
      let json = [
                   {'username': 'v', 'res_time': new Date("October 13, 2014 10:30:00")},
                   {'username': 'x', 'res_time': new Date("October 13, 2014 11:30:00")},
                   {'username': 'y', 'res_time': new Date("October 13, 2014 12:30:00")},
                   {'username': 'z', 'res_time': new Date("October 13, 2014 13:30:00")},
                   {'username': 'c', 'res_time': new Date("October 13, 2014 16:30:00")}
                 ]
      json = UTL.processResData(json, machine_type);
      return await json;
      // end change
  },

  getResSchedule: async function(username, machine_type) {
    // console.log('API getResSchedule');
    // try {
    //   let response = await fetch(`${API_URL.getResSchedule}`, {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({
    //       username,
    //       machine_type,
    //     })
    //   })
    //   let json = await response.json();
    //   console.log("API getResSchedule res", json);
    //   return json;
    // } catch(err) {
    //   console.log(err);
    // }
    // return await json.schedules;

    //NOTE: change (hardcode to show a reservation in your reservation scene)
    // res_time: the start time all the machines are not available, date object
    // TODO: need to get a reserve_time.
    // NOTE: test your reservation
    reserve_time = 'May 9, 2017 10:30:00';
    let json = [
                 {'username': 'xinwang', 'reserve_time': new Date(reserve_time), 'display_id': 1, 'access_code': 1011},
               ]
    return await json;
    // end change
  },


}

export default API;
