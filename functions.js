
const setalert = (msg,type = 'danger') => {
    return `<p class="alert alert-${type} d-flex justify-content-between">${msg} <button data-bs-dismiss = "alert" class="btn-close"></button></p>`

}


//read-ls-data

const readLsData = (key) => {
    if(localStorage.getItem(key)){
        return JSON.parse(localStorage.getItem(key));

    }else{
        return false;
    }
}






//create ls data ===============================>


const createLsData = (key,value) => {
    let data = [];
    if(localStorage.getItem(key)){
     data = JSON.parse(localStorage.getItem(key));
    }

    data.push(value);
    let setlsdata = JSON.stringify(data);

    localStorage.setItem(key,setlsdata)
    
}



// Update ls data 

const updateLsData = (key,array) => {

    localStorage.setItem(key,JSON.stringify(array))
}




//timecounter 

const timecounter = (post_time) =>{

    let dead_line = Date.now();
    let time_diff = Math.floor(Math.abs(dead_line - post_time));

    //get time
    let total_sec = Math.floor(time_diff / 1000);
    let total_min = Math.floor(total_sec / 60);
    let total_hour = Math.floor(total_min / 60);
    let total_days = Math.floor(total_hour / 24);


    //get total time

    if (total_sec <= 59) {
        return `${total_sec} sec ago`;
      } else if (total_sec >= 60 && total_sec <= 3599) {
        return `${total_min} min ago`;
      } else if (total_min >= 3600 && total_min <= 86399) {
        return `${total_hour} hour ago`;
      } else if (total_sec >= 86400) {
        return `${total_days} day ago`;
      }
}