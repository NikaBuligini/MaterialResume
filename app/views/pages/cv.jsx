import React from 'react'

import Layout from '../layouts/main'

class HomeComponent extends React.Component {
  render () {
    return (
      <Layout title={this.props.title} user={this.props.user}>
        <div className="row">
          <div className="col s12 l4 left_content">

           <div className="collection card-panel" style={{padding: "0px"}}>
             <div className="collection-header about_me_header">
               <span className="name">Nikoloz Buligini</span>
             </div>

             <div className="collection-item avatar">
               <img src="img/ico_date.svg" className="icon" />
               <span className="title">23</span>
               Years Old
             </div>

             <div className="divider"></div>

             <a href="mailto:nbuligini11@gmail.com" target="_blank" className="collection-item avatar">
               <img src="img/ico_email.svg" className="icon" />
               <span className="title">nbuligini11@gmail.com</span>
               Personal
             </a>

             <a href="http://www.thenikoloz.me" target="_blank" className="collection-item avatar">
               <img src="img/ico_web.svg" className="icon" />
               <span className="title">thenikoloz.me</span>
               Personal
             </a>

             <div className="divider"></div>

             <a href="https://github.com/NikaBuligini" target="_blank" className="collection-item avatar">
               <img src="img/ico_github.svg" className="icon" />
               <span className="title">NikaBuligini</span>
               GitHub
             </a>

             <div className="divider"></div>

             <a href="https://twitter.com/buligini" target="_blank" className="collection-item avatar">
               <img src="img/ico_twitter.svg" className="icon" />
               <span className="title">@buligini</span>
               Twitter
             </a>

             <a href="https://plus.google.com/111938155693356715457" target="_blank" className="collection-item avatar">
               <img src="img/ico_google_plus.svg" className="icon" />
               <span className="title">+NikolozBuligini</span>
               Google Plus
             </a>

             <div className="divider"></div>

             <a href="https://www.linkedin.com/in/nikoloz-buligini-19349983" target="_blank" className="collection-item avatar">
               <img src="img/ico_linkedin.svg" className="icon" />
               <span className="title">nikoloz-buligini</span>
               Linkedin
             </a>
           </div>

           <div className="card-panel cv_card">
             <img src="img/ico_interest.svg" className="icon" />
             <span className="title">Interests</span>

             <div className="skills">
               <span className="title">Node.js</span>

               <span className="title">AI</span>
               Mostly chatbot
             </div>
           </div>

           <div className="card-panel cv_card">
            <img src="img/ico_language.svg" className="icon" />
            <span className="title">Language</span>

            <div className="skills">
              <span className="title">Georgian</span>
              Native Language

              <span className="title">English</span>
              Good skills, both written and oral.

              <span className="title">Russian</span>
              Not so good
             </div>
           </div>
         </div>


         <div className="col s12 l8">
           <span className="cv_title">Software Developer</span>

           <div className="card-panel cv_card">
             <img src="img/ico_work.svg" className="icon" />
             <span className="title">Work Experience</span>

             <div className="date_container">
               <span className="date"><div className="round_mark"></div>Jan 2015 - Present</span>
               <div className="date_entry left_border">
                 <span className="title">Software / Web developer <a href="#" target="_blank" className="at">@2G</a></span>
                 <span className="location"><img src="img/ico_map.svg" />Tbilisi, Georgia</span>

                 <div className="app_container">
                   <a href="https://eloan.ge/" target="_blank" className="app_entry">
                     <img src="https://eloan.ge/Content/new_images/eloanlogo.png" style={{height: '20px', marginTop: '12px'}} />
                     <span className="title">eLoan</span>
                     150+k Users
                   </a>
                 </div>
               </div>

               <span className="date"><div className="round_mark"></div>Dec 2014 - Mar 2015</span>
               <div className="date_entry">
                 <span className="title">Human Resource Specialist <a href="https://www.linkedin.com/groups/68785" target="_blank" className="at">@IPP</a></span>
                 <span className="location">Remote</span>
               </div>
             </div>
           </div>

           <div className="card-panel cv_card">
             <img src="img/ico_education.svg" className="icon" />
             <span className="title">Education</span>

             <div className="date_container">
               <span className="date"><div className="round_mark"></div>2008 - 2011</span>
               <div className="date_entry left_border">
                 <span className="title">Master of Business Administration (MBA) <a href="https://tsu.ge/" target="_blank" className="at">@TSU</a></span>
                 <span className="location"><img src="img/ico_map.svg" />Tbilisi, Georgia</span>
                 <span className="description">Business Administration with module Management</span>
               </div>

               <span className="date"><div className="round_mark"></div>2006 - 2008</span>
               <div className="date_entry">
                 <span className="title">Bachelor of Social Sciences <a href="http://freeuni.edu.ge/" target="_blank" className="at">@FreeUni</a></span>
                 <span className="location"><img src="img/ico_map.svg" />Tbilisi, Georgia</span>
                 <span className="description">Major - Governance. Minor - Programming</span>
               </div>
             </div>
           </div>

           <div className="card-panel cv_card">
             <img src="img/ico_personnal_project.svg" className="icon" />
             <span className="title">Personal Projects</span>

             <div className="app_container">
               <a href="https://github.com/NikaBuligini/git-auto-deploy" target="_blank" className="app_entry">
                 <img src="img/ico_github.svg" />
                 <span className="title">git-auto-deploy</span>
                 0 stars
               </a>
               <a href="https://github.com/NikaBuligini/Laravel-CMS" target="_blank" className="app_entry">
                 <img src="img/ico_github.svg" />
                 <span className="title">Laravel-CMS</span>
                 2 stars
               </a>
               <a href="https://github.com/NikaBuligini/Todo" target="_blank" className="app_entry">
                 <img src="img/ico_github.svg" />
                 <span className="title">Todo</span>
                 0 stars
               </a>
               <a href="https://github.com/NikaBuligini/Todo-parse-server" target="_blank" className="app_entry">
                 <img src="img/ico_github.svg" />
                 <span className="title">Todo-parse-server</span>
                 0 stars
               </a>
               <a href="https://github.com/NikaBuligini/MaterialResume" target="_blank" className="app_entry">
                 <img src="img/ico_github.svg" />
                 <span className="title">MaterialResume</span>
                 0 stars
               </a>
             </div>
           </div>

           <div className="card-panel cv_card">
             <img src="img/ico_skills.svg" className="icon" />
             <span className="title">Professional Skills</span>
             <div className="skills">
                 <span className="title">Mobile</span>
                 Android (Java), React-native

                 <span className="title">Web / Server</span>
                 ASP.NET MVC, PHP (Laravel), HTML, CSS, Javascript (NodeJS, React, Redux, Vue)

                 <span className="title">Other</span>
                 WebService (REST/SOAP, JSON, XML), WebSocket
             </div>
           </div>
         </div>
       </div>
      </Layout>
    )
  }
}

export default HomeComponent
