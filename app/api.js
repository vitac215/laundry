const API_URL = {
    'signUp': '/api/add_user',
    'login': '/api/login',
    'getWashingData': '/api/show_all_washing?show_all=True',
    'getDryerData': '/api/show_all_dryer?show_all=True'
}

const API = {
  signUp: async function(username, password, address, propertyName) {
    // let response = await fetch(`${API_URL.signUp}`, {
    //   method: 'GET',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     username,
    //     password,
    //     address,
    //     propertyName
    //   })
    // });
    //
    // let json = {};
    // try{
    //   json = await response.json();
    // } catch(err) {
    //   json = {
    //     response
    //   }
    // }
    //
    // return json;

    let json = {'success': true, 'msg': ''};
    return json;
  },

  login: async function(username, password) {
    // let response = await fetch(`${API_URL.login}`, {
    //   method: 'GET',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     username,
    //     password
    //   })
    // });
    //
    // let json = {};
    // try{
    //   json = await response.json();
    // } catch(err) {
    //   json = {
    //     response
    //   }
    // }
    //
    // return json;

    let json = {'success': true,
                'user': {'username': 'vita', 'password': '123', 'address': '732', 'propertyName': 'Forbes Apartment'},
                'msg': ''};
    return json;
  },

  getWashingData: async function(address) {
    // let response = await fetch(`${API_URL.getWashingData}`, {
    //   method: 'GET',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     address
    //   })
    // });
    //
    // let json = {};
    // try{
    //   json = await response.json();
    // } catch(err) {
    //   json = {
    //     response
    //   }
    // }
    //
    // return json;

    let json = [
                 {'machine_id': 1, 'remainTime':'00:30', 'endTime':'8:30'},
                 {'machine_id': 2, 'remainTime':'00:20', 'endTime':'8:20'},
                 {'machine_id': 3, 'remainTime':'00:10', 'endTime':'8:10'}
               ]
    return json;
  },

  getDryerData: async function(address) {
    // let response = await fetch(`${API_URL.getDryerData}`, {
    //   method: 'GET',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     address
    //   })
    // });
    //
    // let json = {};
    // try{
    //   json = await response.json();
    // } catch(err) {
    //   json = {
    //     response
    //   }
    // }
    //
    // return json;

    let json = [
                 {'machine_id': 1, 'remainTime':'00:30', 'endTime':'8:30'},
                 {'machine_id': 2, 'remainTime':'00:20', 'endTime':'8:20'},
                 {'machine_id': 3, 'remainTime':'00:10', 'endTime':'8:10'}
               ]
    return json;
  }

}

export default API;