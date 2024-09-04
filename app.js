let allbox= document.querySelectorAll(".outer>div");
let mainbox= document.querySelector(".outer");
let Lsmallbox= document.querySelectorAll(".L>div");
let Msmallbox= document.querySelectorAll(".M>div");
let Rsmallbox= document.querySelectorAll(".R>div");
let option= document.querySelector(".option");
let heading= document.querySelector("h1");
let Lmatrix={shape:null,cor:null};     //tell that which shape currently in left matrix (f)    and what its cordinate index
let Mmatrix={shape:null,cor:null};     //tell that which shape currently in middle matrix (f) and what its cordinate index
let Rmatrix={shape:null,cor:null};    //tell that which shape currently in right matrix (f) and what its cordinate index
let redproble=1;                        //this is variable to deal with with red box problem occur when we click last option to fil 

let your_currentscore=0;
let your_heigestscore=0;




//this part draw shape


//this function draw strate line
function strate_shape(box,size,pointofstart_X,pointofstart_Y,clearordraw) {
    let point={
        x:[pointofstart_X,pointofstart_X,pointofstart_X,pointofstart_X,pointofstart_X,pointofstart_X],
        y:[pointofstart_Y,pointofstart_Y+1,pointofstart_Y+2,pointofstart_Y+3,pointofstart_Y+4]
           }
   if(clearordraw==1){
         for (let i = 0; i < 5; i++) {
              let indexto_glow=point.y[i]*size+point.x[i];
             box[indexto_glow].classList.toggle("black");}} 
   
   if(clearordraw==2){replace(box,size,point,5,pointofstart_X,pointofstart_Y,strate_shape);}
}


//this function draw horigental line
function horigental_shape(box,size,pointofstart_X,pointofstart_Y,clearordraw) {
    let point={
        x:[pointofstart_X,pointofstart_X+1,pointofstart_X+2,pointofstart_X+3,pointofstart_X+4],
        y:[pointofstart_Y,pointofstart_Y,pointofstart_Y,pointofstart_Y,pointofstart_Y]
    }
    if(clearordraw==1){
        for (let i = 0; i < 5; i++) {
            let indexto_glow=point.y[i]*size+point.x[i];
           box[indexto_glow].classList.toggle("black");}} 
       
       if(clearordraw==2){
        replace(box,size,point,5,pointofstart_X,pointofstart_Y,horigental_shape);}
}


//this function draw L shape 
function L_shape(box,size,pointofstart_X,pointofstart_Y,clearordraw) {
    let point={
        x:[pointofstart_X,pointofstart_X,pointofstart_X,pointofstart_X+1,pointofstart_X+2],
        y:[pointofstart_Y,pointofstart_Y+1,pointofstart_Y+2,pointofstart_Y+2,pointofstart_Y+2]
    }
    if(clearordraw==1){
        for (let i = 0; i < 5; i++) {
            let indexto_glow=point.y[i]*size+point.x[i];
           box[indexto_glow].classList.toggle("black");} } 
      
       if(clearordraw==2){
        replace(box,size,point,5,pointofstart_X,pointofstart_Y,L_shape); }
}


//this function draw squre_shape
function sqre_shape(box,size,pointofstart_X,pointofstart_Y,clearordraw) {
    let point={
        x:[pointofstart_X,pointofstart_X+1,pointofstart_X,pointofstart_X+1],
        y:[pointofstart_Y,pointofstart_Y,pointofstart_Y+1,pointofstart_Y+1]
    }
    if(clearordraw==1){
        for (let i = 0; i < 4; i++) {
            let indexto_glow=point.y[i]*size+point.x[i];
           box[indexto_glow].classList.toggle("black");}} 
       
       if(clearordraw==2){replace(box,size,point,4,pointofstart_X,pointofstart_Y,sqre_shape);}
}


//this function draw pluse shape
function plus_shape(box,size,pointofstart_X,pointofstart_Y,clearordraw) {
    let point={
        x:[pointofstart_X,pointofstart_X,pointofstart_X,pointofstart_X+1,pointofstart_X-1],
        y:[pointofstart_Y,pointofstart_Y-1,pointofstart_Y+1,pointofstart_Y,pointofstart_Y]
    }
    if(clearordraw==1){
        for (let i = 0; i < 5; i++) {
            let indexto_glow=point.y[i]*size+point.x[i];
           box[indexto_glow].classList.toggle("black");}
       } 
       
       if(clearordraw==2){  replace(box,size,point,5,pointofstart_X,pointofstart_Y,plus_shape);}
}


//this function draw t_shape
function T_shape(box,size,pointofstart_X,pointofstart_Y,clearordraw) {
    let point={
        x:[pointofstart_X,pointofstart_X,pointofstart_X-1,pointofstart_X+1],
        y:[pointofstart_Y,pointofstart_Y+1,pointofstart_Y,pointofstart_Y,]
    }
    if(clearordraw==1){
        for (let i = 0; i < 4; i++) {
            let indexto_glow=point.y[i]*size+point.x[i];
           box[indexto_glow].classList.toggle("black");}
       } 
       
       if(clearordraw==2){
        replace(box,size,point,4,pointofstart_X,pointofstart_Y,T_shape); }
}



function T_reverse(box,size,pointofstart_X,pointofstart_Y,clearordraw) {
    let point={
        x:[pointofstart_X,pointofstart_X,pointofstart_X-1,pointofstart_X+1],
        y:[pointofstart_Y,pointofstart_Y+1,pointofstart_Y+1,pointofstart_Y+1]
    }
    if(clearordraw==1){
        for (let i = 0; i < 4; i++) {
            let indexto_glow=point.y[i]*size+point.x[i];
           box[indexto_glow].classList.toggle("black");}
       } 
       
       if(clearordraw==2){
        replace(box,size,point,4,pointofstart_X,pointofstart_Y,T_reverse); }
}











function LMr(box,size,pointofstart_X,pointofstart_Y,clearordraw) {
    let point={
        x:[pointofstart_X,pointofstart_X,pointofstart_X,pointofstart_X-1,pointofstart_X-2],
        y:[pointofstart_Y,pointofstart_Y+1,pointofstart_Y+2,pointofstart_Y+2,pointofstart_Y+2]
    }
    if(clearordraw==1){
        for (let i = 0; i < 5; i++) {
            let indexto_glow=point.y[i]*size+point.x[i];
           box[indexto_glow].classList.toggle("black");}
       } 
       
       if(clearordraw==2){
        replace(box,size,point,5,pointofstart_X,pointofstart_Y,LMr); }
}


function LMt(box,size,pointofstart_X,pointofstart_Y,clearordraw) {
    let point={
        x:[pointofstart_X,pointofstart_X+1,pointofstart_X+2,pointofstart_X,pointofstart_X],
        y:[pointofstart_Y,pointofstart_Y,pointofstart_Y,pointofstart_Y+1,pointofstart_Y+2]
    }
    if(clearordraw==1){
        for (let i = 0; i < 5; i++) {
            let indexto_glow=point.y[i]*size+point.x[i];
           box[indexto_glow].classList.toggle("black");}
       } 
       
       if(clearordraw==2){
        replace(box,size,point,5,pointofstart_X,pointofstart_Y,LMt); }
}


function LMtr(box,size,pointofstart_X,pointofstart_Y,clearordraw) {
    let point={
        x:[pointofstart_X,pointofstart_X+1,pointofstart_X+2,pointofstart_X+2,pointofstart_X+2],
        y:[pointofstart_Y,pointofstart_Y,pointofstart_Y,pointofstart_Y+1,pointofstart_Y+2]
    }
    if(clearordraw==1){
        for (let i = 0; i < 5; i++) {
            let indexto_glow=point.y[i]*size+point.x[i];
           box[indexto_glow].classList.toggle("black");}
       } 
       
       if(clearordraw==2){
        replace(box,size,point,5,pointofstart_X,pointofstart_Y,LMtr); }
}





let allshape=[strate_shape,horigental_shape,L_shape,sqre_shape,plus_shape, T_shape,T_reverse,LMr,LMt,LMtr];  // this is collection on all array


// function to color the main box if valid ,after get click

function replace(box,size,point,count,pointofstart_X,pointofstart_Y,shape) {
    let good=true;
    try{ for (let i = 0; i < count; i++) {
        let indexto_glow=point.y[i]*size+point.x[i];
        if( box[indexto_glow].classList.contains("black") ){  good=false; }}}   //this loop check that for current chape space avalable or not
    catch{
         console.log("SIDE BOUNDARY"); }
    if(good){  
        for (let i = 0; i < count; i++) {
            let indexto_glow=point.y[i]*size+point.x[i];               //if space  avalable fill all box bounday with green color and add event listner for click
            box[indexto_glow].classList.toggle("shadow_green");} 
            if( !(box[pointofstart_Y*size+pointofstart_X].classList.contains("black"))){   
                box[pointofstart_Y*size+pointofstart_X].addEventListener("click",name)}}    //add click event listner on postion of cursor

    else{
        
       
        for (let i = 0; i < count; i++) {
            let indexto_glow=point.y[i]*size+point.x[i];
            if(!(box[indexto_glow].classList.contains("black"))){       //if  space not avalabe then  remaning space color with red
            box[indexto_glow].classList.toggle("shadow_red");  }  }
        }
        function name(params) {  // click event listner function  which fill main box with black and then remove event listner and remove shape from  option to prevent multiple use 
            shape(box,10,pointofstart_X,pointofstart_Y,1)
            {box[pointofstart_Y*size+pointofstart_X].removeEventListener("click",name) }   
            if(which_box_select.classList[0]=="L"){Lmatrix.shape(Lsmallbox,5,cordinates[Lmatrix.cor].x,cordinates[Lmatrix.cor].y,1); Lmatrix.shape=null;option_youconsume++; updatescore(count); }
            if(which_box_select.classList[0]=="M"){Mmatrix.shape(Msmallbox,5,cordinates[Mmatrix.cor].x,cordinates[Mmatrix.cor].y,1); Mmatrix.shape=null;option_youconsume++; updatescore(count); }          //all three take shape from selected optin and place at cursur
            if(which_box_select.classList[0]=="R"){Rmatrix.shape(Rsmallbox,5,cordinates[Rmatrix.cor].x,cordinates[Rmatrix.cor].y,1); Rmatrix.shape=null;option_youconsume++; updatescore(count); }  
       
       
           
        }
    }
     
      








    //this function help to  update the score bord
    function updatescore(params) {
        your_currentscore=your_currentscore+params;
        if(your_currentscore>your_heigestscore){your_heigestscore=your_currentscore;}
        if (params==0) {
            your_currentscore=0;
        }
        heading.innerHTML=`your current score is ${your_currentscore} </br> and your heigenst score is ${your_heigestscore}`;
    }   
       
        




    

              














    let cordinates=[{x:2 ,y:0 },{x:0,y:2},{x:1 ,y:1 },{x:1 ,y:1 },{x:2 ,y:2 },{x: 2,y:2 },{x:2,y:1},{x:3,y:1},{x:1,y:1},{x:1,y:1}];      //cordinates for   diffrent shape wrt to allshape array 
    let option_youconsume=null;                                                                  // in begning no shape create and use so null
//this part  take data from rml data to its variavble and store somewhere call  dreaw to draw in option
function make_data_about_option(params) {
    option_youconsume=0;                                        //this varible tell how many option you use 
    let ran1=Math.floor(Math.random()*10);
    let ran2=Math.floor(Math.random()*10);                       //generate 3 random numbers
    let ran3=Math.floor(Math.random()*10);
    let call_L=allshape[ran1];
    let call_M=allshape[ran2];                                  //on bases of random number get three random shape function
    let call_R=allshape[ran3];
   
     
     if(Lmatrix.shape!==null){Lmatrix.shape(Lsmallbox,5,cordinates[Lmatrix.cor].x,cordinates[Lmatrix.cor].y,1);}    //if opton contain any shape then remove it
     call_L(Lsmallbox,5,cordinates[ran1].x,cordinates[ran1].y,1);                                                   // call new random shape function to display in options 
     Lmatrix={shape:call_L,cor:ran1};                                                                               //store current shape data in a object its help to remove the shape next time


     if(Mmatrix.shape!==null){Mmatrix.shape(Msmallbox,5,cordinates[Mmatrix.cor].x,cordinates[Mmatrix.cor].y,1);}
     call_M(Msmallbox,5,cordinates[ran2].x,cordinates[ran2].y,1);
   Mmatrix={shape:call_M,cor:ran2};


   if( Rmatrix.shape!==null){ Rmatrix.shape(Rsmallbox,5,cordinates[Rmatrix.cor].x,cordinates[Rmatrix.cor].y,1);}
     call_R(Rsmallbox,5,cordinates[ran3].x,cordinates[ran3].y,1);
     Rmatrix={shape:call_R,cor:ran3};
  }

if(option_youconsume==null){  make_data_about_option(); }              // while page get loded create option data







let changed=false;  // this variable tell wether the we change option or not for choose
// this event help to select the perticular option to use that  shape 
document.querySelector(".option").addEventListener("click",(e)=>{
changed=true;
let s=e.target;
let whichboxclick=s.parentElement
let lmr=option.children;
for (const element of lmr) {
    if(element.classList.contains("glow")){
        element.classList.remove("glow");} }
     whichboxclick.classList.add("glow");
});



//this part show wether selected option shape   fit or not fif in main box while hovering on it

for (const element of allbox) {element.addEventListener("mouseenter",mainbox_fit_or_not);}
for (const element of allbox) {element.addEventListener("mouseleave",mainbox_fit_or_not);} 



let which_box_select; 
//it store the lrm selected now
function mainbox_fit_or_not(params) {
   

   let box= params.target;           // we get on which box we are currently 
   let lmr=option.children;
   try{  
       if(changed==true){
           for (let i = 0; i < lmr.length; i++) { //checking which option box selected now
               const element = lmr[i] ;
               if(element.classList.contains("glow")){which_box_select=element;  console.log(which_box_select);
               }; }
               changed=false;
            }
            let x= (parseInt(box.classList[1])-1)%10;              
            let y= Math.floor((parseInt(box.classList[1])-1)/10);  //getting cordinate of box on which we currently 1D->2D
   
            //   console.log(parseInt(box.classList[1]) ,x ,y);
           if(redproble==1){
            if(which_box_select.classList[0]=="L"){  if(Lmatrix.shape!=null)  Lmatrix.shape(allbox,10,x,y,2)}
            if(which_box_select.classList[0]=="M"){  if(Mmatrix.shape!=null)  Mmatrix.shape(allbox,10,x,y,2)}          //all three take shape from selected optin and place at cursur
            if(which_box_select.classList[0]=="R"){  if(Rmatrix.shape!=null)  Rmatrix.shape(allbox,10,x,y,2)}
            if(option_youconsume==3){ redproble=0; make_data_about_option();   check_remove_clearall_box(1); }
           }
        }
    catch{ console.log("no input selected")}
    redproble=1;

}





let button=document.querySelector("button");
button.addEventListener("click",restartgame);
function restartgame(params) {
  check_remove_clearall_box(2);
  your_currentscore=0;
  updatescore(0);
    
}



function check_remove_clearall_box(params) {
    if(params==1){
      for (let i = 0; i < 10; i++) { 
        let allblack=true;
        for (let index = 0; index < 10; index++) {
            if(!(allbox[index*10+i].classList.contains("black"))){allblack=false; break; }
         
        }
        if(allblack==true){
            for (let index = 0; index < 10; index++) {
            allbox[index*10+i].classList.remove("black")
            allbox[index*10+i].classList.add("yellow");
            allbox[index*10+i].classList.remove("shadow_green")
         
        }}
      }
      for (let index = 0; index < 10; index++) {
        let allblack=true;
        for (let i = 0; i < 10; i++) {
            if(!(allbox[i+index*10].classList.contains("black"))&& (!(allbox[i+index*10].classList.contains("yellow")))){allblack=false; makeyellowremve(index*10); break; }
            
        }

        if(allblack==true){for (let i = 0; i < 10; i++) {
            
            allbox[i+index*10].classList.remove("black")
            allbox[i+index*10].classList.remove("shadow_green")
            allbox[index].classList.remove("yellow")
        }}
        
      }
    }
    if(params==2){
  for (let index = 0; index < 100; index++) {
    allbox[index].classList.remove("black");
    allbox[index].classList.remove("shadow_green");
    allbox[index].classList.remove("yellow");
    
  }
 
  make_data_about_option();
    }
    
}

function makeyellowremve(row) {
    for (let index = row; index < row+10; index++) {
      if ( allbox[index].classList.contains("yellow")){allbox[index].classList.remove("yellow")}
        
    }
}

//mersy chance
document.querySelector(".freespace").addEventListener("click",()=>{
    check_remove_clearall_box(1);
})