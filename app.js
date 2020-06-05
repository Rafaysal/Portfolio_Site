

let typing = document.getElementById('typing')
let typing2 = document.getElementById('typing2')
let typing3 = document.getElementById('typing3')
let type = document.getElementsByClassName('type')[0]

let aniComplete = false;

let intro= 'Hi, my name is Rafay!';
let intArr = intro.split("");
let intro2 = 'I am a ';
let intArr2 = intro2.split("");
let intro3 = 'Full Stack Web Developer';
let intArr3 = intro3.split("");
let intro4 = '!';
let intArr4 = intro4.split("");

let view = 1;

let blink = document.getElementById('blink')
let blink2 = document.getElementById('blink2')
let blink3 = document.getElementById('blink3')
let blink4 = document.getElementById('blink4')

let education = document.getElementById('education');
let toolbox = document.getElementById('toolbox');
let loc= document.getElementById('loc');
let hoverBox = document.getElementsByClassName('hoverBox')[0]
let hoverBox2 = document.getElementsByClassName('hoverBox2')[0]
let hoverBox3 = document.getElementsByClassName('hoverBox3')[0]
let bg = document.getElementById('bg')

let home = document.getElementsByClassName('blue')[0]
let portfolio = document.getElementsByClassName('port')[0]
let port = 'Portfolio'
let portArr = port.split("")
let typing10 = document.getElementById('typing10')

let projects = document.getElementsByClassName('projects')[0]

let contactInfo = document.getElementsByClassName('contact')[0]
let contact = 'Contact Me'
let contactArr = contact.split("")
let contactPage = document.getElementsByClassName('contactPage')

let submit = document.getElementsByClassName('submit')[0]

let skills = document.getElementsByClassName('tech')[0]
let skill = document.getElementsByClassName('skills')[0]
let typing30 = document.getElementById('typing30')
let skl = 'Skills'
let skillArr = skl.split('')


let i=0;
    let interval = setInterval(()=>{
       typing.innerText += intArr[i];
       i++
        if(i === intArr.length){
            console.log('check')
            clearInterval(interval)
            setTimeout(()=>{
                typing.classList.add('highlight')
            },300)
            setTimeout(()=>{
                typing.classList.remove('highlight')
                typing.innerText = "";
                let i=0;
                next();
            },800)

        }
 },50)


let next =()=>{
    let j=0;
    let interval2 = setInterval(()=>{
        typing.innerText += intArr2[j];
        j++
         if(j === intArr2.length){
             console.log('check')
             clearInterval(interval2)
             next2()   
         }
  },50) 
}

let next2 =()=>{
    let k=0;
    let interval3 = setInterval(()=>{
        typing2.innerText += intArr3[k];
        k++
         if(k === intArr3.length){
             console.log('check')
             clearInterval(interval3)
             next3()   
         }
  },50) 
}

let next3 =()=>{
    let m=0;
    let interval3 = setInterval(()=>{
        typing3.innerText += intArr4[m];
        m++
         if(m === intArr4.length){
             console.log('check')
             clearInterval(interval3)
             next4()
         }
  },50) 
}

let next4 =()=>{
    type.classList.add('animate');
    typing.classList.add('fade');
    typing3.classList.add('fade');
    blink.classList.add('fade');

        loc.classList.remove('hide');
        toolbox.classList.remove('hide');
        education.classList.remove('hide');

        loc.classList.add('fade-in');
        toolbox.classList.add('fade-in');
        education.classList.add('fade-in');

    setTimeout(()=>{
        typing.classList.add('hide');
        typing3.classList.add('hide');
        blink.style.display='none';
        aniComplete = true
    },1000)
    
}
   
education.addEventListener('mouseover',()=>{
    loc.style.display = 'none'
    toolbox.style.display = 'none'
    //type.style.display = 'none'
    hoverBox.style.display = 'block'
    hoverBox.classList.add('fade-2')
    bg.style.filter = 'blur(8px) brightness(0.5)'
    education.style.filter = 'invert(1)'
    setTimeout(()=>{
        hoverBox.classList.remove('fade-2')
        hoverBox.style.opacity = 1
    },450)
}
)

education.addEventListener('mouseout',()=>{
    loc.style.display = 'block'
    toolbox.style.display = 'block'
    hoverBox.classList.add('fade-3')
    bg.style.filter = 'blur(0px) brightness(1)'
    education.style.filter = 'none'
    hoverBox.style.display = 'none'
    hoverBox.classList.remove('fade-3')
    hoverBox.style.opacity = 0
}
)


toolbox.addEventListener('mouseover',()=>{
    loc.style.display = 'none'
    education.style.display = 'none'
    toolbox.style.filter = 'invert(1)'
    hoverBox2.style.display = 'block'
    hoverBox2.classList.add('fade-2')
    bg.style.filter = 'blur(8px) brightness(0.5)'
  
    setTimeout(()=>{
        hoverBox2.classList.remove('fade-2')
        hoverBox2.style.opacity = 1
        
    },450)
}
)

toolbox.addEventListener('mouseout',()=>{
    loc.style.display = 'block'
    education.style.display = 'block'
    //type.style.display = 'block'
    toolbox.style.filter = 'none'
    bg.style.filter = 'blur(0px) brightness(1)'
    hoverBox2.classList.add('fade-3')

        hoverBox2.classList.remove('fade-3')
        hoverBox2.style.opacity = 0
        hoverBox2.style.display = 'none'
}
)

loc.addEventListener('mouseover',()=>{
    toolbox.style.display = 'none'
    education.style.display = 'none'
    type.style.opacity = '0'
    loc.style.filter = 'invert(1)'
    hoverBox3.style.display = 'block'
    hoverBox3.classList.add('fade-2')
    bg.style.filter = 'blur(8px) brightness(0.5)'
  
    setTimeout(()=>{
        hoverBox3.classList.remove('fade-2')
        hoverBox3.style.opacity = 1
        
    },450)
}
)

loc.addEventListener('mouseout',()=>{
    toolbox.style.display = 'block'
    education.style.display = 'block'
    type.style.opacity = 1
    loc.style.filter = 'none'
    bg.style.filter = 'blur(0px) brightness(1)'
    hoverBox3.classList.add('fade-3')
    
        hoverBox3.classList.remove('fade-3')
        hoverBox3.style.opacity = 0
        hoverBox3.style.display = 'none'

}
)

let portAni = false;
let homeAni = false;
let contactAni = false;
let skillsAni = false;

portfolio.addEventListener('click',()=>{
        
        if(view === 1 && aniComplete && !portAni && !homeAni && !contactAni){
            portAni = true;
            portfolio.classList.add('blue')
            home.classList.remove('blue')
            typing2.classList.add('highlight')
            loc.style.display = 'none'
            education.style.display = 'none'
            toolbox.style.display = 'none'
            
            setTimeout(()=>{
                projects.style.display='block'
                projects.classList.add('fade-2')
                blink2.style.display='inline'
                typing2.classList.remove('highlight')
                typing2.innerText = "";
                showPort()     
            },800)
        }

        else if(view === 3 && aniComplete && !portAni && !homeAni && !contactAni){
            portAni = true;
            portfolio.classList.add('blue')
            contactInfo.classList.remove('blue')
            typing20.classList.add('highlight')
            contactPage[0].style.display = 'none'
            contactPage[1].style.display = 'none'
            
            setTimeout(()=>{
                projects.style.display='block'
                projects.classList.add('fade-2')
                blink2.style.display='inline'
                typing20.classList.remove('highlight')
                typing20.innerText = "";
                showPort()     
            },800)
        }

        else if(view === 4 && aniComplete && !portAni && !homeAni && !contactAni){
            portAni = true;
            portfolio.classList.add('blue')
            skills.classList.remove('blue')
            typing30.classList.add('highlight')
            skill.style.display = 'none'
            
            setTimeout(()=>{
                projects.style.display='block'
                projects.classList.add('fade-2')
                blink2.style.display='inline'
                typing30.classList.remove('highlight')
                typing30.innerText = "";
                showPort()     
            },800)
        }
       
       
})

let showPort =()=>{
    let i=0;
    let interval10 = setInterval(()=>{
       typing10.innerText += portArr[i];
       i++
       if(i === 5){
           projects.classList.remove('fade-2')
       }
        if(i === portArr.length){    
            portAni = false
            clearInterval(interval10)
            blink2.style.display='none'
            view=2;
        }
    },100) 
}

home.addEventListener('click',()=>{
    if(view === 2 && aniComplete && !homeAni && !portAni && !contactAni){
            homeAni = true;
            home.classList.add('blue')
            portfolio.classList.remove('blue')
                loc.style.display = 'block'
                education.style.display = 'block'
                toolbox.style.display = 'block'
            typing10.classList.add('highlight')
            projects.classList.add('fade-3')
            setTimeout(()=>{
                projects.classList.remove('fade-3')
                projects.style.display='none';
            },180)
            setTimeout(()=>{
                blink.style.display='inline'
                typing10.classList.remove('highlight')
                typing10.innerText = "";
                showHome()
                view=1;
            },800)
        
    }

    else if(view === 3 && aniComplete && !homeAni && !portAni && !contactAni){
        homeAni = true;
        home.classList.add('blue')
        contactInfo.classList.remove('blue')
            loc.style.display = 'block'
            education.style.display = 'block'
            toolbox.style.display = 'block'
        typing20.classList.add('highlight')
        contactPage[0].classList.add('fade-3')
        contactPage[1].classList.add('fade-3')
        setTimeout(()=>{
            contactPage[0].classList.remove('fade-3')
            contactPage[0].style.display='none';
            contactPage[1].classList.remove('fade-3')
            contactPage[1].style.display='none';
        },180)
        setTimeout(()=>{
            blink.style.display='inline'
            typing20.classList.remove('highlight')
            typing20.innerText = "";
            showHome()
            view=1;
        },800)
    
}

    else if(view === 4 && aniComplete && !portAni && !homeAni && !contactAni){
        homeAni = true;
            loc.style.display = 'block'
            education.style.display = 'block'
            toolbox.style.display = 'block'
        home.classList.add('blue')
        skills.classList.remove('blue')
        typing30.classList.add('highlight')
        skill.style.display = 'none'
        
        setTimeout(()=>{
            blink.style.display='inline'
            typing30.classList.remove('highlight')
            typing30.innerText = "";
            showHome()
            view=1;
        },800)
    }
})

let showHome =()=>{
    let i=0;
    let interval1 = setInterval(()=>{
       typing2.innerText += intArr3[i];
       i++
        if(i === intArr3.length){    
            clearInterval(interval1)
            blink.style.display='none'
            homeAni = false;
        }
    },60) 
}




contactInfo.addEventListener('click',()=>{   
    if(aniComplete && !portAni && !homeAni && !contactAni){
        if(view ===1){
            contactAni = true;
            contactInfo.classList.add('blue')
            home.classList.remove('blue')
            typing2.classList.add('highlight')
            loc.style.display = 'none'
            education.style.display = 'none'
            toolbox.style.display = 'none'
        
        setTimeout(()=>{ 
            blink3.style.display='inline'
            typing2.classList.remove('highlight')
            typing2.innerText = "";
            contactPage[0].style.display='flex'
            contactPage[0].classList.add('fade-2')
            contactPage[1].style.display='block'
            contactPage[1].classList.add('fade-2')
            showContact()
        },800)
        }
        else if(view ===2){
            contactAni = true;
            contactInfo.classList.add('blue')
            portfolio.classList.remove('blue')
            typing10.classList.add('highlight')
            projects.classList.add('fade-3')
            setTimeout(()=>{
                projects.classList.remove('fade-3')
                projects.style.display='none';
            },200)
            
            setTimeout(()=>{ 
                blink3.style.display='inline'
                typing10.classList.remove('highlight')
                typing10.innerText = "";
                loc.style.display = 'none'
                education.style.display = 'none'
                toolbox.style.display = 'none'
                contactPage[0].style.display='flex'
                contactPage[0].classList.add('fade-2')
                contactPage[1].style.display='block'
                contactPage[1].classList.add('fade-2')
                showContact()
            },800)
            }

            else if(view === 4){
                contactAni = true;
                contactInfo.classList.add('blue')
                skills.classList.remove('blue')
                typing30.classList.add('highlight')
                skill.style.display = 'none'
                
                setTimeout(()=>{
                    blink3.style.display='inline'
                    typing30.classList.remove('highlight')
                    typing30.innerText = "";
                    
                    contactPage[0].style.display='flex'
                    contactPage[0].classList.add('fade-2')
                    contactPage[1].style.display='block'
                    contactPage[1].classList.add('fade-2')
                    showContact()  
                },800)
            }      
    }
})

let showContact =()=>{
    let i=0;
    let interval20 = setInterval(()=>{
       typing20.innerText += contactArr[i];
       i++
       if(i === 5){
        contactPage[0].classList.remove('fade-2')
        contactPage[1].classList.remove('fade-2')
        }

        if(i === contactArr.length){    
            contactAni = false
            clearInterval(interval20)
            blink3.style.display='none'
            view=3;
        }
    },100) 
}


skills.addEventListener('click',()=>{
        
    if(view === 1 && aniComplete && !portAni && !homeAni && !contactAni){
        skillsAni = true;
        skills.classList.add('blue')
        home.classList.remove('blue')
        typing2.classList.add('highlight')
        loc.style.display = 'none'
        education.style.display = 'none'
        toolbox.style.display = 'none'
        
        setTimeout(()=>{
            skill.style.display='block'
            skill.classList.add('fade-2')
            blink4.style.display='inline'
            typing2.classList.remove('highlight')
            typing2.innerText = "";
            showSkill()     
        },800)
    }

    if(view === 2 && aniComplete && !portAni && !homeAni && !contactAni){
        skillsAni = true;
        skills.classList.add('blue')
        portfolio.classList.remove('blue')
        typing10.classList.add('highlight')
        projects.classList.add('fade-3')
        setTimeout(()=>{
            projects.classList.remove('fade-3')
            projects.style.display='none';
        },200)

        setTimeout(()=>{
            skill.style.display='block'
            skill.classList.add('fade-2')
            blink4.style.display='inline'
            typing10.classList.remove('highlight')
            typing10.innerText = "";
            showSkill()     
        },800)
    }

    if(view === 3 && aniComplete && !portAni && !homeAni && !contactAni){
        skillsAni = true;
        skills.classList.add('blue')
        contactInfo.classList.remove('blue')
        typing20.classList.add('highlight')
        contactPage[0].style.display = 'none'
        contactPage[1].style.display = 'none'
        
        setTimeout(()=>{
            skill.style.display='block'
            skill.classList.add('fade-2')
            blink4.style.display='inline'
            typing20.classList.remove('highlight')
            typing20.innerText = "";
            showSkill()       
        },800)
    }
   
   
})

let showSkill =()=>{
let i=0;
let interval30 = setInterval(()=>{
   typing30.innerText += skillArr[i];
   i++
    if(i === skillArr.length){    
        skillsAni = false
        clearInterval(interval30)
        blink4.style.display='none'
        view=4;
    }
},100) 
}