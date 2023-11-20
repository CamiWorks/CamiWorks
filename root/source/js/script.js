
// Load the Visualization API and the corechart package.
google.charts.load('current', {packages: ['corechart']});
function displayMenu(){
    document.getElementById('displaymenudropdown').style.display = 'inline'
};
function hideMenu() {
    document.getElementById('displaymenudropdown').style.display = 'none'
};
function showlang() {
    document.getElementById('langmenuid').style.display = 'block'
}
function hidelang() {
    document.getElementById('langmenuid').style.display = 'none'
}
function  displayMenulangdrop() {
    document.getElementById('dropdownlangid').style.display = 'block'
}
function  hideMenulangdrop() {
    document.getElementById('dropdownlangid').style.display = 'none'
}

//animations 
// Set a callback to run when the Google Visualization API is loaded.
function loadg(){
    google.charts.setOnLoadCallback(drawChartSpanish);
    google.charts.setOnLoadCallback(drawChartFr);
    google.charts.setOnLoadCallback(drawChartProgramming);
    google.charts.setOnLoadCallback(drawChartEnglish);
}
loadg()

// Callback that creates and populates a data table,
// instantiates the pie chart, passes in the data and
// draws it.
function drawChartEnglish() {
    var dataEnglish = google.visualization.arrayToDataTable([
        ["Language", "Knowlage", { role: "style" } ],
        ["", 85, "#303030"]
    ]);

    var options = {
        'legend':'left',
        'backgroundColor': 'none',
        'width':200,
        'height':300,
        'vAxis': {maxValue: 100,minValue: 0},
        'animation': {"startup": true},
        'animation':{
            duration: 1000,
            easing: 'out',
          }
      };
    var chart = new google.visualization.ColumnChart(document.getElementById('chart_div-en'));
    chart.draw(dataEnglish,options);
}

function drawChartSpanish() {

    var dataSpanish = google.visualization.arrayToDataTable([
        ["Language", "Knowlage", { role: "style" } ],
        ["", 99.99, "#303030"]
      ]);


// Set chart options
var options = {
    'legend':'left',
    'backgroundColor': 'none',
    'width':200,
    'height':300,
    'vAxis': {maxValue: 100,minValue: 0},
    'animation': {"startup": true},
    'animation':{
        duration: 1000,
        easing: 'out',
      }
  };

// Instantiate and draw our chart, passing in some options.
var chart = new google.visualization.ColumnChart(document.getElementById('chart_div'));
chart.draw(dataSpanish,options);

}

function drawChartFr() {

    var dataFr = google.visualization.arrayToDataTable([
        ["Language", "Knowlage", { role: "style" } ],
        ["", 50, "#303030"]
      ]);


// Set chart options
var options = {
    'legend':'left',
    'backgroundColor': 'none',
    'width':200,
    'height':300,
    'vAxis': {maxValue: 100,minValue: 0},
    'animation': {"startup": true},
    'animation':{
        duration: 1000,
        easing: 'out',
      }
  };

// Instantiate and draw our chart, passing in some options.
var chart = new google.visualization.ColumnChart(document.getElementById('chart_div-fr'));
chart.draw(dataFr,options);
}

function drawChartProgramming() {

    var data = google.visualization.arrayToDataTable([
        ["Language", "Knowlage"],
        ["HTML", 10],
        ["CSS", 10],
        ["JS", 20],
        ["SQL", 30],
        ["PY", 30],
      ]);

    var options = {
      'legend': 'none',
      'pieSliceText': 'label',
      'legend':'none',
      'backgroundColor': 'none',
      'border':'none',
      'pieSliceBorderColor':'none',
      slices: {
        0: { color: '#202020' },
        1: { color: '#303030' },
        2: { color: '#1e1e1e' },
        3: { color: '#2f2f2f' },
        4: { color: '#8a8a8a' },
        5: { color: '#5a5a5a' },
      },
    };

      var chart = new google.visualization.PieChart(document.getElementById('chart_div-Pr'));
      chart.draw(data, options);
}

function EnLang(){
    document.getElementById('content').innerHTML = `
    <div class="flex-box-container-body">
        <video src="/root/source/media/sign.mp4" muted="muted" autoplay="autoplay" class="video-st" poster="/root/source/media/Capture.PNG"></video>
        <p>Camilo Sierra L.<br>
            <span style="font-size: small;">Data Analyst</span>
        </p>
    </div>
    <br>
    <div class="aside-flex-container">
            <div class="description">
                <hr>
                <span class="asidetitle">A little bit about me...</span>
                <hr> <br>Hi, my name is Camilo, and I am a Data Scientist. I build my professional life around the world of technology & numbers. But more than that, I have an objective and that objective is to provide an improved and unique view of your company through the experience and hidden facts. 
                <br><br>
                From giant customer insights to internal finances and streamline processing, my goal is to take those well structured objectives of yours and make them a reality using the power of technology in decision making. 
                <br><br>            
                I am always excited to work on new interesting projects to build them a clear path to success while meeting great people along the way.
                <br><br>
                <a href="https://www.linkedin.com/in/camilo-sierra-7a9637265" target="_blank" style="text-decoration: underline; font-size: small; color: rgb(159, 159, 159);">A bit more...</a>    
            </div>
        <img id="animation" src="/root/source/media/Decription.jpg" alt="FileCorrupted">
    </div>

<!--experiences -->
<div class="aptitudes-title" id="experience-take">
    <hr>
    <p>WORK EXPERIENCE</p>
    <hr>
</div>
<div class="containe-experiences">
    <div class="experiences">
        <img id="wideDisplay" src="/root/source/media/ITtech.jpg" alt="companyimage">
        <img id="phoneDisplay" src="/root/source/media/ITtech.jpg" alt="companyimage">
        <div class="experience-des-cont">
            <h3 style="width: 100%;">IT Technician</h3>
            <p style="width: 100%;"class="experience-description">
                2022 - 2024 <br>
                Anone Inc<br>
                Technical support L1-L2.
                <br> <br>
                Provide technical support to a high phase investment firm. <br>
                Configure CORP networks on personal and company laptops. <br>
                Maintain and update profiles in Azure company portal. <br>
                Fix and configure available hardware resources. <br>
            </p>
            <a href="https://anone.group/" target="_blank"><button class="experience-web-page">Web</button></a>
        </div>
    </div>

    <div class="experiences">
        <img id="phoneDisplay" src="/root/source/media/SQL.jpg" alt="companyimage">
        <div class="experience-des-cont">
            <h3>SQL Programmer</h3>
            <p style="width: 100%;" class="experience-description">
                2022 - 2022 <br>
                Tecsys <br>
                Platform Support.
                <br> <br>
                Support WMS platforms and processes.  <br>
                Check for incidents and report fails on the system. <br>
                Resolve SQL conflicts on the remote DBMS for Prod. (Fast Phase) <br>
            </p>
            <a href="https://www.tecsys.com/" target="_blank"><button class="experience-web-page">Web</button></a>
        </div>
        <img id="wideDisplay" src="/root/source/media/SQL.jpg" alt="companyimage">
    </div>

    <div class="experiences">
        <img id="wideDisplay" src="/root/source/media/Chocolate.png" alt="companyimage">
        <img id="phoneDisplay" src="/root/source/media/Chocolate.png" alt="companyimage">
        <div class="experience-des-cont">
            <h3 style="width: 100%;">Marketing Specialist</h3>
            <p style="width: 100%;"class="experience-description">
                2019 - 2020 <br>
                Republica Del Cacao<br>
                Business To Client (B2C).
                <br> <br>
                Manage sales and marketing teams and incorporate them with the website infrastructure. <br>
                Ensure a seamlessly workflow and consistency over retails sales and web marking target. <br>
                Meet key performance indexes for an efficient workflow. <br>
            </p>
            <a href="https://republicadelcacao.com/" target="_blank"><button class="experience-web-page">Web</button></a>
        </div>
    </div>

    <div class="experiences">
        <img id="phoneDisplay" src="/root/source/media/Top-Qualities-of-a-Call-Center-Agent.png" alt="companyimage">
        <div class="experience-des-cont">
            <h3>Customer Support</h3>
            <p style="width: 100%;" class="experience-description">
                2018 - 2019 <br>
                Tele-Performance <br>
                <br> <br>
                Fast-Phase work with SAP ticketing system. <br>
                Customer Support and client relation. <br>
                </p>
            <a href="https://teleperformance.com/en-us/locations/colombia-site/colombia/" target="_blank"><button class="experience-web-page">Web</button></a>
        </div>
        <img id="wideDisplay" src="/root/source/media/Top-Qualities-of-a-Call-Center-Agent.png" alt="companyimage">
    </div>
</div>

    <!--Volunteering-->


<center><p>Volunteering</p></center>
<hr style="max-width:20% ;">

<div class="containe-experiences">
    <div class="experiences">
        <img id="wideDisplay" src="/root/source/media/ART_AHOD_20_LatinAmericanArt_md.jpg" alt="companyimage">
        <img id="phoneDisplay" src="/root/source/media/ART_AHOD_20_LatinAmericanArt_md.jpg" alt="companyimage">
        <div class="experience-des-cont">
            <h3>Web Development</h3>
            <p style="width: 100%;"class="experience-description">
                2020 - 2021 <br>
                LatinArte <br>
                Web creation and design. <br> <br>
                Support web development. <br>
                Support and maintain all resources for blog and events platform. <br>
                Deployment of new content for event monitoring. <br>
                </p>
            <a href="https://latinarte.ca/" target="_blank"><button class="experience-web-page">Web</button></a>
        </div>
    </div>
</div>

<!--Education-->

<div class="aptitudes-title" id="education-take">
    <br> <br> 
    <hr>
    <p>EDUCATION</p>
    <hr> <br> <br>
</div>


<div class="education-container">

    <div class="education-description">
        <img
        src="/root/source/media/lselogo.png"
        alt="logo-intitution">
        <div class="des-edu-container">

            <h3>Mathematics</h3>
            <p>2022 - <br>
                LSE <br>
                Coursing... <br>
                Title: MicroBachelors program in Mathematics and Statistics Fundamentals <br>
            </p>
            <a href="https://www.edx.org/bachelors/microbachelors/lse-mathematics-and-statistics-fundamentals" target="_blank"><button class="experience-web-page">Visit</button></a>
        </div>
    </div>

    <div class="education-description">
        <img
        src="/root/source/media/teccartinst.png"
        alt="logo-intitution">
        <div class="des-edu-container">

            <h3>Institut Teccart</h3>
            <p>2021 - 2022 <br>
                  
                Title: Computer Support Technician <br>
            </p>
            <a href="https://www.teccart.qc.ca/soutien-informatique.php" target="_blank"><button class="experience-web-page">Visit</button></a>
        </div>
    </div>

    <div class="education-description">
            <img
            class="senaimage"
            src="/root/source/media/sena.png"
            alt="logo-intitution" id="sena">
        <div class="des-edu-container">
            <h3>SENA - (National Learning Insitute)</h3>
            <p>2017 - 2019 <br>
                  
                Title: Commercial Communication Technician <br>
                
            </p>
            <a href="https://www.sena.edu.co/es-co/Paginas/default.aspx" target="_blank"><button class="experience-web-page" id="sena">Visit</button></a>  
        </div>
    </div>
</div>
<br>
    <div class="container-aptitudes">
        <hr>
        <p id="languages-take">SKILLS</p>
        <hr><br><br>
    </div>
    <center><p>Stack</p></center>
    <hr style="max-width:20% ;">
    <div class="container-paichart">
        <div id="separator1">
            <div class="aside-text-piechart"></div>
            <div class="dfkjgb"><div id="chart_div-Pr" style="width: 100%; height: 500px;"></div></div>
        </div>
        <div id="separator2">
            <h2>All and more...</h2>
            <p>MIAN <br>  <br>HTML | CSS | JavaScript | Python | SQL <br> <br> PLUS++ <br> <br> PHP | Linux | Docker | Django | Panda | Pytorch | Networking | LAN | WAN | Windows OS | MySQL | Java | RDP (VDI) | Scripting | Web Development | Boostrap | Prtainer | MacOs | Azure | UX/UI | Scalability | Server-Side</p>

        </div> 
    </div>

    <center><p>Languages</p></center>
    <hr style="max-width:20% ;">
    <div class="aptitude-description-container">
        <div class="chat-div-container">
            <div id="chart_div"></div>
            <p>Spanish</p>
        </div>
        <div class="chat-div-container">
            <div id="chart_div-en"></div>
            <p>English</p>
        </div>
        <div class="chat-div-container">
            <div id="chart_div-fr"></div>
            <p>French</p>
        </div>
    </div>
    <br><br><br><br><br>






<div class="aptitudes-title" id="aptitudes-take">
    <center><p>WORK ++</p></center>
    <hr style="max-width:20% ;">
</div>

<div class="aptitudes-container">
    <center><P style="margin: 5% 15% 10% 15%; ">Is not a secret to anyone, that we are more than a skill's bucket list, we are people, for that reason I found extremely important to showcases not only my skills as an Analyst but also as a human being, when you work with me you can count on:</P></center>
    <div class="aptitudes-list">
        <div class="aptitudes-list-image">
            <span class="material-symbols-outlined" style="font-size: 90px;">
                switch_access_shortcut_add
                </span>
            <p>Initiative</p>
        </div>
        <div class="aptitudes-list-image">
            <span class="material-symbols-outlined" style="font-size: 90px;">
                share_reviews
                </span>
            <p>Active Communication</p>
        </div>
        <div class="aptitudes-list-image">
            <span class="material-symbols-outlined" style="font-size: 90px;">
                heart_plus
                </span>
            <p>Dedication</p>
        </div>
        <div class="aptitudes-list-image">
            <span class="material-symbols-outlined" style="font-size: 90px;">
                data_thresholding
                </span>
            <p>Improvement</p>
        </div>
    </div>
</div>

<!--Projects and works-->

<div class="aptitudes-title" id="work-pro-take">
    <hr>
    <p>MY GIT</p>
    <hr>
</div>

<div class="project-container">
<p>-----------------Visit------------></p>

<div class="project-works">
<a href="https://github.com/CamiWorks"> <img src="/root/source/media/GitHub-logow.png" alt="gitlogo"></a>
</div>
<p><-----------------Visit------------</p>

</div>
<!---->

<div class="aptitudes-title" id="work-pro-cont">
<hr>
<p>CONTACT ME</p>
<hr>
</div>

<div class="contact-container">
<div class="form-container-input">
<form action="https://formsubmit.co/sierra170299camilo@gmail.com" method="POST" class="form-input-holder">
    <input type="hidden" name="_next" value="/root/source/pages/thanks.html">
    <input type="text" name="name" placeholder="Name" required> <br>
    <input type="email" name="email" placeholder="E-mail" required> <br>
    <input type="text" name="Message" placeholder="Message" class="message-style" required > <br>
    <input type="hidden" name="_captcha" value="false">
    <button type="submit">Submit</button>
</form>
</div>
</div>
    `
    document.getElementById('navContainer').innerHTML = nav('EN', 'EXPERIENCE', 'EDUCATION', 'SKILLS', 'WORK', 'CONTACT')
    loadg()
}
function FrLang(){
    document.getElementById('content').innerHTML = `
    
<div class="flex-box-container-body">
<video src="/root/source/media/sign.mp4" muted="muted" autoplay="autoplay" class="video-st" poster="/root/source/media/Capture.PNG"></video>
<p>Camilo Sierra L.<br>
    <span style="font-size: small;">Analyste de données</span>
</p>
</div>
<br>
<div class="aside-flex-container">
    <div class="description">
        <hr>
        <span class="asidetitle">Un peu à propos de moi...</span>
        <hr> <br>Bonjour, je m'appelle Camilo et je suis Data Scientist. Je construis ma vie professionnelle autour du monde de la technologie et des chiffres. Mais plus que cela, j'ai un objectif et cet objectif est de fournir une vision améliorée et unique de votre entreprise à travers l'expérience et les faits cachés.
         <br><br>
         Des informations géantes sur les clients aux finances internes et à la rationalisation du traitement, mon objectif est de prendre vos objectifs bien structurés et d'en faire une réalité en utilisant la puissance de la technologie dans la prise de décision.
         <br><br>
         Je suis toujours ravi de travailler sur de nouveaux projets intéressants pour leur tracer une voie claire vers le succès tout en rencontrant des gens formidables en cours de route.
         <br><br>
        <a href="https://www.linkedin.com/in/camilo-sierra-7a9637265" target="_blank" style="text-decoration: underline; font-size: small; color: rgb(159, 159, 159);">Un peu plus...</a>    
    </div>
<img id="animation" src="/root/source/media/Decription.jpg" alt="FileCorrupted">
</div>

<!--experiences -->
<div class="aptitudes-title" id="experience-take">
<hr>
<p>EXPÉRIENCE DE TRAVAIL</p>
<hr>
</div>
<div class="containe-experiences">
<div class="experiences">
<img id="wideDisplay" src="/root/source/media/ITtech.jpg" alt="companyimage">
<img id="phoneDisplay" src="/root/source/media/ITtech.jpg" alt="companyimage">
<div class="experience-des-cont">
    <h3 style="width: 100%;">Support technique</h3>
    <p style="width: 100%;"class="experience-description">
        2022 - 2024 <br>
         Anone Inc<br>
         Support technique L1-L2.
         <br> <br>
         Fournir un soutien technique à une société d'investissement en phase élevée. <br>
         Configurez les réseaux CORP sur les ordinateurs portables personnels et d'entreprise. <br>
         Maintenir et mettre à jour les profils dans le portail d'entreprise Azure. <br>
         Corrigez et configurez les ressources matérielles disponibles. <br>
    </p>
    <a href="https://anone.group/" target="_blank"><button class="experience-web-page">Web</button></a>
</div>
</div>

<div class="experiences">
<img id="phoneDisplay" src="/root/source/media/SQL.jpg" alt="companyimage">
<div class="experience-des-cont">
    <h3>Programmeur SQL</h3>
    <p style="width: 100%;" class="experience-description">
        2022 - 2022 <br>
         Tecsys <br>
         Prise en charge de la plate-forme.
         <br> <br>
         Prise en charge des plates-formes et des processus WMS. <br>
         Vérifiez les incidents et signalez les échecs sur le système. <br>
         Résolvez les conflits SQL sur le SGBD distant pour Prod. (Phase rapide) <br>
    </p>
    <a href="https://www.tecsys.com/" target="_blank"><button class="experience-web-page">Web</button></a>
</div>
<img id="wideDisplay" src="/root/source/media/SQL.jpg" alt="companyimage">
</div>

<div class="experiences">
<img id="wideDisplay" src="/root/source/media/Chocolate.png" alt="companyimage">
<img id="phoneDisplay" src="/root/source/media/Chocolate.png" alt="companyimage">
<div class="experience-des-cont">
    <h3 style="width: 100%;">Spécialiste du marketing</h3>
    <p style="width: 100%;"class="experience-description">
        2019 - 2020 <br>
        République Del Cacao<br>
        Entreprise vers client (B2C).
        <br> <br>
        Gérez les équipes de vente et de marketing et intégrez-les à l’infrastructure du site Web. <br>
        Garantissez un flux de travail transparent et une cohérence en matière de ventes au détail et d'objectifs de marquage Web. <br>
        Répondez aux indices de performance clés pour un flux de travail efficace. <br>
    </p>
    <a href="https://republicadelcacao.com/" target="_blank"><button class="experience-web-page">Web</button></a>
</div>
</div>

<div class="experiences">
<img id="phoneDisplay" src="/root/source/media/Top-Qualities-of-a-Call-Center-Agent.png" alt="companyimage">
<div class="experience-des-cont">
    <h3>Support client</h3>
    <p style="width: 100%;" class="experience-description">
        2018 - 2019 <br>
        Télé-Performance <br>
        <br> <br>
        Travail en phase rapide avec le système de billetterie SAP. <br>
        Support Client et Relation Client. <br>
        </p>
    <a href="https://teleperformance.com/en-us/locations/colombia-site/colombia/" target="_blank"><button class="experience-web-page">Web</button></a>
</div>
<img id="wideDisplay" src="/root/source/media/Top-Qualities-of-a-Call-Center-Agent.png" alt="companyimage">
</div>
</div>

<!--Volunteering-->


<center><p>Faire du bénévolat</p></center>
<hr style="max-width:20% ;">

<div class="containe-experiences">
<div class="experiences">
<img id="wideDisplay" src="/root/source/media/ART_AHOD_20_LatinAmericanArt_md.jpg" alt="companyimage">
<img id="phoneDisplay" src="/root/source/media/ART_AHOD_20_LatinAmericanArt_md.jpg" alt="companyimage">
<div class="experience-des-cont">
    <h3>Développement Web</h3>
    <p style="width: 100%;"class="experience-description">
        2020 - 2021 <br>
        LatinArte <br>
        Création et conception web. <br> <br>
        Soutenir le développement web. <br>
        Soutenir et maintenir toutes les ressources du blog et de la plateforme d'événements. <br>
        Déploiement de nouveaux contenus pour le suivi des événements. <br>
        </p>
    <a href="https://latinarte.ca/" target="_blank"><button class="experience-web-page">Web</button></a>
</div>
</div>
</div>

<!--Education-->

<div class="aptitudes-title" id="education-take">
<br> <br> 
<hr>
<p>ÉDUCATION</p>
<hr> <br> <br>
</div>


<div class="education-container">

<div class="education-description">
<img
src="/root/source/media/lselogo.png"
alt="logo-intitution">
<div class="des-edu-container">

    <h3>Mathématiques</h3>
    <p>2022 - <br>
        LSE <br>
        Cours... <br>
        Titre : Programme MicroBachelors en mathématiques et statistiques fondamentales <br>
    </p>
    <a href="https://www.edx.org/bachelors/microbachelors/lse-mathematics-and-statistics-fundamentals" target="_blank"><button class="experience-web-page">Visit</button></a>
</div>
</div>

<div class="education-description">
<img
src="/root/source/media/teccartinst.png"
alt="logo-intitution">
<div class="des-edu-container">
    <h3>Institut Teccart</h3>
    <p>2021 - 2022 <br>
         
        Titre : Technicien de support informatique <br>
    </p>
    <a href="https://www.teccart.qc.ca/soutien-informatique.php" target="_blank"><button class="experience-web-page">Visit</button></a>
</div>
</div>

<div class="education-description">
    <img
    class="senaimage"
    src="/root/source/media/sena.png"
    alt="logo-intitution" id="sena">
<div class="des-edu-container">
    <h3>SENA - (Institut national d'apprentissage)</h3>
    <p>2017 - 2019 <br>
         
        Titre : Technicien en communication commerciale <br>
       
    </p>
    <a href="https://www.sena.edu.co/es-co/Paginas/default.aspx" target="_blank"><button class="experience-web-page" id="sena">Visit</button></a>  
</div>
</div>
</div>
<br>
<div class="container-aptitudes">
<hr>
<p id="languages-take">COMPÉTENCES</p>
<hr><br><br>
</div>
<center><p>Stack</p></center>
<hr style="max-width:20% ;">
<div class="container-paichart">
<div id="separator1">
    <div class="aside-text-piechart"></div>
    <div class="dfkjgb"><div id="chart_div-Pr" style="width: 100%; height: 500px;"></div></div>
</div>
<div id="separator2">
    <h2>Tout et plus encore...</h2>
    <p>MIAN <br>  <br>HTML | CSS | JavaScript | Python | SQL <br> <br> PLUS++ <br> <br> PHP | Linux | Docker | Django | Panda | Pytorch | Networking | LAN | WAN | Windows OS | MySQL | Java | RDP (VDI) | Scripting | Web Development | Boostrap | Prtainer | MacOs | Azure | UX/UI | Scalability | Server-Side</p>

</div> 
</div>

<center><p>Langages</p></center>
<hr style="max-width:20% ;">
<div class="aptitude-description-container">
<div class="chat-div-container">
    <div id="chart_div"></div>
    <p>Spanish</p>
</div>
<div class="chat-div-container">
    <div id="chart_div-en"></div>
    <p>English</p>
</div>
<div class="chat-div-container">
    <div id="chart_div-fr"></div>
    <p>French</p>
</div>
</div>
<br><br><br><br><br>






<div class="aptitudes-title" id="aptitudes-take">
<center><p>TRAVAIL ++</p></center>
<hr style="max-width:20% ;">
</div>

<div class="aptitudes-container">
<center><P style="margin: 5% 15% 10% 15%; ">Ce n'est un secret pour personne, nous sommes plus qu'une liste de compétences, nous sommes des personnes, c'est pour cette raison que je trouve extrêmement important de mettre en valeur non seulement mes compétences en tant qu'analyste mais aussi en tant qu'être humain, lorsque vous travaillez avec moi, vous peut compter sur :</P></center>
<div class="aptitudes-list">
<div class="aptitudes-list-image">
    <span class="material-symbols-outlined" style="font-size: 90px;">
        switch_access_shortcut_add
        </span>
    <p>Initiative</p>
</div>
<div class="aptitudes-list-image">
    <span class="material-symbols-outlined" style="font-size: 90px;">
        share_reviews
        </span>
    <p>Communication active</p>
</div>
<div class="aptitudes-list-image">
    <span class="material-symbols-outlined" style="font-size: 90px;">
        heart_plus
        </span>
    <p>Dévouement</p>
</div>
<div class="aptitudes-list-image">
    <span class="material-symbols-outlined" style="font-size: 90px;">
        data_thresholding
        </span>
    <p>Amélioration</p>
</div>
</div>
</div>

<!--Projects and works-->

<div class="aptitudes-title" id="work-pro-take">
<hr>
<p>GIT</p>
<hr>
</div>

<div class="project-container">
<p>-----------------Visit------------></p>

<div class="project-works">
<a href="https://github.com/CamiWorks"> <img src="/root/source/media/GitHub-logow.png" alt="gitlogo"></a>
</div>
<p><-----------------Visit------------</p>

</div>
<!---->

<div class="aptitudes-title" id="work-pro-cont">
<hr>
<p>CONTACTEZ MOI</p>
<hr>
</div>

<div class="contact-container">
<div class="form-container-input">
<form action="https://formsubmit.co/sierra170299camilo@gmail.com" method="POST" class="form-input-holder">
<input type="hidden" name="_next" value="/root/source/pages/thanks.html">
<input type="text" name="name" placeholder="Nom" required> <br>
<input type="email" name="email" placeholder="E-mail" required> <br>
<input type="text" name="Message" placeholder="Message" class="message-style" required > <br>
<input type="hidden" name="_captcha" value="false">
<button type="submit">Soumettre</button>
</form>
</div>
</div>

    `
    document.getElementById('navContainer').innerHTML = nav('FR', 'EXPÉRIENCE', 'ÉDUCATION', 'COMPÉTENCES', 'TRAVAIL', 'CONTACT')
    loadg()
}
function EsLang(){
    document.getElementById('content').innerHTML = `
    
    <div class="flex-box-container-body">
    <video src="/root/source/media/sign.mp4" muted="muted" autoplay="autoplay" class="video-st" poster="/root/source/media/Capture.PNG"></video>
    <p>Camilo Sierra L.<br>
        <span style="font-size: small;">Analista de datos</span>
    </p>
</div>
<br>
<div class="aside-flex-container">
        <div class="description">
            <hr>
            <span class="asidetitle">Un poco acerca de mi...</span>
            <hr> <br>Hola, mi nombre es Camilo y soy Científico de Datos. Construyo mi vida profesional en torno al mundo de la tecnología y los números. Pero más que eso, tengo un objetivo y ese objetivo es brindar una visión mejorada y única de su empresa a través de la experiencia y los hechos ocultos.
            <br><br>
            Desde información gigante sobre los clientes hasta finanzas internas y procesamiento optimizado, mi objetivo es tomar esos objetivos bien estructurados y hacerlos realidad utilizando el poder de la tecnología en la toma de decisiones.
            <br><br>            
            Siempre estoy entusiasmado de trabajar en nuevos proyectos interesantes para construirles un camino claro hacia el éxito y al mismo tiempo conocer gente maravillosa en el camino.
            <br><br>
            <a href="https://www.linkedin.com/in/camilo-sierra-7a9637265" target="_blank" style="text-decoration: underline; font-size: small; color: rgb(159, 159, 159);">Un poco más...</a>    
        </div>
    <img id="animation" src="/root/source/media/Decription.jpg" alt="FileCorrupted">
</div>

<!--experiences -->
<div class="aptitudes-title" id="experience-take">
<hr>
<p>EXPERIENCIA LABORAL</p>
<hr>
</div>
<div class="containe-experiences">
<div class="experiences">
    <img id="wideDisplay" src="/root/source/media/ITtech.jpg" alt="companyimage">
    <img id="phoneDisplay" src="/root/source/media/ITtech.jpg" alt="companyimage">
    <div class="experience-des-cont">
        <h3 style="width: 100%;">Técnico IT</h3>
        <p style="width: 100%;"class="experience-description">
            2022 - 2024 <br>
            Anone Inc<br>
            Soporte técnico L1-L2.
            <br> <br>
            Proporcionar soporte técnico a una firma de inversión en fase alta. <br>
            Configure redes CORP en portátiles personales y de empresa. <br>
            Mantener y actualizar perfiles en el portal de empresa de Azure. <br>
            Reparar y configurar los recursos de hardware disponibles. <br>
        </p>
        <a href="https://anone.group/" target="_blank"><button class="experience-web-page">Web</button></a>
    </div>
</div>

<div class="experiences">
    <img id="phoneDisplay" src="/root/source/media/SQL.jpg" alt="companyimage">
    <div class="experience-des-cont">
        <h3> Programador SQL </h3>
        <p style="width: 100%;" class="experience-description">
            2022 - 2022 <br>
            Tecsys <br>
            Soporte de plataforma.
            <br> <br>
            Soportar plataformas y procesos WMS. <br>
            Consultar incidencias y reportar fallas en el sistema. <br>
            Resolver conflictos de SQL en el DBMS remoto para Prod. (Fase Rápida) <br>
        </p>
        <a href="https://www.tecsys.com/" target="_blank"><button class="experience-web-page">Web</button></a>
    </div>
    <img id="wideDisplay" src="/root/source/media/SQL.jpg" alt="companyimage">
</div>

<div class="experiences">
    <img id="wideDisplay" src="/root/source/media/Chocolate.png" alt="companyimage">
    <img id="phoneDisplay" src="/root/source/media/Chocolate.png" alt="companyimage">
    <div class="experience-des-cont">
        <h3 style="width: 100%;">Especialista en marketing</h3>
        <p style="width: 100%;"class="experience-description">
            2019 - 2020 <br>
            República Del Cacao<br>
            Negocio a cliente (B2C).
            <br> <br>
            Gestionar equipos de ventas y marketing e incorporarlos a la infraestructura del sitio web. <br>
            Garantice un flujo de trabajo fluido y coherencia en las ventas minoristas y el objetivo de marcado web. <br>
            Cumpla con los índices de rendimiento clave para un flujo de trabajo eficiente. <br>
        </p>
        <a href="https://republicadelcacao.com/" target="_blank"><button class="experience-web-page">Web</button></a>
    </div>
</div>

<div class="experiences">
    <img id="phoneDisplay" src="/root/source/media/Top-Qualities-of-a-Call-Center-Agent.png" alt="companyimage">
    <div class="experience-des-cont">
        <h3>Atención al cliente</h3>
        <p style="width: 100%;" class="experience-description">
            2018 - 2019 <br>
            Teleperformance <br>
            <br> <br>
            Trabajo en fase rápida con el sistema de tickets de SAP. <br>
            Atención al cliente y relación con el cliente. <br>
            </p>
        <a href="https://teleperformance.com/en-us/locations/colombia-site/colombia/" target="_blank"><button class="experience-web-page">Web</button></a>
    </div>
    <img id="wideDisplay" src="/root/source/media/Top-Qualities-of-a-Call-Center-Agent.png" alt="companyimage">
</div>
</div>

<!--Volunteering-->



<center><p>Volunteering</p></center>
<hr style="max-width:20% ;">

<div class="containe-experiences">
<div class="experiences">
    <img id="wideDisplay" src="/root/source/media/ART_AHOD_20_LatinAmericanArt_md.jpg" alt="companyimage">
    <img id="phoneDisplay" src="/root/source/media/ART_AHOD_20_LatinAmericanArt_md.jpg" alt="companyimage">
    <div class="experience-des-cont">
        <h3>Desarrollo web</h3>
        <p style="width: 100%;"class="experience-description">
            2020 - 2021 <br>
            LatinArte <br>
            Creación y diseño web. <br> <br>
            Apoyar el desarrollo web. <br>
            Apoyar y mantener todos los recursos para blogs y plataforma de eventos. <br>
            Despliegue de nuevo contenido para seguimiento de eventos. <br>
            </p>
        <a href="https://latinarte.ca/" target="_blank"><button class="experience-web-page">Web</button></a>
    </div>
</div>
</div>

<!--Education-->

<div class="aptitudes-title" id="education-take">
<br> <br> 
<hr>
<p>EDUCACIÓN</p>
<hr> <br> <br>
</div>


<div class="education-container">

<div class="education-description">
    <img
    src="/root/source/media/lselogo.png"
    alt="logo-intitution">
    <div class="des-edu-container">

        <h3>Matemáticas</h3>
        <p>2022 - <br>
            LSE <br>
            Cursando... <br>
            Título: Programa MicroBachelors en Fundamentos de Matemáticas y Estadística <br>
        </p>
        <a href="https://www.edx.org/bachelors/microbachelors/lse-mathematics-and-statistics-fundamentals" target="_blank"><button class="experience-web-page">Visit</button></a>
    </div>
</div>

<div class="education-description">
    <img
    src="/root/source/media/teccartinst.png"
    alt="logo-intitution">
    <div class="des-edu-container">

        <h3>Instituto Teccart</h3>
        <p>2021 - 2022 <br>
             
            Título: Técnico de soporte informático <br>
        </p>
        <a href="https://www.teccart.qc.ca/soutien-informatique.php" target="_blank"><button class="experience-web-page">Visit</button></a>
    </div>
</div>

<div class="education-description">
        <img
        class="senaimage"
        src="/root/source/media/sena.png"
        alt="logo-intitution" id="sena">
    <div class="des-edu-container">
        <h3>SENA - (Instituto Nacional de Aprendizaje)</h3>
        <p>2017 - 2019<br>
             
            Título: Técnico en Comunicación Comercial <br>
           
        </p>
        <a href="https://www.sena.edu.co/es-co/Paginas/default.aspx" target="_blank"><button class="experience-web-page" id="sena">Visit</button></a>  
    </div>
</div>
</div>
<br>
<div class="container-aptitudes">
    <hr>
    <p id="languages-take">SKILLS</p>
    <hr><br><br>
</div>
<center><p>Stack</p></center>
<hr style="max-width:20% ;">
<div class="container-paichart">
    <div id="separator1">
        <div class="aside-text-piechart"></div>
        <div class="dfkjgb"><div id="chart_div-Pr" style="width: 100%; height: 500px;"></div></div>
    </div>
    <div id="separator2">
        <h2>Todo y más...</h2>
        <p>CENTRO <br>  <br>HTML | CSS | JavaScript | Python | SQL <br> <br> MAS++ <br> <br> PHP | Linux | Docker | Django | Panda | Pytorch | Networking | LAN | WAN | Windows OS | MySQL | Java | RDP (VDI) | Scripting | Web Development | Boostrap | Prtainer | MacOs | Azure | UX/UI | Scalability | Server-Side</p>

    </div> 
</div>

<center><p>Idiomas</p></center>
<hr style="max-width:20% ;">
<div class="aptitude-description-container">
    <div class="chat-div-container">
        <div id="chart_div"></div>
        <p>Spanish</p>
    </div>
    <div class="chat-div-container">
        <div id="chart_div-en"></div>
        <p>English</p>
    </div>
    <div class="chat-div-container">
        <div id="chart_div-fr"></div>
        <p>French</p>
    </div>
</div>
<br><br><br><br><br>


<div class="aptitudes-title" id="aptitudes-take">
<center><p>TRABAJO ++</p></center>
<hr style="max-width:20% ;">
</div>

<div class="aptitudes-container">
<center><P style="margin: 5% 15% 10% 15%; ">Para nadie es un secreto que somos más que una lista de habilidades, somos personas, por eso encontré sumamente importante mostrar no solo mis habilidades como Analista sino también como ser humano, cuando trabajas conmigo puede contar con:</P></center>
<div class="aptitudes-list">
    <div class="aptitudes-list-image">
        <span class="material-symbols-outlined" style="font-size: 90px;">
            switch_access_shortcut_add
            </span>
            <p>Iniciativa</p>
    </div>
    <div class="aptitudes-list-image">
        <span class="material-symbols-outlined" style="font-size: 90px;">
            share_reviews
            </span>
            <p>Comunicación activa</p>
    </div>
    <div class="aptitudes-list-image">
        <span class="material-symbols-outlined" style="font-size: 90px;">
            heart_plus
            </span>
            <p>Dedicación</p>
    </div>
    <div class="aptitudes-list-image">
        <span class="material-symbols-outlined" style="font-size: 90px;">
            data_thresholding
            </span>
            <p>Mejora</p>
    </div>
</div>
</div>

<!--Projects and works-->

<div class="aptitudes-title" id="work-pro-take">
<hr>
<p>MI GIT</p>
<hr>
</div>

<div class="project-container">
<p>-----------------Visit------------></p>

<div class="project-works">
<a href="https://github.com/CamiWorks"> <img src="/root/source/media/GitHub-logow.png" alt="gitlogo"></a>
</div>
<p><-----------------Visit------------</p>

</div>
<!---->

<div class="aptitudes-title" id="work-pro-cont">
<hr>
<p>CONTÁCTAME</p>
<hr>
</div>

<div class="contact-container">
<div class="form-container-input">
<form action="https://formsubmit.co/sierra170299camilo@gmail.com" method="POST" class="form-input-holder">
<input type="hidden" name="_next" value="/root/source/pages/thanks.html">
<input type="text" name="name" placeholder="Nombre" required> <br>
<input type="email" name="email" placeholder="Correo" required> <br>
<input type="text" name="Message" placeholder="Mensaje" class="message-style" required > <br>
<input type="hidden" name="_captcha" value="false">
<button type="submit">Enviar</button>
</form>
</div>
</div>

    `
    document.getElementById('navContainer').innerHTML = nav('ES', 'EXPERIENCIA', 'EDUCACIÓN', 'HABILIDADES', 'TRABAJO', 'CONTACTO')
    loadg()
}
function nav(lang,one,two,thr,fr,fv){ 

    let en = 'EN'
    let es = 'ES'
    let f = 'FR'

    if (lang == en ){
        en = `<u>${lang}</u>`
    }else if (lang == es){
        es = `<u>${lang}</u>`
    }else{
        f = `<u>${lang}</u>`
    }

    let navigation = `
    <!--drop down manu-->

    <div class="respon-container-flex">
        <img  src="/root/source/media/menu.png" alt="menuslide" onclick="displayMenu()" >
        <p class="tittle-resp-menu">CAMILO SIERRA</p>
        <img class="lang" src="/root/source/media/language.png" alt="" onclick="displayMenulangdrop()">
    </div>
    
    
    <nav class="dropdownlang" id="dropdownlangid">
            <div class="dropdownlangconainer">
                <a class="lang-dropdown"  onclick="hideMenulangdrop(), EnLang()">
                    
                        
                    ${en}
                    
                </a>
                <a class="lang-dropdown"  onclick="hideMenulangdrop(), EsLang()">
                    
                    ${es}
                
                </a>
                <a class="lang-dropdown"  onclick="hideMenulangdrop(), FrLang()">
                
                    ${f}
                
                </a>
                <div class="langdropdown" onclick="hideMenulangdrop()">
                    <img src="/root/source/media/upload.png" alt="upload">
                </div>
            </div>
    </nav>
        
    <nav class="dropdownmanushowphone" id="displaymenudropdown">
        <div class="drop-down-menu">
            <a class="menubar-dropdown" href="#experience-take" onclick="hideMenu()">
            
            ${one}
            
            </a>
            <a class="menubar-dropdown" href="#education-take" onclick="hideMenu()">
            
            ${two}
            
            </a>
            <a class="menubar-dropdown" href="#languages-take" onclick="hideMenu()">
                
            ${thr}
                
            </a>
            <a class="menubar-dropdown" href="#aptitudes-take" onclick="hideMenu()">
                
            ${fr}++
            
            </a>
            
            
            <a class="menubar-dropdown" href="#work-pro-take" onclick="hideMenu()">
            
                GIT
            
            </a>
            <a class="menubar-dropdown" href="#work-pro-cont" onclick="hideMenu()">
            
                ${fv}
            
            </a>
            
            <div class="hidemenudropdown" onclick="hideMenu()">
                <img src="/root/source/media/upload.png" alt="upload">
            </div>
        </div>
    </nav>







    
    <!--normal menu-->
    
    <nav class="phone-display-none">
        <div class="flex-box-container" id="flexBoxContainer">
            <a class="menubar" href="#experience-take">
                <div>
                    ${one}
                </div>
            </a>
            <a class="menubar" href="#education-take">
                <div>
                    ${two}
                </div>
            </a>
            <a class="menubar" href="#languages-take">
                <div>
                    ${thr}
                </div>
            </a>
            <a class="menubar" href="#aptitudes-take">
                <div>
                    ${fr}++
                </div>
            </a>
            <a class="menubar" href="#work-pro-take">
                <div>
                    GIT
                </div>
            </a>
            <a class="menubar" href="#work-pro-cont">
                <div>
                    ${fv}
                </div>
            </a>
            <img id="showlang" class="lang" src="/root/source/media/language.png" alt="" onclick="showlang()">
        </div>
    </nav>
    
    <!--lang menu-->
    
    
    <nav class="langmanu" id="langmenuid">
    <div class="langmenulanguages">
    <div><a class="menubar-lang"  onclick="hidelang() , EnLang()">
        
    ${en}
    
    </a></div>
    <div><a class="menubar-lang"  onclick="hidelang(), FrLang()">
        
    ${f}
    
    </a></div>
    <div><a class="menubar-lang"  onclick="hidelang(), EsLang()">     
    ${es}
    </a></div>
    <div class="langdropup" onclick="hidelang()">
        <img src="/root/source/media/upload.png" alt="upload">
    </div>
    </div>
    </nav>`
    final_nav = navigation.replace(` ${lang} `,`<u>${lang}</u>`)
    return final_nav
}
function sharelink() {
    let contectShare = `

    <pre>
    _____________________
  | Thank you for sharing |
    =====================
                      \
              .-=-==--==--.
                              ..-=="  ,'o')      '.
                             '         ';'          \
                           :  (         ;            '.__...._
                           |                  )    /         '-=-.
                           :       ,vv.-._   /    /               '---==-._
                            \/\/\/VV ^ d88';'    /                         '.
                                ''  ^/d88P!'    /             ,              ''._
                                   ^/    !'   ,.      ,      /                  "-,,__,,--'""""-.
                                  ^/    !'  ,'  \ . .(      (         _           )  ) ) ) ))_,-.\
                                 ^(__ ,!',"'   ;:+.:%:a.     \:.. . ,'          )  )  ) ) ,"'    '
                                 ',,,'','     /o:::":%:%a.    \:.:.:         .    )  ) _,'
                                  """'       ;':::'' '+%%%a._  \%:%|         ;.). _,-""
                                         ,-='_.-'      '':%::)  )%:|        /:._,"
                                        (/(/"           ," ,'_,'%%%:       (_,'
                                                       (  (//('.___;        \
                                                        \     \     '         '
                                                         ''.    ''.   '.       :
                                                           \. . .\    : . . . :
                                                            \. . .:    '.. . .:
                                                             '..:.:\     \:...\
                                                              ;:.:.;      ::...:
                                                              ):%::       :::::;
                                                          __,::%:(        :::::
                                                       ,;:%%%%%%%:        ;:%::
                                                         ;,--""-.'\  ,=--':%:%:\
                                                        /"       "| /-".:%%%%%%%\
                                                                        ;,-"'')%%)
                                                                       /"      "|
</pre>
    `
    //document.getElementById('shareCon').innerHTML = contectShare
}


EnLang()
//sharelink()