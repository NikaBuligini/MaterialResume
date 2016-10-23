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
               <span className="name">Stan Kocken</span>
             </div>

             <div className="collection-item avatar">
               <img src="img/ico_date.svg" className="icon" />
               <span className="title">27</span>
               Years Old
             </div>

             <div className="divider"></div>

             <a href="mailto:stan.kocken+cv@gmail.com" target="_blank" className="collection-item avatar">
               <img src="img/ico_email.svg" className="icon" />
               <span className="title">stan.kocken@gmail.com</span>
               Personal
             </a>

             <a href="http://www.stankocken.com?utm_source=stankocken_cv&utm_medium=cv&utm_campaign=stankocken_cv" target="_blank" className="collection-item avatar">
               <img src="img/ico_web.svg" className="icon" />
               <span className="title">stankocken.com</span>
               Personal
             </a>

             <div className="divider"></div>

             <a href="https://github.com/StanKocken?utm_source=stankocken_cv&utm_medium=cv&utm_campaign=stankocken_cv" target="_blank" className="collection-item avatar">
               <img src="img/ico_github.svg" className="icon" />
               <span className="title">StanKocken</span>
               GitHub
             </a>

             <div className="divider"></div>

             <a href="https://twitter.com/stan_kocken?utm_source=stankocken_cv?utm_source=stankocken_cv&utm_medium=cv&utm_campaign=stankocken_cv" target="_blank" className="collection-item avatar">
               <img src="img/ico_twitter.svg" className="icon" />
               <span className="title">@stan_kocken</span>
               Twitter
             </a>

             <a href="https://plus.google.com/u/0/+StanKOCKEN?utm_source=stankocken_cv?utm_source=stankocken_cv&utm_medium=cv&utm_campaign=stankocken_cv" target="_blank" className="collection-item avatar">
               <img src="img/ico_google_plus.svg" className="icon" />
               <span className="title">+StanKocken</span>
               Google Plus
             </a>

             <div className="divider"></div>

             <a href="https://www.linkedin.com/in/stankocken?utm_source=stankocken_cv?utm_source=stankocken_cv&utm_medium=cv&utm_campaign=stankocken_cv" target="_blank" className="collection-item avatar">
               <img src="img/ico_linkedin.svg" className="icon" />
               <span className="title">stan-kocken</span>
               Linkedin
             </a>

             <a href="http://www.viadeo.com/fr/profile/stan.kocken?utm_source=stankocken_cv?utm_source=stankocken_cv&utm_medium=cv&utm_campaign=stankocken_cv" target="_blank" className="collection-item avatar">
               <img src="img/ico_viadeo.svg" className="icon" />
               <span className="title">stan.kocken</span>
               Viadeo
             </a>
           </div>

           <div className="card-panel cv_card">
             <img src="img/ico_interest.svg" className="icon" />
             <span className="title">Interests</span>

             <div className="skills">

                 <span className="title">Aviation</span>
                 Private Pilot Licence (PPL) in France<br />
                 Commercial Pilot Licence (CPL) in Canada

                 <span className="title">Photography</span>
                 <a href="https://www.flickr.com/photos/stankoc?utm_source=stankocken_cv&utm_medium=cv&utm_campaign=stankocken_cv" target="_blank" className="at">#Flickr</a> stankoc

             </div>

           </div>

           <div className="card-panel cv_card">
             <img src="img/ico_language.svg" className="icon" />
             <span className="title">Language</span>
             <div className="skills">

                 <span className="title">French</span>
                 Native Language

                 <span className="title">English</span>
                 Good skills, both written and oral.<br />
                 <a href="https://www.ets.org/toeic?utm_source=stankocken_cv&utm_medium=cv&utm_campaign=stankocken_cv" target="_blank" className="at">#TOEIC</a> (2010): 835/990<br />
                 Daily usage since November 2012

             </div>
           </div>

         </div>


         <div className="col s12 l8">

           <span className="cv_title">Android Developer</span>

           <div className="card-panel cv_card">
             <img src="img/ico_work.svg" className="icon" />
             <span className="title">Work Experience</span>

             <div className="date_container">

               <span className="date"><div className="round_mark"></div>Nov 2012 - Present</span>
               <div className="date_entry left_border">
                 <span className="title">Android Lead Developer <a href="http://www.preplaysports.com?utm_source=stankocken_cv&utm_medium=cv&utm_campaign=stankocken_cv" target="_blank" className="at">@PrePlay</a></span>
                 <span className="location"><img src="img/ico_map.svg" />Paris, France and New York City, USA</span>

                 <div className="app_container">
                   <a href="https://play.google.com/store/apps/details?id=com.preplay.android.mlb&utm_source=stankocken_cv&utm_medium=cv&utm_campaign=stankocken_cv" target="_blank" className="app_entry">
                     <img src="img/ico_app_preplay_mlb.png" />
                     <span className="title">MLB Preplay</span>
                     50k+ downloads
                   </a>
                   <a href="https://play.google.com/store/apps/details?id=com.preplay.android.nhl&utm_source=stankocken_cv&utm_medium=cv&utm_campaign=stankocken_cv" target="_blank" className="app_entry">
                     <img src="img/ico_app_preplay_nhl.png" />
                     <span className="title">NHL Preplay</span>
                     10k+ downloads
                   </a>
                   <a href="https://play.google.com/store/apps/details?id=com.preplay.android.football&utm_source=stankocken_cv&utm_medium=cv&utm_campaign=stankocken_cv" target="_blank" className="app_entry">
                     <img src="img/ico_app_preplay_football.png" />
                     <span className="title">Preplay Football</span>
                     5k+ downloads
                   </a>
                 </div>

               </div>

               <span className="date"><div className="round_mark"></div>Jan 2011 - Nov 2012</span>
               <div className="date_entry left_border">
                 <span className="title">Android Lead Developer <a href="http://www.backelite.com?utm_source=stankocken_cv&utm_medium=cv&utm_campaign=stankocken_cv" target="_blank" className="at">@Backelite</a></span>
                 <span className="location"><img src="img/ico_map.svg" />Paris, France</span>

                 <div className="app_container">
                   <a href="https://play.google.com/store/apps/details?id=com.dailymotion.dailymotion&utm_source=stankocken_cv&utm_medium=cv&utm_campaign=stankocken_cv" target="_blank" className="app_entry">
                     <img src="img/ico_app_dailymotion.png" />
                     <span className="title">Dailymotion</span>
                     10M+ downloads<br />(until v2)
                   </a>
                   <a href="https://play.google.com/store/apps/details?id=fr.creditagricole.androidapp&utm_source=stankocken_cv&utm_medium=cv&utm_campaign=stankocken_cv" target="_blank" className="app_entry">
                     <img src="img/ico_app_creditagricole.png" />
                     <span className="title">Ma Banque</span>
                     1M+ downloads<br />(until v2)
                   </a>
                   <a href="https://play.google.com/store/apps/details?id=com.lachainemeteo.marine.androidapp&utm_source=stankocken_cv&utm_medium=cv&utm_campaign=stankocken_cv" target="_blank" className="app_entry">
                     <img src="img/ico_app_chainemeteo_marine.png" />
                     <span className="title">Météo Marine</span>
                     500k+ downloads<br />(until v1)
                   </a>
                   <a href="https://play.google.com/store/apps/details?id=com.lachainemeteo.tablet.androidapp&utm_source=stankocken_cv&utm_medium=cv&utm_campaign=stankocken_cv" target="_blank" className="app_entry">
                     <img src="img/ico_app_chainemeteo_hd.png" />
                     <span className="title truncate">La Chaine Météo HD</span>
                     500k+ downloads<br />(until v1)
                   </a>
                   <a href="https://play.google.com/store/apps/details?id=com.eurostar.androidapp&utm_source=stankocken_cv&utm_medium=cv&utm_campaign=stankocken_cv" target="_blank" className="app_entry">
                     <img src="img/ico_app_eurostar.png" />
                     <span className="title">Eurostar</span>
                     100k+ downloads<br />(until v1)
                   </a>
                   <span className="app_entry">… and more</span>
                 </div>

               </div>

               <span className="date"><div className="round_mark"></div>Jun 2010 - Jan 2011</span>
               <div className="date_entry">
                 <span className="title">Android / Windows Mobile / J2EE Developer <a href="http://www.chronolink.fr?utm_source=stankocken_cv&utm_medium=cv&utm_campaign=stankocken_cv" target="_blank" className="at">@Chronolink</a></span>
                 <span className="location"><img src="img/ico_map.svg" />Nantes, France</span>
               </div>

             </div>
           </div>

           <div className="card-panel cv_card">
             <img src="img/ico_education.svg" className="icon" />
             <span className="title">Education</span>

             <div className="date_container">

               <span className="date"><div className="round_mark"></div>2008 - 2011</span>
               <div className="date_entry left_border">
                 <span className="title">Master of Science in Engineering <a href="http://web.polytech.univ-nantes.fr?utm_source=stankocken_cv&utm_medium=cv&utm_campaign=stankocken_cv" target="_blank" className="at">@Polytech’Nantes</a></span>
                 <span className="location"><img src="img/ico_map.svg" />Nantes, France</span>
                 <span className="description">Computer Science and Engineering</span>
               </div>

               <span className="date"><div className="round_mark"></div>2006 - 2008</span>
               <div className="date_entry">
                 <span className="title">University Technology Diploma <a href="http://iut.univ-tours.fr?utm_source=stankocken_cv&utm_medium=cv&utm_campaign=stankocken_cv" target="_blank" className="at">@UniversiteTours</a></span>
                 <span className="location"><img src="img/ico_map.svg" />Tours, France</span>
                 <span className="description">Electrical Engineering and Industrial Automation.</span>
               </div>

             </div>

           </div>

           <div className="card-panel cv_card">
             <img src="img/ico_personnal_project.svg" className="icon" />
             <span className="title">Personal Projects</span>

             <div className="app_container">
               <a href="https://play.google.com/store/apps/details?id=com.skocken.velibici&utm_source=stankocken_cv&utm_medium=cv&utm_campaign=stankocken_cv" target="_blank" className="app_entry">
                 <img src="img/ico_app_velibici.png" />
                 <span className="title">Velibici</span>
                 5k+ downloads
               </a>
               <a href="https://github.com/StanKocken/EfficientAdapter?utm_source=stankocken_cv&utm_medium=cv&utm_campaign=stankocken_cv" target="_blank" className="app_entry">
                 <img src="img/ico_github.svg" />
                 <span className="title">EfficientAdapter</span>
                 246 stars
               </a>
               <a href="https://github.com/StanKocken/SVG2Drawable?utm_source=stankocken_cv&utm_medium=cv&utm_campaign=stankocken_cv" target="_blank" className="app_entry">
                 <img src="img/ico_github.svg" />
                 <span className="title">SVG2Drawable</span>
                 124 stars
               </a>
               <a href="https://github.com/StanKocken/MaterialResume?utm_source=stankocken_cv&utm_medium=cv&utm_campaign=stankocken_cv" target="_blank" className="app_entry">
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
                 Android (Java), Windows Phone (C#), Windows Mobile (C#), J2ME (Java)

                 <span className="title">Web / Server</span>
                 PHP, HTML, Javascript (CoffeeScript, AngularJS, NodeJS), Ruby

                 <span className="title">Other</span>
                 WebService (REST, JSON, XML), WebSocket, CouchBase

             </div>
           </div>
         </div>


       </div>
      </Layout>
    )
  }
}

export default HomeComponent
