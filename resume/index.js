var fullName = document.getElementById('fullName')
var title = document.getElementById('title')
var email = document.getElementById('email')
var mobileNo = document.getElementById('phoneNumber')
var city = document.getElementById('city')
var state = document.getElementById('state')
var pin = document.getElementById('pincode')
var about = document.getElementById('aboutAs')


function showResume(){
let txtName = fullName.value;
// let txtTitle = title.value;
let txtEmail = email.value;
let txtMob = mobileNo.value;
let txtCity = city.value;
let txtState = state.value;
let txtPin = pin.value;
let txtAbout = about.value;


createResume(txtName,txtEmail,txtMob,txtCity,txtState,txtPin,txtAbout)
showAddBtn()
addExperience()
skillAddInResume()
addPersonalInfo()


}

function addeducation(){
    
    // let degree = document.getElementById('degree').value;
    // let collegeName = document.getElementById('college-name').value;
    // let passYear = document.getElementById('passYear').value;
    // let percentage = document.getElementById('percentage').value;
    
    // // console.log(degree);
    // showEducationInResume(objEducation)
}
// function showEducationInResume(objEducation){
//     document.getElementById('degreeName').textContent=objEducation.degree;
//     document.getElementById('collegeName').textContent=objEducation.board;
//     document.getElementById('passing-year').textContent=objEducation.year;
//     document.getElementById('percentageResume').textContent=objEducation.percent
// }

function addExperience(){
    let jobRole = document.getElementById('job-role').value;
    let companyName = document.getElementById('company-name').value;
    let workYear = document.getElementById('workYear').value;
    let jobDis = document.getElementById('discription').value;
    exprienceAddInResume(jobRole,companyName,workYear,jobDis)
}

function exprienceAddInResume(jobrole,companyName,workYear,discription){
    document.getElementById('jobRole-resume').innerText=jobrole
    document.getElementById('companyName-resume').innerText=companyName
    document.getElementById('jobyear').innerText=workYear
    document.getElementById('discriptionResume').innerText=discription
}

function skillAddInResume(){
    let skillName_2 = document.getElementById('skillName2').value;
    let skillName_1 = document.getElementById('skillName1').value;
    let skillName_3 = document.getElementById('skillName3').value;
    let skillName_4 = document.getElementById('skillName4').value;
  
    
    // console.log(skillName_1);
    // return skillName_1
    showSkillInResume(skillName_1,skillName_2,skillName_3,skillName_4)
   
}
function showSkillInResume(skill_1,skill_2,skill_3,skill_4){
    document.getElementById('proLanguage').textContent=skill_1
    document.getElementById('database').textContent=skill_2
    document.getElementById('webTech').textContent=skill_3
    document.getElementById('os').textContent=skill_4
    
}



function showAddBtn(){
    let degree = document.getElementById('degree-gr').value;
    let collegeName = document.getElementById('college-name-gr').value;
    let passYear = document.getElementById('passYearGr').value;
    let percentage = document.getElementById('percentageGr').value;

    
    let school_12 = document.getElementById('college-name_12').value;
    let year_12 = document.getElementById('passYear_12').value;
    let percent_12 = document.getElementById('percentage_12').value;
    
   
    let school_10 = document.getElementById('college-name_10').value;
    let year_10= document.getElementById('passYear_10').value;
    let percent_10 = document.getElementById('percentage_10').value;
    
  
    addEduBtn(degree,collegeName,passYear,percentage,school_12,year_12,percent_12,school_10,year_10,percent_10)
   

}

function addEduBtn(degree,collegeName,passYear,percentage,school_12,year_12,percent_12,school_10,year_10,percent_10){
    document.getElementById('degreeName').textContent=degree;
    document.getElementById('collegeName').textContent=collegeName;
    document.getElementById('passing-year').textContent=passYear;
    document.getElementById('percentageResume').textContent=percentage;

    document.getElementById('inter').innerHTML='12 <sup> th </sup>'
    document.getElementById('school_12').textContent=school_12;
    document.getElementById('pass_12').textContent=year_12;
    document.getElementById('percent_12').textContent=percent_12;

    document.getElementById('highschool').innerHTML='10 <sup> th </sup>'
    document.getElementById('school_10').textContent=school_10;
    document.getElementById('pass_10').textContent=year_10;
    document.getElementById('percent_10').textContent=percent_10

}
function addPersonalInfo(){
    let father = document.getElementById('fatherName').value;
    let dob = document.getElementById('dob').value;
    let gender = document.getElementById('gender').value;  
    let nation = document.getElementById('nation').value;
    let marital = document.getElementById('marital').value;
    let language = document.getElementById('language').value;
    let hobbies = document.getElementById('hobbies').value;
    showPersonalInfoInResume(father,dob,gender,nation,marital,language,hobbies) 
}

function showPersonalInfoInResume(father,dob,gender,nation,marital,language,hobbies) {
    document.getElementById('txtFatherName').textContent=father
    document.getElementById('txtDob').textContent=dob
    document.getElementById('txtGender').textContent=gender
    document.getElementById('txtNation').textContent=nation
    document.getElementById('txtMarital').textContent=marital
    document.getElementById('txtLanguage').textContent=language
    document.getElementById('txtHobbies').textContent=hobbies
}
// function addExpBtn(){
//     var experience = document.getElementById('experience-section');
//     var form = document.querySelector('#experience');
//     // var addEcuBtn  = document.getElementById('addExpBtn')

//     // console.log(form);
//     var  next = document.createElement('div');
//     next.className='main-form'
//     next.innerHTML=form.innerHTML
//     // education.appendChild(next)
   
//     console.log(next);
//     // console.log(education);
//     experience.appendChild(next)
// }

// function addSkillBtn(){
//     let skill = document.querySelector('#skill-section')
//     let  skillInput = document.querySelector('#skill')
//     // console.log(skill);
//     // // let nextSkill = document.createElement('div')
//     // nextSkill.className='main-form'
//     // nextSkill.id='skill'
//     // nextSkill.innerHTML=skillInput.innerHTML
//     // console.log(skillInput.innerHTML);
//     // skill.appendChild(nextSkill)
//     let newskill = skillInput.cloneNode(true)
//     // console.log(newskill);
//     skill.appendChild(newskill)
//     // console.log(newskill);
//     skillArr.push(newskill);
//     console.log(skillArr);
//     for(let i of skillArr){
//         console.log(i);
//     }

//     // console.log(skill);
//     // for (let i i)
//     // console.log(skill.childNodes);
//     // for (let i of skill.childNodes){
//     //    console.log(i.lastChild);
//     // }
    
 

//     // var allSkill =  document.querySelectorAll('.skillClass');
    
//     // for(let i of allSkill){
//     //     console.log(i.value);
//     // }
// }

function createResume(name,email,mobileNo,city,state,pin,about){
    document.getElementById('name-input').innerText= name
    // document.getElementById('title').innerText= title
    document.getElementById('email-input').innerText= email
    document.getElementById('mobile-input').innerText= mobileNo
    document.getElementById('address-input').innerText= `${city} ,${state } ,${pin}`
    document.getElementById('about-input').innerText= about;
    document.getElementById('place').textContent= city;
    document.getElementById('date').textContent= new Date().toLocaleDateString();
    let  newName = name.toLowerCase()
   
    document.getElementById('signature').textContent= newName;

   
    

   
}
// let sk = ()=>{
//     let skillName =  skill.forEach((e)=>{
//         console.log(e.value);
//     })
//     // console.log(skillName);
    
//     let x = document.querySelectorAll('#skill>.input>div>input')
//     x.forEach((e)=>{
//         console.log(e.v);
//     })
// }


function download(){
    let resume = document.getElementById('resume');
    window.print()
}