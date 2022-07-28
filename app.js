const post_form = document.querySelector('#post_form');
const msg = document.querySelector('.msg');
const all_post = document.querySelector('.all-post');
const post_edit_form = document.querySelector('#post_edit_form');
const edit_post_modal = document.querySelector('#edit_post_modal');


const getallpost = () => {

    let posts = readLsData('fb_post');



    

    if(posts){
        let list = '';
       posts.reverse().map((data,index) => {
        list += `


        
        <div class="post-time-line my-3">
        <div class="card my-3 shadow-sm">
            <div class="card-body my-3">
                <div class="post-auth-area">
                    <div class="user-info">
                        <img src="${data.aphoto}" alt="">
    
                        <div class="details">
                            <b>${data.aname}</b>
                            <span>12h. <i class="fas fa-globe-africa"></i></span>
                           
                        </div>
                        
                    </div>
    
                    <div class="dot">
                        <div class="dot">
                            <div class="dropdown">
                                <a class="dropdown-toggle threedot" href="#" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i class="fas fa-ellipsis-h"></i>
                                </a>
                              
                                <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                  <li><a class="dropdown-item edit_post" index = ${index} post_id = ${data.id} data-bs-toggle = "modal" data-bs-target = "#edit_post_modal"  href="#">Edit</a></li>
                                  <li><a class="dropdown-item delete_post" index = ${index} post_id = ${data.id} href="#">Delete</a></li>
                                  
                                </ul>
                              </div>
                        </div>
                    </div>
                </div>
    
                <div class="post-content-area my-3">
                    <p>${data.pcontent}</p>
                    
    
                </div>
                
            </div>
            <img src="${data.pphoto}" alt="">
        </div>
        
       </div>
    
       <hr>
    
       <div class="comment-box">
        <div class="like">
            <button><i class="fas fa-thumbs-up"></i></button>
            <span>Like</span>
        </div>
        <div class="like">
            <button><i class="fas fa-comment-alt"></i></button>
            <span>Comment</span>
        </div>
        <div class="like">
            <button><i class="fab fa-facebook-messenger"></i></button>
            <span>Send</span>
        </div>
       </div>
       <hr>
        
        
        
        
        
        
        
        `
       });

       all_post.innerHTML = list;
    }

    console.log(posts);
}

getallpost();








post_form.onsubmit = (e) => {
    e.preventDefault();




    // get from object 
    const form_data = new FormData(e.target);
    const data = Object.fromEntries(form_data.entries());
    const {aname,aphoto,pcontent,pphoto} = Object.fromEntries(form_data.entries());


    const random = Math.floor(Math.random()*1000000)+ '-' + Date.now();

    //get validation by from

    if(!aname || !aphoto || !pcontent || !pphoto){
        msg.innerHTML = setalert('Field must not be empty!')

    }else{
        createLsData('fb_post',{...data , id : random});
        msg.innerHTML = setalert('Data Stable!!','success');
        e.target.reset();
        getallpost();

    }


    

};


all_post.onclick = (e) => {
    e.preventDefault();


    if(e.target.classList.contains('delete_post')){

        const postId = e.target.getAttribute('post_id');

        //get all post
        const post = readLsData('fb_post')
        
        // get delete data
        const delete_data = post.filter(data => data.id !== postId);

        // now update data
        updateLsData('fb_post',delete_data);

        getallpost();



    }else if(e.target.classList.contains('edit_post')){
        let indexs = e.target.getAttribute('post_id');
        console.log(indexs)
        let lstoragedata = readLsData('fb_post');

        let edit_data = lstoragedata.find(data => data.id == indexs);
       

          let {aname,aphoto,pcontent,pphoto,id} =  edit_data;
      


        post_edit_form.innerHTML = `

        
        <div class="msg">

        </div>
        <div class="my-3">
            <label for="">Auth Name</label>
            <input value = ${aname} name="aname" class="form-control" type="text">
        </div>
        <div class="my-3">
            <label for="">Auth Photo</label>
            <input value = ${aphoto} name="aphoto" class="form-control" type="text">
        </div>
        <div class="my-3">
            <label for="">Post content </label>
            <input value = ${pcontent} name="pcontent" class="form-control" type="text">
        </div>

        
        
       
        
    
        <div class="my-3">
            <label for="">Post Photo</label>
            <input value = ${pphoto} name="pphoto" class="form-control" type="text">
            <input value = ${id}  name="id" class="form-control" type="hidden">
        </div>
        <div class="my-3">
            
            <input value="Update post" class="btn btn-primary w-100" type="submit">
        </div>
       
        
        `



   
    }
};






// post_edit_form.onsubmit = (e) => {
//     e.preventDefault();

    
//   const form_data = new FormData(e.target);
//   const data = Object.fromEntries(form_data.entries());
//   const {aname,aphoto,pcontent,pphoto,id} = Object.fromEntries(form_data.entries());


  //getallpost
//   let allpost = readLsData('fb_post')
//   allpost[index] = {
//     aname    : aname,
//     aphoto   : aphoto,
//     pcontent : pcontent,
//     pphoto   : pphoto,
//     id    : id,
//   };
//   updateLsData('fb_post',allpost);
//   getallpost();
// }








///===================update now product end================>



   

   



