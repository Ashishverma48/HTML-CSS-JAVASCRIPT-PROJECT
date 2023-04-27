var fullName = document.getElementById('fullName')
var title = document.getElementById('title')
var email = document.getElementById('email')
var mobileNo = document.getElementById('phoneNumber')
var city = document.getElementById('city')
var state = document.getElementById('state')
var pin = document.getElementById('pincode')
var about = document.getElementById('aboutAs')
var degree = document.getElementById('degree')
var collegeName = document.getElementById('college-name');
var passYear = document.getElementById('passYear');
var percentage = document.getElementById('percentage');
var jobRole = document.getElementById('job-role');
var companyName = document.getElementById('company-name');
var workYear = document.getElementById('workYear');
var jobDis = document.getElementById('discription');
var skill = document.querySelectorAll('.skillClass')





function showResume(){
let txtName = fullName.value;
let txtTitle = title.value;
let txtEmail = email.value;
let txtMob = mobileNo.value;
let txtCity = city.value;
let txtState = state.value;
let txtPin = pin.value;
let txtAbout = about.value;
let txtDegree = degree.value;
let txtCollegeName = collegeName.value;
let txtPassYear = passYear.value;
let txtPercentage = percentage.value;
let txtJobRole = jobRole.value;
let txtCompanyName = companyName.value;
let txtWorkYear = workYear.value;
let txtJobDis = jobDis.value;
let x = document.querySelectorAll('#skill>.input>div>input')
let y =     x.forEach(e=> e.value)
console.log(y);

createResume(txtName,txtTitle,txtEmail,txtMob,txtCity,txtState,txtPin,txtAbout,txtDegree,txtCollegeName,txtPassYear,txtPercentage,txtJobRole,txtCompanyName,txtWorkYear,txtJobDis)

}




function addEduBtn(){
    var education = document.getElementById('education-section');
    var form = document.querySelector('#education');
    // var addEcuBtn  = document.getElementById('addEduBtn')

    // console.log(form);
    var  next = document.createElement('div');
    next.className = 'main-form'
    next.innerHTML=form.innerHTML
    // education.appendChild(next)
   
    console.log(next);
    // console.log(education);
    education.appendChild(next)
    
    
}
function addExpBtn(){
    var experience = document.getElementById('experience-section');
    var form = document.querySelector('#experience');
    // var addEcuBtn  = document.getElementById('addExpBtn')

    // console.log(form);
    var  next = document.createElement('div');
    next.className='main-form'
    next.innerHTML=form.innerHTML
    // education.appendChild(next)
   
    console.log(next);
    // console.log(education);
    experience.appendChild(next)
}

function addSkillBtn(){
    let skill = document.querySelector('#skill-section')
    let  skillInput = document.querySelector('#skill')
    // console.log(skill);
    // // let nextSkill = document.createElement('div')
    // nextSkill.className='main-form'
    // nextSkill.id='skill'
    // nextSkill.innerHTML=skillInput.innerHTML
    // console.log(skillInput.innerHTML);
    // skill.appendChild(nextSkill)
    let newskill = skillInput.cloneNode(true)
    // console.log(newskill);
    skill.appendChild(newskill)
    // console.log(skill);
    // for (let i i)
    console.log(skill.childNodes);
    for (let i of skill.childNodes){
       console.log(i.lastChild);
    }
    
 

    // var allSkill =  document.querySelectorAll('.skillClass');
    
    // for(let i of allSkill){
    //     console.log(i.value);
    // }
}

function createResume(name,title,email,mobileNo,city,state,pin,about,degree,college,passYear,percent,jobrole,companyName,workYear,jobDis){
    document.getElementById('name-input').innerText= name
    document.getElementById('title').innerText= title
    document.getElementById('email-input').innerText= email
    document.getElementById('mobile-input').innerText= mobileNo
    document.getElementById('address-input').innerText= `${city} ,${state } ,${pin}`
    document.getElementById('about-input').innerText= about;
    document.getElementById('degreeName').innerText=degree;
    document.getElementById('collegeName').innerText=college;
    document.getElementById('passing-year').innerText=passYear
    document.getElementById('percentageResume').innerText=percent
    document.getElementById('jobRole-resume').innerText=jobrole
    document.getElementById('companyName-resume').innerText=companyName
    document.getElementById('jobyear').innerText=workYear
    document.getElementById('discriptionResume').innerText=jobDis
    console.log(degree);
   
}
let sk = ()=>{
    let skillName =  skill.forEach((e)=>{
        console.log(e.value);
    })
    // console.log(skillName);
    
    let x = document.querySelectorAll('#skill>.input>div>input')
    x.forEach((e)=>{
        console.log(e.v);
    })
}